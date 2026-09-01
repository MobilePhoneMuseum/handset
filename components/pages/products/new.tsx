import {gql, useMutation} from '@apollo/client'
import * as React from 'react'
import {useForm} from 'react-hook-form'
import {toast} from 'sonner'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod"
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {Button} from '@/components/ui/button'
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import {Input} from '@/components/ui/input'

const formSchema = z.object({
    id: z
        .string()
        .min(16, {
            message: 'Card Numbers are 16 characters long.',
        })
        .max(19, {
            message: 'Card Numbers are 16 characters long.',
        })
        .transform((val) => val.replaceAll(' ', '')),
    description: z.optional(
        z.string().max(128, {
            message: 'Your Description is way too long! Please shorten it.',
        }),
    ),
})

export const MutateProductCreate = gql(`
    mutation CreateProduct($id: ID!) {
        me {
            profile {
                createCard(input: { id: $id }) {
                    __typename
                    ... on Card {
                        id
                        idFriendly
                        type
                        belongsTo
                        created
                        used
                        enabled
                        description
                    }
                    ... on MutationError {
                        errorType
                        message
                    }
                }
            }
        }
    }
`)

type ErrorDialogProps = {
    error: string | null
    setError: React.Dispatch<React.SetStateAction<string | null>>
}

const ErrorDialog: React.FC<ErrorDialogProps> = ({error, setError}) => {
    return (
        <AlertDialog open={!!error} onOpenChange={() => setError(null)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Error</AlertDialogTitle>
                    <AlertDialogDescription>{error}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setError(null)}>OK :(</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
type CardCreateFormProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CardCreateForm: React.FC<CardCreateFormProps> = ({setOpen}) => {
    const [err, setErr] = React.useState<string | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            id: '',
            description: '',
        },
    })

    const [mutCreate, {loading}] = useMutation(MutateCardCreate, {
        onCompleted: (data) => {
            if (data.me.identity.createCard.__typename === 'Card') {
                // close the dialog on successful submit.
                setOpen(false)
                toast.success('Card added.')
            } else {
                toast.error('Failed to create Card', {
                    description: data.me.identity.createCard.message,
                })
                switch (data.me.identity.createCard.errorType.toString()) {
                    case 'CARD_ID_INVALID': {
                        form.setError('id', {
                            type: 'server',
                            message: "This Card ID doesn't look right. Please try again.",
                        })
                        break
                    }
                    case 'CARD_ALREADY_REGISTERED': {
                        form.setError('id', {
                            type: 'server',
                            message: 'This Card is already registered.',
                        })
                        setErr(
                            "This Card has already been registered. If you wish to use this card anyway, discarding any play data accrued against it, please use 'Claim Unclaimed Card'.",
                        )
                        break
                    }
                    default: {
                        setErr(data.me.identity.createCard.message || 'Something unexpected happened. Try that again.')
                    }
                }
            }
        },
        onError: (error) => {
            toast.error('Failed to create Card', {description: error.message})
        },
        refetchQueries: [QUERY_ME_CARDS],
    })

    function setID(result: string) {
        form.setValue('id', result)
    }

    function onSubmit(form: z.infer<typeof formSchema>) {
        mutCreate({variables: {id: form.id, description: form.description}})
    }

    form.setValue('id', 'test')

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="id"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                                <>
                                    <Input placeholder="**** **** **** ****" {...field} />
                                    <NFCReadButton Result={setID}/>
                                </>
                            </FormControl>
                            <FormDescription>You can also use the NFC ID of the Card.</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Optional" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <DialogFooter>
                    <Button type="submit" disabled={loading}>
                        {loading ? <Loader2Icon className="animate-spin"/> : <PlusIcon/>} Add Card
                    </Button>
                </DialogFooter>
            </form>
            <ErrorDialog error={err} setError={setErr}/>
        </Form>
    )
}

export interface CardCreateDialogProps {
    trigger: React.ReactElement
}

export const CardCreateDialog: React.FC<CardCreateDialogProps> = ({trigger}) => {
    const [open, setOpen] = React.useState<boolean>(false)

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Add New Card</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col space-y-2">
                    <Alert>
                        <AlertOctagonIcon className="h-4 w-4"/>
                        <AlertTitle>Wait a sec!</AlertTitle>
                        <AlertDescription>
              <span>
                Please don't try to use Google Pay (or similar) - these devices have rotating IDs, and you will not be
                able to access your data after the first use!
              </span>
                            <span>If in doubt, card in twice, and see if the Card Number stays the same.</span>
                            <span>
                <i>Suica / PASMO</i> and other transit passes are known to work properly.
              </span>
                        </AlertDescription>
                    </Alert>
                    <Alert>
                        <InfoIcon className="h-4 w-4"/>
                        <AlertTitle>Fresh Cards Only</AlertTitle>
                        <AlertDescription>
              <span>
                To attach a new card, it <b>cannot</b> have been previously used.
              </span>
                            <span>
                <b>NEVER</b> enter a new PIN on a card you wish to register to your profile!
              </span>
                            <span>If you've already done this, please use the "Claim Unclaimed Card" button instead.</span>
                        </AlertDescription>
                    </Alert>
                </div>
                <CardCreateForm setOpen={setOpen}/>
            </DialogContent>
        </Dialog>
    )
}
