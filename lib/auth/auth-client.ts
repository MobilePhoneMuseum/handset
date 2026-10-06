import {createAuthClient} from "better-auth/react";
import type {auth, directusAuthPlugin} from "./auth";
import type {BetterAuthClientPlugin} from "better-auth";
import {customSessionClient} from "better-auth/client/plugins";

export const directusAuthClient = () => {
    return {
        id: "directus-auth",
        $InferServerPlugin: {} as ReturnType<typeof directusAuthPlugin>,
        atomListeners: [
            {
                matcher: (path: string) => path === "/sign-in/credentials",
                signal: "$sessionSignal",
            },
        ],
    } satisfies BetterAuthClientPlugin;
};

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    plugins: [
        directusAuthClient(),
        customSessionClient<typeof auth>(),
    ],
});

export const {useSession, signIn, signOut, getSession} = authClient;
