'use client';

import React, {createContext, useCallback, useEffect, useState} from 'react';
import {PrinterService, printerService} from '@/lib/printer/printer-service';
import {buildFeedDocument, buildProductLabelDocument} from '@/lib/printer/label-templates';
import type {PrinterContextValue, PrinterState, PrintOptions,} from '@/lib/printer/types';
import {Product} from "@/types/gql/graphql";

export const PrinterContext = createContext<PrinterContextValue | null>(null);

export function PrinterProvider({children}: { children: React.ReactNode }) {
    const [state, setState] = useState<PrinterState>(() => ({
        isSupported: PrinterService.isWebUsbSupported(),
        isConnected: false,
        isConnecting: false,
        isPrinting: false,
        printer: null,
        device: null,
        error: null,
    }));

    // Check WebUSB support and attempt auto-reconnect
    useEffect(() => {
        if (!PrinterService.isWebUsbSupported()) return;

        let isMounted = true;

        async function tryAutoConnect() {
            try {
                const paired = await printerService.getPairedDevices();
                if (paired.length > 0 && isMounted) {
                    const printer = await printerService.connect(paired[0]);
                    if (isMounted) {
                        setState((prev) => ({
                            ...prev,
                            isConnected: true,
                            printer,
                            device: paired[0],
                            error: null,
                        }));
                    }
                }
            } catch (err) {
                if (isMounted) {
                    console.warn('Printer auto-reconnect failed:', err);
                }
            }
        }

        tryAutoConnect();

        const handleDisconnect = (event: USBConnectionEvent) => {
            const activeDevice = printerService.getActiveDevice();
            if (activeDevice && event.device === activeDevice) {
                printerService.disconnect();
                setState((prev) => ({
                    ...prev,
                    isConnected: false,
                    printer: null,
                    device: null,
                }));
            }
        };

        navigator.usb.addEventListener('disconnect', handleDisconnect);

        return () => {
            isMounted = false;
            navigator.usb.removeEventListener('disconnect', handleDisconnect);
        };
    }, []);

    const connect = useCallback(async (): Promise<boolean> => {
        setState((prev) => ({...prev, isConnecting: true, error: null}));
        try {
            const device = await printerService.requestDevice();
            if (!device) {
                setState((prev) => ({...prev, isConnecting: false}));
                return false;
            }
            const printer = await printerService.connect(device);
            setState((prev) => ({
                ...prev,
                isConnecting: false,
                isConnected: true,
                printer,
                device,
                error: null,
            }));
            return true;
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : 'Failed to connect to printer.';
            setState((prev) => ({
                ...prev,
                isConnecting: false,
                isConnected: false,
                error: errorMessage,
            }));
            return false;
        }
    }, []);

    const disconnect = useCallback(async (): Promise<void> => {
        await printerService.disconnect();
        setState((prev) => ({
            ...prev,
            isConnected: false,
            printer: null,
            device: null,
            error: null,
        }));
    }, []);

    const printProductLabel = useCallback(
        async (product: Product, options?: PrintOptions): Promise<boolean> => {
            const activePrinter = printerService.getActivePrinter() || state.printer;
            if (!activePrinter) {
                setState((prev) => ({...prev, error: 'No printer connected.'}));
                return false;
            }
            setState((prev) => ({...prev, isPrinting: true, error: null}));
            try {
                const document = await buildProductLabelDocument(product, options);
                await activePrinter.sendDocument(document);
                return true;
            } catch (err) {
                const msg = err instanceof Error ? err.message : 'Print job failed.';
                setState((prev) => ({...prev, error: msg}));
                return false;
            } finally {
                setState((prev) => ({...prev, isPrinting: false}));
            }
        },
        [state.printer]
    );

    const printBatchLabels = useCallback(
        async (
            products: Product[],
            options?: PrintOptions
        ): Promise<{ success: number; failed: number }> => {
            const activePrinter = printerService.getActivePrinter() || state.printer;
            if (!activePrinter) {
                setState((prev) => ({...prev, error: 'No printer connected.'}));
                return {success: 0, failed: products.length};
            }

            setState((prev) => ({...prev, isPrinting: true, error: null}));
            let success = 0;
            let failed = 0;

            for (const product of products) {
                try {
                    const document = await buildProductLabelDocument(product, options);
                    await activePrinter.sendDocument(document);
                    success++;
                } catch {
                    failed++;
                }
            }

            setState((prev) => ({...prev, isPrinting: false}));
            return {success, failed};
        },
        [state.printer]
    );

    const feedLabel = useCallback(async (): Promise<boolean> => {
        const activePrinter = printerService.getActivePrinter() || state.printer;
        if (!activePrinter) return false;
        try {
            await activePrinter.sendDocument(buildFeedDocument());
            return true;
        } catch {
            return false;
        }
    }, [state.printer]);

    const value: PrinterContextValue = {
        ...state,
        connect,
        disconnect,
        printProductLabel,
        printBatchLabels,
        feedLabel,
    };

    return <PrinterContext.Provider value={value}>{children}</PrinterContext.Provider>;
}
