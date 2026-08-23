import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/breadcrumbs";
import { blogPosts } from "../data/blogs";
import { BASE_OG, SITE_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "AI Automation Blog | GHL, n8n, CRM & AI Guides",
  description:
    "AI automation blog: GoHighLevel lead follow-up, n8n vs Make vs Zapier, HubSpot & Zoho CRM pipelines, AI development & full-stack guides from EclipticLink.",
  keywords: [
    "AI automation blog",
    "GoHighLevel tutorials",
    "n8n vs Make vs Zapier",
    "HubSpot CRM automation",
    "lead follow-up guide",
    "AI development articles",
  ],
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    ...BASE_OG,
    title: "AI Automation Blog | GHL, n8n & CRM Guides | EclipticLink",
    description:
      "Practical guides on AI automations, lead follow-up, CRM workflows, AI development, and full-stack strategy.",
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

const CATEGORY_COLORS: Record<string, string> = {
  "AI Automations": "bg-teal-50 text-teal-800 border-teal-200",
  "AI Development": "bg-sky-50 text-sky-800 border-sky-200",
  "Full-Stack Development": "bg-amber-50 text-amber-800 border-amber-200",
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
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
            className="mb-6"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            AI Automation &amp; Development Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200 leading-relaxed">
            Guides on AI automation services — GoHighLevel, n8n, Make, Zapier, HubSpot &amp; Zoho —
            plus AI development and full-stack engineering from the EclipticLink team.
          </p>
        </div>
      </section>

      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="blogs-heading"
      >
        <div className="mx-auto max-w-7xl">
          {/* Category filter labels */}
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${CATEGORY_COLORS[cat] ?? "bg-zinc-50 text-zinc-700 border-zinc-200"}`}
              >
                {cat}
              </span>
            ))}
          </div>

          <h2 id="blogs-heading" className="sr-only">
            All articles
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md hover:border-brand-teal-muted"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${CATEGORY_COLORS[post.category] ?? "bg-zinc-50 text-zinc-700 border-zinc-200"}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-zinc-400">{post.readingTime} min read</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-brand-blue group-hover:text-brand-blue-hover">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-zinc-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <time
                      dateTime={post.publishedAt}
                      className="text-xs text-zinc-400"
                    >
                      {formatDate(post.publishedAt)}
                    </time>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-brand-teal transition group-hover:text-brand-teal-hover focus-visible:outline-none"
                      aria-label={`Read ${post.title}`}
                    >
                      Read article
                      <svg
                        className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5"
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
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-brand-blue sm:text-3xl">
            Want to talk about your project?
          </h2>
          <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
            We build custom software, AI integrations, and automation systems for startups and enterprises. Get in touch and we&apos;ll get back to you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-11 min-h-11 items-center justify-center rounded-lg bg-brand-blue px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex h-11 min-h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-800 active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
