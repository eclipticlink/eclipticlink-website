import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "../components/cta-band";
import { Icon } from "../components/icons";
import { JsonLd } from "../components/json-ld";
import { PageHero } from "../components/page-hero";
import { locations } from "../data/locations";
import { BASE_OG, SITE_URL } from "../lib/config";
import { breadcrumbJsonLd } from "../lib/seo";

const TITLE = "Cybersecurity by Region | UAE, KSA, UK, US";
const DESCRIPTION =
  "AI-powered cybersecurity in Saudi Arabia, the UAE, the UK, the US, and Pakistan, aligned to each region's security and data-protection regulations.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/locations` },
  openGraph: { ...BASE_OG, title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/locations` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(SITE_URL, [{ name: "Locations", path: "/locations" }])} />
      <PageHero
        eyebrow="Where we work"
        title="Cybersecurity services by region"
        description="Threats are global, but regulations are local. We align our services to the security and data-protection requirements of each market we serve."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]}
      />
      <section className="section-pad" aria-labelledby="regions-heading">
        <div className="container-site">
          <h2 id="regions-heading" className="sr-only">
            Regions
          </h2>
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" role="list">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="card card-hover group flex h-full flex-col p-7">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">{l.countryCode}</span>
                  <h3 className="mt-3 text-2xl font-semibold text-ink group-hover:text-accent">{l.short}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {l.regulations
                      .slice(0, 3)
                      .map((r) => r.name.replace(/\s*\(.*?\)\s*/g, " ").trim())
                      .join(" · ")}
                  </p>
                  <span className="link-arrow mt-6">
                    Cybersecurity in {l.short}
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
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
