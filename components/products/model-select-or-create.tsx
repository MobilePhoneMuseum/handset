'use client';

import * as React from 'react';
import {useMutation, useQuery} from '@apollo/client/react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {HugeiconsIcon} from '@hugeicons/react';
import {
    Add01Icon,
    Cancel01Icon,
    CheckmarkCircle02Icon,
    FlipPhoneIcon,
    Loading03Icon,
    Search01Icon,
} from '@hugeicons/core-free-icons';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Badge} from '@/components/ui/badge';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,} from '@/components/ui/select';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet
} from '@/components/ui/field';
import {toast} from '@/components/ui/toast';
import {cn} from '@/lib/utils';
import {CREATE_MODEL, SEARCH_BRANDS, SEARCH_FORM_FACTORS, SEARCH_MODELS,} from '@/app/products/new/queries';
import {modelFormSchema, type ModelFormValues, slugify,} from '@/lib/validations/product';
import {Model} from "@/types/gql/graphql";

export type ModelItem = Model;

interface ModelSelectOrCreateProps {
    value?: string;
    onChange: (value: string, model?: Model | null) => void;
    selectedModel?: Model | null;
    disabled?: boolean;
    error?: string;
}

export function ModelSelectOrCreate({
                                        onChange,
                                        selectedModel: initialSelectedModel,
                                        disabled = false,
                                        error,
                                    }: ModelSelectOrCreateProps) {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [debouncedSearch, setDebouncedSearch] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const [isCreateOpen, setIsCreateOpen] = React.useState(false);
    const [internalSelectedModel, setInternalSelectedModel] = React.useState<Model | null>(
        initialSelectedModel || null
    );

    const selectedModel = initialSelectedModel !== undefined ? initialSelectedModel : internalSelectedModel;

    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 300);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Close dropdown on click outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const {data, loading} = useQuery<{ model: Model[] }>(SEARCH_MODELS, {
        variables: {
            search: debouncedSearch.trim() || undefined,
            limit: 20,
            filter: {
                "status": {
                    "_neq": "deleted"
                }
            }
        },
        skip: !isOpen && !debouncedSearch,
    });

    const models: Model[] = data?.model || [];

    const handleSelect = (model: Model) => {
        setInternalSelectedModel(model);
        onChange(model.id, model);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClear = () => {
        setInternalSelectedModel(null);
        onChange('', null);
        setSearchTerm('');
    };

    const handleModelCreated = (newModel: Model) => {
        setInternalSelectedModel(newModel);
        onChange(newModel.id, newModel);
        setIsCreateOpen(false);
        setIsOpen(false);
    };

    return (
        <div className={cn("relative w-full space-y-2", isOpen ? "z-50" : "z-auto")} ref={dropdownRef}>
            {selectedModel ? (
                <div className="flex items-center justify-between rounded border border-border bg-card p-3 shadow-xs">
                    <div className="flex items-center gap-3">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground">
                                    <b>{selectedModel.brand_id?.name ? `${selectedModel.brand_id.name} ` : ''}</b>
                                    {selectedModel.name || selectedModel.display_name}
                                </span>
                                {selectedModel.codename && (
                                    <Badge variant="secondary" className="text-[10px] font-mono">
                                        {selectedModel.codename}
                                    </Badge>
                                )}
                                {selectedModel.form_factor_id?.name && (
                                    <Badge variant="outline" className="text-[10px]">
                                        {selectedModel.form_factor_id.name}
                                    </Badge>
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground font-mono">
                                {selectedModel.release_year}
                            </p>
                        </div>
                    </div>
                    {!disabled && (
                        <div className="flex items-center gap-1">
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                    handleClear();
                                    setIsOpen(true);
                                }}
                            >
                                Change
                            </Button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="relative">
                    <div className="relative flex items-center">
                        <HugeiconsIcon
                            icon={Search01Icon}
                            className="pointer-events-none absolute left-3 size-4 text-muted-foreground"
                        />
                        <Input
                            placeholder="Search existing models (e.g. Nokia 3310, iPhone, Matrix)..."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setIsOpen(true);
                            }}
                            onFocus={() => setIsOpen(true)}
                            disabled={disabled}
                            className="h-10 pl-9 pr-24"
                            aria-invalid={!!error}
                        />
                        <div className="absolute right-1 flex items-center gap-1">
                            {searchTerm && (
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon-xs"
                                    onClick={() => setSearchTerm('')}
                                >
                                    <HugeiconsIcon icon={Cancel01Icon} className="size-3.5"/>
                                </Button>
                            )}
                            <Button
                                type="button"
                                variant="outline"
                                size="xs"
                                onClick={() => setIsCreateOpen(true)}
                                disabled={disabled}
                                className="h-7 text-xs gap-1"
                            >
                                <HugeiconsIcon icon={Add01Icon} className="size-3"/>
                                New Model
                            </Button>
                        </div>
                    </div>

                    {isOpen && (
                        <div
                            className="absolute top-full left-0 z-50 mt-1 max-h-60 w-full overflow-y-auto rounded border border-border bg-popover p-1 shadow-lg">
                            {loading ? (
                                <div className="flex items-center justify-center p-4 text-xs text-muted-foreground">
                                    <HugeiconsIcon icon={Loading03Icon} className="mr-2 size-4 animate-spin"/>
                                    Searching catalog models...
                                </div>
                            ) : models.length > 0 ? (
                                <div className="space-y-0.5">
                                    {models.map((m) => (
                                        <button
                                            key={m.id}
                                            type="button"
                                            onClick={() => handleSelect(m)}
                                            className="flex w-full items-center justify-between rounded px-2.5 py-2 text-left text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                                        >
                                            <div className="flex items-center gap-2">
                                                <HugeiconsIcon icon={FlipPhoneIcon}
                                                               className="size-3.5 text-muted-foreground"/>
                                                <span className="font-medium">
                                                    {m.brand_id?.name ? `${m.brand_id.name} ` : ''}
                                                    {m.name || m.display_name}
                                                </span>
                                                {m.codename && (
                                                    <span className="text-[10px] text-muted-foreground font-mono">
                                                        ({m.codename})
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                {m.form_factor_id?.name && (
                                                    <span className="text-[10px] text-muted-foreground">
                                                        {m.form_factor_id.name}
                                                    </span>
                                                )}
                                                {m.release_year && (
                                                    <Badge variant="outline" className="text-[10px]">
                                                        {m.release_year}
                                                    </Badge>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                    <div className="border-t border-border pt-1 mt-1">
                                        <button
                                            type="button"
                                            onClick={() => setIsCreateOpen(true)}
                                            className="flex w-full items-center justify-center gap-1.5 rounded p-1.5 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
                                        >
                                            <HugeiconsIcon icon={Add01Icon} className="size-3.5"/>
                                            Don&apos;t see the model? Create new
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-4 text-center">
                                    <p className="text-xs text-muted-foreground">
                                        No models found{searchTerm ? ` for "${searchTerm}"` : ''}.
                                    </p>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setIsCreateOpen(true)}
                                        className="mt-2 text-xs gap-1"
                                    >
                                        <HugeiconsIcon icon={Add01Icon} className="size-3.5"/>
                                        Create &quot;{searchTerm || 'New Model'}&quot;
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {error && <FieldError>{error}</FieldError>}

            <CreateModelDialog
                open={isCreateOpen}
                onOpenChange={setIsCreateOpen}
                defaultName={searchTerm}
                onCreated={handleModelCreated}
            />
        </div>
    );
}

interface CreateModelDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    defaultName?: string;
    onCreated: (model: Model) => void;
}

export function CreateModelDialog({
                                      open,
                                      onOpenChange,
                                      defaultName = '',
                                      onCreated,
                                  }: CreateModelDialogProps) {
    const [brandSearch, setBrandSearch] = React.useState('');
    const [debouncedBrandSearch, setDebouncedBrandSearch] = React.useState('');
    const [isBrandOpen, setIsBrandOpen] = React.useState(false);
    const [selectedBrand, setSelectedBrand] = React.useState<{ id: string; name: string } | null>(null);
    const brandDropdownRef = React.useRef<HTMLDivElement>(null);

    const days: { label: string; value: string | null }[] = [
        {label: "DD", value: null},
    ]
    for (let i = 0; i < 31; i++) {
        days.push({label: (i + 1).toString().padStart(2, '0'), value: (i + 1).toString().padStart(2, '0')});
    }
    const months: { label: string; value: string | null }[] = [
        {label: "MM", value: null},
    ]
    for (let i = 0; i < 12; i++) {
        months.push({label: (i + 1).toString().padStart(2, '0'), value: (i + 1).toString().padStart(2, '0')});
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedBrandSearch(brandSearch);
        }, 250);
        return () => clearTimeout(timer);
    }, [brandSearch]);

    // Close brand dropdown on click outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                brandDropdownRef.current &&
                !brandDropdownRef.current.contains(event.target as Node)
            ) {
                setIsBrandOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const {data: brandData, loading: brandsLoading} = useQuery<{
        brand: { id: string; name: string }[]
    }>(SEARCH_BRANDS, {
        variables: {
            search: debouncedBrandSearch.trim() || undefined,
            limit: 50,
        },
        skip: !open,
    });

    const {data: formFactorData, loading: formFactorsLoading} = useQuery<{
        form_factor: { id: string; name: string }[];
    }>(SEARCH_FORM_FACTORS, {
        variables: {limit: 100},
        skip: !open,
    });

    const [createModel, {loading: isSubmitting}] = useMutation<{ create_model_item: Model }>(CREATE_MODEL);

    const form = useForm<ModelFormValues>({
        resolver: zodResolver(modelFormSchema),
        defaultValues: {
            brand_id: '',
            name: defaultName,
            slug: slugify(defaultName),
            codename: '',
            form_factor_id: '14',
            release_year: '',
            release_month: '',
            release_day: '',
            description: '',
            status: 'published',
        },
    });

    React.useEffect(() => {
        if (!open) {
            setSelectedBrand(null);
            setBrandSearch('');
            setIsBrandOpen(false);
        } else if (defaultName) {
            form.setValue('name', defaultName);
            form.setValue('slug', slugify(defaultName));
        }
    }, [open, defaultName, form]);

    const handleBrandSelect = (brand: { id: string; name: string }) => {
        setSelectedBrand(brand);
        form.setValue('brand_id', brand.id, {shouldValidate: true});
        setIsBrandOpen(false);
        setBrandSearch('');
    };

    const handleBrandClear = () => {
        setSelectedBrand(null);
        form.setValue('brand_id', '', {shouldValidate: true});
        setBrandSearch('');
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameVal = e.target.value;
        form.setValue('name', nameVal, {shouldValidate: true});
        form.setValue('slug', slugify(nameVal), {shouldValidate: true});
    };

    const onSubmit = async (values: ModelFormValues) => {
        try {
            const res = await createModel({
                variables: {
                    data: {
                        name: values.name.trim(),
                        slug: values.slug.trim(),
                        brand_id: {id: values.brand_id},
                        form_factor_id: values.form_factor_id ? {id: values.form_factor_id} : undefined,
                        codename: values.codename?.trim() || undefined,
                        release_year: values.release_year?.trim() || undefined,
                        release_month: values.release_month?.trim() || undefined,
                        release_day: values.release_day?.trim() || undefined,
                        description: values.description?.trim() || undefined,
                        status: values.status,
                    },
                },
            });

            const created = res?.data?.create_model_item;
            if (created) {
                toast.add({
                    type: 'success',
                    description: `Model "${created.name}" created successfully`,
                });
                form.reset();
                setSelectedBrand(null);
                setBrandSearch('');
                onCreated(created);
            }
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to create model';
            toast.add({
                type: 'error',
                description: errorMessage,
            });
        }
    };

    const brands: { id: string; name: string }[] = brandData?.brand || [];
    const formFactors: { id: string; name: string }[] = React.useMemo(
        () => formFactorData?.form_factor || [],
        [formFactorData]
    );

    const formFactorItems = React.useMemo(() => {
        return formFactors.map((f) => ({value: f.id, label: f.name}));
    }, [formFactors]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <HugeiconsIcon icon={FlipPhoneIcon} className="size-5 text-primary"/>
                        Create New Model
                    </DialogTitle>
                    <DialogDescription>
                        Register a new handset model to link with inventory items.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FieldGroup className="gap-4">
                        <Field>
                            <FieldLabel>
                                Brand <span className="text-destructive">*</span>
                            </FieldLabel>
                            <div className="relative w-full" ref={brandDropdownRef}>
                                {selectedBrand ? (
                                    <div
                                        className="flex items-center justify-between rounded border border-border bg-card px-3 py-2 text-sm shadow-xs">
                                        <span className="font-medium text-foreground">{selectedBrand.name}</span>
                                        {!isSubmitting && (
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="xs"
                                                onClick={() => {
                                                    handleBrandClear();
                                                    setIsBrandOpen(true);
                                                }}
                                            >
                                                Change
                                            </Button>
                                        )}
                                    </div>
                                ) : (
                                    <div className="relative">
                                        <div className="relative flex items-center">
                                            <HugeiconsIcon
                                                icon={Search01Icon}
                                                className="pointer-events-none absolute left-3 size-4 text-muted-foreground"
                                            />
                                            <Input
                                                placeholder="Search brands (e.g. Nokia, Apple, Motorola)..."
                                                value={brandSearch}
                                                onChange={(e) => {
                                                    setBrandSearch(e.target.value);
                                                    setIsBrandOpen(true);
                                                }}
                                                onFocus={() => setIsBrandOpen(true)}
                                                disabled={isSubmitting}
                                                className="h-9 pl-9 pr-8 text-sm"
                                                aria-invalid={!!form.formState.errors.brand_id}
                                            />
                                            {brandSearch && (
                                                <div className="absolute right-2 flex items-center">
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon-xs"
                                                        onClick={() => setBrandSearch('')}
                                                    >
                                                        <HugeiconsIcon icon={Cancel01Icon} className="size-3.5"/>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>

                                        {isBrandOpen && (
                                            <div
                                                className="absolute z-50 mt-1 max-h-48 w-full overflow-y-auto rounded border border-border bg-popover p-1 shadow-lg">
                                                {brandsLoading ? (
                                                    <div
                                                        className="flex items-center justify-center p-3 text-xs text-muted-foreground">
                                                        <HugeiconsIcon icon={Loading03Icon}
                                                                       className="mr-2 size-3.5 animate-spin"/>
                                                        Loading brands...
                                                    </div>
                                                ) : brands.length > 0 ? (
                                                    <div className="space-y-0.5">
                                                        {brands.map((b) => (
                                                            <button
                                                                key={b.id}
                                                                type="button"
                                                                onClick={() => handleBrandSelect(b)}
                                                                className="flex w-full items-center justify-between rounded px-2.5 py-1.5 text-left text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                                                            >
                                                                <span className="font-medium">{b.name}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="p-3 text-center text-xs text-muted-foreground">
                                                        No brands found{brandSearch ? ` for "${brandSearch}"` : ''}.
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            {form.formState.errors.brand_id && (
                                <FieldError>{form.formState.errors.brand_id.message}</FieldError>
                            )}
                        </Field>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Field>
                                <FieldLabel>
                                    Model Name <span className="text-destructive">*</span>
                                </FieldLabel>
                                <Input
                                    placeholder="e.g. Fairphone 4"
                                    value={form.watch('name')}
                                    onChange={handleNameChange}
                                    disabled={isSubmitting}
                                    aria-invalid={!!form.formState.errors.name}
                                />
                                {form.formState.errors.name && (
                                    <FieldError>{form.formState.errors.name.message}</FieldError>
                                )}
                            </Field>

                            <Field>
                                <FieldLabel>
                                    Slug <span className="text-destructive">*</span>
                                </FieldLabel>
                                <Input
                                    placeholder="[generated by name]"
                                    {...form.register('slug')}
                                    disabled={isSubmitting}
                                    aria-invalid={!!form.formState.errors.slug}
                                />
                                {form.formState.errors.slug && (
                                    <FieldError>{form.formState.errors.slug.message}</FieldError>
                                )}
                            </Field>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Field>
                                <FieldLabel>Codename</FieldLabel>
                                <Input
                                    placeholder="e.g. Grouper, Neo"
                                    {...form.register('codename')}
                                    disabled={isSubmitting}
                                />
                            </Field>

                            <Field>
                                <FieldLabel>Form Factor <span className="text-destructive">*</span></FieldLabel>
                                <Select
                                    items={formFactorItems}
                                    value={form.watch('form_factor_id')}
                                    onValueChange={(val) => {
                                        if (val) {
                                            form.setValue('form_factor_id', val, {shouldValidate: true});
                                        } else {
                                            form.setValue('form_factor_id', '', {shouldValidate: true});
                                        }
                                    }}
                                    disabled={formFactorsLoading || isSubmitting}
                                >
                                    <SelectTrigger>
                                        <SelectValue
                                            placeholder={formFactorsLoading ? 'Loading form factors...' : 'Select Form Factor'}>
                                            {(val) => formFactors.find((f) => f.id === val)?.name || (formFactorsLoading ? 'Loading form factors...' : val)}
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {formFactors.map((f) => (
                                            <SelectItem key={f.id} value={f.id}>
                                                {f.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </Field>
                        </div>
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend>Announcement Date</FieldLegend>
                                <FieldDescription>
                                    Where possible, use the date of the announcement, not first orders / release.
                                    Coarseness is permitted (e.g. just year).
                                </FieldDescription>
                                <FieldGroup>
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        <Field>
                                            <FieldLabel>Day</FieldLabel>
                                            <Select items={days}
                                                    disabled={isSubmitting} {...form.register('release_day')}>
                                                <SelectTrigger id="checkout-7j9-exp-year-f59">
                                                    <SelectValue/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {days.map((item) => (
                                                            <SelectItem key={item.value} value={item.value}>
                                                                {item.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </Field>
                                        <Field>
                                            <FieldLabel>Month</FieldLabel>
                                            <Select items={months}
                                                    disabled={isSubmitting} {...form.register('release_month')}>
                                                <SelectTrigger id="checkout-7j9-exp-year-f59">
                                                    <SelectValue/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {months.map((item) => (
                                                            <SelectItem key={item.value} value={item.value}>
                                                                {item.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </Field>
                                        <Field>
                                            <FieldLabel>Year</FieldLabel>
                                            <Input
                                                placeholder="e.g. 2001"
                                                {...form.register('release_year')}
                                                disabled={isSubmitting}
                                            />
                                        </Field>
                                    </div>
                                </FieldGroup>
                            </FieldSet>
                        </FieldGroup>


                        <Field>
                            <FieldLabel>Description / Summary</FieldLabel>
                            <Textarea
                                placeholder="An optional brief description of the model - published on the website"
                                rows={3}
                                {...form.register('description')}
                                disabled={isSubmitting}
                            />
                        </Field>
                    </FieldGroup>

                    <DialogFooter className="pt-2">
                        <DialogClose render={<Button type="button" variant="outline" disabled={isSubmitting}/>}>
                            Cancel
                        </DialogClose>
                        <Button type="submit" disabled={isSubmitting} className="gap-2">
                            {isSubmitting ? (
                                <>
                                    <HugeiconsIcon icon={Loading03Icon} className="size-4 animate-spin"/>
                                    Creating...
                                </>
                            ) : (
                                <>
                                    <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-4"/>
                                    Create Model
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
