import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "../../components/cta-band";
import { Icon } from "../../components/icons";
import { JsonLd } from "../../components/json-ld";
import { PageHero } from "../../components/page-hero";
import { Reveal } from "../../components/reveal";
import { SectionHeading } from "../../components/section-heading";
import { Button } from "../../components/ui/button";
import { blogPosts } from "../../data/blogs";
import { BASE_OG, SITE_URL } from "../../lib/config";
import { breadcrumbJsonLd, faqJsonLd } from "../../lib/seo";
import { getAllServiceSlugs, getServiceBySlug, services } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `${SITE_URL}/services/${service.id}`;
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      ...BASE_OG,
      title: `${service.seoTitle} | EclipticLink`,
      description: service.metaDescription,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = `${SITE_URL}/services/${service.id}`;
  const isIR = service.id === "incident-response";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: ["US", "GB", "AE", "SA", "PK"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: sub.title, description: sub.summary },
      })),
    },
  };

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);
  const relatedPosts = blogPosts.filter((p) => p.relatedService === service.id).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(SITE_URL, [
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.id}` },
          ]),
          serviceJsonLd,
          faqJsonLd(service.faqs),
        ]}
      />

      <PageHero
        eyebrow={service.title}
        title={service.h1}
        description={service.details}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          {isIR ? (
            <>
              <Button href="tel:+923438788662" variant="danger" size="lg">
                Call now: +92 343 8788662
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Set up an IR retainer
              </Button>
            </>
          ) : (
            <>
              <Button href="/contact" size="lg">
                Talk to a security expert
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                All services
              </Button>
            </>
          )}
        </div>
      </PageHero>

      {/* What's included */}
      <section className="section-pad" aria-labelledby="included-heading">
        <div className="container-site">
          <SectionHeading
            id="included-heading"
            eyebrow="What's included"
            title={`${service.title}: capabilities`}
            align="left"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2" role="list">
            {service.subServices.map((sub, i) => (
              <li key={sub.id} id={sub.id}>
                <Reveal delay={(i % 2) * 80} className="h-full">
                  <article className="card h-full p-7">
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                    <h3 className="mt-2 text-xl font-semibold text-ink">{sub.title}</h3>
                    <p className="mt-1 font-medium text-accent">{sub.summary}</p>
                    <p className="mt-3 leading-relaxed text-muted">{sub.details}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI edge */}
      <section className="section-pad bg-section-alt" aria-labelledby="ai-edge-heading">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Where AI helps</p>
            <h2 id="ai-edge-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              AI-accelerated, human-verified
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{service.aiEdge}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Outcomes</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/90" role="list">
                {service.outcomes.map((o) => (
                  <li key={o} className="flex gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[#9db6ff]">Deliverables</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink/90" role="list">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-2.5">
                    <Icon name="shield-check" className="mt-0.5 h-4 w-4 shrink-0 text-[#9db6ff]" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" aria-labelledby="service-faq-heading">
        <div className="container-site max-w-3xl">
          <SectionHeading id="service-faq-heading" eyebrow="FAQ" title={`${service.title} questions`} />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {service.faqs.map((f, i) => (
              <details key={f.q} className="group py-5" open={i === 0}>
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
      <section className="section-pad bg-section-alt" aria-labelledby="related-heading">
        <div className="container-site">
          <SectionHeading id="related-heading" eyebrow="Related" title="Explore related services" align="left" />
          <ul className="mt-10 grid gap-5 md:grid-cols-3" role="list">
            {related.map((s) => (
              <li key={s.id}>
                <Link href={`/services/${s.id}`} className="card card-hover flex h-full flex-col p-6">
                  <Icon name={s.icon} className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{s.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
          {relatedPosts.length > 0 ? (
            <div className="mt-12">
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Further reading</h3>
              <ul className="mt-4 grid gap-3 md:grid-cols-2" role="list">
                {relatedPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blogs/${p.slug}`} className="link-arrow text-base">
                      {p.title}
                      <Icon name="arrow" className="h-4 w-4 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <CtaBand
        title={isIR ? "Prepare before the next incident" : `Ready to talk about ${service.title}?`}
        body="Tell us about your environment and concerns. A security specialist will come back within one business day with a practical next step."
      />
    </>
  );
}
