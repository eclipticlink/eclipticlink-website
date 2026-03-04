export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eclipticlink.com";

export const BASE_OG = {
  siteName: "EclipticLink",
  type: "website" as const,
  locale: "en_US",
  images: [
    {
      url: `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
      alt: "EclipticLink — Custom Software Development & AI Solutions",
    },
  ],
};
