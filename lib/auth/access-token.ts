"use client";

interface CachedToken {
    accessToken: string;
    expiresAt: number;
}

let cached: CachedToken | null = null;
let inflight: Promise<string | null> | null = null;

/** Browser-side Directus access token, cached until close to expiry. Null when signed out. */
export function getAccessToken(): Promise<string | null> {
    if (cached && cached.expiresAt - Date.now() > 30_000) {
        return Promise.resolve(cached.accessToken);
    }
    inflight ??= fetch("/api/auth/token", {cache: "no-store"})
        .then(async (res) => {
            if (!res.ok) {
                cached = null;
                return null;
            }
            cached = await res.json();
            return cached!.accessToken;
        })
        .catch(() => null)
        .finally(() => {
            inflight = null;
        });
    return inflight;
}

export function clearAccessToken() {
    cached = null;
}
