import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "../../../components/cta-band";
import { Icon } from "../../../components/icons";
import { JsonLd } from "../../../components/json-ld";
import { PageHero } from "../../../components/page-hero";
import { SectionHeading } from "../../../components/section-heading";
import { Button } from "../../../components/ui/button";
import { blogPosts } from "../../../data/blogs";
import { getLocationBySlug } from "../../../data/locations";
import { getRegionPage, regionPages } from "../../../data/region-pages";
import { BASE_OG, COMPANY_WHATSAPP_URL, SITE_URL } from "../../../lib/config";
import { breadcrumbJsonLd, faqJsonLd } from "../../../lib/seo";
import { getServiceBySlug } from "../../../services/data";

type Props = { params: Promise<{ slug: string; topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return regionPages.map((p) => ({ slug: p.region, topic: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, topic } = await params;
  const page = getRegionPage(slug, topic);
  if (!page) return {};
  const url = `${SITE_URL}/locations/${page.region}/${page.slug}`;
  return {
    title: page.seoTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: { ...BASE_OG, title: `${page.seoTitle} | EclipticLink`, description: page.metaDescription, url },
    twitter: { card: "summary_large_image", title: page.seoTitle, description: page.metaDescription },
  };
}

export default async function RegionServicePage({ params }: Props) {
  const { slug, topic } = await params;
  const page = getRegionPage(slug, topic);
  const loc = getLocationBySlug(slug);
  if (!page || !loc) notFound();

  const service = getServiceBySlug(page.serviceId);
  const url = `${SITE_URL}/locations/${page.region}/${page.slug}`;
  const from = `region-${page.region}-${page.slug}`;
  const contact = `/contact?service=${page.serviceId}&from=${from}`;
  const guides = page.guides.flatMap((g) => blogPosts.filter((b) => b.slug === g));
  const siblings = regionPages.filter((p) => p.region === page.region && p.slug !== page.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: service?.title ?? "Cybersecurity",
    description: page.metaDescription,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: loc.short, identifier: loc.countryCode },
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(SITE_URL, [
            { name: "Locations", path: "/locations" },
            { name: loc.short, path: `/locations/${loc.slug}` },
            { name: page.h1, path: `/locations/${page.region}/${page.slug}` },
          ]),
          serviceJsonLd,
          faqJsonLd(page.faqs),
        ]}
      />

      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: loc.short, href: `/locations/${loc.slug}` },
          { label: service?.title ?? page.h1 },
        ]}
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
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-section-alt" aria-labelledby="steps-heading">
        <div className="container-site">
          <SectionHeading id="steps-heading" eyebrow="How it works" title="From first call to ongoing protection" align="left" />
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
      <section className="section-pad" aria-labelledby="region-faq-heading">
        <div className="container-site">
          <SectionHeading id="region-faq-heading" eyebrow="FAQ" title="Common questions" />
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
            {service ? (
              <li>
                <Link href={`/services/${service.id}`} className="link-arrow">
                  {service.title} service
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </li>
            ) : null}
            <li>
              <Link href={`/locations/${loc.slug}`} className="link-arrow">
                Cybersecurity in {loc.short}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </li>
            {siblings.map((p) => (
              <li key={p.slug}>
                <Link href={`/locations/${p.region}/${p.slug}`} className="link-arrow">
                  {p.seoTitle}
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </li>
            ))}
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/blogs/${g.slug}`} className="link-arrow">
                  {g.title}
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
