import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { Button } from "../components/ui/button";
import { BASE_OG, SITE_URL } from "../lib/config";
import { services } from "./data";

export const metadata: Metadata = {
  title: "Services | Automate, Add Intelligence & Build What Tools Can't",
  description:
    "Problem-first services: automate operations and sales processes, add AI where it helps, build custom software when tools aren't enough, and connect systems reliably.",
  keywords: [
    "business process automation",
    "sales process automation",
    "AI systems",
    "custom software",
    "system integrations",
    "workflow automation",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    ...BASE_OG,
    title: "Services | Automate, Add Intelligence & Build What Tools Can't",
    description:
      "We start with the problem, design the journey, then choose automation, AI, integrations, or software as needed.",
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

const solutionGroups = [
  {
    title: "Automate your sales process",
    body: "Lead capture, qualification, routing, CRM hygiene, follow-up, and booking designed around how you sell.",
    href: "/services/ai-automations",
    cta: "Explore lead & CRM systems",
    primary: true,
  },
  {
    title: "Automate your operations",
    body: "Business process automation, workflow orchestration, and integrations that remove repetitive work.",
    href: "/services/ai-automations",
    cta: "Explore automation systems",
  },
  {
    title: "Add intelligence",
    body: "AI assistants, agents, document processing, and decision support - only where they improve the process.",
    href: "/services/ai",
    cta: "Explore AI",
  },
  {
    title: "Build what existing tools can't",
    body: "Custom software, SaaS, web applications, and internal tools when the process needs a product layer.",
    href: "/services/custom-software-development",
    cta: "Explore custom software",
  },
  {
    title: "Connect your systems",
    body: "APIs, integrations, data synchronization, and architecture so information flows reliably.",
    href: "/services/cloud-devops",
    cta: "Explore cloud & integrations",
  },
  {
    title: "Scale and operate",
    body: "Cloud infrastructure, DevOps, monitoring, and reliability as your systems grow.",
    href: "/services/cloud-devops",
    cta: "Explore cloud & DevOps",
  },
];

export default function ServicesPage() {
  const primary = solutionGroups[0];
  const secondary = solutionGroups.slice(1);
  const supporting = services.filter(
    (s) =>
      !["ai-automations", "ai", "custom-software-development", "cloud-devops"].includes(s.id)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title="We don't start by choosing a tool. We start by understanding the problem."
        description="Then we design the simplest reliable system that solves it - combining automation, AI, integrations, and software only as needed."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section-pad bg-atmosphere" aria-labelledby="services-list-heading">
        <div className="container-site">
          <h2 id="services-list-heading" className="sr-only">
            Our services
          </h2>

          <article className="overflow-hidden rounded-2xl border border-brand-teal/35 bg-brand-dark text-white">
            <div className="p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
                Primary focus
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                {primary.title}
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/75">{primary.body}</p>
              <Button href={primary.href} variant="primary" className="mt-8">
                {primary.cta}
              </Button>
            </div>
          </article>

          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {secondary.map((item) => (
              <li key={item.title}>
                <article className="flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6 sm:p-7">
                  <h3 className="font-display text-xl font-semibold text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-text-muted">{item.body}</p>
                  <Link href={item.href} className="link-arrow mt-5">
                    {item.cta}
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              </li>
            ))}
          </ul>

          {supporting.length > 0 ? (
            <>
              <p className="mt-14 text-center text-sm font-semibold uppercase tracking-[0.14em] text-brand-blue">
                Supporting capabilities
              </p>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
                {supporting.map((service) => (
                  <li key={service.id}>
                    <article className="flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6">
                      <h3 className="font-display text-lg font-semibold text-brand-blue">
                        {service.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-text-muted">{service.summary}</p>
                      <Link href={`/services/${service.id}`} className="link-arrow mt-4">
                        Explore {service.title}
                        <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <div className="mt-14 text-center">
            <Button href="/contact" variant="primaryBlue" size="lg">
              Book a discovery call
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
