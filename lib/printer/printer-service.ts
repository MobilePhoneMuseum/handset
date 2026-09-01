import type {LabelPrinterUsb} from 'webzlp';
import {LabelPrinter} from 'webzlp';

export class PrinterService {
    private printer: LabelPrinterUsb | null = null;
    private device: USBDevice | null = null;

    public static isWebUsbSupported(): boolean {
        return typeof window !== 'undefined' && typeof navigator !== 'undefined' && 'usb' in navigator;
    }

    public async getPairedDevices(): Promise<USBDevice[]> {
        if (!PrinterService.isWebUsbSupported()) return [];
        try {
            return await navigator.usb.getDevices();
        } catch {
            return [];
        }
    }

    public async requestDevice(): Promise<USBDevice | null> {
        if (!PrinterService.isWebUsbSupported()) {
            throw new Error('WebUSB is not supported in this browser environment.');
        }
        const device = await navigator.usb.requestDevice({filters: []});
        return device;
    }

    public async connect(device: USBDevice): Promise<LabelPrinterUsb> {
        if (this.printer) {
            await this.disconnect();
        }
        this.device = device;
        const printerInstance = await LabelPrinter.fromUSBDevice(
            device as unknown as Parameters<typeof LabelPrinter.fromUSBDevice>[0],
            {} as Parameters<typeof LabelPrinter.fromUSBDevice>[1]
        );
        this.printer = printerInstance;
        return printerInstance;
    }

    public async disconnect(): Promise<void> {
        if (this.printer) {
            try {
                await this.printer.dispose();
            } catch (err) {
                console.warn('Error during printer disposal:', err);
            } finally {
                this.printer = null;
                this.device = null;
            }
        }
    }

    public getActivePrinter(): LabelPrinterUsb | null {
        return this.printer;
    }

    public getActiveDevice(): USBDevice | null {
        return this.device;
    }
}

export const printerService = new PrinterService();
