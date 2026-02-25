import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "eclipticlink.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host !== CANONICAL_HOST && host !== `www.${CANONICAL_HOST}`) {
    const canonicalUrl = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${CANONICAL_HOST}`);
    return NextResponse.redirect(canonicalUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|robots.txt|sitemap.xml).*)"],
};
