import {auth} from "./auth";
import {headers} from "next/headers";
import type {UserSession} from "./types";

export async function getSession() {
    try {
        const headerList = await headers();
        const session = await auth.api.getSession({
            headers: headerList,
        });
        return session as {
            user: UserSession;
            session: {
                id: string;
                userId: string;
                token: string;
                expiresAt: Date;
                createdAt: Date;
                updatedAt: Date;
            };
        } | null;
    } catch {
        return null;
    }
}

export async function getUser(): Promise<UserSession | undefined> {
    const session = await getSession();
    return session?.user;
}
