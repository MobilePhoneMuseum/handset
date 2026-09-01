"use client"

import {type Column, type ReactTable, type RowData} from "@tanstack/react-table"
import {HugeiconsIcon} from "@hugeicons/react"
import {SlidersHorizontalIcon} from "@hugeicons/core-free-icons"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {type DataTableFeatures} from "./data-table-features"

export function DataTableViewOptions<TData extends RowData>({
                                                                table,
                                                            }: {
    table: ReactTable<DataTableFeatures, TData>
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button
                        variant="outline"
                        size="sm"
                        className="ml-auto hidden h-8 gap-1.5 lg:flex"
                    >
                        <HugeiconsIcon icon={SlidersHorizontalIcon} className="size-4"/>
                        View
                    </Button>
                }
            />
            <DropdownMenuContent align="end" className="w-[150px]">
                <DropdownMenuGroup>
                <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                {table
                    .getAllColumns()
                    .filter(
                        (column: Column<DataTableFeatures, TData, unknown>) =>
                            typeof column.accessorFn !== "undefined" && column.getCanHide()
                    )
                    .map((column: Column<DataTableFeatures, TData, unknown>) => {
                        return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        )
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
