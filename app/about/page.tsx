import type { Metadata } from "next";
import { PageHero } from "../components/page-hero";
import { Button } from "../components/ui/button";
import { BASE_OG, SITE_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "About EclipticLink | Problem-First Systems Partner",
  description:
    "EclipticLink helps businesses identify bottlenecks, design better processes, and build automated systems - with AI and software when the problem requires it.",
  keywords: [
    "about EclipticLink",
    "business automation company",
    "process automation partner",
    "AI and software systems",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    ...BASE_OG,
    title: "About EclipticLink | Problem-First Systems Partner",
    description:
      "How EclipticLink grew into a partner for process design, automation, AI, and custom systems.",
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
    title: "We start with the process, not the platform",
    description:
      "We map how work actually moves, then choose automation, AI, integrations, or software based on what will stay reliable as you grow.",
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
      "Clients kept asking for help with leads that went cold, CRMs that lied, and tools that never quite talked to each other. We deepened that practice across sales and operations systems, while keeping the product and engineering craft that made us useful when a workflow alone was not enough.",
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
        title="Problem-first. Technology second."
        description="We help businesses identify operational bottlenecks, design better processes, and build systems that remove manual work - applying AI and custom software only when they earn their place."
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

      <section className="section-pad bg-surface-muted" aria-labelledby="about-cta-heading">
        <div className="container-site max-w-2xl text-center">
          <h2
            id="about-cta-heading"
            className="font-display text-2xl font-semibold tracking-tight text-brand-blue sm:text-3xl"
          >
            Tell us where leads stall today
          </h2>
          <p className="mt-3 text-text-muted">
            Share a short picture of your tools and process. We will come back with a
            practical next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primaryBlue" size="lg">
              Book a discovery call
            </Button>
            <Button href="/hire" variant="secondaryOnLight" size="lg">
              Browse dedicated roles
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
