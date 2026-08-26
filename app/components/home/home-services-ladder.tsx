import Link from "next/link";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { Button } from "../ui/button";

const solutions = [
  {
    id: "ai-automations",
    title: "Automate your sales process",
    body: "Lead capture, qualification, routing, CRM hygiene, follow-up, and booking - designed around how you sell.",
    cta: "Explore lead & CRM systems",
    primary: true,
  },
  {
    id: "operations-automation",
    title: "Automate your operations",
    body: "Business process automation, workflow orchestration, and integrations that remove repetitive work.",
    cta: "Explore operations automation",
  },
  {
    id: "ai",
    title: "Add intelligence",
    body: "AI assistants, agents, document processing, and decision support - only where they improve the process.",
    cta: "Explore AI",
  },
  {
    id: "custom-software-development",
    title: "Build what existing tools can't",
    body: "Custom software, SaaS, web apps, and internal tools when automation exposes a product-shaped problem.",
    cta: "Explore custom software",
  },
  {
    id: "cloud-devops",
    title: "Connect and operate",
    body: "APIs, integrations, cloud infrastructure, and reliability so the system runs as you scale.",
    cta: "Explore cloud & DevOps",
  },
  {
    id: "big-data",
    title: "Make data usable",
    body: "Pipelines, warehouses, and reporting that turn scattered activity into decisions.",
    cta: "Explore data & analytics",
  },
  {
    id: "ui-ux-design",
    title: "Design the experience",
    body: "Interfaces and systems that make the new process clear for the people who use it.",
    cta: "Explore UI/UX",
  },
  {
    id: "mobile-app-development",
    title: "Extend to mobile",
    body: "When the workflow needs to live on phones - without becoming a separate product story.",
    cta: "Explore mobile apps",
  },
];

export function HomeServicesLadder() {
  const featured = solutions[0];
  const rest = solutions.slice(1);

  return (
    <section id="services" className="section-pad bg-atmosphere" aria-labelledby="services-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="services-heading"
            eyebrow="What we build"
            title="We don't start by choosing a tool. We start by understanding the problem."
            description="Then we design the simplest reliable system that solves it - combining automation, AI, integrations, and software only as needed."
          />
        </Reveal>

        <Reveal delay={80}>
          <article className="mt-14 overflow-hidden rounded-2xl border border-brand-teal/35 bg-brand-dark text-white">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
                  Flagship · Sales systems
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl leading-relaxed text-white/75">{featured.body}</p>
                <Button href={`/services/${featured.id}`} variant="primary" className="mt-8">
                  {featured.cta}
                </Button>
              </div>
              <div className="border-t border-white/10 bg-white/[0.04] p-8 sm:p-10 lg:border-t-0 lg:border-l">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                  Natural progression
                </p>
                <ul className="mt-4 space-y-3" role="list">
                  {[
                    "Automate the process",
                    "Add intelligence where it helps",
                    "Build software when tools aren't enough",
                    "Scale and operate reliably",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-white/80">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </Reveal>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {rest.map((service, i) => (
            <li key={`${service.title}-${i}`}>
              <Reveal delay={i * 40} className="h-full">
                <Link
                  href={`/services/${service.id}`}
                  className="group flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6 transition hover:border-brand-teal-muted hover:bg-brand-teal-light/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                >
                  <h3 className="font-display text-lg font-semibold text-brand-blue group-hover:text-brand-blue-hover">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {service.body}
                  </p>
                  <span className="link-arrow mt-4">
                    {service.cta}
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <Button href="/services" variant="primaryBlue">
              View all services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
