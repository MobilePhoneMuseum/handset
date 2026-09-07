'use client';

import * as React from 'react';
import {useRouter} from 'next/navigation';
import {useSession} from 'next-auth/react';
import {useMutation} from '@apollo/client/react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {HugeiconsIcon} from '@hugeicons/react';
import {
    Add01Icon,
    ArrowLeft01Icon,
    BoxIcon,
    Camera01Icon,
    CheckmarkCircle02Icon,
    FlipPhoneIcon,
    Loading03Icon,
    PrinterIcon,
    UserIcon,
} from '@hugeicons/core-free-icons';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Badge} from '@/components/ui/badge';
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
import {type Product} from '@/types/gql/graphql';
import {CREATE_PRODUCT} from '@/app/products/new/queries';
import {productFormSchema, type ProductFormValues,} from '@/lib/validations/product';
import {type ModelItem, ModelSelectOrCreate,} from '@/components/products/model-select-or-create';
import {type DonorItem, DonorSelectOrCreate,} from '@/components/products/donor-select-or-create';
import {ProductImageCapture} from '@/components/products/product-image-capture';
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

export interface CreatedProductItem {
    id: string;
    imei?: string | null;
    description?: string | null;
    note?: string | null;
    status?: string | null;
    image_front?: {
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

export function ProductCreateForm() {
    const router = useRouter();
    const {data: session} = useSession();
    const {isConnected, isPrinting, printProductLabel} = usePrinter();

    const [selectedModel, setSelectedModel] = React.useState<ModelItem | null>(null);
    const [selectedDonor, setSelectedDonor] = React.useState<DonorItem | null>(null);
    const [createdProduct, setCreatedProduct] = React.useState<CreatedProductItem | null>(null);
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = React.useState(false);

    const [createProduct, {loading: isSubmitting}] = useMutation<{
        create_product_item: CreatedProductItem;
    }>(CREATE_PRODUCT);

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            model_id: '',
            donor_id: '',
            imei: '',
            description: '',
            note: '',
            status: 'published',
            image_id: '',
        },
    });

    const handleModelChange = (modelId: string, model?: ModelItem | null) => {
        form.setValue('model_id', modelId, {shouldValidate: true});
        setSelectedModel(model || null);
    };

    const handleDonorChange = (donorId: string, donor?: DonorItem | null) => {
        form.setValue('donor_id', donorId, {shouldValidate: true});
        setSelectedDonor(donor || null);
    };

    const onSubmit = async (values: ProductFormValues) => {
        try {
            const res = await createProduct({
                variables: {
                    data: {
                        model_id: {id: values.model_id},
                        donor_id: values.donor_id ? {id: values.donor_id} : undefined,
                        imei: values.imei?.trim() || undefined,
                        description: values.description?.trim() || undefined,
                        note: values.note?.trim() || undefined,
                        status: values.status,
                        image_front: values.image_id ? {id: values.image_id} : undefined,
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

    const handlePrintCreatedLabel = async () => {
        if (!createdProduct) return;
        if (!isConnected) {
            toast.add({
                type: 'error',
                description: 'Printer is not connected. Please connect your USB label printer in the top bar.',
            });
            return;
        }

        try {
            const ok = await printProductLabel(createdProduct as unknown as Product, {
                labelSize: 'small_47x20',
                copies: 2,
            });
            if (ok) {
                toast.add({
                    type: 'success',
                    description: `Printed labels for product #${createdProduct.id}`,
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
        setIsSuccessDialogOpen(false);
        setCreatedProduct(null);
        setSelectedModel(null);
        setSelectedDonor(null);
        form.reset({
            model_id: '',
            donor_id: '',
            imei: '',
            description: '',
            note: '',
            status: 'draft',
            image_id: '',
        });
    };

    return (
        <div className="w-full max-w-6xl space-y-6">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Section 1: Model */}
                <Card className="rounded-none border-border shadow-xs overflow-visible relative z-30">
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
                                value={form.watch('model_id')}
                                onChange={handleModelChange}
                                selectedModel={selectedModel}
                                disabled={isSubmitting}
                                error={form.formState.errors.model_id?.message}
                            />
                        </Field>
                    </CardContent>
                </Card>

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
                                    value={form.watch('donor_id')}
                                    onChange={handleDonorChange}
                                    selectedDonor={selectedDonor}
                                    disabled={isSubmitting}
                                    error={form.formState.errors.donor_id?.message}
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
                            Identify this specific unit with IMEI/serial number, publication status, and physical
                            condition.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FieldGroup className="gap-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <Field>
                                    <FieldLabel>IMEI / Serial Number</FieldLabel>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Input
                                                placeholder="e.g. 352093008355021"
                                                {...form.register('imei')}
                                                className="font-mono"
                                                disabled={isSubmitting}
                                                aria-invalid={!!form.formState.errors.imei}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        // Barcode scanners love to press Enter once they've scanned a barcode, which would submit the form.
                                                        e.stopPropagation();
                                                    }
                                                }}
                                            />
                                            {form.formState.errors.imei && (
                                                <FieldError>{form.formState.errors.imei.message}</FieldError>
                                            )}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Tip: You can use a barcode scanner here!</p>
                                        </TooltipContent>
                                    </Tooltip>

                                </Field>

                                <Field>
                                    <FieldLabel>Publication Status</FieldLabel>
                                    <Select
                                        items={statusItems}
                                        value={form.watch('status')}
                                        onValueChange={(val) => {
                                            if (val) form.setValue('status', val as 'draft' | 'published' | 'archived');
                                        }}
                                        disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                            accessToken={session?.access_token}
                            value={form.watch('image_id')}
                            onChange={(fileId) => form.setValue('image_id', fileId || '', {shouldValidate: true})}
                            disabled={isSubmitting}
                        />
                    </CardContent>
                </Card>

                {/* Submit Actions */}
                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.push('/products')}
                        disabled={isSubmitting}
                        className="gap-2"
                    >
                        <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4"/>
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
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
            </form>

            {/* Post-Creation Success Dialog */}
            <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-primary">
                            <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-5"/>
                            Product Registered
                        </DialogTitle>
                        <DialogDescription>
                            The inventory item has been created in Directus.
                        </DialogDescription>
                    </DialogHeader>

                    {createdProduct && (
                        <div className="space-y-3 rounded border border-border bg-muted/40 p-3 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Product ID:</span>
                                <span className="font-mono font-medium">#{createdProduct.id}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Model:</span>
                                <span className="font-medium">
                                    {createdProduct.model_id?.brand_id?.name ? `${createdProduct.model_id.brand_id.name} ` : ''}
                                    {createdProduct.model_id?.name || createdProduct.model_id?.display_name || '—'}
                                </span>
                            </div>
                            {createdProduct.imei && (
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">IMEI / Serial:</span>
                                    <span className="font-mono text-xs">{createdProduct.imei}</span>
                                </div>
                            )}
                            <div className="flex items-center justify-between">
                                <span className="text-muted-foreground">Status:</span>
                                <Badge variant={createdProduct.status === 'published' ? 'default' : 'secondary'}>
                                    {createdProduct.status || 'draft'}
                                </Badge>
                            </div>
                            {createdProduct.image_front?.id && (
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground">Photo Attached:</span>
                                    <span
                                        className="font-mono text-xs text-emerald-600 flex items-center gap-1 font-medium">
                                        <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-3.5"/>
                                        #{createdProduct.image_front.id}
                                    </span>
                                </div>
                            )}
                        </div>
                    )}

                    <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-2 pt-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handlePrintCreatedLabel}
                            disabled={isPrinting}
                            className="gap-2"
                        >
                            {isPrinting ? (
                                <HugeiconsIcon icon={Loading03Icon} className="size-4 animate-spin"/>
                            ) : (
                                <HugeiconsIcon icon={PrinterIcon} className="size-4"/>
                            )}
                            Print Label
                        </Button>

                        <div className="flex items-center gap-2">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={handleCreateAnother}
                                className="gap-1"
                            >
                                <HugeiconsIcon icon={Add01Icon} className="size-3.5"/>
                                Add Another
                            </Button>
                            <Button
                                type="button"
                                onClick={() => router.push('/products')}
                            >
                                Done
                            </Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
