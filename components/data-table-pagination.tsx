import {type ReactTable, type RowData} from "@tanstack/react-table"
import {Button} from "@/components/ui/button"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {HugeiconsIcon} from "@hugeicons/react"
import {ArrowLeft01Icon, ArrowLeftDoubleIcon, ArrowRight01Icon, ArrowRightDoubleIcon,} from "@hugeicons/core-free-icons"
import {type DataTableFeatures} from "./data-table-features"

interface DataTablePaginationProps<TData extends RowData> {
    table: ReactTable<DataTableFeatures, TData>
}

export function DataTablePagination<TData extends RowData>({
                                                               table,
                                                           }: DataTablePaginationProps<TData>) {
    const totalCount = table.getRowCount()
    const pageIndex = table.state.pagination.pageIndex
    const pageCount = Math.max(table.getPageCount(), 1)
    const selectedCount = table.getFilteredSelectedRowModel().rows?.length ?? 0

    return (
        <div className="flex flex-col items-center justify-between gap-4 px-2 sm:flex-row">
            <div className="flex-1 text-sm text-muted-foreground">
                {selectedCount} of {totalCount} row(s) selected.
            </div>
            <div className="flex flex-wrap items-center gap-4 lg:gap-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <Select
                        value={`${table.state.pagination.pageSize}`}
                        onValueChange={(value) => {
                            table.setPageSize(Number(value))
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={table.state.pagination.pageSize}/>
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex min-w-[100px] items-center justify-center text-sm font-medium">
                    Page {pageIndex + 1} of {pageCount}
                </div>
                <div className="flex items-center space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="hidden size-8 lg:flex"
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">Go to first page</span>
                        <HugeiconsIcon icon={ArrowLeftDoubleIcon} className="size-4"/>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <span className="sr-only">Go to previous page</span>
                        <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4"/>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="size-8"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">Go to next page</span>
                        <HugeiconsIcon icon={ArrowRight01Icon} className="size-4"/>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="hidden size-8 lg:flex"
                        onClick={() => table.setPageIndex(pageCount - 1)}
                        disabled={!table.getCanNextPage()}
                    >
                        <span className="sr-only">Go to last page</span>
                        <HugeiconsIcon icon={ArrowRightDoubleIcon} className="size-4"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}
