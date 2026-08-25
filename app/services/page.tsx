import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { Button } from "../components/ui/button";
import { BASE_OG, SITE_URL } from "../lib/config";
import { services } from "./data";

export const metadata: Metadata = {
  title: "Services | Lead Systems, Intelligent Products & Software",
  description:
    "Lead and CRM systems on GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier, plus intelligent products, custom software, mobile, cloud, and design.",
  keywords: [
    "lead follow-up systems",
    "GoHighLevel services",
    "n8n automation agency",
    "Zapier Make workflows",
    "HubSpot Zoho CRM",
    "AI product development",
    "custom software development",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    ...BASE_OG,
    title: "Services | Lead Systems, Intelligent Products & Software",
    description:
      "From the workflows behind faster follow-up to the products and applications that sit underneath them.",
    url: `${SITE_URL}/services`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title="Services shaped around how you sell and operate"
        description="Most clients start with follow-up and CRM work on platforms they already trust. Others need intelligent features or a full product. We cover the ground in between."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-pad bg-atmosphere" aria-labelledby="services-list-heading">
        <div className="container-site">
          <h2 id="services-list-heading" className="sr-only">
            Our services
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {services.map((service) => (
              <li key={service.id}>
                <article className="card-lift flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold text-brand-blue">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-text-muted">{service.summary}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                    {service.details}
                  </p>
                  <Link
                    href={`/services/${service.id}`}
                    className="link-arrow mt-5"
                  >
                    Learn more
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-14 text-center">
            <Button href="/contact" variant="primaryBlue" size="lg">
              Ask about a fit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
