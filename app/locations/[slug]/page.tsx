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
import { getLocationBySlug, locations } from "../../data/locations";
import { BASE_OG, SITE_URL } from "../../lib/config";
import { breadcrumbJsonLd, faqJsonLd } from "../../lib/seo";
import { getServiceBySlug } from "../../services/data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};
  const url = `${SITE_URL}/locations/${loc.slug}`;
  return {
    title: loc.seoTitle,
    description: loc.metaDescription,
    keywords: loc.keywords,
    alternates: { canonical: url },
    openGraph: { ...BASE_OG, title: `${loc.seoTitle} | EclipticLink`, description: loc.metaDescription, url },
    twitter: { card: "summary_large_image", title: loc.seoTitle, description: loc.metaDescription },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) notFound();

  const url = `${SITE_URL}/locations/${loc.slug}`;
  const others = locations.filter((l) => l.slug !== loc.slug);
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Cybersecurity services in ${loc.short}`,
    serviceType: "Cybersecurity",
    description: loc.metaDescription,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: loc.short, identifier: loc.countryCode },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Cybersecurity services in ${loc.short}`,
      itemListElement: loc.services.map((s) => {
        const svc = getServiceBySlug(s.serviceId);
        return {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: svc?.title, url: `${SITE_URL}/services/${s.serviceId}` },
        };
      }),
    },
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(SITE_URL, [
            { name: "Locations", path: "/locations" },
            { name: loc.short, path: `/locations/${loc.slug}` },
          ]),
          serviceJsonLd,
          faqJsonLd(loc.faqs),
        ]}
      />

      <PageHero
        eyebrow={`Cybersecurity · ${loc.short}`}
        title={loc.h1}
        description={loc.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations", href: "/locations" }, { label: loc.short }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Get a security assessment
            <Icon name="arrow" className="h-4 w-4" />
          </Button>
          <Button href="/services/incident-response" variant="danger" size="lg">
            Under attack?
          </Button>
        </div>
      </PageHero>

      {/* Context */}
      <section className="section-pad" aria-labelledby="context-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            id="context-heading"
            eyebrow="The landscape"
            title={`Why security is rising up the agenda in ${loc.short}`}
            align="left"
          />
          <ul className="space-y-4" role="list">
            {loc.context.map((c, i) => (
              <li key={i}>
                <Reveal delay={i * 80}>
                  <div className="card flex gap-4 p-5">
                    <Icon name="alert" className="mt-0.5 h-5 w-5 shrink-0 text-warn" />
                    <p className="leading-relaxed text-muted">{c}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Regulations */}
      <section className="section-pad bg-section-alt" aria-labelledby="regs-heading">
        <div className="container-site">
          <SectionHeading
            id="regs-heading"
            eyebrow="Compliance"
            title={`Regulations and standards we help with in ${loc.short}`}
            description="We help you understand which requirements apply, close the gaps, and produce the evidence regulators, auditors, and customers ask for."
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2" role="list">
            {loc.regulations.map((r, i) => (
              <li key={r.name}>
                <Reveal delay={(i % 2) * 80} className="h-full">
                  <article className="card h-full p-7">
                    <Icon name="shield-check" className="h-6 w-6 text-accent" />
                    <h3 className="mt-4 text-xl font-semibold text-ink">{r.name}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{r.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-subtle">
            This overview is for general information, not legal advice. Confirm your specific obligations with
            qualified legal counsel.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad" aria-labelledby="loc-services-heading">
        <div className="container-site">
          <SectionHeading
            id="loc-services-heading"
            eyebrow="Services"
            title={`Most requested services in ${loc.short}`}
            align="left"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-2" role="list">
            {loc.services.map((s) => {
              const svc = getServiceBySlug(s.serviceId);
              if (!svc) return null;
              return (
                <li key={s.serviceId}>
                  <Link href={`/services/${svc.id}`} className="card card-hover group flex h-full gap-5 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent">
                      <Icon name={svc.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-lg font-semibold text-ink group-hover:text-accent">{svc.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{s.why}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6">
            <Link href="/services" className="link-arrow">
              See all cybersecurity services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries + delivery */}
      <section className="section-pad bg-section-alt" aria-labelledby="industries-loc-heading">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Industries</p>
            <h2 id="industries-loc-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink">
              Who we work with in {loc.short}
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2" role="list">
              {loc.industries.map((ind) => (
                <li key={ind} className="rounded-lg border border-line bg-surface px-4 py-2 text-sm text-ink">
                  {ind}
                </li>
              ))}
            </ul>
          </div>
          <div className="card brackets p-7">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">How we deliver</p>
            <p className="mt-4 text-lg leading-relaxed text-ink">{loc.delivery}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              AI handles the high-volume work of monitoring, triage, and reconnaissance. Experienced security
              professionals validate findings and make every decision that affects your business.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" aria-labelledby="loc-faq-heading">
        <div className="container-site max-w-3xl">
          <SectionHeading id="loc-faq-heading" eyebrow="FAQ" title={`Cybersecurity in ${loc.short}: common questions`} />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {loc.faqs.map((f, i) => (
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

      {/* Other regions */}
      <section className="border-t border-line px-5 py-12 sm:px-6 lg:px-8" aria-labelledby="other-regions-heading">
        <div className="container-site flex flex-col gap-5 sm:flex-row sm:items-center">
          <h2 id="other-regions-heading" className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-subtle">
            Other regions
          </h2>
          <ul className="flex flex-wrap gap-2" role="list">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/locations/${o.slug}`}
                  className="rounded-lg border border-line px-3 py-1.5 text-sm text-muted transition hover:border-accent/50 hover:text-accent"
                >
                  Cybersecurity in {o.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={`Talk to a security expert about ${loc.short}`}
        body="Tell us about your environment and the requirements you face. We'll come back within one business day with a practical, prioritized next step."
      />
    </>
  );
}
