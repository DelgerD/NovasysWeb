import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "SUPER_SECRET_KEY";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;

   if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/components/login", req.url));
    }

    try {
      jwt.verify(token, JWT_SECRET);
      return NextResponse.next(); // cookie зөв бол зөвшөөрөх
    } catch {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/admin/:path*"],
};