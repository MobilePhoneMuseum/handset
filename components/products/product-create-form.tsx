'use client';

import * as React from 'react';
import {useRouter} from 'next/navigation';
import {getAccessToken} from '@/lib/auth/access-token';
import {useApolloClient, useMutation} from '@apollo/client/react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {HugeiconsIcon} from '@hugeicons/react';
import {
    Add01Icon,
    BoxIcon,
    Camera01Icon,
    CheckmarkCircle02Icon,
    FlipPhoneIcon,
    Loading03Icon,
    PrinterIcon,
    PrinterXIcon,
    UserIcon,
} from '@hugeicons/core-free-icons';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from '@/components/ui/select';
import {Field, FieldError, FieldGroup, FieldLabel} from '@/components/ui/field';
import {toast} from '@/components/ui/toast';
import {usePrinter} from '@/hooks/use-printer';
import {type Product} from '@/types/gql/schema';
import {CREATE_PRODUCT, LOOKUP_PRODUCT_BY_IMEI} from '@/app/products/new/queries';
import {productFormSchema, type ProductFormValues, productImeiSchema,} from '@/lib/validations/product';
import {type ModelItem, ModelSelectOrCreate,} from '@/components/products/model-select-or-create';
import {type DonorItem, DonorSelectOrCreate,} from '@/components/products/donor-select-or-create';
import {ProductImageCapture} from '@/components/products/product-image-capture';
import {ButtonGroup, ButtonGroupText} from "../ui/button-group";
import {Label} from "@/components/ui/label";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

export interface CreatedProductItem {
    id: string;
    imei?: string | null;
    description?: string | null;
    note?: string | null;
    status?: string | null;
    image_reference?: {
        id: string;
    } | null;
    model_id?: {
        id: string;
        name?: string | null;
        display_name?: string | null;
        slug?: string | null;
        brand_id?: {
            id?: string;
            name?: string | null;
        } | null;
    } | null;
    donor_id?: {
        id: string;
        name?: string | null;
        slug?: string | null;
    } | null;
}

const statusItems = {
    draft: 'Draft (Private)',
    published: 'Published (Public)',
    archived: 'Archived',
};

interface ExistingProductLookup {
    id: string;
    imei: string | null;
    model_id?: {
        name: string | null;
        display_name: string | null;
        brand_id?: { name: string | null } | null;
    } | null;
}

export function ProductCreateForm() {
    const router = useRouter();
    const apolloClient = useApolloClient();
    const {isConnected, isPrinting, printProductLabel} = usePrinter();

    const [scanImei, setScanImei] = React.useState('');
    const [checkedImei, setCheckedImei] = React.useState<string | null>(null);
    const [isCheckingImei, setIsCheckingImei] = React.useState(false);
    const [imeiLookupError, setImeiLookupError] = React.useState<string | null>(null);
    const [duplicateProduct, setDuplicateProduct] = React.useState<ExistingProductLookup | null>(null);
    const [isDuplicateDialogOpen, setIsDuplicateDialogOpen] = React.useState(false);
    const isCheckingImeiRef = React.useRef(false);
    const imeiInputRef = React.useRef<HTMLInputElement>(null);
    const shouldFocusImeiAfterSuccessCloseRef = React.useRef(false);

    const [createdProduct, setCreatedProduct] = React.useState<CreatedProductItem | null>(null);
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = React.useState(false);

    const [createProduct, {loading: isSubmitting}] = useMutation<{
        create_product_item: CreatedProductItem;
    }>(CREATE_PRODUCT);

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            model: null,
            donor_id: null,
            imei: '',
            description: '',
            note: '',
            status: 'published',
            image_reference: null,
        },
    });

    const selectedModel = form.watch('model') as ModelItem | null;
    const selectedDonor = form.watch('donor_id') as DonorItem | null;

    const continueWithImei = (imei: string) => {
        setCheckedImei(imei);
        form.setValue('imei', imei, {shouldDirty: false, shouldValidate: true});
    };

    const handleImeiCheck = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isCheckingImeiRef.current) return;

        const parsedImei = productImeiSchema.safeParse(scanImei);
        if (!parsedImei.success) {
            setImeiLookupError(parsedImei.error.issues[0]?.message ?? 'Enter an IMEI or serial number.');
            return;
        }

        const imei = parsedImei.data;
        isCheckingImeiRef.current = true;
        setIsCheckingImei(true);
        setScanImei(imei);
        setImeiLookupError(null);

        try {
            const result = await apolloClient.query<{ product: ExistingProductLookup[] }, { imei: string }>({
                query: LOOKUP_PRODUCT_BY_IMEI,
                variables: {imei},
                fetchPolicy: 'network-only',
            });
            const existingProduct = result.data?.product[0];

            if (existingProduct) {
                setDuplicateProduct(existingProduct);
                setIsDuplicateDialogOpen(true);
            } else {
                continueWithImei(imei);
            }
        } catch {
            setImeiLookupError('Could not check this IMEI / serial number. Please try again.');
        } finally {
            isCheckingImeiRef.current = false;
            setIsCheckingImei(false);
        }
    };

    const handleSkipImei = () => {
        if (isCheckingImeiRef.current) return;
        setScanImei('');
        setImeiLookupError(null);
        continueWithImei('');
    };

    const handleRescan = () => {
        setIsDuplicateDialogOpen(false);
        setDuplicateProduct(null);
        setCheckedImei(null);
        setScanImei('');
        setImeiLookupError(null);
        form.setValue('imei', '', {shouldDirty: false, shouldValidate: false});
        window.scrollTo(0, 0);
    };

    const handleModelChange = (_modelId: string, model?: ModelItem | null) => {
        form.setValue('model', model || null, {shouldValidate: true});
    };

    const handleDonorChange = (_donorId: string, donor?: DonorItem | null) => {
        form.setValue('donor_id', donor || null, {shouldValidate: true});
    };

    const onSubmit = async (values: ProductFormValues) => {
        if (!values.model || checkedImei === null || values.imei !== checkedImei) return;
        try {
            const res = await createProduct({
                variables: {
                    data: {
                        // "Why on earth are we passing slug through?", you ask -
                        // it's because the GraphQL API requires it as it's a mandatory field.
                        // This can be removed if (when) we change to the REST API instead.
                        model_id: {id: values.model.id, slug: values.model.slug},
                        donor_id: values.donor_id ? {id: values.donor_id.id} : undefined,
                        imei: checkedImei || undefined,
                        description: values.description?.trim() || undefined,
                        note: values.note?.trim() || undefined,
                        status: values.status,
                        // Same stupidity here
                        image_reference: values.image_reference ? {
                            id: values.image_reference.id,
                            storage: values.image_reference.storage,
                            filename_download: values.image_reference.filename_download
                        } : undefined,
                    },
                },
            });

            const created = res?.data?.create_product_item;
            if (created) {
                toast.add({
                    type: 'success',
                    description: `Product #${created.id} registered successfully`,
                });
                setCreatedProduct(created);
                setIsSuccessDialogOpen(true);
            }
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to create product';
            toast.add({
                type: 'error',
                description: errorMessage,
            });
        }
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (checkedImei === null) {
            void handleImeiCheck(event);
            return;
        }
        void form.handleSubmit(onSubmit)(event);
    };

    const handlePrintCreatedLabel = async (copies: number) => {
        if (!createdProduct) return;
        if (!isConnected) {
            toast.add({
                type: 'error',
                description: 'Printer is not connected. Please connect your USB label printer through the sidebar.',
            });
            return;
        }

        try {
            const ok = await printProductLabel(createdProduct as unknown as Product, {
                labelSize: 'small_47x20',
                copies: copies,
            });
            if (ok) {
                toast.add({
                    type: 'success',
                    description: `Labels printed.`,
                });
            } else {
                toast.add({
                    type: 'error',
                    description: 'Label print failed.',
                });
            }
        } catch {
            toast.add({
                type: 'error',
                description: 'An error occurred while printing the label.',
            });
        }
    };

    const handleCreateAnother = () => {
        shouldFocusImeiAfterSuccessCloseRef.current = true;
        setIsSuccessDialogOpen(false);
        setCreatedProduct(null);
        setScanImei('');
        setCheckedImei(null);
        setImeiLookupError(null);
        setDuplicateProduct(null);
        setIsDuplicateDialogOpen(false);
        isCheckingImeiRef.current = false;
        form.reset({
            model: null,
            donor_id: null,
            imei: '',
            description: '',
            note: '',
            status: 'published',
            image_reference: null,
        });
        // Scroll back to the top of the form, ready for the next one.
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-full max-w-6xl space-y-6">
            {!isConnected && <Alert
                className="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50 after:bg-amber-500">
                <HugeiconsIcon icon={PrinterXIcon} strokeWidth={2}/>
                <AlertTitle>Printer Missing in Action</AlertTitle>
                <AlertDescription>You don&#39;t seem to have a label printer connected. While you can still create new
                    Products, we strongly recommend you connect a label printer before continuing.</AlertDescription>
            </Alert>}
            <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-stretch">
                    <Card className="min-w-0 rounded-none border-border shadow-xs xl:flex-1">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                <HugeiconsIcon icon={BoxIcon} className="size-4 text-primary"/>
                                Scan IMEI / Serial Number
                            </CardTitle>
                            <CardDescription>
                                {checkedImei === null
                                    ? 'Scan or enter the product identifier to check whether it is already in the collection, or skip if unavailable.'
                                    : checkedImei
                                        ? 'This identifier has been checked against the collection.'
                                        : 'No IMEI / serial number will be saved for this product.'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <Field>
                                    <FieldLabel htmlFor="imei-scan">IMEI / Serial Number</FieldLabel>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Input
                                                ref={imeiInputRef}
                                                id="imei-scan"
                                                value={checkedImei === null ? scanImei : checkedImei}
                                                onChange={(event) => {
                                                    setScanImei(event.target.value);
                                                    setImeiLookupError(null);
                                                }}
                                                onFocus={(event) => {
                                                    if (checkedImei === null) event.currentTarget.select();
                                                }}
                                                readOnly={checkedImei !== null}
                                                placeholder="e.g. 352093008355021"
                                                maxLength={64}
                                                className="font-mono"
                                                disabled={checkedImei !== null || isCheckingImei || isSubmitting}
                                                aria-invalid={!!imeiLookupError}
                                                aria-describedby={imeiLookupError ? 'imei-scan-error' : undefined}
                                                autoFocus
                                            />
                                            {imeiLookupError && (
                                                <FieldError id="imei-scan-error">{imeiLookupError}</FieldError>
                                            )}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Tip: You can use a barcode scanner here!</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </Field>
                                {checkedImei === null ? (
                                    <div className="flex gap-2">
                                        <Button type="submit" disabled={isCheckingImei || isSubmitting}
                                                className="gap-2">
                                            {isCheckingImei ? (
                                                <>
                                                    <HugeiconsIcon icon={Loading03Icon}
                                                                   className="size-4 animate-spin"/>
                                                    Checking...
                                                </>
                                            ) : 'Check IMEI / Serial'}
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={handleSkipImei}
                                            disabled={isCheckingImei || isSubmitting}
                                        >
                                            Skip
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <Button type="button" variant="outline" onClick={handleRescan}
                                                disabled={isSubmitting}>
                                            Change
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <fieldset
                        disabled={checkedImei === null || isSubmitting}
                        className={`min-w-0 border-0 p-0 transition-opacity xl:flex-1 ${checkedImei === null ? 'opacity-50' : 'opacity-100'}`}
                    >
                        {/* Section 1: Model */}
                        <Card className="rounded-none border-border shadow-xs overflow-visible relative z-30 xl:h-full">
                            <CardHeader className="pb-3">
                                <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                    <HugeiconsIcon icon={FlipPhoneIcon} className="size-4 text-primary"/>
                                    Model
                                    <span className="text-destructive">*</span>
                                </CardTitle>
                                <CardDescription>
                                    Search for an existing phone model, or register a new entry.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Field>
                                    <ModelSelectOrCreate
                                        value={selectedModel?.id}
                                        onChange={handleModelChange}
                                        selectedModel={selectedModel}
                                        disabled={checkedImei === null || isSubmitting}
                                        error={form.formState.errors.model?.message as string | undefined}
                                    />
                                </Field>
                            </CardContent>
                        </Card>
                    </fieldset>
                </div>

                <fieldset
                    disabled={checkedImei === null || isSubmitting}
                    className={`min-w-0 space-y-6 border-0 p-0 transition-opacity ${checkedImei === null ? 'opacity-50' : 'opacity-100'}`}
                >
                    {/* Section 2: Donor */}
                    <Card className="rounded-none border-border shadow-xs overflow-visible relative z-20">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                <HugeiconsIcon icon={UserIcon} className="size-4 text-primary"/>
                                Donor
                            </CardTitle>
                            <CardDescription>
                                Record the donor of this product.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <FieldGroup className="gap-4">
                                <Field>
                                    <DonorSelectOrCreate
                                        value={selectedDonor?.id}
                                        onChange={handleDonorChange}
                                        selectedDonor={selectedDonor}
                                        disabled={checkedImei === null || isSubmitting}
                                        error={form.formState.errors.donor_id?.message as string | undefined}
                                    />
                                </Field>
                            </FieldGroup>
                        </CardContent>
                    </Card>

                    {/* Section 3: Product */}
                    <Card className="rounded-none border-border shadow-xs overflow-visible relative z-10">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                <HugeiconsIcon icon={BoxIcon} className="size-4 text-primary"/>
                                Physical Inventory Details
                            </CardTitle>
                            <CardDescription>
                                Set the publication status and record the product’s physical condition.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <FieldGroup className="gap-4">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <Field>
                                        <FieldLabel>Publication Status</FieldLabel>
                                        <Select
                                            items={statusItems}
                                            value={form.watch('status')}
                                            onValueChange={(val) => {
                                                if (val) form.setValue('status', val as 'draft' | 'published' | 'archived');
                                            }}
                                            disabled={checkedImei === null || isSubmitting}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Status"/>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="draft">Draft (Private)</SelectItem>
                                                <SelectItem value="published">Published (Public)</SelectItem>
                                                <SelectItem value="archived">Archived</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                </div>

                                <Field>
                                    <FieldLabel>Physical Condition & Distinctive Traits</FieldLabel>
                                    <Textarea
                                        placeholder="e.g. Black housing, minor scuff on top bezel, includes original lithium battery and antenna..."
                                        rows={3}
                                        {...form.register('description')}
                                        disabled={checkedImei === null || isSubmitting}
                                        aria-invalid={!!form.formState.errors.description}
                                    />
                                    {form.formState.errors.description && (
                                        <FieldError>{form.formState.errors.description.message}</FieldError>
                                    )}
                                </Field>

                                <Field>
                                    <FieldLabel>Internal Notes</FieldLabel>
                                    <Textarea
                                        placeholder="Internal notes, acquisition history, etc (e.g. Bin B4, donated during 2026 campaign)..."
                                        rows={3}
                                        {...form.register('note')}
                                        disabled={checkedImei === null || isSubmitting}
                                        aria-invalid={!!form.formState.errors.note}
                                    />
                                    {form.formState.errors.note && (
                                        <FieldError>{form.formState.errors.note.message}</FieldError>
                                    )}
                                </Field>
                            </FieldGroup>
                        </CardContent>
                    </Card>

                    {/* Section 4: Specimen Photography */}
                    <Card className="rounded-none border-border shadow-xs overflow-visible relative z-0">
                        <CardHeader className="pb-3">
                            <CardTitle className="flex items-center gap-2 text-base font-semibold">
                                <HugeiconsIcon icon={Camera01Icon} className="size-4 text-primary"/>
                                Reference Photo
                            </CardTitle>
                            <CardDescription>
                                Capture or upload a reference photo.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ProductImageCapture
                                getAccessToken={getAccessToken}
                                value={form.watch('image_reference')}
                                onChange={(file) => form.setValue('image_reference', file || null, {shouldValidate: true})}
                                disabled={checkedImei === null || isSubmitting}
                            />
                        </CardContent>
                    </Card>

                    {/* Submit Actions */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-end pt-2">
                        <Button
                            type="submit"
                            disabled={checkedImei === null || isSubmitting}
                            className="gap-2 sm:min-w-40"
                        >
                            {isSubmitting ? (
                                <>
                                    <HugeiconsIcon icon={Loading03Icon} className="size-4 animate-spin"/>
                                    Registering...
                                </>
                            ) : (
                                <>
                                    <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-4"/>
                                    Register Product
                                </>
                            )}
                        </Button>
                    </div>
                </fieldset>
            </form>

            <Dialog
                open={isDuplicateDialogOpen}
                onOpenChange={(open) => {
                    if (open) setIsDuplicateDialogOpen(true);
                }}
            >
                <DialogContent className="sm:max-w-xl" showCloseButton={false}>
                    <DialogHeader>
                        <DialogTitle>Product already exists</DialogTitle>
                        <DialogDescription>
                            A product with this IMEI / serial number is already in the collection. If you are certain
                            this is expected (for example, early prototypes), continue anyway.
                        </DialogDescription>
                    </DialogHeader>
                    {duplicateProduct && (
                        <div className="space-y-2 rounded border border-border bg-muted/40 p-3 text-sm">
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-muted-foreground">Product ID</span>
                                <span className="font-mono">#{duplicateProduct.id}</span>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                <span className="text-muted-foreground">Model</span>
                                <span className="text-right">
                                    {duplicateProduct.model_id?.brand_id?.name ? `${duplicateProduct.model_id.brand_id.name} ` : ''}
                                    {duplicateProduct.model_id?.name || duplicateProduct.model_id?.display_name || '—'}
                                </span>
                            </div>
                        </div>
                    )}
                    <DialogFooter>
                        <Button type="button" onClick={handleRescan}>
                            I messed up! Go back!
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            onClick={() => {
                                if (!duplicateProduct) return;
                                continueWithImei(scanImei);
                                setIsDuplicateDialogOpen(false);
                            }}
                        >
                            Continue anyway
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Post-Creation Success Dialog */}
            <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
                <DialogContent
                    className="sm:max-w-xl"
                    finalFocus={() => {
                        if (!shouldFocusImeiAfterSuccessCloseRef.current) return null;
                        shouldFocusImeiAfterSuccessCloseRef.current = false;
                        return imeiInputRef.current;
                    }}
                >
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-primary">
                            <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-5"/>
                            Product {createdProduct ? "#" + createdProduct.id : ""} Registered
                        </DialogTitle>
                        <DialogDescription>
                            What would you like to do next?
                        </DialogDescription>
                    </DialogHeader>

                    {/*{createdProduct && (*/}
                    {/*    <div className="space-y-3 rounded border border-border bg-muted/40 p-3 text-sm">*/}
                    {/*        <div className="flex items-center justify-between">*/}
                    {/*            <span className="text-muted-foreground">Product ID:</span>*/}
                    {/*            <span className="font-mono font-medium">#{createdProduct.id}</span>*/}
                    {/*        </div>*/}
                    {/*        <div className="flex items-center justify-between">*/}
                    {/*            <span className="text-muted-foreground">Model:</span>*/}
                    {/*            <span className="font-medium">*/}
                    {/*                {createdProduct.model_id?.brand_id?.name ? `${createdProduct.model_id.brand_id.name} ` : ''}*/}
                    {/*                {createdProduct.model_id?.name || createdProduct.model_id?.display_name || '—'}*/}
                    {/*            </span>*/}
                    {/*        </div>*/}
                    {/*        {createdProduct.imei && (*/}
                    {/*            <div className="flex items-center justify-between">*/}
                    {/*                <span className="text-muted-foreground">IMEI / Serial:</span>*/}
                    {/*                <span className="font-mono text-xs">{createdProduct.imei}</span>*/}
                    {/*            </div>*/}
                    {/*        )}*/}
                    {/*        <div className="flex items-center justify-between">*/}
                    {/*            <span className="text-muted-foreground">Status:</span>*/}
                    {/*            <Badge variant={createdProduct.status === 'published' ? 'default' : 'secondary'}>*/}
                    {/*                {createdProduct.status || 'draft'}*/}
                    {/*            </Badge>*/}
                    {/*        </div>*/}
                    {/*        {createdProduct.image_reference?.id && (*/}
                    {/*            <div className="flex items-center justify-between">*/}
                    {/*                <span className="text-muted-foreground">Photo Attached:</span>*/}
                    {/*                <span*/}
                    {/*                    className="font-mono text-xs text-emerald-600 flex items-center gap-1 font-medium">*/}
                    {/*                    <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-3.5"/>*/}
                    {/*                    #{createdProduct.image_reference.id}*/}
                    {/*                </span>*/}
                    {/*            </div>*/}
                    {/*        )}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <DialogFooter className="flex flex-col flex-wrap sm:justify-between gap-2">
                        <ButtonGroup>
                            <ButtonGroupText render={<Label/>}
                                             className="border-input">{isPrinting ? (
                                <HugeiconsIcon icon={Loading03Icon} className="size-4 animate-spin"/>
                            ) : (
                                <HugeiconsIcon icon={PrinterIcon} className="size-4"/>
                            )}
                                Print Labels:
                            </ButtonGroupText>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handlePrintCreatedLabel(1)}
                                disabled={isPrinting || !isConnected}
                                className="px-3 bg-secondary"
                            >

                                1x
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => handlePrintCreatedLabel(2)}
                                disabled={isPrinting || !isConnected}
                                className="px-3 bg-secondary"
                            >
                                2x
                            </Button>
                        </ButtonGroup>

                        <div className="flex items-center gap-2">
                            <Button
                                type="button"
                                onClick={handleCreateAnother}
                                className="gap-1"
                            >
                                <HugeiconsIcon icon={Add01Icon} className="size-3.5"/>
                                Add Another
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => router.push('/products')}
                            >
                                <HugeiconsIcon icon={BoxIcon} className="size-3.5"/>
                                Products List
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
