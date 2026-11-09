import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "../components/cta-band";
import { Icon } from "../components/icons";
import { JsonLd } from "../components/json-ld";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { SectionHeading } from "../components/section-heading";
import { Button } from "../components/ui/button";
import { BASE_OG, SITE_URL } from "../lib/config";
import { breadcrumbJsonLd } from "../lib/seo";
import { services } from "./data";

const TITLE = "Cybersecurity Services: MDR, Pentesting & AI | EclipticLink";
const DESCRIPTION =
  "AI-powered cybersecurity services: managed detection and response, penetration testing, AI and LLM security, cloud security, compliance, and incident response.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "cybersecurity services",
    "AI-powered cybersecurity",
    "managed security services",
    "penetration testing",
    "managed detection and response",
    "AI security",
    "cloud security",
    "compliance services",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: { ...BASE_OG, title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/services` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const groups = [
  {
    label: "Detect & respond",
    body: "See attacks early and contain them fast.",
    ids: ["managed-detection-response", "incident-response"],
  },
  {
    label: "Find & fix",
    body: "Discover weaknesses before attackers do.",
    ids: ["penetration-testing", "vulnerability-management", "application-security"],
  },
  {
    label: "Secure the platform",
    body: "Harden the cloud and AI systems your business runs on.",
    ids: ["cloud-security", "ai-security"],
  },
  {
    label: "Govern & prove",
    body: "Turn security work into trust customers and auditors accept.",
    ids: ["compliance-grc"],
  },
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "EclipticLink cybersecurity services",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/services/${s.id}`,
    name: s.title,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(SITE_URL, [{ name: "Services", path: "/services" }]), itemListJsonLd]} />
      <PageHero
        eyebrow="Cybersecurity services"
        title="AI-powered cybersecurity services, end to end"
        description="Detect threats, find vulnerabilities, secure your cloud and AI systems, and prove it to customers and auditors. Each service pairs AI speed with experienced security professionals."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" size="lg">
            Get a security assessment
          </Button>
          <Button href="/services/incident-response" variant="danger" size="lg">
            Under attack?
          </Button>
        </div>
      </PageHero>

      <section className="section-pad" aria-labelledby="catalog-heading">
        <div className="container-site">
          <h2 id="catalog-heading" className="sr-only">
            Service catalog
          </h2>
          <div className="space-y-16">
            {groups.map((g) => (
              <div key={g.label} className="grid gap-8 lg:grid-cols-[16rem_1fr]">
                <div>
                  <p className="eyebrow">{g.label}</p>
                  <p className="mt-3 text-muted">{g.body}</p>
                </div>
                <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" role="list">
                  {g.ids.map((id, i) => {
                    const s = services.find((x) => x.id === id)!;
                    return (
                      <li key={id}>
                        <Reveal delay={i * 70} className="h-full">
                          <Link href={`/services/${s.id}`} className="card card-hover group flex h-full flex-col p-6">
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent">
                              <Icon name={s.icon} className="h-5 w-5" />
                            </span>
                            <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.summary}</p>
                            <ul className="mt-5 space-y-1.5 text-sm text-muted" role="list">
                              {s.subServices.slice(0, 3).map((sub) => (
                                <li key={sub.id} className="flex gap-2">
                                  <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                                  {sub.title}
                                </li>
                              ))}
                            </ul>
                            <span className="link-arrow mt-6">
                              Explore {s.title}
                              <Icon name="arrow" className="h-4 w-4" />
                            </span>
                          </Link>
                        </Reveal>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-section-alt" aria-labelledby="engage-heading">
        <div className="container-site">
          <SectionHeading
            id="engage-heading"
            eyebrow="Ways to engage"
            title="Start where your risk is highest"
          />
          <ul className="mt-12 grid gap-5 md:grid-cols-3" role="list">
            {[
              {
                t: "Security assessment",
                b: "A fixed-scope review of your attack surface, cloud, identity, and AI usage, with a prioritized roadmap.",
              },
              {
                t: "Project engagement",
                b: "Penetration tests, compliance readiness, cloud hardening, or AI red teaming with clear scope and deliverables.",
              },
              {
                t: "Managed security",
                b: "Ongoing MDR, vulnerability management, and vCISO leadership as an extension of your team.",
              },
            ].map((x) => (
              <li key={x.t} className="card p-6">
                <h3 className="text-lg font-semibold text-ink">{x.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{x.b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
