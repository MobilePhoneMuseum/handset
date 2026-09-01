'use client';

import React from 'react';
import {
  type ColumnDef,
  type OnChangeFn,
  type PaginationState,
  type ReactTable,
  type RowData,
  type SortingState,
  type TableState,
  useTable,
} from '@tanstack/react-table';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from '@/components/ui/table';
import {Skeleton} from '@/components/ui/skeleton';
import {type DataTableFeatures, features} from './data-table-features';
import {DataTablePagination} from './data-table-pagination';

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[];
  data: TData[];
  toolbar?: (table: ReactTable<DataTableFeatures, TData>) => React.ReactNode;
  renderBatchActions?: (
      selectedRows: TData[],
      clearSelection: () => void
  ) => React.ReactNode;
  pagination?: PaginationState;
  onPaginationChange?: OnChangeFn<PaginationState>;
  rowCount?: number;
  manualPagination?: boolean;
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  manualSorting?: boolean;
  isLoading?: boolean;
}

export function DataTable<TData extends RowData>({
                                                   columns,
                                                   data = [],
                                                   toolbar,
                                                   renderBatchActions,
                                                   pagination,
                                                   onPaginationChange,
                                                   rowCount,
                                                   manualPagination,
                                                   sorting,
                                                   onSortingChange,
                                                   manualSorting,
                                                   isLoading = false,
                                                 }: DataTableProps<TData>) {
  const state: Partial<TableState<DataTableFeatures>> = {};
  if (pagination) {
    state.pagination = pagination;
  }
  if (sorting) {
    state.sorting = sorting;
  }

  const table = useTable({
    features,
    data,
    columns,
    manualPagination,
    onPaginationChange,
    rowCount,
    manualSorting,
    onSortingChange,
    state,
  });

  const selectedRows = table.getSelectedRowModel().rows.map((row) => row.original);
  const hasSelection = selectedRows.length > 0;

  const clearSelection = () => {
    table.resetRowSelection();
  };

  const skeletonRowCount = pagination?.pageSize || 10;

  return (
      <div className="space-y-4">
        {toolbar && toolbar(table)}

        {hasSelection && renderBatchActions && (
            <div
                className="flex items-center justify-between rounded-none border border-primary/20 bg-primary/5 px-4 py-2 text-sm transition-all animate-in fade-in-50">
              <div className="font-medium text-foreground">
                {selectedRows.length} item{selectedRows.length > 1 ? 's' : ''} selected
              </div>
              <div className="flex items-center gap-2">
                {renderBatchActions(selectedRows, clearSelection)}
              </div>
            </div>
        )}

        <div className="relative overflow-hidden rounded-none border">
          <Table className={isLoading && (data?.length ?? 0) > 0 ? 'opacity-50 transition-opacity' : ''}>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                          <TableHead key={header.id}>
                            {header.isPlaceholder ? null : (
                                <table.FlexRender header={header}/>
                            )}
                          </TableHead>
                      );
                    })}
                  </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {isLoading && (!data || data.length === 0) ? (
                  Array.from({length: Math.min(skeletonRowCount, 10)}).map((_, rowIndex) => (
                      <TableRow key={`skeleton-${rowIndex}`}>
                        {columns.map((_, colIndex) => (
                            <TableCell key={`skeleton-cell-${colIndex}`} className="py-3">
                              <Skeleton className="h-5 w-full rounded-none"/>
                            </TableCell>
                        ))}
                      </TableRow>
                  ))
              ) : table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                      <TableRow
                          key={row.id}
                          data-state={row.getIsSelected() && 'selected'}
                      >
                        {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                              <table.FlexRender cell={cell}/>
                            </TableCell>
                        ))}
                      </TableRow>
                  ))
              ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <DataTablePagination table={table}/>
      </div>
  );
}
