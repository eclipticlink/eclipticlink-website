import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/breadcrumbs";
import { blogPosts } from "../data/blogs";
import { BASE_OG, SITE_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "Blog — AI Integration, Custom Software & Tech Insights",
  description:
    "Practical articles on AI integration, workflow automation, custom software development, mobile apps, and technology strategy from the EclipticLink engineering team.",
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    ...BASE_OG,
    title: "EclipticLink Blog — AI, Custom Software & Tech Insights",
    description:
      "Read practical articles on AI integration, automation, custom software, and mobile development from EclipticLink.",
    url: `${SITE_URL}/blogs`,
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "AI & Automation": "bg-violet-50 text-violet-700 border-violet-200",
  "Mobile Development": "bg-sky-50 text-sky-700 border-sky-200",
  "Web Development": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Custom Software": "bg-amber-50 text-amber-700 border-amber-200",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogsPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
            className="mb-6"
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200 leading-relaxed">
            Practical insights on AI integration &amp; automation, custom software development, mobile apps, and technology strategy — from the EclipticLink team.
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
            {blogPosts.map((post) => (
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
