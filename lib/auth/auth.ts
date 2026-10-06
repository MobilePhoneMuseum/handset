import {betterAuth} from "better-auth";
import {APIError, createAuthEndpoint, createAuthMiddleware, sessionMiddleware} from "better-auth/api";
import {nextCookies} from "better-auth/next-js";
import {setSessionCookie} from "better-auth/cookies";
import {customSession} from "better-auth/plugins";
import {directus, login} from "@/services/directus";
import {readMe} from "@directus/sdk";
import {z} from "zod";
import type {UserSession} from "./types";
import {
    getAuthSecret,
    needsRefresh,
    refreshDirectusTokens,
    sealTokens,
    SESSION_MAX_AGE_S,
    TOKEN_COOKIE,
    tokenCookieOptions,
    unsealTokens,
} from "./tokens";

type ErrorWithCode = Error & { code?: string };

export const directusAuthPlugin = () => ({
    id: "directus-auth",
    endpoints: {
        signInCredentials: createAuthEndpoint(
            "/sign-in/credentials",
            {
                method: "POST",
                body: z.object({
                    email: z.string(),
                    password: z.string(),
                    otp: z.string().optional(),
                }),
            },
            async (ctx) => {
                const {email, password, otp} = ctx.body;

                let authData;
                try {
                    authData = await login({email, password, otp});
                } catch (err) {
                    const {code, message} = err as ErrorWithCode;
                    if (code === "INVALID_OTP") {
                        throw new APIError("BAD_REQUEST", {code: "INVALID_OTP", message: "Invalid user OTP."});
                    }
                    if (code) {
                        throw new APIError("UNAUTHORIZED", {
                            code: "INVALID_CREDENTIALS",
                            message: message || "Invalid credentials.",
                        });
                    }
                    // No Directus error code: network failure, bad response, etc.
                    throw new APIError("SERVICE_UNAVAILABLE", {
                        code: "DIRECTUS_UNAVAILABLE",
                        message: "Could not reach the authentication service; please try again.",
                    });
                }

                const api = directus(authData.access_token);
                const profile = await api
                    .request(readMe({fields: ["id", "email", "first_name", "last_name", "avatar"]}))
                    .catch(() => {
                        throw new APIError("SERVICE_UNAVAILABLE", {
                            code: "DIRECTUS_UNAVAILABLE",
                            message: "Could not load your profile; please try again.",
                        });
                    });

                const now = new Date();
                const user = {
                    id: profile.id,
                    email: profile.email || email,
                    // Directus has already authenticated this user; there is no separate verification step.
                    emailVerified: true,
                    name: `${profile.first_name || ""} ${profile.last_name || ""}`.trim() || email,
                    firstName: profile.first_name || "",
                    lastName: profile.last_name || "",
                    image: profile.avatar
                        ? `${process.env.NEXT_PUBLIC_DIRECTUS_API}/assets/${profile.avatar}`
                        : null,
                    createdAt: now,
                    updatedAt: now,
                };
                const session = {
                    id: crypto.randomUUID(),
                    userId: profile.id,
                    token: crypto.randomUUID(),
                    expiresAt: new Date(now.getTime() + SESSION_MAX_AGE_S * 1000),
                    createdAt: now,
                    updatedAt: now,
                };

                // Tokens go in their own encrypted httpOnly cookie, never into the session payload.
                ctx.setCookie(
                    TOKEN_COOKIE,
                    await sealTokens({
                        accessToken: authData.access_token,
                        refreshToken: authData.refresh_token || "",
                        expiresAt: now.getTime() + (authData.expires || 15 * 60 * 1000),
                    }),
                    tokenCookieOptions
                );
                await setSessionCookie(ctx, {session, user});

                return ctx.json({user, session, token: session.token});
            }
        ),
        /** Returns a fresh Directus access token for browser-side calls. The refresh token stays server-side. */
        directusToken: createAuthEndpoint(
            "/token",
            {method: "GET", use: [sessionMiddleware]},
            async (ctx) => {
                let tokens = await unsealTokens(ctx.getCookie(TOKEN_COOKIE));
                if (!tokens) {
                    throw new APIError("UNAUTHORIZED", {message: "No Directus session."});
                }
                if (needsRefresh(tokens)) {
                    const refreshed = await refreshDirectusTokens(tokens);
                    if (!refreshed) {
                        ctx.setCookie(TOKEN_COOKIE, "", {...tokenCookieOptions, maxAge: 0});
                        throw new APIError("UNAUTHORIZED", {message: "Session expired; please log in again."});
                    }
                    tokens = refreshed;
                    ctx.setCookie(TOKEN_COOKIE, await sealTokens(tokens), tokenCookieOptions);
                }
                return ctx.json({accessToken: tokens.accessToken, expiresAt: tokens.expiresAt});
            }
        ),
    },
    hooks: {
        after: [
            {
                matcher: (ctx: { path?: string }) => ctx.path === "/sign-out",
                handler: createAuthMiddleware(async (ctx) => {
                    ctx.setCookie(TOKEN_COOKIE, "", {...tokenCookieOptions, maxAge: 0});
                }),
            },
        ],
    },
});

export const auth = betterAuth({
    secret: getAuthSecret(),
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    session: {
        expiresIn: SESSION_MAX_AGE_S,
        // No database: the session lives entirely in an encrypted cookie.
        cookieCache: {
            enabled: true,
            maxAge: SESSION_MAX_AGE_S,
            strategy: "jwe",
        },
    },
    user: {
        additionalFields: {
            firstName: {type: "string", required: false},
            lastName: {type: "string", required: false},
        },
    },
    plugins: [
        nextCookies(),
        directusAuthPlugin(),
        customSession(async ({user, session}) => {
            const {firstName, lastName} = user as typeof user & { firstName?: string; lastName?: string };
            const sessionUser: UserSession = {
                id: user.id,
                email: user.email,
                name: user.name,
                firstName: firstName || "",
                lastName: lastName || "",
                image: user.image || null,
            };
            return {user: sessionUser, session};
        }),
    ],
});
