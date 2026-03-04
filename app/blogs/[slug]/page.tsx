import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../components/breadcrumbs";
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
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
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
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blogs" },
              { label: post.title },
            ]}
            className="mb-6"
          />
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-teal/20 px-3 py-1 text-xs font-semibold text-brand-teal">
              {post.category}
            </span>
            <span className="text-sm text-zinc-400">{post.readingTime} min read</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            {post.excerpt}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
            <span>By <strong className="text-zinc-200">EclipticLink Team</strong></span>
            <span>·</span>
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <BlogContent blocks={post.body} />
      </section>

      {/* Tags */}
      <section className="bg-zinc-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to put this into practice?
          </h2>
          <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
            EclipticLink builds custom software, AI integrations, and automation systems for startups and enterprises. Let&apos;s talk about your project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg bg-brand-teal px-6 text-base font-semibold text-brand-dark shadow-sm transition hover:bg-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Get in touch
            </Link>
            <Link
              href="/blogs"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg border-2 border-brand-teal px-6 text-base font-semibold text-white transition hover:bg-brand-teal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              More articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
