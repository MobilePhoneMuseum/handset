import {symmetricDecrypt, symmetricEncrypt} from "better-auth/crypto";

/**
 * Directus tokens live in their own encrypted, httpOnly cookie so the refresh token never reaches
 * the browser. Only short-lived access tokens are handed out, via /api/auth/token.
 */
export const TOKEN_COOKIE = "directus_tokens";

/** Refresh when the access token has less than this left. */
export const REFRESH_WINDOW_MS = 60 * 1000;

/** How long a login lasts; Directus refresh tokens expire server-side regardless. */
export const SESSION_MAX_AGE_S = 60 * 60 * 24 * 7;

export interface DirectusTokens {
    accessToken: string;
    refreshToken: string;
    /** Epoch milliseconds at which the access token expires. */
    expiresAt: number;
}

export function getAuthSecret(): string {
    const secret = process.env.BETTER_AUTH_SECRET;
    if (!secret || secret.length < 32) {
        throw new Error("BETTER_AUTH_SECRET must be set to a string of at least 32 characters.");
    }
    return secret;
}

export const tokenCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE_S,
} as const;

export async function sealTokens(tokens: DirectusTokens): Promise<string> {
    return symmetricEncrypt({key: getAuthSecret(), data: JSON.stringify(tokens)});
}

export async function unsealTokens(value: string | undefined | null): Promise<DirectusTokens | null> {
    if (!value) return null;
    try {
        const parsed = JSON.parse(await symmetricDecrypt({key: getAuthSecret(), data: value}));
        if (typeof parsed?.accessToken === "string" && typeof parsed?.refreshToken === "string") {
            return parsed as DirectusTokens;
        }
    } catch {
        // Tampered, expired secret, or malformed: treat as signed out.
    }
    return null;
}

export function needsRefresh(tokens: DirectusTokens): boolean {
    return tokens.expiresAt - Date.now() < REFRESH_WINDOW_MS;
}

/** Exchange a refresh token for new tokens. Returns null if Directus rejects it. */
export async function refreshDirectusTokens(tokens: DirectusTokens): Promise<DirectusTokens | null> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_DIRECTUS_API}/auth/refresh`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({refresh_token: tokens.refreshToken, mode: "json"}),
            cache: "no-store",
        });
        if (!res.ok) return null;
        const data = (await res.json())?.data;
        if (!data?.access_token) return null;
        return {
            accessToken: data.access_token,
            refreshToken: data.refresh_token || tokens.refreshToken,
            expiresAt: Date.now() + (Number(data.expires) || 15 * 60 * 1000),
        };
    } catch {
        return null;
    }
}
