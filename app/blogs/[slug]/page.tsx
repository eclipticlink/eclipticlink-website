import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { Button } from "../../components/ui/button";
import { BASE_OG, SITE_URL } from "../../lib/config";
import { BlogContent } from "../blog-content";
import { getAllBlogSlugs, getBlogBySlug } from "../../data/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog | EclipticLink" };
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.tags.join(", "),
    alternates: { canonical: `${SITE_URL}/blogs/${post.slug}` },
    openGraph: {
      ...BASE_OG,
      title: post.title,
      description: post.metaDescription,
      url: `${SITE_URL}/blogs/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [`${SITE_URL}/og-image.png`],
      site: "@eclipticlink",
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const pageUrl = `${SITE_URL}/blogs/${post.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blogs` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url: pageUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "en-US",
    wordCount: post.readingTime * 200,
    author: {
      "@type": "Organization",
      name: "EclipticLink",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "EclipticLink",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/ecliptic-link-logo.png` },
    },
    image: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    isPartOf: { "@type": "Blog", name: "EclipticLink Blog", url: `${SITE_URL}/blogs` },
  };

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-dark px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="bg-hero-mesh pointer-events-none absolute inset-0 opacity-90" aria-hidden="true" />
        <div className="container-site relative z-10 max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blogs" },
              { label: post.title },
            ]}
            align="start"
            className="mb-8"
          />
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
              {post.category}
            </span>
            <span className="text-sm text-white/55">{post.readingTime} min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span>By <strong className="font-medium text-white/80">EclipticLink Team</strong></span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section-pad bg-atmosphere">
        <BlogContent blocks={post.body} />
      </section>

      {/* Tags */}
      <section className="border-y border-border-subtle bg-surface-muted px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-border-subtle bg-surface px-3 py-1 text-xs font-medium text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-dark section-pad text-white">
        <div className="bg-hero-mesh pointer-events-none absolute inset-0 opacity-90" aria-hidden="true" />
        <div className="container-site relative z-10 max-w-3xl text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to put this into practice?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            EclipticLink builds AI automations for leads and CRM workflows, custom AI development,
            and full-stack software. Let&apos;s talk about your project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get a free consult
            </Button>
            <Button href="/services/ai-automations" variant="secondary" size="lg">
              Explore AI Automations
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
