"use client"

import * as React from "react"
import {Suspense} from "react"
import {NavMain} from "@/components/nav-main"
import {NavUser, NavUserSkeleton} from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {HugeiconsIcon} from "@hugeicons/react"
import {BoxIcon, FlipPhoneIcon} from "@hugeicons/core-free-icons"
import {NavSecondary} from "@/components/nav-secondary";
import Link from "next/link";
import {AppEnvBadge} from "@/components/app-env-badge";

const data = {
    user: {
        name: "Andi Leach",
        email: "andi@mobilephonemuseum.com",
        avatar: "/avatars/andi.jpg",
    },
    navMain: [
        {
            title: "Products",
            url: "/products/",
            icon: (
                <HugeiconsIcon icon={BoxIcon} strokeWidth={2}/>
            ),
        },
        // {
        //     title: "Scanify",
        //     url: "/scan/",
        //     icon: (
        //         <HugeiconsIcon icon={BarcodeScanIcon} strokeWidth={2}/>
        //     ),
        // }
    ],
    navSecondary: [],
    documents: [],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            className="data-[slot=sidebar-menu-button]:p-1.5!"
                            render={<Link href="/"/>}
                        >
                            <HugeiconsIcon icon={FlipPhoneIcon} strokeWidth={2} className="size-5!"/>
                            <span className="text-base font-nokia-fc22 font-black font-heading uppercase">Handset</span>
                            <AppEnvBadge size="sm" className="ml-auto"/>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                {/*<NavDocuments items={data.documents} />*/}
                {/*<NavSecondary items={data.navSecondary} className="mt-auto" />*/}
            </SidebarContent>
            <SidebarFooter>
                <NavSecondary/>
                <Suspense fallback={<NavUserSkeleton/>}>
                    <NavUser/>
                </Suspense>
            </SidebarFooter>
        </Sidebar>
    )
}
