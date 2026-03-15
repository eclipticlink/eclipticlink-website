import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HubSpotChatRefresh } from "./components/hubspot-chat-refresh";
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
    default: "EclipticLink — AI & Custom Software Development",
    template: "%s | EclipticLink",
  },
  description:
    "EclipticLink builds custom software, AI integration & automation, mobile apps, cloud infrastructure, and chatbots. Hire dedicated developers and engineers for your next project.",
  keywords: [
    "custom software development",
    "custom software development company",
    "AI integration services",
    "AI automation services",
    "AI integrations",
    "AI automations",
    "workflow automation",
    "software consulting",
    "hire developers",
    "AI development",
    "machine learning",
    "AI chatbot development",
    "mobile app development",
    "cloud DevOps",
    "backend development",
    "frontend development",
    "staff augmentation",
    "IT consulting",
    "software outsourcing",
    "EclipticLink",
  ],
  authors: [{ name: "EclipticLink", url: SITE_URL }],
  creator: "EclipticLink",
  publisher: "EclipticLink",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "EclipticLink",
    locale: "en_US",
    title: "EclipticLink — AI & Custom Software Development",
    description:
      "Custom software, AI integration & automation, web & mobile apps, cloud, and DevOps. Hire dedicated engineers and scale your product with EclipticLink.",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "EclipticLink — Custom Software & AI Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EclipticLink — Custom Software Development & AI Integration",
    description:
      "Custom software, AI integration & automation, mobile apps, cloud, and DevOps. Hire dedicated engineers with EclipticLink.",
    images: [`${SITE_URL}/og-image.png`],
    site: "@eclipticlink",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/ecliptic-link-logo.png", type: "image/png" },
    ],
    apple: "/ecliptic-link-logo.png",
    shortcut: "/favicon.ico",
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
  alternateName: "Eclipticlink",
  url: SITE_URL,
  logo: `${SITE_URL}/ecliptic-link-logo.png`,
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
  telephone: "+923335934448",
  email: "info@eclipticlink.com",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61584739395956",
    "https://www.instagram.com/eclipticlink/",
    "https://www.linkedin.com/company/eclipticlink/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EclipticLink",
  alternateName: "Eclipticlink",
  url: SITE_URL,
  publisher: { "@type": "Organization", name: "EclipticLink", url: SITE_URL },
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
        {/* HubSpot tracking + chat: settings must run before the script loads */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              window.hsConversationsSettings = {
                loadImmediately: true,
                inlineEmbedSelector: "",
                enableWidgetCookieBanner: true,
                disableAttachment: false
              };
            `,
          }}
        />
        <Script
          id="hs-script-loader"
          src={`https://js-na2.hs-scripts.com/${String(process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "245439892")}.js`}
          strategy="afterInteractive"
        />
        <HubSpotChatRefresh />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
