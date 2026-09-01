"use client"
import Validate from "@/lib/auth/validate"
import {SessionProvider} from "next-auth/react"
import {ThemeProvider} from "./theme-provider"
import {useState} from "react";
import RefreshTokenHandler from "@/components/refresh-token-handler";

export default function AuthProvider({
                                         session,
                                         children,
                                     }: {
    session: any
    children: React.ReactNode
}) {

    const [interval, setInterval] = useState(0);

    return (
        <SessionProvider session={session} refetchInterval={interval}>
            <Validate>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </Validate>
            <RefreshTokenHandler setInterval={setInterval}/>
        </SessionProvider>
    )
}