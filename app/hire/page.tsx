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
  title: "Hire Specialists | Automation, AI & Engineering",
  description:
    "Embed dedicated GoHighLevel, n8n, Make, Zapier, AI, and full-stack talent into your team. Staff augmentation without the hiring overhead.",
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
    title: "Hire Specialists | Automation, AI & Engineering",
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

export default function HirePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title="Hire people who already know the stack"
        description="Dedicated specialists for GoHighLevel, n8n, Make, Zapier, intelligent systems, and product engineering. Scale capacity without starting a full hiring cycle."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Hire Team" }]}
      />

      <section className="section-pad bg-atmosphere" aria-labelledby="hire-list-heading">
        <div className="container-site">
          <h2 id="hire-list-heading" className="sr-only">
            Hire by role
          </h2>
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
          <div className="mt-16 text-center">
            <Button href="/contact" variant="primaryBlue" size="lg">
              Talk about a role
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
