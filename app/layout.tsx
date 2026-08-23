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
    default: "EclipticLink — AI Automations, AI Development & Software",
    template: "%s | EclipticLink",
  },
  description:
    "EclipticLink builds AI automations for leads, follow-ups & CRM (GHL, n8n, Make, Zapier, HubSpot, Zoho), custom AI development, and full-stack software.",
  keywords: [
    "AI automation",
    "AI automations",
    "AI automation services",
    "GoHighLevel automation",
    "GHL automation",
    "n8n automation",
    "Make.com automation",
    "Zapier automation",
    "HubSpot automation",
    "Zoho automation",
    "lead follow-up automation",
    "CRM automation",
    "workflow automation",
    "AI development",
    "AI chatbot development",
    "AI integrations",
    "custom software development",
    "hire automation specialists",
    "hire AI engineers",
    "staff augmentation",
    "mobile app development",
    "cloud DevOps",
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
    title: "EclipticLink — AI Automations & AI Development",
    description:
      "Automate leads, follow-ups, and pipelines with GHL, n8n, Make, Zapier, HubSpot & Zoho. Custom AI development and full-stack software when you need it.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "EclipticLink — AI Automations & AI Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EclipticLink — AI Automations & AI Development",
    description:
      "AI automations for leads & CRM workflows, custom AI development, and full-stack software. Hire specialists with EclipticLink.",
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
    "EclipticLink builds AI automations for leads, follow-ups, and CRM workflows (GoHighLevel, n8n, Make, Zapier, HubSpot, Zoho), custom AI development, and full-stack software for startups and enterprises in the US, UK, Pakistan, Saudi Arabia, and the UAE.",
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
