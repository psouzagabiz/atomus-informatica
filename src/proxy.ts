import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;

  const isAdminRoute = pathname.startsWith("/admin");
  const isClientRoute = pathname.startsWith("/cliente") && pathname !== "/cliente/login";

  if ((isAdminRoute || isClientRoute) && !isLoggedIn) {
    const loginUrl = new URL("/cliente/login", req.nextUrl.origin);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAdminRoute && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/cliente", req.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/cliente/:path*"],
};
