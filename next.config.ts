import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/service-details.html", destination: "/services", permanent: true },
      { source: "/hire/role/c", destination: "/hire/role/c-sharp-developer", permanent: true },
      { source: "/hire/role/c%23-developer", destination: "/hire/role/c-sharp-developer", permanent: true },
    ];
  },
};

// Only run OpenNext Cloudflare dev layer when explicitly needed (e.g. getCloudflareContext in dev).
// Without this, "next dev" uses the standard Next.js server and avoids 503s on RSC requests that
// can occur when the OpenNext dev adapter is active. Production uses "opennextjs-cloudflare build".
if (process.env.USE_OPENNEXT_DEV === "true") {
  initOpenNextCloudflareForDev();
}

export default nextConfig;
