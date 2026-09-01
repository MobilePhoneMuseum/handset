"use client";
import {Separator} from "@/components/ui/separator"
import {SidebarTrigger} from "@/components/ui/sidebar"
import {useEffect, useMemo, useState} from "react";

// This is optional and can be omitted
export type TitleObserverCallback = (title: string) => void;

export function useTitleObserver(onTitleChange?: TitleObserverCallback) {
    const [title, setTitle] = useState("");

    const isMounted = useMemo(() => true, []);

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            let newTitle = undefined;
            mutations.forEach((mutation) => {
                if (mutation.target === document.head && mutation.type === "childList") {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeName === "TITLE")
                            newTitle = node.textContent;
                    })
                }
                if (mutation.target.nodeName === "TITLE")
                    newTitle = mutation.target.textContent;
            });
            if (newTitle !== undefined)
                setTitle(newTitle);
        });

        // <head> is observed because Next.js does not change title contents but removes and adds <title> node
        observer.observe(document.head, {
            subtree: true,
            characterData: true,
            childList: true,
        });

        return () => observer.disconnect();
    }, []);

    // As mentioned earlier this is optional and can be omitted
    useEffect(() => {
        if (title !== "" && onTitleChange)
            onTitleChange(title);
    }, [onTitleChange, title]);

    // Return dynamically set title
    if (title !== "")
        return title;

    // Fallback to static title
    return isMounted && (typeof document !== 'undefined') ? document.title : "";
}

export function SiteHeader() {
    const title = useTitleObserver()
    return (
        <header
            className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
                <div className="flex items-center gap-1 lg:gap-2">
                    <SidebarTrigger className="-ml-1"/>
                    <Separator
                        orientation="vertical"
                        className="mx-2 h-4 data-vertical:self-auto"
                    />
                    <h1 className="text-base font-medium">{title}</h1>
                </div>
            </div>
        </header>
    )
}
