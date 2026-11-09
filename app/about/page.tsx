import type { Metadata } from "next";
import { CtaBand } from "../components/cta-band";
import { Icon } from "../components/icons";
import { JsonLd } from "../components/json-ld";
import { PageHero } from "../components/page-hero";
import { Reveal } from "../components/reveal";
import { SectionHeading } from "../components/section-heading";
import { BASE_OG, SITE_URL } from "../lib/config";
import { breadcrumbJsonLd } from "../lib/seo";

const TITLE = "About EclipticLink | AI-Powered Cybersecurity Company";
const DESCRIPTION =
  "EclipticLink is an AI-powered cybersecurity company helping growing businesses detect threats, secure cloud and AI systems, and prove compliance.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: { ...BASE_OG, title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/about` },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const principles = [
  {
    icon: "eye" as const,
    title: "Think like an attacker",
    body: "We prioritize what's actually exploitable. Every recommendation answers one question: how would this be used against you?",
  },
  {
    icon: "brain" as const,
    title: "AI where it's better, humans where it matters",
    body: "Automation handles volume and speed. Experienced people make decisions, validate findings, and stay accountable.",
  },
  {
    icon: "lock" as const,
    title: "Secure by design",
    body: "We have built software ourselves, so our security advice fits how engineering teams really work and ship.",
  },
  {
    icon: "shield-check" as const,
    title: "Radical clarity",
    body: "Plain-language reporting, honest scoping, and no fear-driven upselling. You always know what we found and why it matters.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "Founded as an engineering studio",
    body: "EclipticLink began building software, cloud platforms, and AI systems for growing companies.",
  },
  {
    year: "Growth",
    title: "Building with AI, and seeing the risk",
    body: "Delivering AI and automation projects showed us first-hand how quickly new attack surfaces appear: LLM apps, agents with API access, sprawling SaaS integrations.",
  },
  {
    year: "Today",
    title: "Focused on AI-powered cybersecurity",
    body: "We now focus entirely on cybersecurity: using AI to make detection, testing, and compliance faster, and securing the AI systems our clients build.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(SITE_URL, [{ name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About EclipticLink"
        title="Builders turned defenders, for the AI era"
        description="We spent years building software and AI systems. Now we use that experience, and AI itself, to protect companies from attackers who are moving faster than ever."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="section-pad" aria-labelledby="mission-heading">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">Our mission</p>
            <h2 id="mission-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Enterprise-grade security for companies without an enterprise security team
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-muted">
              Attackers use automation and AI to find and exploit weaknesses at scale. Most growing
              companies can&apos;t hire a full SOC, red team, and compliance function to keep up.
              EclipticLink closes that gap by pairing AI-driven tooling with experienced security
              professionals, so you get the coverage of a large security organization with the
              responsiveness of a dedicated partner.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We work with companies across the United States, United Kingdom, United Arab
              Emirates, Saudi Arabia, and Pakistan.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-section-alt" aria-labelledby="principles-heading">
        <div className="container-site">
          <SectionHeading id="principles-heading" eyebrow="How we work" title="The principles behind every engagement" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {principles.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="card h-full p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="story-heading">
        <div className="container-site max-w-4xl">
          <SectionHeading id="story-heading" eyebrow="Our story" title="How we got here" align="left" />
          <ol className="relative mt-12 space-y-10 border-l border-line pl-8" role="list">
            {timeline.map((t, i) => (
              <li key={t.year} className="relative">
                <Reveal delay={i * 90}>
                  <span
                    className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg"
                    aria-hidden="true"
                  />
                  <p className="font-mono text-sm text-accent">{t.year}</p>
                  <h3 className="mt-1 text-xl font-semibold text-ink">{t.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{t.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Let's make your company a harder target" />
    </>
  );
}
