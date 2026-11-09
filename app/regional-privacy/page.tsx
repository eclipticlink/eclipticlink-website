import type { Metadata } from "next";
import { LegalDoc } from "../components/legal-doc";
import { LEGAL_UPDATED, regionalSections } from "../data/legal";
import { BASE_OG, SITE_URL } from "../lib/config";

const TITLE = "Regional Privacy Notice";
const DESCRIPTION = "Privacy rights for people in California, the United Kingdom and EU, Saudi Arabia, the United Arab Emirates and Pakistan.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/regional-privacy` },
  openGraph: { ...BASE_OG, title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/regional-privacy` },
};

export default function Page() {
  return (
    <LegalDoc
      eyebrow="Privacy"
      title={TITLE}
      description={DESCRIPTION}
      updated={LEGAL_UPDATED}
      crumb="Regional Privacy Notice"
      sections={regionalSections}
    />
  );
}
