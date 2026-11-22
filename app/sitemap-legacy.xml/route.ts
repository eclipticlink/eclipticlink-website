/**
 * TEMPORARY legacy sitemap (submitted in Search Console on 2026-11-14).
 *
 * Lists old automation / staff-augmentation URLs that Google still had indexed
 * after the cybersecurity relaunch. Every URL here 308-redirects to its new
 * equivalent (see next.config.ts). Submitting them prompts Google to recrawl,
 * see the redirects, and drop the old URLs from its index faster.
 *
 * Remove this route (and the sitemap in Search Console) once Search Console
 * shows these URLs under "Page with redirect" — around end of December 2026.
 */
export const dynamic = "force-static";

const LEGACY_URLS = [
  "https://eclipticlink.com/hire",
  "https://eclipticlink.com/hire/role/ai-solutions-architect",
  "https://eclipticlink.com/hire/role/make-automation-specialist",
  "https://eclipticlink.com/hire/role/cloud-infrastructure-engineer",
  "https://eclipticlink.com/hire/role/ui-ux-developer",
  "https://eclipticlink.com/hire/role/generative-ai-engineer",
  "https://eclipticlink.com/hire/role/vuejs-developer",
  "https://www.eclipticlink.com/hire/role/angular-developer",
  "https://www.eclipticlink.com/hire/role/crm-funnel-specialist",
  "https://www.eclipticlink.com/hire/role/php-developer",
  "https://www.eclipticlink.com/hire/role/flutter-developer",
  "https://www.eclipticlink.com/hire/role/android-developer",
  "https://www.eclipticlink.com/hire/role/cloud-developer",
  "https://www.eclipticlink.com/hire/role/ionic-developer",
  "https://www.eclipticlink.com/services/ai-automations",
  "https://eclipticlink.com/services/operations-automation",
  "https://eclipticlink.com/services/ai",
  "https://eclipticlink.com/blogs/gohighlevel-lead-follow-up-automation",
  "https://eclipticlink.com/blogs/n8n-make-zapier-which-automation-tool",
  "https://eclipticlink.com/blogs/hubspot-zoho-crm-automation-for-sales-pipelines",
  "https://eclipticlink.com/blogs/react-native-vs-flutter-2026",
  "https://eclipticlink.com/hire/role/infrastructure-engineer",
  "https://eclipticlink.com/hire/role/reactjs-developer",
  "https://eclipticlink.com/hire/role/deep-learning-engineer",
  "https://www.eclipticlink.com/hire/role/mlops",
  "https://www.eclipticlink.com/hire/role/python-developer",
  "https://www.eclipticlink.com/hire/role/cloud-devops-engineer",
  "https://eclipticlink.com/blogs/how-we-build-software-ddd-tdd-trunk-based-railway",
  "https://eclipticlink.com/blogs/custom-ai-chatbot-vs-off-the-shelf",
  "https://eclipticlink.com/blogs/ai-document-processing-automation",
  "https://www.eclipticlink.com/blogs/ai-document-processing-automation",
  "https://www.eclipticlink.com/blogs/ai-automation-use-cases-that-deliver-roi",
  "https://www.eclipticlink.com/blogs/fundamentals-of-software-application-design",
];

export function GET() {
  const lastmod = "2026-11-22";
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    LEGACY_URLS.map((u) => `  <url><loc>${u}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n") +
    "\n</urlset>\n";
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
