import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { BASE_OG, SITE_URL } from "../lib/config";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | Talk With EclipticLink",
  description:
    "Tell us where leads stall or what you want to build. We typically reply within one business day with a practical next step.",
  keywords: [
    "contact EclipticLink",
    "GoHighLevel consultant",
    "CRM workflow consult",
    "n8n automation quote",
    "hire automation team",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    ...BASE_OG,
    title: "Contact | Talk With EclipticLink",
    description:
      "Share a short picture of your tools and process. We will follow up with clear next steps.",
    url: `${SITE_URL}/contact`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title="Let’s talk"
        description="Whether you need a sharper lead system, cleaner CRM handoffs, or help building something new, start with a short note. We will take it from there."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <section className="section-pad bg-atmosphere" aria-labelledby="contact-heading">
        <div className="container-site">
          <h2 id="contact-heading" className="sr-only">
            Contact details and form
          </h2>
          <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <p className="eyebrow-on-light">Reach us</p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-brand-blue">
                We reply within a business day
              </h3>
              <p className="mt-4 leading-relaxed text-text-muted">
                Share what is broken or what you want to improve. A few sentences about your
                tools and goals is enough for a useful first reply.
              </p>
              <div className="mt-10 space-y-8">
                <div className="border-t border-border-subtle pt-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                    Call us
                  </span>
                  <a
                    href="tel:+923335934448"
                    className="mt-2 block font-medium text-brand-blue transition hover:text-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                  >
                    +92 333 5934448
                  </a>
                </div>
                <div className="border-t border-border-subtle pt-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                    Email us
                  </span>
                  <a
                    href="mailto:info@eclipticlink.com"
                    className="mt-2 block font-medium text-brand-blue transition hover:text-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                  >
                    info@eclipticlink.com
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
