/**
 * Central SEO keyword clusters and helpers for EclipticLink.
 * Primary focus: AI automations → AI development → full-stack.
 */

export const SEO_KEYWORDS = {
  primary: [
    "AI automation services",
    "AI automations",
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
    title: "AI Automation Services | GHL, n8n, Make, Zapier",
    h1: "AI Automation Services for Leads, Follow-Ups & CRM",
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
  ai: {
    title: "AI Development Company | Chatbots, LLM & RAG",
    h1: "AI Development Services — Chatbots, LLM & Custom AI",
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
    title: "Custom Software Development Company",
    h1: "Custom Software Development & Full-Stack Engineering",
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
    title: "Cloud & DevOps Services | CI/CD & Migration",
    keywords: [
      "cloud DevOps services",
      "CI/CD pipeline setup",
      "infrastructure as code",
      "cloud migration company",
    ],
  },
  "big-data": {
    title: "Big Data & Analytics Services",
    keywords: [
      "big data consulting",
      "data pipeline development",
      "business intelligence services",
      "data warehouse solutions",
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design Services | Product & Brand",
    keywords: [
      "UI UX design agency",
      "product design services",
      "design systems",
      "user experience design",
    ],
  },
};

/** Trim meta description to ~155–160 chars without cutting mid-word when possible */
export function clipMetaDescription(text: string, max = 158): string {
  const t = text.trim();
  if (t.length <= max) return t;
  const sliced = t.slice(0, max - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced).trimEnd()}…`;
}
