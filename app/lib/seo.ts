/**
 * SEO keyword clusters for EclipticLink: AI-powered cybersecurity.
 * Per-service keywords live in app/services/data.ts.
 */

export const SEO_KEYWORDS = {
  primary: [
    "AI-powered cybersecurity",
    "cybersecurity services",
    "managed detection and response",
    "AI threat detection",
    "penetration testing services",
    "AI security",
    "LLM security",
  ],
  secondary: [
    "managed SOC services",
    "cloud security services",
    "SOC 2 compliance",
    "ISO 27001 consulting",
    "incident response services",
    "vulnerability management",
    "prompt injection testing",
    "AI red teaming",
  ],
  /** Per-region keywords live in app/data/locations.ts */
  geo: [
    "cybersecurity company Saudi Arabia",
    "cybersecurity company UAE",
    "cybersecurity company Dubai",
    "cybersecurity services UK",
    "cybersecurity services USA",
  ],
} as const;

/** Default sitewide keyword list for layout metadata */
export const DEFAULT_KEYWORDS: string[] = [
  ...SEO_KEYWORDS.primary,
  ...SEO_KEYWORDS.secondary,
  "EclipticLink",
];

/** Trim meta description to ~155-160 chars without cutting mid-word when possible */
export function clipMetaDescription(text: string, max = 158): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const sliced = t.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced).trimEnd()}…`;
}

/** Breadcrumb JSON-LD helper */
export function breadcrumbJsonLd(siteUrl: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

/** FAQPage JSON-LD helper: content must match visible FAQ on the page */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
