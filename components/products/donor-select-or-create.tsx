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
    Loading03Icon,
    Search01Icon,
    UserIcon,
} from '@hugeicons/core-free-icons';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {Field, FieldError, FieldGroup, FieldLabel} from '@/components/ui/field';
import {toast} from '@/components/ui/toast';
import {cn} from '@/lib/utils';
import {CREATE_DONOR, SEARCH_DONORS,} from '@/app/products/new/queries';
import {donorFormSchema, type DonorFormValues, slugify,} from '@/lib/validations/product';
import {Donor} from "@/types/gql/graphql";

interface DonorSelectOrCreateProps {
    value?: string;
    onChange: (value: string, donor?: Donor | null) => void;
    selectedDonor?: Donor | null;
    disabled?: boolean;
    error?: string;
}

export function DonorSelectOrCreate({
                                        onChange,
                                        selectedDonor: initialSelectedDonor,
                                        disabled = false,
                                        error,
                                    }: DonorSelectOrCreateProps) {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [debouncedSearch, setDebouncedSearch] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);
    const [isCreateOpen, setIsCreateOpen] = React.useState(false);
    const [internalSelectedDonor, setInternalSelectedDonor] = React.useState<Donor | null>(
        initialSelectedDonor || null
    );

    const selectedDonor = initialSelectedDonor !== undefined ? initialSelectedDonor : internalSelectedDonor;

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

    const {data, loading} = useQuery<{ donor: Donor[] }>(SEARCH_DONORS, {
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

    const donors: Donor[] = data?.donor || [];

    const handleSelect = (donor: Donor) => {
        setInternalSelectedDonor(donor);
        onChange(donor.id, donor);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleClear = () => {
        setInternalSelectedDonor(null);
        onChange('', null);
        setSearchTerm('');
    };

    const handleDonorCreated = (newDonor: Donor) => {
        setInternalSelectedDonor(newDonor);
        onChange(newDonor.id, newDonor);
        setIsCreateOpen(false);
        setIsOpen(false);
    };

    return (
        <div className={cn("relative w-full space-y-2", isOpen ? "z-50" : "z-auto")} ref={dropdownRef}>
            {selectedDonor ? (
                <div className="flex items-center justify-between rounded border border-border bg-card p-3 shadow-xs">
                    <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded bg-primary/10 text-primary">
                            <HugeiconsIcon icon={UserIcon} className="size-5"/>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-foreground">
                                    {selectedDonor.name}
                                </span>
                            </div>
                            {selectedDonor.linkedin_url && (
                                <p className="text-xs text-muted-foreground font-mono">
                                    {selectedDonor.linkedin_url}
                                </p>
                            )}
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
                            placeholder="Search existing donors or organizations..."
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
                                New Donor
                            </Button>
                        </div>
                    </div>

                    {isOpen && (
                        <div
                            className="absolute top-full left-0 z-50 mt-1 max-h-60 w-full overflow-y-auto rounded border border-border bg-popover p-1 shadow-lg">
                            {loading ? (
                                <div className="flex items-center justify-center p-4 text-xs text-muted-foreground">
                                    <HugeiconsIcon icon={Loading03Icon} className="mr-2 size-4 animate-spin"/>
                                    Searching donors...
                                </div>
                            ) : donors.length > 0 ? (
                                <div className="space-y-0.5">
                                    {donors.map((d) => (
                                        <button
                                            key={d.id}
                                            type="button"
                                            onClick={() => handleSelect(d)}
                                            className="flex w-full items-center justify-between rounded px-2.5 py-2 text-left text-xs transition-colors hover:bg-accent hover:text-accent-foreground"
                                        >
                                            <div className="flex items-center gap-2">
                                                <HugeiconsIcon icon={UserIcon}
                                                               className="size-3.5 text-muted-foreground"/>
                                                <span className="font-medium">{d.name}</span>
                                            </div>
                                            {d.linkedin_url && (
                                                <span className="text-[10px] text-muted-foreground font-mono">
                                                    {d.linkedin_url}
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                    <div className="border-t border-border pt-1 mt-1">
                                        <button
                                            type="button"
                                            onClick={() => setIsCreateOpen(true)}
                                            className="flex w-full items-center justify-center gap-1.5 rounded p-1.5 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
                                        >
                                            <HugeiconsIcon icon={Add01Icon} className="size-3.5"/>
                                            Don&apos;t see the donor? Create new
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-4 text-center">
                                    <p className="text-xs text-muted-foreground">
                                        No donors found{searchTerm ? ` for "${searchTerm}"` : ''}.
                                    </p>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setIsCreateOpen(true)}
                                        className="mt-2 text-xs gap-1"
                                    >
                                        <HugeiconsIcon icon={Add01Icon} className="size-3.5"/>
                                        Create &quot;{searchTerm || 'New Donor'}&quot;
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}

            {error && <FieldError>{error}</FieldError>}

            <CreateDonorDialog
                open={isCreateOpen}
                onOpenChange={setIsCreateOpen}
                defaultName={searchTerm}
                onCreated={handleDonorCreated}
            />
        </div>
    );
}

interface CreateDonorDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    defaultName?: string;
    onCreated: (donor: Donor) => void;
}

export function CreateDonorDialog({
                                      open,
                                      onOpenChange,
                                      defaultName = '',
                                      onCreated,
                                  }: CreateDonorDialogProps) {
    const [createDonor, {loading: isSubmitting}] = useMutation<{ create_donor_item: Donor }>(CREATE_DONOR);

    const form = useForm<DonorFormValues>({
        resolver: zodResolver(donorFormSchema),
        defaultValues: {
            name: defaultName,
            slug: slugify(defaultName),
            linkedin_url: '',
            description: '',
            status: 'published',
        },
    });

    React.useEffect(() => {
        if (open && defaultName) {
            form.setValue('name', defaultName);
            form.setValue('slug', slugify(defaultName));
        }
    }, [open, defaultName, form]);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nameVal = e.target.value;
        form.setValue('name', nameVal, {shouldValidate: true});
        form.setValue('slug', slugify(nameVal), {shouldValidate: true});
    };

    const onSubmit = async (values: DonorFormValues) => {
        try {
            const res = await createDonor({
                variables: {
                    data: {
                        name: values.name.trim(),
                        slug: values.slug.trim(),
                        linkedin_url: values.linkedin_url?.trim() || undefined,
                        description: values.description?.trim() || undefined,
                        status: values.status,
                    },
                },
            });

            const created = res?.data?.create_donor_item;
            if (created) {
                toast.add({
                    type: 'success',
                    description: `Donor "${created.name}" created successfully`,
                });
                form.reset();
                onCreated(created);
            }
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to create donor';
            toast.add({
                type: 'error',
                description: errorMessage,
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <HugeiconsIcon icon={UserIcon} className="size-5 text-primary"/>
                        Create New Donor
                    </DialogTitle>
                    <DialogDescription>
                        Register an individual or organization in the museum Hall of Fame.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FieldGroup className="gap-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <Field>
                                <FieldLabel>
                                    Donor Name <span className="text-destructive">*</span>
                                </FieldLabel>
                                <Input
                                    placeholder="e.g. Ben Wood, Jane Doe"
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
                                    placeholder="e.g. ben-wood"
                                    {...form.register('slug')}
                                    disabled={isSubmitting}
                                    aria-invalid={!!form.formState.errors.slug}
                                />
                                {form.formState.errors.slug && (
                                    <FieldError>{form.formState.errors.slug.message}</FieldError>
                                )}
                            </Field>
                        </div>

                        <Field>
                            <FieldLabel>LinkedIn URL</FieldLabel>
                            <Input
                                placeholder="https://www.linkedin.com/in/..."
                                {...form.register('linkedin_url')}
                                disabled={isSubmitting}
                                aria-invalid={!!form.formState.errors.linkedin_url}
                            />
                            {form.formState.errors.linkedin_url && (
                                <FieldError>{form.formState.errors.linkedin_url.message}</FieldError>
                            )}
                        </Field>

                        <Field>
                            <FieldLabel>Bio / Relationship Notes</FieldLabel>
                            <Textarea
                                placeholder="Details about the donor or donation context..."
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
                                    Create Donor
                                </>
                            )}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
