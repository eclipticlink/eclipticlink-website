import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "../components/cta-band";
import { JsonLd } from "../components/json-ld";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { blogPosts } from "../data/blogs";
import { BASE_OG, SITE_URL } from "../lib/config";
import { breadcrumbJsonLd } from "../lib/seo";

const TITLE = "Cybersecurity Blog & Security Insights";
const DESCRIPTION =
  "Practical cybersecurity guidance from EclipticLink: AI and LLM security, managed detection and response, penetration testing, cloud security, and compliance.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: { ...BASE_OG, title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blogs` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

export default function BlogsPage() {
  const posts = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const [featured, ...rest] = posts;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "EclipticLink Security Insights",
    url: `${SITE_URL}/blogs`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: `${SITE_URL}/blogs/${p.slug}`,
      datePublished: p.publishedAt,
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(SITE_URL, [{ name: "Insights", path: "/blogs" }]), blogJsonLd]} />
      <PageHero
        eyebrow="Security insights"
        title="Cybersecurity insights for the AI era"
        description="Practical, vendor-neutral guidance on AI security, threat detection, offensive testing, cloud, and compliance from the EclipticLink security team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Insights" }]}
      />

      <section className="section-pad" aria-labelledby="posts-heading">
        <div className="container-site">
          <h2 id="posts-heading" className="sr-only">
            All articles
          </h2>
          {featured ? (
            <Link href={`/blogs/${featured.slug}`} className="card card-hover group grid gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  Featured · {featured.category}
                </p>
                <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-ink group-hover:text-accent sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{featured.excerpt}</p>
              </div>
              <p className="font-mono text-xs text-subtle">
                <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt)}</time> · {featured.readingTime} min
              </p>
            </Link>
          ) : null}

          <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3" role="list">
            {rest.map((post, i) => (
              <li key={post.slug}>
                <Reveal delay={(i % 3) * 70} className="h-full">
                  <Link href={`/blogs/${post.slug}`} className="card card-hover group flex h-full flex-col p-6">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">{post.category}</p>
                    <h3 className="mt-3 text-lg font-semibold leading-snug text-ink group-hover:text-accent">{post.title}</h3>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                    <p className="mt-5 font-mono text-xs text-subtle">
                      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · {post.readingTime} min read
                    </p>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
