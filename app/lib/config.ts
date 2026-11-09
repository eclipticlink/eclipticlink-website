export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eclipticlink.com";

export const SITE_NAME = "EclipticLink";
export const CONTACT_EMAIL = "info@eclipticlink.com";
export const CONTACT_PHONE = "+923438788662";
export const CONTACT_PHONE_DISPLAY = "+92 343 8788662";

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
