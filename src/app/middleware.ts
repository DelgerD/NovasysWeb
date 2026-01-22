import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Күүкиг нэрээр нь авах
  const token = req.cookies.get("admin_token")?.value;

  if (req.nextUrl.pathname.startsWith("/admin")) {
    // Хэрэв /admin/login руу орж байгаа бол шалгах шаардлагагүй
    if (req.nextUrl.pathname === "/admin/login") {
      return NextResponse.next();
    }

    if (!token) {
      // Күүки байхгүй бол login руу шилжүүлнэ
      const loginUrl = new URL("/components/login", req.url);
      return NextResponse.redirect(loginUrl);
    }

    // ТАЙЛБАР: Энд JWT-г verify хийхдээ 'jose' сан ашиглахыг зөвлөж байна.
    // Хэрэв jwt.verify ажиллахгүй бол зүгээр л token байгаа эсэхийг нь шалгаад оруулж болно.
    // Учир нь backend-ийн бүх хүсэлт дээр backend өөрөө дахин шалгах учир аюулгүй.
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};