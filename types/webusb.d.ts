// WebUSB API type declarations for browser environment

declare global {
    interface USBDeviceFilter {
        vendorId?: number;
        productId?: number;
        classCode?: number;
        subclassCode?: number;
        protocolCode?: number;
        serialNumber?: string;
    }

    interface USBDeviceRequestOptions {
        filters: USBDeviceFilter[];
    }

    interface USBConnectionEvent extends Event {
        readonly device: USBDevice;
    }

    interface USBDevice {
        readonly usbVersionMajor: number;
        readonly usbVersionMinor: number;
        readonly usbVersionSubminor: number;
        readonly deviceClass: number;
        readonly deviceSubclass: number;
        readonly deviceProtocol: number;
        readonly vendorId: number;
        readonly productId: number;
        readonly deviceVersionMajor: number;
        readonly deviceVersionMinor: number;
        readonly deviceVersionSubminor: number;
        readonly manufacturerName?: string;
        readonly productName?: string;
        readonly serialNumber?: string;
        readonly configuration?: USBConfiguration;
        readonly configurations: USBConfiguration[];
        readonly opened: boolean;

        open(): Promise<void>;

        close(): Promise<void>;

        selectConfiguration(configurationValue: number): Promise<void>;

        claimInterface(interfaceNumber: number): Promise<void>;

        releaseInterface(interfaceNumber: number): Promise<void>;

        selectAlternateInterface(interfaceNumber: number, alternateSetting: number): Promise<void>;

        controlTransferIn(setup: USBControlTransferParameters, length: number): Promise<USBInTransferResult>;

        controlTransferOut(setup: USBControlTransferParameters, data?: BufferSource): Promise<USBOutTransferResult>;

        clearHalt(direction: USBDirection, endpointNumber: number): Promise<void>;

        transferIn(endpointNumber: number, length: number): Promise<USBInTransferResult>;

        transferOut(endpointNumber: number, data: BufferSource): Promise<USBOutTransferResult>;

        reset(): Promise<void>;
    }

    interface USB extends EventTarget {
        onconnect: ((this: USB, ev: USBConnectionEvent) => any) | null;
        ondisconnect: ((this: USB, ev: USBConnectionEvent) => any) | null;

        getDevices(): Promise<USBDevice[]>;

        requestDevice(options: USBDeviceRequestOptions): Promise<USBDevice>;

        addEventListener(
            type: 'connect' | 'disconnect',
            listener: (this: USB, ev: USBConnectionEvent) => any,
            options?: boolean | AddEventListenerOptions
        ): void;

        removeEventListener(
            type: 'connect' | 'disconnect',
            listener: (this: USB, ev: USBConnectionEvent) => any,
            options?: boolean | EventListenerOptions
        ): void;
    }

    interface Navigator {
        readonly usb?: USB;
    }
}

export {};
