export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eclipticlink.com";

export const SITE_NAME = "EclipticLink";
export const CONTACT_EMAIL = "info@eclipticlink.com";
/* Shown as "Email us" wherever a phone number used to appear; opens the visitor's mail app. */
export const CONTACT_US_EMAIL = "contact@eclipticlink.com";
export const CONTACT_US_MAILTO = `mailto:${CONTACT_US_EMAIL}`;

export const BASE_OG = {
  siteName: SITE_NAME,
  type: "website" as const,
  locale: "en_US",
  images: [
    {
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "EclipticLink: AI-powered cybersecurity",
    },
  ],
};

/* EclipticLink is operated by TOPDEVELOPER INC. */
export const COMPANY_LEGAL_NAME = "TOPDEVELOPER INC.";
export const COMPANY_ADDRESS = "44240 Fremont Blvd, Fremont, CA, 94538";
export const COMPANY_PHONE_DISPLAY = "+1 (650) 308-4707";
export const COMPANY_WHATSAPP_URL = "https://wa.me/16503084707";
export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Regional Privacy Notice", href: "/regional-privacy" },
];
