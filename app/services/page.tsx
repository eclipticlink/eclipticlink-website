import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/breadcrumbs";
import { SITE_URL } from "../lib/config";
import { services } from "./data";

export const metadata: Metadata = {
  title: "Software Development Services — AI, Mobile, Cloud & DevOps",
  description:
    "AI development, custom software, mobile app development, cloud & DevOps, big data, and UI/UX design. End-to-end software solutions from EclipticLink.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Software Development Services — AI, Mobile, Cloud & DevOps | EclipticLink",
    description: "End-to-end software services: AI, custom software, mobile apps, cloud, big data, and UI/UX design.",
    url: `${SITE_URL}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} className="mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200 leading-relaxed">
            End-to-end software solutions to accelerate your business. AI,
            custom software, mobile apps, cloud, big data, and UI/UX design—we have you covered.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="services-list-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="services-list-heading" className="sr-only">
            Our services
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-zinc-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-zinc-600">{service.summary}</p>
                <p className="mt-4 text-sm text-zinc-500">{service.details}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-zinc-900 transition hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
                >
                  Learn more
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg bg-brand-blue px-6 text-base font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
