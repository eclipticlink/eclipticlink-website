import type { Metadata } from "next";
import { LegalDoc } from "../components/legal-doc";
import { LEGAL_UPDATED, termsSections } from "../data/legal";
import { BASE_OG, SITE_URL } from "../lib/config";

const TITLE = "Terms of Service";
const DESCRIPTION = "The terms that govern your use of eclipticlink.com, including acceptable use and how to report a vulnerability.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: { ...BASE_OG, title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/terms` },
};

export default function Page() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title={TITLE}
      description={DESCRIPTION}
      updated={LEGAL_UPDATED}
      crumb="Terms of Service"
      sections={termsSections}
    />
  );
}
