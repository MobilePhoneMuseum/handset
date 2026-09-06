"use client"

import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,} from "@/components/ui/sidebar"
import {Skeleton} from "@/components/ui/skeleton"
import {HugeiconsIcon} from "@hugeicons/react"
import {Logout01Icon, MoreVerticalCircle01Icon, UserIcon} from "@hugeicons/core-free-icons"
import {signIn, signOut, useSession} from "next-auth/react";

export function NavUserSkeleton() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="pointer-events-none">
                    <Skeleton className="size-8 rounded-lg"/>
                    <div className="grid flex-1 gap-1 text-left text-sm leading-tight">
                        <Skeleton className="h-4 w-24"/>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export function NavUser() {
    const {data: session, status} = useSession()
    const {isMobile} = useSidebar()

    if (status === "loading") {
        return <NavUserSkeleton/>
    }

    if (!session?.user) {
        return (
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        size="lg"
                        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        onClick={() => {
                            signIn()
                        }}
                    >
                        <HugeiconsIcon icon={UserIcon} className="h-8 w-8"/>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">Log In</span>
                        </div>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        )
    }
    // Session available
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <SidebarMenuButton size="lg" className="aria-expanded:bg-muted"/>
                        }
                    >
                        <Avatar className="size-8 rounded-lg">
                            <AvatarImage src={session?.user?.image ?? undefined}
                                         alt={session?.user?.name ?? undefined}/>
                            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-medium">{session?.user?.name}</span>
                        </div>
                        <HugeiconsIcon icon={MoreVerticalCircle01Icon} strokeWidth={2} className="ml-auto size-4"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="min-w-56"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuGroup>
                            <DropdownMenuLabel className="p-0 font-normal">
                                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                    <Avatar className="size-8">
                                        <AvatarImage src={session?.user?.image ?? undefined}
                                                     alt={session?.user?.name ?? undefined}/>
                                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-medium">{session?.user?.name}</span>
                                        <span className="truncate text-xs text-muted-foreground">
                      {session?.user?.email}
                    </span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem onClick={() => {
                            signOut()
                        }}>
                            <HugeiconsIcon icon={Logout01Icon} strokeWidth={2}/>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )

}
