import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/page-hero";
import { Button } from "../components/ui/button";
import { blogPosts } from "../data/blogs";
import { BASE_OG, SITE_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "Blog | Lead Systems, CRM, Products & Engineering",
  description:
    "Practical writing on GoHighLevel, HubSpot, Zoho, n8n, Make, Zapier, intelligent products, and software delivery from the EclipticLink team.",
  keywords: [
    "GoHighLevel tutorials",
    "n8n vs Make vs Zapier",
    "HubSpot CRM automation",
    "lead follow-up guide",
    "AI product development",
    "software delivery blog",
  ],
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    ...BASE_OG,
    title: "Blog | Lead Systems, CRM, Products & Engineering",
    description:
      "Field notes on follow-up systems, CRM workflows, intelligent products, and how we build software.",
    url: `${SITE_URL}/blogs`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blogs` },
  ],
};

const CATEGORY_ORDER = [
  "AI Automations",
  "AI Development",
  "Full-Stack Development",
] as const;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function sortBlogPosts(posts: typeof blogPosts) {
  return [...posts].sort((a, b) => {
    const ai = CATEGORY_ORDER.indexOf(a.category as (typeof CATEGORY_ORDER)[number]);
    const bi = CATEGORY_ORDER.indexOf(b.category as (typeof CATEGORY_ORDER)[number]);
    const ao = ai === -1 ? 99 : ai;
    const bo = bi === -1 ? 99 : bi;
    if (ao !== bo) return ao - bo;
    return b.publishedAt.localeCompare(a.publishedAt);
  });
}

export default function BlogsPage() {
  const posts = sortBlogPosts(blogPosts);
  const categories = CATEGORY_ORDER.filter((cat) =>
    posts.some((p) => p.category === cat)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title="Notes from the work"
        description="Guides and opinions on lead systems, CRM workflows, intelligent products, and software delivery, written by the people who ship them."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <section className="section-pad bg-atmosphere" aria-labelledby="blogs-heading">
        <div className="container-site">
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="border border-border-subtle bg-surface px-3 py-1 text-xs font-semibold tracking-wide text-brand-blue"
              >
                {cat}
              </span>
            ))}
          </div>

          <h2 id="blogs-heading" className="sr-only">
            All articles
          </h2>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {posts.map((post) => (
              <li key={post.slug}>
                <article className="card-lift group flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6 hover:border-brand-teal-muted hover:bg-brand-teal-light/30">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                    <span className="font-semibold text-brand-teal">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-brand-blue transition group-hover:text-brand-blue-hover">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <time dateTime={post.publishedAt} className="text-xs text-text-muted">
                      {formatDate(post.publishedAt)}
                    </time>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="link-arrow"
                      aria-label={`Read ${post.title}`}
                    >
                      Read
                      <svg className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-surface-muted">
        <div className="container-site max-w-3xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-blue sm:text-3xl">
            Want to talk through a challenge?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            If something in these articles sounds like your stack, we are happy to dig into the specifics.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primaryBlue">
              Start a conversation
            </Button>
            <Button href="/services" variant="secondaryOnLight">
              Browse services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
