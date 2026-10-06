import {betterAuth} from "better-auth";
import {APIError, createAuthEndpoint} from "better-auth/api";
import {nextCookies} from "better-auth/next-js";
import {setSessionCookie} from "better-auth/cookies";
import {customSession} from "better-auth/plugins";
import {directus, login} from "@/services/directus";
import {readMe, refresh} from "@directus/sdk";
import {z} from "zod";
import type {UserSession} from "./types";

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
                try {
                    const authData = await login({email, password, otp});
                    if (!authData?.access_token) {
                        throw new APIError("UNAUTHORIZED", {
                            message: "Invalid credentials.",
                        });
                    }

                    const api = directus(authData.access_token);
                    const userProfile = await api.request(
                        readMe({
                            fields: ["id", "email", "first_name", "last_name", "avatar"],
                        })
                    );

                    const userId = userProfile.id;
                    const now = new Date();
                    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24 hours
                    const sessionToken = crypto.randomUUID();

                    const user = {
                        id: userId,
                        email: userProfile.email || email,
                        emailVerified: true,
                        name: `${userProfile.first_name || ""} ${userProfile.last_name || ""}`.trim() || email,
                        firstName: userProfile.first_name || "",
                        lastName: userProfile.last_name || "",
                        image: userProfile.avatar
                            ? `${process.env.NEXT_PUBLIC_DIRECTUS_API}/assets/${userProfile.avatar}`
                            : null,
                        accessToken: authData.access_token,
                        refreshToken: authData.refresh_token || "",
                        createdAt: now,
                        updatedAt: now,
                    };

                    const session = {
                        id: crypto.randomUUID(),
                        userId: userId,
                        token: sessionToken,
                        expiresAt: expiresAt,
                        createdAt: now,
                        updatedAt: now,
                    };

                    await setSessionCookie(ctx, {session, user} as any);

                    return ctx.json({
                        user,
                        session,
                        token: sessionToken,
                    });
                } catch (err: any) {
                    if (err?.code === "INVALID_OTP" || /otp/i.test(err?.message)) {
                        throw new APIError("BAD_REQUEST", {
                            code: "INVALID_OTP",
                            message: "Invalid user OTP.",
                        });
                    }
                    throw new APIError("UNAUTHORIZED", {
                        code: "INVALID_CREDENTIALS",
                        message: err?.message || "Invalid credentials.",
                    });
                }
            }
        ),
        refreshDirectusToken: createAuthEndpoint(
            "/token/refresh",
            {
                method: "POST",
                body: z.object({
                    refreshToken: z.string().optional(),
                }),
            },
            async (ctx) => {
                const sessionData = ctx.context.session;
                const refreshTokenValue =
                    ctx.body.refreshToken || (sessionData?.user as any)?.refreshToken;
                if (!refreshTokenValue) {
                    throw new APIError("UNAUTHORIZED", {
                        message: "No refresh token available.",
                    });
                }

                try {
                    const api = directus();
                    const result = await api.request(
                        refresh({refresh_token: refreshTokenValue, mode: "json"})
                    );

                    if (sessionData && sessionData.user && result.access_token) {
                        const updatedUser = {
                            ...sessionData.user,
                            accessToken: result.access_token,
                            refreshToken: result.refresh_token || refreshTokenValue,
                        };
                        await setSessionCookie(ctx, {
                            session: sessionData.session,
                            user: updatedUser,
                        } as any);
                    }

                    return ctx.json({
                        accessToken: result.access_token,
                        refreshToken: result.refresh_token,
                        expires: result.expires,
                    });
                } catch (err: any) {
                    throw new APIError("UNAUTHORIZED", {
                        message: err?.message || "Failed to refresh token",
                    });
                }
            }
        ),
    },
});

export const auth = betterAuth({
    secret: process.env.NEXTAUTH_SECRET || process.env.BETTER_AUTH_SECRET || "development-secret-key-123456789012",
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 60 * 60 * 24, // 24 hours
        },
    },
    user: {
        additionalFields: {
            firstName: {type: "string", required: false},
            lastName: {type: "string", required: false},
            accessToken: {type: "string", required: false},
            refreshToken: {type: "string", required: false},
        },
    },
    plugins: [
        nextCookies(),
        directusAuthPlugin(),
        customSession(async ({user, session}) => {
            return {
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    firstName: (user as any).firstName || "",
                    lastName: (user as any).lastName || "",
                    image: user.image || null,
                    accessToken: (user as any).accessToken || "",
                    refreshToken: (user as any).refreshToken || "",
                } as UserSession,
                session,
            };
        }),
    ],
});
