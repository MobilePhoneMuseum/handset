'use client';

import React from 'react';
import {DataTable} from '@/components/data-table';
import {DataTableToolbar} from '@/components/data-table-toolbar';
import {useQuery} from '@apollo/client/react';
import type {PaginationState, SortingState} from '@tanstack/react-table';
import PageHeadbar from '@/components/page-headbar';
import {Button} from '@/components/ui/button';
import {HugeiconsIcon} from '@hugeicons/react';
import {BoxIcon, Loading03Icon, PrinterIcon, WandSparkles,} from '@hugeicons/core-free-icons';
import {gql} from '@/types/gql';
import {usePrinter} from '@/hooks/use-printer';
import {toast} from '@/components/ui/toast';
import {columns, type Product} from '@/app/products/columns';

const GET_PRODUCTS = gql(`
    query QueryProducts(
        $limit: Int
        $page: Int
        $search: String
        $filter: product_filter
        $sort: [String]
    ) {
        product(
            limit: $limit
            page: $page
            search: $search
            filter: $filter
            sort: $sort
        ) {
            id
            status
            imei
            description
            model_id {
                id
                name
                display_name
                brand_id {
                    id
                    name
                }
                slug
            }
        }
        product_aggregated(search: $search, filter: $filter) {
            count {
                id
            }
        }
    }
`);

export default function Page() {
    const [pagination, setPagination] = React.useState<PaginationState>({
        pageIndex: 0,
        pageSize: 20,
    });
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [searchInput, setSearchInput] = React.useState<string>('');
    const [debouncedSearch, setDebouncedSearch] = React.useState<string>('');
    const [statusFilter, setStatusFilter] = React.useState<string>('all');

    const {isConnected, isPrinting, printBatchLabels} = usePrinter();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchInput);
        }, 350);
        return () => clearTimeout(timer);
    }, [searchInput]);

    const handleSearchChange = (value: string) => {
        setSearchInput(value);
        setPagination((prev) => ({...prev, pageIndex: 0}));
    };

    const handleStatusChange = (value: string) => {
        setStatusFilter(value);
        setPagination((prev) => ({...prev, pageIndex: 0}));
    };

    const handleReset = () => {
        setSearchInput('');
        setDebouncedSearch('');
        setStatusFilter('all');
        setPagination((prev) => ({...prev, pageIndex: 0}));
    };

    const sortVariables = React.useMemo(() => {
        if (!sorting || !Array.isArray(sorting) || sorting.length === 0) return undefined;
        return sorting.map((s) => (s.desc ? `-${s.id}` : s.id));
    }, [sorting]);

    const filterVariables = React.useMemo(() => {
        if (!statusFilter || statusFilter === 'all') return undefined;
        return {
            status: {
                _eq: statusFilter,
            },
        };
    }, [statusFilter]);

    const {data, loading} = useQuery(GET_PRODUCTS, {
        variables: {
            limit: pagination.pageSize,
            page: pagination.pageIndex + 1,
            search: debouncedSearch.trim() || undefined,
            filter: filterVariables,
            sort: sortVariables,
        },
        notifyOnNetworkStatusChange: true,
    });

    const totalCount = data?.product_aggregated?.[0]?.count?.id ?? 0;
    const products = (data?.product ?? []) as Product[];

    const handleBatchPrint = async (
        selectedProducts: Product[],
        clearSelection: () => void
    ) => {
        if (!isConnected) {
            toast.add({
                type: 'error',
                description: 'Printer is not connected. Please connect via printer settings in the header.'
            });
            return;
        }

        try {
            const res = await printBatchLabels(selectedProducts);
            if (res.success > 0) {
                toast.add({
                    type: 'success', description: `Printed ${res.success} label${res.success > 1 ? 's' : ''}${
                        res.failed > 0 ? ` (${res.failed} failed)` : ''
                    }`
                })
                clearSelection();
            } else {
                toast.add({type: 'error', description: 'Batch printing failed. Please check printer connection.'});
            }
        } catch {
            toast.add({type: 'error', description: 'An error occurred during batch printing.'});
        }
    };

    return (
        <>
            <PageHeadbar title="Library Products" icon={<HugeiconsIcon icon={BoxIcon}/>}>
        <span className="ml-3">
          <Button>
            <HugeiconsIcon icon={WandSparkles}/>
            Create New
          </Button>
        </span>
            </PageHeadbar>

            <div>
                <DataTable
                    columns={columns}
                    data={products}
                    isLoading={loading}
                    pagination={pagination}
                    onPaginationChange={setPagination}
                    rowCount={totalCount}
                    manualPagination
                    sorting={sorting}
                    onSortingChange={setSorting}
                    manualSorting
                    toolbar={(table) => (
                        <DataTableToolbar
                            table={table}
                            searchValue={searchInput}
                            onSearchChange={handleSearchChange}
                            statusValue={statusFilter}
                            onStatusChange={handleStatusChange}
                            onReset={handleReset}
                        />
                    )}
                    renderBatchActions={(selectedProducts, clearSelection) => (
                        <>
                            <Button
                                size="sm"
                                onClick={() => handleBatchPrint(selectedProducts, clearSelection)}
                                disabled={isPrinting}
                                className="gap-1.5"
                            >
                                {isPrinting ? (
                                    <HugeiconsIcon
                                        icon={Loading03Icon}
                                        className="size-4 animate-spin"
                                    />
                                ) : (
                                    <HugeiconsIcon icon={PrinterIcon} className="size-4"/>
                                )}
                                Print {selectedProducts.length} Label
                                {selectedProducts.length > 1 ? 's' : ''}
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={clearSelection}
                                disabled={isPrinting}
                            >
                                Deselect All
                            </Button>
                        </>
                    )}
                />
            </div>
        </>
    );
}
