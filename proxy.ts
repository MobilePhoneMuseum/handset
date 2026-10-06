import {NextRequest, NextResponse} from 'next/server';
import {auth} from "@/lib/auth/auth";
import {
    needsRefresh,
    refreshDirectusTokens,
    sealTokens,
    TOKEN_COOKIE,
    tokenCookieOptions,
    unsealTokens,
} from "@/lib/auth/tokens";

// Specify protected and public routes
const publicRoutes = ['/login', '/signup', '/'];

function redirectToLogin(req: NextRequest) {
    const res = NextResponse.redirect(new URL('/login', req.nextUrl));
    res.cookies.set(TOKEN_COOKIE, '', {...tokenCookieOptions, maxAge: 0});
    return res;
}

export default async function proxy(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);

    const session = await auth.api.getSession({headers: req.headers});

    if (!session?.user) {
        return isPublicRoute ? NextResponse.next() : NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (path === '/login') {
        return NextResponse.redirect(new URL('/', req.nextUrl));
    }

    // Refresh the Directus token here, as server components can't set cookies.
    let tokens = await unsealTokens(req.cookies.get(TOKEN_COOKIE)?.value);
    if (!tokens) {
        return isPublicRoute ? NextResponse.next() : redirectToLogin(req);
    }
    if (!needsRefresh(tokens)) {
        return NextResponse.next();
    }

    const refreshed = await refreshDirectusTokens(tokens);
    if (!refreshed) {
        return isPublicRoute ? NextResponse.next() : redirectToLogin(req);
    }
    tokens = refreshed;

    const sealed = await sealTokens(tokens);
    // Make the new cookie visible to this request's server components as well as the browser.
    req.cookies.set(TOKEN_COOKIE, sealed);
    const res = NextResponse.next({request: {headers: new Headers(req.headers)}});
    res.cookies.set(TOKEN_COOKIE, sealed, tokenCookieOptions);
    return res;
}

// Routes Proxy should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
