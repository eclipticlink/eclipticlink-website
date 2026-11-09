import type { Metadata } from "next";
import Link from "next/link";
import { BlogCover } from "../../components/blog-cover";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { CtaBand } from "../../components/cta-band";
import { Icon } from "../../components/icons";
import { JsonLd } from "../../components/json-ld";
import { getAllBlogSlugs, getBlogBySlug, blogPosts } from "../../data/blogs";
import { BASE_OG, SITE_URL } from "../../lib/config";
import { breadcrumbJsonLd } from "../../lib/seo";
import { getServiceBySlug } from "../../services/data";
import { BlogContent } from "../blog-content";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blogs/${post.slug}`;
  return {
    title: post.title.length > 46 ? { absolute: post.title } : post.title,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      ...BASE_OG,
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      section: post.category,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blogs/${post.slug}`;
  const service = post.relatedService ? getServiceBySlug(post.relatedService) : undefined;
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "en-US",
    author: { "@type": "Organization", name: "EclipticLink Security Team", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "EclipticLink",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/ecliptic-link-logo.png` },
    },
    image: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(SITE_URL, [
            { name: "Insights", path: "/blogs" },
            { name: post.title, path: `/blogs/${post.slug}` },
          ]),
          articleJsonLd,
        ]}
      />

      <article>
        <header className="relative overflow-hidden border-b border-line px-5 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8">
          <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/blogs" }, { label: post.category }]}
              align="start"
              className="mb-8"
            />
            <p className="eyebrow">{post.category}</p>
            <h1 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{post.excerpt}</p>
            <p className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-subtle">
              <span>EclipticLink Security Team</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>{date}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min read</span>
            </p>
            <BlogCover
              category={post.category}
              seed={post.slug}
              className="mt-10 aspect-[2/1] rounded-3xl shadow-[0_40px_80px_-50px_rgb(11_32_27/0.55)]"
            />
          </div>
        </header>

        <div className="section-pad">
          <BlogContent blocks={post.body} />

          <div className="mx-auto mt-14 max-w-3xl">
            <ul className="flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((tag) => (
                <li key={tag} className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
                  {tag}
                </li>
              ))}
            </ul>

            {service ? (
              <aside className="card brackets mt-10 flex flex-col gap-5 p-7 sm:flex-row sm:items-center">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <p className="font-semibold text-ink">{service.title}</p>
                  <p className="mt-1 text-sm text-muted">{service.summary}</p>
                </div>
                <Link href={`/services/${service.id}`} className="link-arrow shrink-0">
                  Explore {service.title}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </aside>
            ) : null}
          </div>
        </div>
      </article>

      <section className="section-pad border-t border-line bg-section-alt" aria-labelledby="more-heading">
        <div className="container-site">
          <h2 id="more-heading" className="text-2xl font-semibold text-ink">
            More security insights
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3" role="list">
            {more.map((p) => (
              <li key={p.slug}>
                <Link href={`/blogs/${p.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden rounded-2xl">
                  <BlogCover category={p.category} seed={p.slug} className="aspect-[16/9]" />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">{p.category}</p>
                    <h3 className="mt-3 font-semibold leading-snug text-ink group-hover:text-accent">{p.title}</h3>
                    <p className="mt-auto pt-4 font-mono text-xs text-subtle">{p.readingTime} min read</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
