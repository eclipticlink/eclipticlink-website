import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "../../components/page-hero";
import { Button } from "../../components/ui/button";
import { BASE_OG, SITE_URL } from "../../lib/config";
import { SERVICE_SEO } from "../../lib/seo";
import { getAllServiceSlugs, getServiceBySlug } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | EclipticLink" };
  const seo = SERVICE_SEO[service.id];
  const description =
    service.metaDescription ?? `${service.summary} | EclipticLink.`;
  const title = seo?.title ?? `${service.title} Services`;
  return {
    title,
    description,
    keywords: seo?.keywords ?? [service.title, "EclipticLink"],
    alternates: { canonical: `${SITE_URL}/services/${service.id}` },
    openGraph: {
      ...BASE_OG,
      title: `${title} | EclipticLink`,
      description,
      url: `${SITE_URL}/services/${service.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const pageUrl = `${SITE_URL}/services/${service.id}`;
  const description = service.metaDescription ?? service.summary;
  const seo = SERVICE_SEO[service.id];
  const h1 = seo?.h1 ?? service.title;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    alternateName: service.title,
    description,
    url: pageUrl,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "EclipticLink",
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} offerings`,
      itemListElement: service.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: sub.title,
          description: sub.summary,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHero
        title={h1}
        description={service.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section
        className="section-pad bg-atmosphere"
        aria-labelledby="service-overview-heading"
      >
        <div className="container-site max-w-3xl">
          <p className="eyebrow-on-light">Overview</p>
          <h2 id="service-overview-heading" className="mt-3 font-display text-2xl font-semibold tracking-tight text-brand-blue sm:text-3xl">
            Overview
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">{service.details}</p>
        </div>
      </section>

      <section
        className="section-pad bg-surface-muted"
        aria-labelledby="subservices-heading"
      >
        <div className="container-site max-w-4xl">
          <p className="eyebrow-on-light text-center">Capabilities</p>
          <h2 id="subservices-heading" className="mt-3 text-center font-display text-2xl font-semibold tracking-tight text-brand-blue sm:text-3xl">
            What we offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-text-muted">
            Our {service.title} capabilities include the following.
          </p>
          <ul className="mt-12 divide-y divide-border-subtle border-y border-border-subtle" role="list">
            {service.subServices.map((sub) => (
              <li key={sub.id} className="py-8">
                <h3 className="font-display text-xl font-semibold text-brand-blue">
                  {sub.title}
                </h3>
                <p className="mt-2 text-text-muted">{sub.summary}</p>
                <p className="mt-4 leading-relaxed text-slate-500">{sub.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-atmosphere">
        <div className="container-site max-w-3xl">
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primaryBlue" size="lg">
              Get in touch
            </Button>
            <Button href="/services" variant="secondaryOnLight" size="lg">
              View all services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
