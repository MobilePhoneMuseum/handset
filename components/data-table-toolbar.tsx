'use client';

import React from 'react';
import {type ReactTable, type RowData} from '@tanstack/react-table';
import {HugeiconsIcon} from '@hugeicons/react';
import {Cancel01Icon, FilterIcon, Search01Icon,} from '@hugeicons/core-free-icons';

import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from '@/components/ui/select';
import {DataTableViewOptions} from './data-table-view-options';
import {type DataTableFeatures} from './data-table-features';

interface DataTableToolbarProps<TData extends RowData> {
    table: ReactTable<DataTableFeatures, TData>;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    statusValue?: string;
    onStatusChange?: (value: string) => void;
    statusOptions?: { label: string; value: string }[];
    onReset?: () => void;
}

export function DataTableToolbar<TData extends RowData>({
                                                            table,
                                                            searchPlaceholder = 'Search products...',
                                                            searchValue = '',
                                                            onSearchChange,
                                                            statusValue,
                                                            onStatusChange,
                                                            statusOptions = [
                                                                {label: 'All Statuses', value: 'all'},
                                                                {label: 'Published', value: 'published'},
                                                                {label: 'Draft', value: 'draft'},
                                                                {label: 'Deleted', value: 'deleted'},
                                                            ],
                                                            onReset,
                                                        }: DataTableToolbarProps<TData>) {
    const isFiltered = Boolean(
        searchValue || (statusValue && statusValue !== 'all')
    );

    return (
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 flex-wrap items-center gap-2">
                {onSearchChange && (
                    <div className="relative w-full max-w-sm">
                        <HugeiconsIcon
                            icon={Search01Icon}
                            className="absolute left-2.5 top-2.5 size-4 text-muted-foreground pointer-events-none"
                        />
                        <Input
                            placeholder={searchPlaceholder}
                            value={searchValue}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="h-8 pl-8 pr-8"
                        />
                        {searchValue && (
                            <button
                                type="button"
                                onClick={() => onSearchChange('')}
                                className="absolute right-2.5 top-2 text-muted-foreground hover:text-foreground"
                                aria-label="Clear search"
                            >
                                <HugeiconsIcon icon={Cancel01Icon} className="size-4"/>
                            </button>
                        )}
                    </div>
                )}

                {onStatusChange && (
                    <Select
                        value={statusValue || 'all'}
                        onValueChange={(val) => {
                            if (val != null) {
                                onStatusChange(val);
                            }
                        }}
                    >
                        <SelectTrigger className="h-8 w-[140px] text-xs">
                            <HugeiconsIcon icon={FilterIcon} className="mr-1 size-3.5"/>
                            <SelectValue placeholder="Status"/>
                        </SelectTrigger>
                        <SelectContent>
                            {statusOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.value}>
                                    {opt.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}

                {isFiltered && onReset && (
                    <Button
                        variant="ghost"
                        onClick={onReset}
                        size="sm"
                        className="h-8 px-2 lg:px-3 text-xs gap-1"
                    >
                        Reset
                        <HugeiconsIcon icon={Cancel01Icon} className="size-3.5"/>
                    </Button>
                )}
            </div>

            <DataTableViewOptions table={table}/>
        </div>
    );
}
