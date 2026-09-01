'use client';

import {useContext} from 'react';
import {PrinterContext} from '@/components/printer/printer-provider';
import type {PrinterContextValue} from '@/lib/printer/types';

export function usePrinter(): PrinterContextValue {
    const context = useContext(PrinterContext);
    if (!context) {
        throw new Error('usePrinter must be used within a PrinterProvider');
    }
    return context;
}
