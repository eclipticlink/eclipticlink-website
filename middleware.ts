import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "eclipticlink.com";
const CANONICAL_ORIGIN = "https://eclipticlink.com";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host") ?? url.hostname;
  const proto = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");

  const isWrongHost = host.toLowerCase() !== CANONICAL_HOST;
  const isNotHttps = proto !== "https";

  if (isWrongHost || isNotHttps) {
    const destination = new URL(url.pathname + url.search, CANONICAL_ORIGIN);
    return NextResponse.redirect(destination, 301);
  }

  return NextResponse.next();
}
