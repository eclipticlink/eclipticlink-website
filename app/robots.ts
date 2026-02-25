import { headers } from "next/headers";
import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/config";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get("host") ?? "";
  const isCanonical = host === "eclipticlink.com" || host === "www.eclipticlink.com";

  if (!isCanonical) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
