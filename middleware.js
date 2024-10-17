import { NextResponse } from 'next/server';

const middleware = (req) => {
    try {
        const token = req.cookies.get('token');
        const { pathname } = req.nextUrl;

        if (!token && pathname === '/dashboard') {
            return NextResponse.redirect('/login');
        }

        if (token && (pathname === '/login' || pathname === '/signup')) {
            return NextResponse.redirect('/dashboard');
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