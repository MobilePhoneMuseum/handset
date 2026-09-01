import {type Column, type RowData} from "@tanstack/react-table"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {HugeiconsIcon} from "@hugeicons/react";
import {ArrowDownIcon, ArrowUpIcon, ChevronsUpIcon, EyeOffIcon} from "@hugeicons/core-free-icons";

interface DataTableColumnHeaderProps<TData extends RowData, TValue>
    extends React.HTMLAttributes<HTMLDivElement> {
    column: Column<TasksTableFeatures, TData, TValue>
    title: string
}

export function DataTableColumnHeader<TData extends RowData, TValue>({
                                                                         column,
                                                                         title,
                                                                         className,
                                                                     }: DataTableColumnHeaderProps<TData, TValue>) {
    if (!column.getCanSort()) {
        return <div className={cn(className)}>{title}</div>
    }

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <DropdownMenu>
                <DropdownMenuTrigger render={
                    <Button
                        variant="ghost"
                        size="sm"
                        className="-ml-3 h-8 data-[state=open]:bg-accent"
                    >
                        <span>{title}</span>
                        {column.getIsSorted() === "desc" ? (
                            <HugeiconsIcon icon={ArrowDownIcon}/>
                        ) : column.getIsSorted() === "asc" ? (
                            <HugeiconsIcon icon={ArrowUpIcon}/>
                        ) : (
                            <HugeiconsIcon icon={ChevronsUpIcon}/>
                        )}
                    </Button>
                }/>
                <DropdownMenuContent align="start">
                    <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
                        <HugeiconsIcon icon={ArrowUpIcon}/>
                        Asc
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
                        <HugeiconsIcon icon={ArrowDownIcon}/>
                        Desc
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
                        <HugeiconsIcon icon={EyeOffIcon}/>
                        Hide
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
