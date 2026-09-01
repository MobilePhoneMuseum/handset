"use client"

import * as React from "react"

import {SidebarGroup, SidebarGroupContent, SidebarMenu,} from "@/components/ui/sidebar"
import {PrinterStatusButton} from "@/components/printer/printer-status-button";

export function NavSecondary({
                                 ...props
                             }) {
    return (
        <SidebarGroup {...props}>
            <SidebarGroupContent>
                <SidebarMenu>
                    <PrinterStatusButton/>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
