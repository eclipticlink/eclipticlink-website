import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { SITE_URL } from "../../lib/config";
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
  const description =
    service.metaDescription ?? `${service.summary} | EclipticLink.`;
  return {
    title: `${service.title} Services`,
    description,
    alternates: { canonical: `${SITE_URL}/services/${service.id}` },
    openGraph: {
      title: `${service.title} Services | EclipticLink`,
      description,
      url: `${SITE_URL}/services/${service.id}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const pageUrl = `${SITE_URL}/services/${service.id}`;
  const description = service.metaDescription ?? service.summary;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description,
    url: pageUrl,
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
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
            className="mb-6"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200 leading-relaxed">
            {service.summary}
          </p>
        </div>
      </section>

      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="service-overview-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2 id="service-overview-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Overview
          </h2>
          <div className="prose prose-zinc mt-6 max-w-none prose-p:text-zinc-600 prose-p:leading-8">
            <p className="text-lg">{service.details}</p>
          </div>
        </div>
      </section>

      <section
        className="bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="subservices-heading"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="subservices-heading" className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            What we offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            Our {service.title} capabilities include the following.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-1 lg:gap-10">
            {service.subServices.map((sub) => (
              <li
                key={sub.id}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
              >
                <h3 className="text-xl font-semibold text-zinc-900">
                  {sub.title}
                </h3>
                <p className="mt-2 text-zinc-600">{sub.summary}</p>
                <p className="mt-4 text-zinc-500 leading-7">{sub.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg bg-brand-blue px-6 text-base font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-base font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
