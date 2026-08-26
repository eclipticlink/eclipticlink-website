/**
 * SEO keyword clusters for EclipticLink.
 * Kept for discoverability; page copy should not mirror this order robotically.
 */

export const SEO_KEYWORDS = {
  primary: [
    "lead follow-up automation",
    "CRM automation",
    "GoHighLevel automation",
    "GHL automation",
    "n8n automation",
    "Make.com automation",
    "Zapier automation",
    "HubSpot automation",
    "Zoho CRM automation",
    "workflow automation agency",
    "sales pipeline automation",
    "AI workflow automation",
    "AI automation services",
    "AI automations",
  ],
  secondary: [
    "AI development company",
    "AI chatbot development",
    "custom AI development",
    "LLM integration",
    "RAG chatbot",
    "hire AI engineers",
    "hire automation specialists",
    "GHL specialist",
    "n8n developer",
    "Zapier expert",
  ],
  tertiary: [
    "custom software development",
    "full-stack development company",
    "mobile app development",
    "hire dedicated developers",
    "cloud DevOps services",
    "SaaS product development",
  ],
  geo: [
    "AI automation US",
    "AI automation UK",
    "AI automation Pakistan",
    "AI automation UAE",
    "AI automation Saudi Arabia",
  ],
} as const;

/** Default sitewide keyword list for layout metadata */
export const DEFAULT_KEYWORDS: string[] = [
  ...SEO_KEYWORDS.primary,
  ...SEO_KEYWORDS.secondary,
  ...SEO_KEYWORDS.tertiary,
  "EclipticLink",
];

export const SERVICE_SEO: Record<
  string,
  { title: string; keywords: string[]; h1?: string }
> = {
  "ai-automations": {
    title: "Lead & CRM Systems | GHL, HubSpot, Zoho, n8n",
    h1: "Lead and CRM systems that keep opportunity moving",
    keywords: [
      "AI automation services",
      "GoHighLevel automation",
      "GHL lead follow-up",
      "n8n automation agency",
      "Make.com automation",
      "Zapier automation experts",
      "HubSpot workflow automation",
      "Zoho CRM automation",
      "lead follow-up automation",
      "CRM pipeline automation",
      "sales automation agency",
    ],
  },
  "operations-automation": {
    title: "Operations Automation | Workflows & Process Systems",
    h1: "Operations systems that remove repetitive work",
    keywords: [
      "operations automation",
      "business process automation",
      "workflow automation agency",
      "internal process automation",
      "ops workflow orchestration",
      "n8n Make Zapier operations",
    ],
  },
  ai: {
    title: "AI Product Development | Assistants, LLM & RAG",
    h1: "Intelligent products grounded in your data",
    keywords: [
      "AI development company",
      "custom AI development",
      "AI chatbot development",
      "LLM integration services",
      "RAG chatbot development",
      "AI SaaS development",
      "enterprise AI integration",
    ],
  },
  "custom-software-development": {
    title: "Custom Software Development",
    h1: "Software built around how your business actually works",
    keywords: [
      "custom software development company",
      "full-stack development",
      "SaaS product development",
      "enterprise application development",
      "custom API development",
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development | iOS, Android, Flutter",
    keywords: [
      "mobile app development company",
      "React Native development",
      "Flutter app development",
      "iOS Android developers",
      "PWA development",
    ],
  },
  "cloud-devops": {
    title: "Cloud & DevOps | CI/CD, Migration & Reliability",
    keywords: [
      "cloud DevOps services",
      "CI/CD pipeline setup",
      "infrastructure as code",
      "cloud migration company",
    ],
  },
  "big-data": {
    title: "Data & Analytics Services",
    keywords: [
      "big data consulting",
      "data pipeline development",
      "business intelligence services",
      "data warehouse solutions",
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design | Product & Brand",
    keywords: [
      "UI UX design agency",
      "product design services",
      "design systems",
      "user experience design",
    ],
  },
};

/** Trim meta description to ~155, 160 chars without cutting mid-word when possible */
export function clipMetaDescription(text: string, max = 158): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const sliced = t.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced).trimEnd()}…`;
}
