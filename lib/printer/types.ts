import type {LabelPrinterUsb} from 'webzlp';
import {Product} from "@/types/gql/graphql";

// Right now we only support printing the small phone labels - this will expand in future for things like container labels
export type LabelSize = 'small_47x20'

// export type LabelSize = 'small_47x20' | 'small_50x25' | 'medium_57x32' | 'large_100x150';

export interface LabelDimensions {
    widthDots: number;
    heightDots: number;
    dotsPerMm: number; // 8 dpmm = ~203 dpi
}

export interface PrintOptions {
    copies?: number;
    labelSize?: LabelSize;
    darkness?: number; // 0 to 30
}

export interface PrinterState {
    isSupported: boolean;
    isConnected: boolean;
    isConnecting: boolean;
    isPrinting: boolean;
    printer: LabelPrinterUsb | null;
    device: USBDevice | null;
    error: string | null;
}

export interface PrinterContextValue extends PrinterState {
    connect: () => Promise<boolean>;
    disconnect: () => Promise<void>;
    printProductLabel: (product: Product, options?: PrintOptions) => Promise<boolean>;
    printBatchLabels: (
        products: Product[],
        options?: PrintOptions
    ) => Promise<{ success: number; failed: number }>;
    feedLabel: () => Promise<boolean>;
}
