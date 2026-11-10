import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { AmbientMotion } from "./components/ambient-motion";
import { AnalyticsEvents } from "./components/analytics-events";
import { DeferredHubSpot } from "./components/deferred-hubspot";
import { HubSpotChatRefresh } from "./components/hubspot-chat-refresh";
import { JsonLd } from "./components/json-ld";
import { CONTACT_EMAIL, SITE_URL } from "./lib/config";
import { DEFAULT_KEYWORDS } from "./lib/seo";
import { services } from "./services/data";
import "./globals.css";

/*
 * Fonts are self-hosted (variable woff2, latin subset, SIL OFL licences in
 * app/fonts) so builds never depend on reaching Google Fonts.
 */
const fontSans = localFont({
  src: "./fonts/outfit-latin-wght-normal.woff2",
  variable: "--font-outfit",
  weight: "100 900",
  display: "swap",
});

const fontMono = localFont({
  src: "./fonts/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
});

const DEFAULT_TITLE = "EclipticLink | AI-Powered Cybersecurity Services";
const DEFAULT_DESCRIPTION =
  "AI-powered cybersecurity: managed detection and response, penetration testing, AI and LLM security, cloud security, and SOC 2 / ISO 27001 compliance.";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | EclipticLink",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "EclipticLink",
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "EclipticLink", url: SITE_URL }],
  creator: "EclipticLink",
  publisher: "EclipticLink",
  category: "cybersecurity",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "EclipticLink",
    locale: "en_US",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "EclipticLink: AI-powered cybersecurity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
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
  "@id": `${SITE_URL}/#organization`,
  name: "EclipticLink",
  alternateName: ["Eclipticlink", "Ecliptic Link"],
  url: SITE_URL,
  logo: `${SITE_URL}/ecliptic-link-logo.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "EclipticLink is an AI-powered cybersecurity company providing managed detection and response, penetration testing, AI and LLM security, cloud security, vulnerability management, compliance, and incident response.",
  slogan: "AI-powered cybersecurity, human-verified",
  knowsAbout: [
    "Cybersecurity",
    "Managed detection and response",
    "Security operations center",
    "Penetration testing",
    "AI security",
    "LLM security",
    "Prompt injection",
    "Cloud security",
    "Vulnerability management",
    "SOC 2",
    "ISO 27001",
    "Incident response",
    "Digital forensics",
    "DevSecOps",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cybersecurity services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.summary,
        url: `${SITE_URL}/services/${s.id}`,
      },
    })),
  },
  knowsLanguage: ["en"],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Pakistan" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  email: CONTACT_EMAIL,
  sameAs: [
    "https://www.facebook.com/profile.php?id=61584739395956",
    "https://www.instagram.com/eclipticlink/",
    "https://www.linkedin.com/company/eclipticlink/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
      availableLanguage: ["English"],
      areaServed: ["US", "GB", "PK", "SA", "AE"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "EclipticLink",
  alternateName: "Eclipticlink",
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-bg" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
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
        <JsonLd data={[organizationJsonLd, websiteJsonLd]} />
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
        <DeferredHubSpot />
        <AmbientMotion />
        <AnalyticsEvents />
        <HubSpotChatRefresh />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
