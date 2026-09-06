'use client';

import React, {useState} from 'react';
import {createColumnHelper} from '@tanstack/react-table';
import {DataTableFeatures} from '@/components/data-table-features';
import {Badge} from '@/components/ui/badge';
import {HugeiconsIcon} from '@hugeicons/react';
import {
  ClipboardCopy,
  Journal,
  MoreHorizontalIcon,
  PrinterIcon,
  RecycleIcon,
  RocketIcon,
} from '@hugeicons/core-free-icons';
import {DataTableColumnHeader} from '@/components/data-table-column-header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Button} from '@/components/ui/button';
import {Checkbox} from '@/components/ui/checkbox';
import type {QueryProductsQuery} from '@/types/gql/graphql';
import {usePrinter} from '@/hooks/use-printer';
import {toast} from '@/components/ui/toast';
import {LabelPreviewDialog} from '@/components/printer/label-preview-dialog';

export type Product = QueryProductsQuery['product'][number];

const columnHelper = createColumnHelper<DataTableFeatures, Product>();

function ProductRowActions({product}: { product: Product }) {
  const {isConnected, printProductLabel} = usePrinter();
  const [previewOpen, setPreviewOpen] = useState(false);

  const handleQuickPrint = async () => {
    if (!isConnected) {
      toast.add({type: 'error', description: 'Printer is not connected. Please connect via printer settings.'});
      return;
    }
    try {
      const ok = await printProductLabel(product, {labelSize: "small_47x20", copies: 2});
      if (ok) {
        toast.add({
          type: 'success',
          description: `Printed labels for ${product.model_id?.display_name || product.model_id?.name || product.id}`
        });
      } else {
        toast.add({type: 'error', description: 'Print job failed.'});
      }
    } catch {
      toast.add({type: 'error', description: 'An error occurred while printing.'});
    }
  };

  return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger
              render={
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <HugeiconsIcon icon={MoreHorizontalIcon} className="h-4 w-4"/>
                </Button>
              }
          />
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText('i.mpm.ax/pr/' + product.id)}
              >
                <HugeiconsIcon icon={ClipboardCopy}/> Copy Slug
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleQuickPrint}>
                <HugeiconsIcon icon={PrinterIcon}/> Quick Tag (print 2 labels)
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPreviewOpen(true)}>
                <HugeiconsIcon icon={PrinterIcon}/> Preview & Print...
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <LabelPreviewDialog
            product={product}
            open={previewOpen}
            onOpenChange={setPreviewOpen}
        />
      </>
  );
}

export const columns = columnHelper.columns([
  columnHelper.display({
    id: 'select',
    header: ({table}) => (
        <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={table.getIsSomePageRowsSelected()}
            onCheckedChange={(checked) => table.toggleAllPageRowsSelected(checked)}
            aria-label="Select all"
        />
    ),
    cell: ({row}) => (
        <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(checked) => row.toggleSelected(checked)}
            aria-label="Select row"
        />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor('id', {
    header: ({column}) => <DataTableColumnHeader column={column} title="ID"/>,
    cell: ({row}) => {
      return (
          <div className="flex gap-2">
          <span className="font-mono">
            {row.original.id}
          </span>
          </div>
      );
    },
  }),
  columnHelper.accessor((row) => row.model_id?.display_name, {
    id: 'model',
    header: 'Model',
  }),
  columnHelper.accessor('imei', {
    header: 'IMEI',
    cell: ({row}) => {
      return (
          <div className="flex gap-2">
          <span className="font-mono">
            {row.original.imei}
          </span>
          </div>
      );
    },
  }),
  columnHelper.accessor('description', {
    header: ({column}) => <DataTableColumnHeader column={column} title="Description"/>,
    cell: ({row}) => {
      return (
          <div className="flex gap-2">
          <span className="max-w-125 truncate font-medium">
            {row.original.description}
          </span>
          </div>
      );
    },
  }),
  columnHelper.accessor('status', {
    header: ({column}) => <DataTableColumnHeader column={column} title="Status"/>,
    cell: ({row}) => {
      switch (row.original.status) {
        case 'deleted':
          return (
              <Badge variant="destructive">
                <HugeiconsIcon icon={RecycleIcon}/>
                {row.original.status}
              </Badge>
          );
        case 'draft':
          return (
              <Badge variant="secondary">
                <HugeiconsIcon icon={Journal}/>
                {row.original.status}
              </Badge>
          );
        case 'published':
          return (
              <Badge>
                <HugeiconsIcon icon={RocketIcon}/>
                {row.original.status}
              </Badge>
          );
        default:
          return <Badge>{row.original.status}</Badge>;
      }
    },
  }),
  {
    id: 'actions',
    cell: ({row}) => <ProductRowActions product={row.original}/>,
  },
]);
