"use client"

import {createColumnHelper} from "@tanstack/react-table"
import {DataTableFeatures} from "@/components/data-table-features";
import {Badge} from "@/components/ui/badge";
import {HugeiconsIcon} from "@hugeicons/react";
import {ClipboardCopy, Journal, MoreHorizontalIcon, RecycleIcon, RocketIcon} from "@hugeicons/core-free-icons";
import {DataTableColumnHeader} from "@/components/data-table-column-header";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Product} from "@/gql/graphql";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//     id: string
//     imei: string
//     amount: number
//     // status: "pending" | "processing" | "success" | "failed"
//     email: string
// }

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, Product>()

function ClipboardCopyIcon() {
    return null;
}

export const columns = columnHelper.columns([
    columnHelper.accessor("id", {
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="ID"/>
        ),
    }),
    columnHelper.accessor("model.display_name", {
        header: "Model",
    }),
    columnHelper.accessor("imei", {
        header: "IMEI",
    }),
    columnHelper.accessor("description", {
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Description"/>
        ),
        cell: ({row}) => {
            return (<div className="flex gap-2">
                        <span className="max-w-[500px] truncate font-medium">
                    {row.original.description}
                  </span>
            </div>)
        },
    }),
    columnHelper.accessor("status", {
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Status"/>
        ),
        cell: ({row}) => {
            switch (row.original.status) {
                case "deleted":
                    return <Badge variant="destructive"><HugeiconsIcon icon={RecycleIcon}/>{row.original.status}</Badge>
                case "draft":
                    return <Badge variant="secondary"><HugeiconsIcon icon={Journal}/>{row.original.status}</Badge>
                case "published":
                    return <Badge><HugeiconsIcon icon={RocketIcon}/>{row.original.status}</Badge>
                default:
                    return <Badge>{row.original.status}</Badge>
            }
        },
    }),
    {
        id: 'actions',
        cell: ({row}) => {
            const product = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger render={
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <HugeiconsIcon icon={MoreHorizontalIcon} className="h-4 w-4"/>
                        </Button>
                    }/>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText("i.mpm.ax/pr/" + product.id)}>
                                <HugeiconsIcon icon={ClipboardCopy}/> Copy Slug
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>

                </DropdownMenu>
            )
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger render={
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <HugeiconsIcon icon={MoreHorizontalIcon} className="h-4 w-4"/>
                        </Button>
                    }/>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id)}>
                            <ClipboardCopyIcon/> Copy Slug
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
])