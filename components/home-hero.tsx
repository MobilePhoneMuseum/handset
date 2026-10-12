"use client"

import {galanoGrotesque} from "@/app/fonts";
import {useSession} from "@/lib/auth/auth-client";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {HugeiconsIcon} from "@hugeicons/react";
import {UserIcon} from "@hugeicons/core-free-icons";
import {AppEnvBadge} from "@/components/app-env-badge";

export default function HomeHero() {
    const {data: session} = useSession();

    return (
        <div className="@container mx-auto flex w-full max-w-3xl flex-1 items-center justify-center py-8">
            <div className="w-full text-center">
                <h1 className="font-heading font-nokia-fc22 font-black uppercase whitespace-nowrap text-[min(20cqw,6rem)] mx-5 leading-none">
                    Handset
                </h1>
                <h1 className="mt-8 text-2xl font-semibold font-mono tracking-tight text-balance sm:text-2xl">
                    A suite of tools for the <span
                    className={galanoGrotesque.className}>Mobile Phone Museum</span> librarian.
                </h1>
                <div className="mt-6 flex justify-center">
                    <AppEnvBadge/>
                </div>
                {!session?.user && (
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/login">
                            <Button size="lg" className="gap-2">
                                <HugeiconsIcon icon={UserIcon} className="size-4"/>
                                Librarian Log In
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
