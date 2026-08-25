import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { Button } from "../components/ui/button";
import {
  HIRE_TEAM_CATEGORIES,
  getRolesByCategory,
} from "../data/hire-team";
import { BASE_OG, SITE_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "Hire Specialists | Automation Capacity Without Full-Time Hiring",
  description:
    "Need GoHighLevel, n8n, Make, Zapier, AI, or product engineering capacity without hiring full-time? Embed dedicated specialists into your team.",
  keywords: [
    "hire automation specialists",
    "hire GHL specialist",
    "hire n8n developer",
    "hire Zapier expert",
    "hire AI engineers",
    "hire dedicated developers",
    "staff augmentation",
  ],
  alternates: { canonical: `${SITE_URL}/hire` },
  openGraph: {
    ...BASE_OG,
    title: "Hire Specialists | Automation Capacity Without Full-Time Hiring",
    description:
      "Add capacity for GoHighLevel, n8n, Make, Zapier, AI, and product engineering without a full-time search.",
    url: `${SITE_URL}/hire`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Hire", item: `${SITE_URL}/hire` },
  ],
};

const stacks = [
  "GoHighLevel",
  "n8n",
  "Make",
  "Zapier",
  "Product engineering",
  "Web & mobile",
];

export default function HirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title="Need automation or engineering capacity without hiring full-time?"
        description="Dedicated specialists join your existing team - GoHighLevel, n8n, Make, Zapier, AI, and product engineering - without the cost and delay of a permanent hire."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hire Team" }]}
      />

      {/* Journey framing */}
      <section className="section-pad bg-atmosphere" aria-labelledby="hire-why-heading">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow-on-light">Staff augmentation</p>
            <h2
              id="hire-why-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue sm:text-4xl"
            >
              Extra hands who already know the stack
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              When your roadmap outpaces your team - or you need specialists for automation
              without opening a full-time role - we embed vetted talent into how you already work.
            </p>
          </div>

          <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2" role="list">
            {stacks.map((s) => (
              <li
                key={s}
                className="rounded-md border border-border-subtle bg-surface px-3 py-1.5 text-sm font-semibold text-brand-blue"
              >
                {s}
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                title: "Matched to your tools",
                body: "Specialists experienced in GoHighLevel, n8n, Make, Zapier, and modern product stacks.",
              },
              {
                title: "Flexible engagement",
                body: "Hourly or dedicated models that scale with your roadmap - without a long hiring cycle.",
              },
              {
                title: "On your process",
                body: "They join your standups, tools, and cadence. You stay in control of priorities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border-subtle bg-surface p-6"
              >
                <h3 className="font-display text-base font-semibold text-brand-blue">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Discuss a hire
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface-muted" aria-labelledby="hire-list-heading">
        <div className="container-site">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="eyebrow-on-light">Browse roles</p>
            <h2
              id="hire-list-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue sm:text-4xl"
            >
              Find the specialist you need
            </h2>
            <p className="mt-4 text-text-muted">
              Prefer a defined project instead?{" "}
              <Link
                href="/contact"
                className="font-semibold text-brand-blue underline-offset-4 hover:underline"
              >
                Discuss project delivery
              </Link>
            </p>
          </div>

          <div className="space-y-16">
            {HIRE_TEAM_CATEGORIES.map((category) => {
              const roles = getRolesByCategory(category);
              const categoryId = category.toLowerCase().replace(/\s+/g, "-");
              return (
                <div key={category} id={categoryId} className="scroll-mt-28">
                  <h3 className="border-b border-border-subtle pb-3 font-display text-2xl font-semibold text-brand-blue">
                    {category}
                  </h3>
                  <ul className="m-0 mt-6 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3" role="list">
                    {roles.map((role) => (
                      <li key={role.slug}>
                        <Link
                          href={`/hire/role/${role.slug}`}
                          className="card-lift group flex h-full min-h-40 flex-col rounded-xl border border-border-subtle bg-surface p-5 hover:border-brand-teal-muted hover:bg-brand-teal-light/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                        >
                          <span className="font-display text-lg font-semibold text-brand-blue group-hover:text-brand-blue-hover">
                            {role.title}
                          </span>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted line-clamp-2">
                            {role.shortDescription}
                          </p>
                          <span className="link-arrow mt-4">
                            View role details
                            <svg className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-dark section-pad text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 85% 15%, rgb(116 210 176 / 0.14), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Ready to add capacity?
          </h2>
          <p className="mt-4 text-white/75">
            Tell us the stack and how you work. We will match specialists and outline a
            practical engagement.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Start a conversation
            </Button>
            <Button href="/services/ai-automations" variant="secondary" size="lg">
              Prefer a scoped project?
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
