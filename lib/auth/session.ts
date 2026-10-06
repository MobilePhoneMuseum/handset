import {auth} from "./auth";
import {cookies, headers} from "next/headers";
import type {SessionData, UserSession} from "./types";
import {TOKEN_COOKIE, unsealTokens} from "./tokens";

export async function getSession(): Promise<SessionData | null> {
    try {
        const session = await auth.api.getSession({headers: await headers()});
        return session as SessionData | null;
    } catch {
        return null;
    }
}

export async function getUser(): Promise<UserSession | undefined> {
    const session = await getSession();
    return session?.user;
}

/** Server-side Directus access token. proxy.ts keeps it fresh before rendering. */
export async function getAccessToken(): Promise<string | undefined> {
    const tokens = await unsealTokens((await cookies()).get(TOKEN_COOKIE)?.value);
    return tokens?.accessToken;
}
