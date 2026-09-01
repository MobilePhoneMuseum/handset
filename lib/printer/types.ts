import type {LabelPrinterUsb} from 'webzlp';

export type LabelSize = 'small_47x20' | 'small_50x25' | 'medium_57x32' | 'large_100x150';

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

export interface ProductPrintData {
    id: string;
    imei?: string | null;
    description?: string | null;
    status?: string | null;
    model?: {
        id?: string | null;
        name?: string | null;
        display_name?: string | null;
        brand?: {
            name?: string | null;
        }
        slug?: string | null;
    } | null;
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
    printProductLabel: (product: ProductPrintData, options?: PrintOptions) => Promise<boolean>;
    printBatchLabels: (
        products: ProductPrintData[],
        options?: PrintOptions
    ) => Promise<{ success: number; failed: number }>;
    feedLabel: () => Promise<boolean>;
}
