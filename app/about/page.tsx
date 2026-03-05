import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/breadcrumbs";
import { BASE_OG, SITE_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "About EclipticLink — Custom Software Company & IT Partner",
  description:
    "EclipticLink helps startups and enterprises build scalable software. Nine years of combined experience, dedicated project managers, milestone-based delivery, and a full-stack technical team.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    ...BASE_OG,
    title: "About EclipticLink — Custom Software Company & IT Partner",
    description: "Meet EclipticLink: milestone-based delivery, dedicated teams, and scalable software solutions for startups and enterprises.",
    url: `${SITE_URL}/about`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

const strengths = [
  {
    title: "Expert team",
    description:
      "Highly experienced team of project managers, technical architects, and database developers allowing us to meet unique needs.",
  },
  {
    title: "Milestone-based delivery",
    description:
      "Our milestone-based development plans ensure optimal involvement of clients and real-time visibility on progress status.",
  },
  {
    title: "Quality assurance",
    description:
      "Well-defined standards for application verification and validation enable us to deliver business-ready solutions successfully.",
  },
  {
    title: "Dedicated support",
    description:
      "Consultancy approach with a dedicated, experienced project manager to resolve any type of issues.",
  },
  {
    title: "Hourly-based model",
    description:
      "Flexible hourly engagement when you need extra capacity or prefer pay-as-you-go. Scale up or down without long-term commitment while still getting the same quality and transparency.",
  },
] as const;

const historyMilestones = [
  {
    year: "2024",
    title: "Our beginnings",
    description:
      "EclipticLink was founded in 2024 with a mission to help startups and growing businesses solve complex technical challenges and scale with confidence. Our team brings almost nine years of combined experience. From day one, we focused on transparent delivery, dedicated project management, and building long-term partnerships.",
  },
  {
    year: "Growth",
    title: "Expanding expertise",
    description:
      "We expanded our capabilities across custom software, mobile development, cloud and DevOps, and data solutions. Our team grew to include technical architects, database specialists, and domain experts to meet the unique needs of each client.",
  },
  {
    year: "Today",
    title: "Where we are now",
    description:
      "Today we partner with startups and enterprises across the US, UK, Pakistan, Saudi Arabia, and the UAE—delivering milestone-based and hourly-based engagements with real-time visibility and business-ready solutions. We combine a consultancy approach with hands-on execution to keep you in the loop from the very first line of code.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} className="mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            About Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200">
            We work with startups and enterprises in the United States, United
            Kingdom, Pakistan, Saudi Arabia, and the UAE to solve distributed
            problems and achieve scalability. Our team brings almost nine years
            of combined experience and transparent delivery—milestone-based or
            hourly-based, as you prefer.
          </p>
        </div>
      </section>

      <section
        className="bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="company-history-heading"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="company-history-heading"
            className="text-center text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl"
          >
            Company history
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-zinc-600">
            Our journey from founding to today—focused on helping businesses
            scale through expert teams and transparent delivery.
          </p>
          <ul
            className="mx-auto mt-16 max-w-3xl border-l-2 border-zinc-200 pl-10"
            role="list"
          >
            {historyMilestones.map(({ year, title, description }) => (
              <li
                key={year}
                className="relative pb-12 last:pb-0"
              >
                <span
                  className="absolute left-0 top-0 h-4 w-4 -translate-x-[calc(2.5rem+0.5rem-1px)] rounded-full border-2 border-brand-teal bg-white"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
                  {year}
                </span>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-brand-blue">
                  {title}
                </h3>
                <p className="mt-3 max-w-prose text-zinc-600 leading-relaxed">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="how-we-deliver-heading"
      >
        <div className="mx-auto max-w-7xl">
          <h2
            id="how-we-deliver-heading"
            className="text-center text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl"
          >
            How we deliver
          </h2>
          <ul
            className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2"
            role="list"
          >
            {strengths.map(({ title, description }) => (
              <li
                key={title}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold tracking-tight text-brand-blue">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Link
            href="/contact"
            className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-blue px-6 text-base font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 active:scale-[0.98] motion-reduce:active:scale-100"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
