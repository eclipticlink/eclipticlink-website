import Link from "next/link";
import { blogPosts } from "../data/blogs";
import { BASE_OG, COMPANY_WHATSAPP_URL, SITE_URL } from "../lib/config";
import { breadcrumbJsonLd, faqJsonLd } from "../lib/seo";
import type { Metadata } from "next";
import { CtaBand } from "./cta-band";
import { Icon } from "./icons";
import { JsonLd } from "./json-ld";
import { PageHero } from "./page-hero";
import { SectionHeading } from "./section-heading";
import { Button } from "./ui/button";

/*
 * Shared layout for answer-first landing pages: region pages
 * (/locations/<region>/<topic>) and service deep-dives
 * (/services/<service>/<topic>). Each answers one cluster of searches with
 * a direct answer, substantive sections, steps and FAQs, and every contact
 * link carries the service and the page as the lead's source.
 */

export type TopicContent = {
  slug: string;
  /** Service id from services/data.ts */
  serviceId: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  /** Two- or three-sentence direct answer to the main search */
  answer: string;
  sections: {
    title: string;
    paragraphs?: string[];
    items?: string[];
    /** Comparison table; the first column is the row label */
    table?: { headers: string[]; rows: string[][] };
    /** Paragraphs shown after the list or table */
    after?: string[];
  }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Blog slugs to link as further reading */
  guides: string[];
  keywords: string[];
  updatedAt: string;
};

export function topicMetadata(page: TopicContent, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: page.seoTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { ...BASE_OG, title: `${page.seoTitle} | EclipticLink`, description: page.metaDescription, url },
    twitter: { card: "summary_large_image", title: page.seoTitle, description: page.metaDescription },
  };
}

export function TopicPageView({
  page,
  path,
  from,
  serviceTitle,
  crumbs,
  areaServed,
  related,
}: {
  page: TopicContent;
  /** Path of this page, e.g. /locations/uae/managed-soc-mdr */
  path: string;
  /** Lead source recorded with the contact form */
  from: string;
  serviceTitle?: string;
  /** Breadcrumb trail after Home; the last item is this page */
  crumbs: { label: string; href?: string }[];
  areaServed?: { name: string; code: string };
  related: { href: string; label: string }[];
}) {
  const url = `${SITE_URL}${path}`;
  const contact = `/contact?service=${page.serviceId}&from=${from}`;
  const guides = page.guides.flatMap((g) => blogPosts.filter((b) => b.slug === g));

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: serviceTitle ?? "Cybersecurity",
    description: page.metaDescription,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    ...(areaServed ? { areaServed: { "@type": "Country", name: areaServed.name, identifier: areaServed.code } } : {}),
  };

  const allRelated = [...related, ...guides.map((g) => ({ href: `/blogs/${g.slug}`, label: g.title }))];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(
            SITE_URL,
            crumbs.map((c, i) => ({ name: c.label, path: c.href ?? (i === crumbs.length - 1 ? path : "/") }))
          ),
          serviceJsonLd,
          faqJsonLd(page.faqs),
        ]}
      />

      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, ...crumbs.map((c, i) => (i === crumbs.length - 1 ? { label: c.label } : c))]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href={contact} size="lg">
            Book a free assessment
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
          <Button href={COMPANY_WHATSAPP_URL} variant="secondary" size="lg" target="_blank" rel="noopener noreferrer">
            WhatsApp us
          </Button>
        </div>
      </PageHero>

      {/* Direct answer */}
      <section className="section-pad" style={{ paddingBottom: 0 }} aria-labelledby="answer-heading">
        <div className="container-site">
          <div className="card brackets mx-auto max-w-3xl p-7 sm:p-9">
            <p className="eyebrow">The short answer</p>
            <h2 id="answer-heading" className="sr-only">
              The short answer
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink">{page.answer}</p>
            <p className="mt-6 border-t border-line pt-4 font-mono text-xs text-subtle">
              Reviewed by the EclipticLink security team · Updated{" "}
              <time dateTime={page.updatedAt}>
                {new Date(page.updatedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}
              </time>
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section-pad" aria-label={page.h1}>
        <div className="container-site">
          <div className="prose-cyber mx-auto max-w-3xl space-y-14">
            {page.sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{s.title}</h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="mt-5 text-[1.05rem] leading-8 text-muted" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                {s.items ? (
                  <ul className="mt-6 space-y-3 pl-6" role="list">
                    {s.items.map((item, i) => (
                      <li
                        key={i}
                        className="relative leading-7 text-muted before:absolute before:-left-5 before:top-[0.7rem] before:h-1.5 before:w-1.5 before:rounded-sm before:bg-accent"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                ) : null}
                {s.table ? (
                  <div className="mt-6 overflow-x-auto rounded-xl border border-line">
                    <table className="w-full min-w-[34rem] text-left text-sm">
                      <thead className="bg-bg-elevated">
                        <tr>
                          {s.table.headers.map((h, i) => (
                            <th key={i} scope="col" className="px-4 py-3 font-semibold text-ink">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        {s.table.rows.map((row, i) => (
                          <tr key={i} className="align-top">
                            {row.map((cell, j) =>
                              j === 0 ? (
                                <th key={j} scope="row" className="px-4 py-3 font-medium text-ink">
                                  {cell}
                                </th>
                              ) : (
                                <td key={j} className="px-4 py-3 text-muted">
                                  {cell}
                                </td>
                              )
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : null}
                {s.after?.map((p, i) => (
                  <p key={`a${i}`} className="mt-5 text-[1.05rem] leading-8 text-muted" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-section-alt" aria-labelledby="steps-heading">
        <div className="container-site">
          <SectionHeading id="steps-heading" eyebrow="How it works" title="From first call to results" align="left" />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {page.steps.map((step, i) => (
              <li key={step.title} className="card h-full p-6">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Button href={contact} size="lg">
              Book a free 30-minute assessment
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" aria-labelledby="topic-faq-heading">
        <div className="container-site">
          <SectionHeading id="topic-faq-heading" eyebrow="FAQ" title="Common questions" />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
            {page.faqs.map((f, i) => (
              <details key={f.q} className="faq group py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  <h3>{f.q}</h3>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line text-accent transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-line px-5 py-12 sm:px-6 lg:px-8" aria-labelledby="related-heading">
        <div className="container-site">
          <h2 id="related-heading" className="text-xl font-semibold text-ink">
            Related
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {allRelated.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="link-arrow">
                  {r.label}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand href={`${contact}-footer`} />
    </>
  );
}
