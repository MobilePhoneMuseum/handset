'use client';

import React, {useState} from 'react';
import {usePrinter} from '@/hooks/use-printer';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle,} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';
import {toast} from '@/components/ui/toast';
import {HugeiconsIcon} from '@hugeicons/react';
import {Alert02Icon, CheckmarkCircle02Icon, Loading03Icon, PrinterIcon, UsbIcon,} from '@hugeicons/core-free-icons';
import {Alert, AlertTitle} from "@/components/ui/alert";

interface PrinterSettingsDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function PrinterSettingsDialog({
                                          open,
                                          onOpenChange,
                                      }: PrinterSettingsDialogProps) {
    const {
        isSupported,
        isConnected,
        isConnecting,
        isPrinting,
        device,
        connect,
        disconnect,
        feedLabel,
    } = usePrinter();

    const [isFeeding, setIsFeeding] = useState(false);

    const handleConnect = async () => {
        try {
            const ok = await connect();
            if (ok) {
                toast.add({type: 'success', description: 'Printer connected successfully'});
            } else {
                toast.add({type: 'error', description: 'Could not pair with printer.'});
            }
        } catch {
            toast.add({type: 'error', description: 'An error occurred while connecting.'});
        }
    };

    const handleDisconnect = async () => {
        await disconnect();
        toast.add({type: 'info', description: 'Printer disconnected'});
    };

    const handleFeed = async () => {
        setIsFeeding(true);
        try {
            const ok = await feedLabel();
            if (ok) {
                toast.add({type: 'info', description: 'Test feed completed'});
            } else {
                toast.add({type: 'error', description: 'Failed to send feed command'});
            }
        } catch {
            toast.add({type: 'error', description: 'Error feeding label'});
        } finally {
            setIsFeeding(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <HugeiconsIcon icon={PrinterIcon} className="size-5"/>
                        Printer Diagnostics
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4 py-2">
                    {/* Capability & Connection Status */}
                    <Alert>
                        {!isSupported ? (
                            <HugeiconsIcon icon={Alert02Icon} className="size-3"/>
                        ) : isConnected ? (
                            <HugeiconsIcon icon={CheckmarkCircle02Icon} className="size-3"/>
                        ) : (
                            <HugeiconsIcon icon={UsbIcon} className="size-3"/>
                        )}
                        <AlertTitle>{!isSupported
                            ? 'WebUSB is not supported in this browser'
                            : isConnected
                                ? 'Connected and ready'
                                : 'No printer connected'}</AlertTitle>
                    </Alert>
                    {/* Connected Device Info */}
                    {isConnected && device && (
                        <div className="space-y-2 rounded-none border p-3 text-xs">
                            <div className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
                                Hardware Details
                            </div>
                            <div className="grid grid-cols-2 gap-y-1.5 text-muted-foreground">
                                <span className="font-medium text-foreground">Device Name:</span>
                                <span className="truncate">{device.productName || 'Generic Zebra Label Printer'}</span>

                                <span className="font-medium text-foreground">Manufacturer:</span>
                                <span>{device.manufacturerName || 'Zebra Technologies'}</span>

                                <span className="font-medium text-foreground">Serial Number:</span>
                                <span>{device.serialNumber || 'N/A'}</span>

                                <span className="font-medium text-foreground">USB Vendor ID:</span>
                                <span>0x{device.vendorId.toString(16).padStart(4, '0')}</span>

                                <span className="font-medium text-foreground">USB Product ID:</span>
                                <span>0x{device.productId.toString(16).padStart(4, '0')}</span>
                            </div>
                        </div>
                    )}

                    {/* Unsupported notice */}
                    {!isSupported && (
                        <div
                            className="text-xs text-muted-foreground bg-destructive/10 border border-destructive/20 p-3">
                            Label printing requires a browser with WebUSB support (Google Chrome, Microsoft Edge,
                            Opera) and a secure context (HTTPS/localhost).
                        </div>
                    )}
                </div>

                <DialogFooter className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between sm:space-x-2">
                    {isConnected ? (
                        <>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleDisconnect}
                                disabled={isPrinting || isFeeding}
                            >
                                Disconnect
                            </Button>
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={handleFeed}
                                disabled={isPrinting || isFeeding}
                                className="gap-1.5"
                            >
                                {isFeeding ? (
                                    <HugeiconsIcon icon={Loading03Icon} className="size-4 animate-spin"/>
                                ) : (
                                    <HugeiconsIcon icon={PrinterIcon} className="size-4"/>
                                )}
                                Feed Test Label
                            </Button>
                        </>
                    ) : (
                        <Button
                            className="w-full sm:w-auto ml-auto gap-1.5"
                            onClick={handleConnect}
                            disabled={!isSupported || isConnecting}
                        >
                            {isConnecting ? (
                                <HugeiconsIcon icon={Loading03Icon} className="size-4 animate-spin"/>
                            ) : (
                                <HugeiconsIcon icon={UsbIcon} className="size-4"/>
                            )}
                            Connect USB Printer
                        </Button>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
