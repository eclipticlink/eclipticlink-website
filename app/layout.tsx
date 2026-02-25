import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SITE_URL } from "./lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EclipticLink — Custom Software Development & IT Consulting",
    template: "%s | EclipticLink",
  },
  description:
    "EclipticLink builds custom software, AI solutions, mobile apps, cloud infrastructure, and automation. Hire dedicated developers and engineers for your next project.",
  keywords: [
    "custom software development",
    "software consulting",
    "hire developers",
    "AI development",
    "machine learning",
    "mobile app development",
    "cloud DevOps",
    "backend development",
    "frontend development",
    "staff augmentation",
    "IT consulting",
    "EclipticLink",
  ],
  authors: [{ name: "EclipticLink", url: SITE_URL }],
  creator: "EclipticLink",
  publisher: "EclipticLink",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "en-GB": SITE_URL,
      "en-PK": SITE_URL,
      "en-SA": SITE_URL,
      "en-AE": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    siteName: "EclipticLink",
    locale: "en_US",
    title: "EclipticLink — Custom Software Development & IT Consulting",
    description:
      "Custom software, AI, mobile apps, cloud, DevOps, and automation. Hire dedicated engineers and scale your product with EclipticLink.",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "EclipticLink — Custom Software Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EclipticLink — Custom Software Development & IT Consulting",
    description:
      "Custom software, AI, mobile apps, cloud, DevOps, and automation. Hire dedicated engineers with EclipticLink.",
    images: [`${SITE_URL}/og-image.png`],
    site: "@eclipticlink",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "EclipticLink",
  url: SITE_URL,
  logo: `${SITE_URL}/EclipticLink-logo.png`,
  description:
    "EclipticLink builds custom software, AI solutions, mobile apps, and cloud infrastructure for startups and enterprises in the US, UK, Pakistan, Saudi Arabia, and the UAE.",
  knowsLanguage: ["en"],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Flat 1A, Second Floor, Plaza 57, Lane 2, Square Commercial, Bahria Town Phase 7",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    postalCode: "46000",
    addressCountry: "PK",
  },
  telephone: "+923335934448",
  email: "info@eclipticlink.com",
  sameAs: [
    "https://twitter.com/eclipticlink",
    "https://www.facebook.com/eclipticlink",
    "https://www.instagram.com/eclipticlink",
    "https://www.linkedin.com/company/eclipticlink",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EclipticLink",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/hire?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
