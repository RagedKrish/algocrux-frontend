import { NextResponse } from 'next/server';

const middleware = (req) => {
    try {
        const token = req.cookies.get('token')?.value;
        const { pathname } = req.nextUrl;

        if (!token && pathname === '/dashboard') {
            return NextResponse.redirect(new URL('/login', req.url));
        }

        if (token && (pathname === '/login' || pathname === '/signup')) {
            return NextResponse.redirect(new URL('/dashboard', req.url));
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware error:", error);
        return NextResponse.next();
    }
};

export const config = {
    matcher: ['/login', '/signup', '/dashboard'],
};

export default middleware;