import type {Metadata} from "next";
import {Geist, Geist_Mono, Raleway} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import {TooltipProvider} from "@/components/ui/tooltip";
import {AppSidebar} from "@/components/app-sidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {SiteHeader} from "@/components/site-header";
import {getServerSession} from "next-auth/next";
import {options} from "@/lib/auth/options";
import AuthProvider from "@/components/auth-provider";
import {Toaster} from "@/components/ui/toast";
import {ApolloWrapper} from "@/app/ApolloWrapper";
import {PrinterProvider} from "@/components/printer/printer-provider";

const geistMonoHeading = Geist_Mono({subsets: ['latin'], variable: '--font-heading'});

const raleway = Raleway({subsets: ['latin'], variable: '--font-sans'});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Handset",
    description: "A toolkit for librarians.",
};

export default async function RootLayout({children}: LayoutProps<"/">) {
    const session = await getServerSession(options)
    return (

        <html
            lang="en"
            className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", raleway.variable, geistMonoHeading.variable)}
        >
        <head>
            <meta name="apple-mobile-web-app-title" content="Handset"/>
        </head>
        <body className="min-h-full flex flex-col">
        <AuthProvider session={session}>
            <ApolloWrapper>
                <TooltipProvider>
                    <SidebarProvider
                        style={
                            {
                                "--sidebar-width": "calc(var(--spacing) * 72)",
                                "--header-height": "calc(var(--spacing) * 12)",
                            } as React.CSSProperties
                        }
                    >
                        <PrinterProvider>
                            <AppSidebar variant="inset"/>
                            <SidebarInset>
                                <SiteHeader/>
                                <div className="flex flex-1 flex-col">
                                    <div className="@container/main flex flex-1 flex-col gap-2">
                                        <div className="flex flex-col gap-4 py-4 px-2 md:gap-6 md:py-6">
                                            {children}
                                            <Toaster/>
                                        </div>
                                    </div>
                                </div>
                            </SidebarInset>
                        </PrinterProvider>
                    </SidebarProvider>
                </TooltipProvider>
            </ApolloWrapper>
        </AuthProvider>
        </body>
        </html>


    );
}
