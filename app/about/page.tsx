import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { Button } from "../components/ui/button";
import { BASE_OG, SITE_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "About EclipticLink | Our Story & How We Work",
  description:
    "EclipticLink helps teams stop losing opportunity to slow follow-up and messy CRMs. Meet the people behind the systems, products, and software we deliver.",
  keywords: [
    "about EclipticLink",
    "lead workflow agency",
    "GoHighLevel partner",
    "CRM automation company",
    "software team US UK UAE",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    ...BASE_OG,
    title: "About EclipticLink | Our Story & How We Work",
    description:
      "How EclipticLink grew from a delivery-focused studio into a partner for lead systems, intelligent products, and custom software.",
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
    title: "Comfortable in the tools you already use",
    description:
      "GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier are where a lot of our work lives. We build around your process instead of forcing a new stack overnight.",
  },
  {
    title: "Product and engineering when you need depth",
    description:
      "Some problems need an assistant, a custom feature, or a full application. The same partnership can move into that work without a clumsy handoff.",
  },
  {
    title: "Milestones you can actually follow",
    description:
      "You see what shipped, what is next, and where your input matters. No long silences between kickoff and a surprise demo.",
  },
  {
    title: "A dedicated point of contact",
    description:
      "A seasoned project lead stays close to the work, so questions get answered and issues do not bounce between inboxes.",
  },
  {
    title: "Flexible capacity when plans change",
    description:
      "Prefer hourly engagement or need to scale for a sprint? We adjust without locking you into a rigid long-term commitment.",
  },
] as const;

const historyMilestones = [
  {
    year: "2024",
    title: "Where we started",
    description:
      "EclipticLink began in 2024 with a simple promise: help growing companies solve hard technical work with clear delivery and people they could trust. Software and intelligent systems were in our DNA from the first engagements.",
  },
  {
    year: "Growth",
    title: "Leaning into the revenue stack",
    description:
      "Clients kept asking for help with leads that went cold, CRMs that lied, and tools that never quite talked to each other. We deepened that practice across GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier, while keeping the product and engineering craft that made us useful when a workflow alone was not enough.",
  },
  {
    year: "Today",
    title: "Where we stand",
    description:
      "We work with startups and larger organizations across the US, UK, Pakistan, Saudi Arabia, and the UAE. Some come for a tightly scoped lead system. Others need a dedicated specialist or a full product build. Either way, they get the same clarity on scope, timing, and progress.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title="About EclipticLink"
        description="We help teams protect every inbound opportunity, then build the products and software that take the business further."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <section className="section-pad bg-atmosphere-muted" aria-labelledby="company-history-heading">
        <div className="container-site">
          <p className="eyebrow-on-light text-center">Our story</p>
          <h2
            id="company-history-heading"
            className="mt-3 text-center font-display text-3xl font-semibold tracking-tight text-brand-blue sm:text-4xl"
          >
            How we got here
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-text-muted">
            A short history of a studio that grew by listening to what clients actually needed.
          </p>
          <ul className="mx-auto mt-16 max-w-3xl border-l-2 border-brand-teal/40 pl-10" role="list">
            {historyMilestones.map(({ year, title, description }) => (
              <li key={year} className="relative pb-12 last:pb-0">
                <span
                  className="absolute left-0 top-1.5 h-3 w-3 -translate-x-[calc(2.5rem+0.375rem+1px)] rounded-full bg-brand-teal"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
                  {year}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-brand-blue">
                  {title}
                </h3>
                <p className="mt-3 max-w-prose leading-relaxed text-text-muted">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-atmosphere" aria-labelledby="how-we-deliver-heading">
        <div className="container-site">
          <p className="eyebrow-on-light text-center">How we work</p>
          <h2
            id="how-we-deliver-heading"
            className="mt-3 text-center font-display text-3xl font-semibold tracking-tight text-brand-blue sm:text-4xl"
          >
            What clients notice
          </h2>
          <ul className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-2" role="list">
            {strengths.map(({ title, description }) => (
              <li key={title} className="border-t border-border-subtle pt-6">
                <h3 className="font-display text-base font-semibold tracking-tight text-brand-blue">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-surface-muted">
        <div className="container-site text-center">
          <Button href="/contact" variant="primaryBlue" size="lg">
            Start a conversation
          </Button>
        </div>
      </section>
    </>
  );
}
