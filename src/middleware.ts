import { NextRequest, NextResponse } from "next/server";

// Middleware function to handle auth redirects
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  
  // redirect to login if no token
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  
  // redirect to dashboard if already logged in
  if ((pathname === "/auth/login" || pathname === "/auth/register") && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/auth/login",
    "/auth/register"
  ]
};