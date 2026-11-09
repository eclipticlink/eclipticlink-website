import type { Metadata } from "next";
import { Icon } from "../components/icons";
import { JsonLd } from "../components/json-ld";
import { PageHero } from "../components/page-hero";
import { BASE_OG, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY, SITE_URL } from "../lib/config";
import { breadcrumbJsonLd } from "../lib/seo";
import Link from "next/link";
import { locations } from "../data/locations";
import { ContactForm } from "./contact-form";

const TITLE = "Contact | Request a Cybersecurity Assessment";
const DESCRIPTION =
  "Talk to EclipticLink's security team. Request a cybersecurity assessment, penetration test, AI security review, or emergency incident response.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: { ...BASE_OG, title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/contact` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: TITLE,
  url: `${SITE_URL}/contact`,
  about: { "@id": `${SITE_URL}/#organization` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(SITE_URL, [{ name: "Contact", path: "/contact" }]), contactPageJsonLd]} />
      <PageHero
        eyebrow="Contact"
        title="Talk to a security expert"
        description="Whether you need a penetration test, SOC 2 readiness, an AI security review, or ongoing monitoring, start here. We'll respond within one business day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section-pad" aria-labelledby="contact-details-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h2 id="contact-details-heading" className="sr-only">
              Contact details
            </h2>
            <div className="rounded-2xl border border-threat/40 bg-threat-soft p-6">
              <p className="flex items-center gap-2 font-semibold text-[#ffb3ba]">
                <Icon name="siren" className="h-5 w-5" />
                Under attack right now?
              </p>
              <p className="mt-2 text-sm text-muted">Skip the form. Call our incident line directly.</p>
              <a href={`tel:${CONTACT_PHONE}`} className="mt-4 block font-mono text-xl text-ink hover:text-accent">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>

            <dl className="mt-8 space-y-6">
              <div className="border-t border-line pt-6">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg text-ink hover:text-accent">
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-6">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Phone</dt>
                <dd className="mt-2">
                  <a href={`tel:${CONTACT_PHONE}`} className="text-lg text-ink hover:text-accent">
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div className="border-t border-line pt-6">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Regions served</dt>
                <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-muted">
                  {locations.map((l) => (
                    <Link key={l.slug} href={`/locations/${l.slug}`} className="hover:text-accent">
                      {l.short}
                    </Link>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="card mt-8 p-6">
              <p className="flex items-center gap-2 font-semibold text-ink">
                <Icon name="lock" className="h-5 w-5 text-accent" />
                Confidential by default
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We&apos;re happy to sign an NDA before any detailed discussion of your environment.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
