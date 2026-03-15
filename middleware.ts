import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "eclipticlink.com";
const CANONICAL_ORIGIN = "https://eclipticlink.com";

const isLocalHost = (host: string) => {
  const h = host.toLowerCase().split(":")[0];
  return h === "localhost" || h === "127.0.0.1" || h === "0.0.0.0";
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = (request.headers.get("host") ?? url.hostname).toLowerCase().split(":")[0];
  if (isLocalHost(host)) return NextResponse.next();

  // Only redirect when host is wrong (e.g. www). Do NOT redirect based on protocol here:
  // behind a CDN the origin often receives HTTP, so enforcing HTTPS in middleware causes a redirect loop.
  const isWrongHost = host !== CANONICAL_HOST;
  if (!isWrongHost) return NextResponse.next();

  const destination = new URL(url.pathname + url.search, CANONICAL_ORIGIN);
  return NextResponse.redirect(destination, 301);
}
