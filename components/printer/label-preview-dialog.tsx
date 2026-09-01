'use client';

import React, {useMemo, useState} from 'react';
import {usePrinter} from '@/hooks/use-printer';
import type {LabelSize, ProductPrintData} from '@/lib/printer/types';
import {generateLabelSvg} from '@/lib/printer/label-templates';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {toast} from '@/components/ui/toast';
import {HugeiconsIcon} from '@hugeicons/react';
import {Alert02Icon, Loading03Icon, PrinterIcon, UsbIcon,} from '@hugeicons/core-free-icons';

interface LabelPreviewDialogProps {
    product: ProductPrintData | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function LabelPreviewDialog({
                                       product,
                                       open,
                                       onOpenChange,
                                   }: LabelPreviewDialogProps) {
    const {isConnected, isPrinting, isSupported, printProductLabel} = usePrinter();
    const [labelSize, setLabelSize] = useState<LabelSize>('small_47x20');
    const [copies, setCopies] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const previewSvg = useMemo(() => {
        if (!product) return '';
        return generateLabelSvg(product, {labelSize, copies});
    }, [product, labelSize, copies]);

    if (!product) return null;

    const handlePrint = async () => {
        if (!isConnected) {
            toast.error('Printer is not connected. Please connect via printer settings.');
            return;
        }

        setLoading(true);
        try {
            const ok = await printProductLabel(product, {
                labelSize,
                copies,
            });
            if (ok) {
                toast.success(
                    `Printed label for ${product.model?.display_name || product.model?.name || product.id}`
                );
                onOpenChange(false);
            } else {
                toast.error('Printing failed. Please check printer connection.');
            }
        } catch {
            toast.error('An error occurred while printing.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <HugeiconsIcon icon={PrinterIcon} className="size-5"/>
                        Label Preview & Print
                    </DialogTitle>
                    <DialogDescription>
                        Preview label layout and adjust print parameters for{' '}
                        <span className="font-medium text-foreground">
              {product.model?.display_name || product.model?.name || product.id}
            </span>
                        .
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    {/* Label SVG Preview */}
                    <div
                        className="flex items-center justify-center rounded-none border bg-zinc-100 p-4 dark:bg-zinc-900/50 min-h-[160px] overflow-hidden">
                        {previewSvg ? (
                            <div
                                className="max-h-56 max-w-full shadow-md transition-all"
                                dangerouslySetInnerHTML={{__html: previewSvg}}
                            />
                        ) : null}
                    </div>

                    {/* Configuration controls */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="label-size" className="text-xs">
                                Label Size
                            </Label>
                            <select
                                id="label-size"
                                value={labelSize}
                                onChange={(e) => setLabelSize(e.target.value as LabelSize)}
                                className="flex h-9 w-full rounded-none border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                <option value="small_47x20">47mm x 20mm (Standard Small)</option>
                                <option value="small_50x25">50mm x 25mm (Standard 50 x 25mm)</option>
                                <option value="medium_57x32">57mm x 32mm (Medium 57 x 32mm)</option>
                                <option value="large_100x150">100mm x 150mm (Large 100 x 150mm)</option>
                            </select>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="copies-count" className="text-xs">
                                Number of Copies
                            </Label>
                            <Input
                                id="copies-count"
                                type="number"
                                min={1}
                                max={50}
                                value={copies}
                                onChange={(e) => setCopies(Math.max(1, parseInt(e.target.value) || 1))}
                                className="h-9"
                            />
                        </div>
                    </div>

                    {!isConnected && (
                        <div
                            className="flex items-center gap-2 border border-amber-500/30 bg-amber-500/10 p-2.5 text-xs text-amber-700 dark:text-amber-400">
                            <HugeiconsIcon icon={!isSupported ? Alert02Icon : UsbIcon} className="size-4 shrink-0"/>
                            <span>
                {!isSupported
                    ? 'WebUSB is not supported in this browser. Connect in Chrome or Edge to print.'
                    : 'Printer is disconnected. Please connect a USB printer before printing.'}
              </span>
                        </div>
                    )}
                </div>

                <DialogFooter className="gap-2 sm:gap-0">
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                        disabled={loading || isPrinting}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handlePrint}
                        disabled={!isConnected || loading || isPrinting}
                        className="gap-1.5"
                    >
                        {loading || isPrinting ? (
                            <HugeiconsIcon icon={Loading03Icon} className="size-4 animate-spin"/>
                        ) : (
                            <HugeiconsIcon icon={PrinterIcon} className="size-4"/>
                        )}
                        Print {copies > 1 ? `(${copies} copies)` : ''}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
