'use client';

import React, {useState} from 'react';
import {usePrinter} from '@/hooks/use-printer';
import {Button} from '@/components/ui/button';
import {PrinterSettingsDialog} from './printer-settings-dialog';
import {HugeiconsIcon} from '@hugeicons/react';
import {PrinterIcon} from '@hugeicons/core-free-icons';
import {SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";

export function PrinterStatusButton() {
    const {isSupported, isConnected, isPrinting} = usePrinter();
    const [open, setOpen] = useState(false);

    return (
        <>
            <SidebarMenuItem key="printer">
                <SidebarMenuButton onClick={() => setOpen(true)}>
                    <HugeiconsIcon icon={PrinterIcon} className="size-4"/>
                    <span className="hidden sm:inline">Label Printing</span>
                    <span
                        className={`size-2 rounded-full ${
                            !isSupported
                                ? 'bg-amber-500'
                                : isConnected
                                    ? isPrinting
                                        ? 'bg-blue-500 animate-pulse'
                                        : 'bg-emerald-500'
                                    : 'bg-muted-foreground/40'
                        }`}
                    />
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setOpen(true)}
                        className="relative h-8 gap-1.5 px-2.5 text-xs"
                        title={
                            !isSupported
                                ? 'WebUSB printer not supported'
                                : isConnected
                                    ? 'Printer connected'
                                    : 'Printer disconnected'
                        }
                    >

                    </Button>
                </SidebarMenuButton>
            </SidebarMenuItem>


            <PrinterSettingsDialog open={open} onOpenChange={setOpen}/>
        </>
    );
}
