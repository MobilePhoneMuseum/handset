import {NextRequest, NextResponse} from 'next/server';
import {auth} from "@/lib/auth/auth";

// Specify protected and public routes
const publicRoutes = ['/login', '/signup', '/'];

export default async function proxy(req: NextRequest) {
    // Check if the current route is protected or public
    const path = req.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(path);

    // Get session
    const session = await auth.api.getSession({
        headers: req.headers,
    });

    // Redirect to /login if the route is not public
    if (!isPublicRoute && !session?.user) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    return NextResponse.next();
}

// Routes Proxy should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
