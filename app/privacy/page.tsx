import type { Metadata } from "next";
import { LegalDoc } from "../components/legal-doc";
import { LEGAL_UPDATED, privacySections } from "../data/legal";
import { BASE_OG, SITE_URL } from "../lib/config";

const TITLE = "Privacy Policy";
const DESCRIPTION = "How EclipticLink, operated by TOPDEVELOPER INC., collects, uses and protects personal information on this website and in our cybersecurity services.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: { ...BASE_OG, title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/privacy` },
};

export default function Page() {
  return (
    <LegalDoc
      eyebrow="Privacy"
      title={TITLE}
      description={DESCRIPTION}
      updated={LEGAL_UPDATED}
      crumb="Privacy Policy"
      sections={privacySections}
    />
  );
}
