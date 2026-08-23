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
import { DEFAULT_KEYWORDS } from "./lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Automation Agency | GHL, n8n, Make & Zapier",
    template: "%s | EclipticLink",
  },
  description:
    "Top AI automation agency for lead follow-up & CRM workflows. GoHighLevel (GHL), n8n, Make, Zapier, HubSpot & Zoho experts. AI development & full-stack too.",
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "EclipticLink", url: SITE_URL }],
  creator: "EclipticLink",
  publisher: "EclipticLink",
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "EclipticLink",
    locale: "en_US",
    title: "AI Automation Agency | GHL, n8n, Make, Zapier | EclipticLink",
    description:
      "Automate leads, follow-ups & sales pipelines with GoHighLevel, n8n, Make, Zapier, HubSpot & Zoho. AI development and full-stack software when you need to build.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "EclipticLink AI automation agency — GHL, n8n, Make, Zapier, HubSpot, Zoho",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Agency | GHL, n8n, Make & Zapier",
    description:
      "Lead follow-up & CRM automation on GHL, n8n, Make, Zapier, HubSpot & Zoho. Hire AI & automation specialists at EclipticLink.",
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
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "EclipticLink",
  alternateName: ["Eclipticlink", "Ecliptic Link"],
  url: SITE_URL,
  logo: `${SITE_URL}/ecliptic-link-logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "EclipticLink is an AI automation agency specializing in lead follow-up and CRM workflows on GoHighLevel (GHL), n8n, Make, Zapier, HubSpot, and Zoho — plus AI development and full-stack software for startups and enterprises in the US, UK, Pakistan, Saudi Arabia, and the UAE.",
  slogan: "AI automations for leads, follow-ups, and growth",
  knowsAbout: [
    "AI automation",
    "GoHighLevel",
    "n8n",
    "Make.com",
    "Zapier",
    "HubSpot",
    "Zoho CRM",
    "lead follow-up automation",
    "CRM automation",
    "AI chatbot development",
    "custom software development",
  ],
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
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+923335934448",
      contactType: "sales",
      email: "info@eclipticlink.com",
      availableLanguage: ["English"],
      areaServed: ["US", "GB", "PK", "SA", "AE"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "EclipticLink",
  alternateName: "Eclipticlink",
  url: SITE_URL,
  description:
    "AI automation agency for GoHighLevel, n8n, Make, Zapier, HubSpot, and Zoho — plus AI development and full-stack software.",
  publisher: { "@type": "Organization", name: "EclipticLink", url: SITE_URL },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-293THQJBXQ"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-293THQJBXQ');
            `,
          }}
        />
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
