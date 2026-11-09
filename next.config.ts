import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** Old automation / dev-services URLs → closest cybersecurity equivalent (301) */
const legacyServiceRedirects: Record<string, string> = {
  "ai-automations": "/services",
  "operations-automation": "/services",
  ai: "/services/ai-security",
  "custom-software-development": "/services/application-security",
  "mobile-app-development": "/services/application-security",
  "cloud-devops": "/services/cloud-security",
  "big-data": "/services/managed-detection-response",
  "ui-ux-design": "/services",
};

const legacyBlogRedirects: Record<string, string> = {
  "how-to-integrate-ai-into-existing-business-systems": "/blogs/prompt-injection-attacks-how-to-secure-llm-applications",
  "custom-ai-chatbot-vs-off-the-shelf": "/blogs/prompt-injection-attacks-how-to-secure-llm-applications",
  "fundamentals-of-software-application-design": "/services/application-security",
  "how-we-build-software-ddd-tdd-trunk-based-railway": "/services/application-security",
  "gohighlevel-lead-follow-up-automation": "/blogs",
  "n8n-make-zapier-which-automation-tool": "/blogs",
  "hubspot-zoho-crm-automation-for-sales-pipelines": "/blogs",
  "ai-workflow-automation-guide-for-small-businesses": "/blogs",
  "ai-automation-use-cases-that-deliver-roi": "/blogs",
  "ai-document-processing-automation": "/blogs",
  "react-native-vs-flutter-2026": "/blogs",
  "progressive-web-app-vs-native-app": "/blogs",
  "custom-software-vs-saas": "/blogs",
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/service-details.html", destination: "/services", permanent: true },
      // Staff augmentation pages retired
      { source: "/hire", destination: "/services", permanent: true },
      { source: "/hire/:path*", destination: "/services", permanent: true },
      ...Object.entries(legacyServiceRedirects).map(([from, to]) => ({
        source: `/services/${from}`,
        destination: to,
        permanent: true,
      })),
      ...Object.entries(legacyBlogRedirects).map(([from, to]) => ({
        source: `/blogs/${from}`,
        destination: to,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
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
