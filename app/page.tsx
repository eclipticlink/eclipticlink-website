import type { Metadata } from "next";
import Link from "next/link";
import { BlogCover } from "./components/blog-cover";
import { Flag } from "./components/flag";
import { CountUp } from "./components/count-up";
import { CardSwitcher } from "./components/home/card-switcher";
import { HeroBackdrop } from "./components/home/hero-backdrop";
import { HeroShowcase } from "./components/home/hero-showcase";
import { LlmCoverage } from "./components/home/llm-coverage";
import { ServiceScroller } from "./components/home/service-scroller";
import { industryItems, threatItems, whyItems } from "./components/home/switch-data";
import { EdgeMotif } from "./components/home/edge-motif";
import { Icon } from "./components/icons";
import { JsonLd } from "./components/json-ld";
import { Reveal } from "./components/reveal";
import { SectionHeading } from "./components/section-heading";
import { TestimonialSlider } from "./components/testimonial-slider";
import { Button } from "./components/ui/button";
import { CtaBand } from "./components/cta-band";
import { blogPosts } from "./data/blogs";
import { locations } from "./data/locations";
import { BASE_OG, SITE_URL } from "./lib/config";
import { faqJsonLd } from "./lib/seo";
import { services } from "./services/data";

const TITLE = "EclipticLink | AI-Powered Cybersecurity Services";
const DESCRIPTION =
  "AI-powered cybersecurity for growing companies: MDR and SOC, penetration testing, AI and LLM security, cloud security, and SOC 2 / ISO 27001 compliance.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: { ...BASE_OG, title: TITLE, description: DESCRIPTION, url: SITE_URL },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const frameworks = [
  "MITRE ATT&CK",
  "OWASP Top 10",
  "OWASP LLM Top 10",
  "NIST CSF 2.0",
  "NIST AI RMF",
  "ISO 27001",
  "SOC 2",
  "PCI DSS",
  "HIPAA",
  "CIS Controls",
];


const pipeline = [
  { step: "Ingest", icon: "database", body: "Endpoint, identity, cloud, email, network, and AI-app telemetry.", who: "auto" },
  { step: "Correlate", icon: "brain", body: "Machine learning baselines behavior and links related events.", who: "ai" },
  { step: "Triage", icon: "radar", body: "AI enriches, maps to MITRE ATT&CK, and ranks by impact.", who: "ai" },
  { step: "Verify", icon: "user", body: "A security analyst validates every escalation.", who: "human" },
  { step: "Respond", icon: "shield-check", body: "Pre-approved playbooks contain threats in minutes.", who: "human" },
] as const;

const aiRisks = [
  { id: "LLM01", name: "Prompt injection", body: "Direct and indirect attacks that hijack model instructions." },
  { id: "LLM02", name: "Sensitive information disclosure", body: "System prompts, PII, or internal data leaking in responses." },
  { id: "LLM05", name: "Improper output handling", body: "Model output executed or rendered without validation." },
  { id: "LLM06", name: "Excessive agency", body: "Agents with more tools and permissions than they need." },
  { id: "LLM04", name: "Data and model poisoning", body: "Tampered training data, embeddings, or fine-tunes." },
  { id: "LLM03", name: "Supply chain", body: "Untrusted models, plugins, datasets, and MCP servers." },
];

const process = [
  { n: "01", title: "Assess", body: "Map your assets, threats, and current controls. Find out where you actually stand." },
  { n: "02", title: "Prioritize", body: "Rank risks by exploitability and business impact, not by scanner severity alone." },
  { n: "03", title: "Protect", body: "Fix the critical gaps first: identity, cloud, applications, and AI systems." },
  { n: "04", title: "Monitor", body: "Continuous, AI-assisted detection with humans in the loop for every escalation." },
  { n: "05", title: "Prove", body: "Reports and evidence your board, customers, and auditors can rely on." },
];



const faqs = [
  {
    q: "What is AI-powered cybersecurity?",
    a: "It means using machine learning and large language models to do the high-volume parts of security work: analyzing telemetry, correlating events, triaging alerts, mapping attack surfaces, and drafting reports. At EclipticLink, AI speeds up detection and testing, and human security experts validate findings and make response decisions.",
  },
  {
    q: "Which cybersecurity services does EclipticLink offer?",
    a: "Managed detection and response (MDR), penetration testing, AI and LLM security, cloud security, vulnerability management, compliance readiness (SOC 2, ISO 27001, HIPAA, PCI DSS), incident response and forensics, and application security / DevSecOps.",
  },
  {
    q: "Can you secure the AI applications and agents we are building?",
    a: "Yes. We red-team LLM apps and AI agents against the OWASP Top 10 for LLM Applications and MITRE ATLAS, testing prompt injection, data leakage, and excessive agency, and we help design guardrails, permission-aware retrieval, and AI governance aligned to NIST AI RMF and ISO/IEC 42001.",
  },
  {
    q: "Do we need to replace our current security tools?",
    a: "Usually not. We integrate with common EDR, SIEM, identity, and cloud platforms and recommend new tools only where there is a measurable gap in coverage.",
  },
  {
    q: "We're a small team without a security department. Is this for us?",
    a: "Yes. Many clients come to us without in-house security staff. We can act as your security team, including fractional vCISO leadership, and scale as you grow.",
  },
  {
    q: "What if we have an active incident right now?",
    a: "Email us immediately at contact@eclipticlink.com. Disconnect affected systems from the network rather than powering them off, so forensic evidence is preserved, and avoid using potentially compromised email accounts to coordinate.",
  },
];

const facts = [
  { value: services.length, suffix: "", label: "security services, one accountable team" },
  { value: frameworks.length, suffix: "", label: "frameworks our work maps to" },
  { value: locations.length, suffix: "", label: "regions with local regulatory alignment" },
  { value: 24, suffix: "/7", label: "AI-assisted monitoring with analyst escalation" },
];

/* Packet travel across the pipeline (see .packet in globals.css): it reaches node i at i × 1.2s. */
const NODE_STEP_S = 1.2;

export default function Home() {
  const latestPosts = [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-5 pb-16 pt-28 sm:px-6 sm:pt-32 lg:flex lg:min-h-[min(100svh,58rem)] lg:items-center lg:px-[5vw] lg:pb-14 lg:pt-28"
        aria-labelledby="hero-heading"
      >
        <HeroBackdrop />
        <div className="container-site relative z-10 grid items-center gap-16 lg:max-w-none! lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="hero-copy-out">
            <p className="eyebrow animate-fade-up">AI-powered cybersecurity</p>
            <h1
              id="hero-heading"
              className="mt-6 text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[3.5rem] xl:text-[3.9rem]"
            >
              <span className="line-mask">
                <span style={{ animationDelay: "0.06s" }}>Stop threats at</span>
              </span>
              <span className="line-mask">
                <span style={{ animationDelay: "0.16s" }} className="text-accent">
                  machine speed.
                </span>
              </span>
              <span className="line-mask text-subtle">
                <span style={{ animationDelay: "0.26s" }}>Keep humans in control.</span>
              </span>
            </h1>
            <p className="animate-fade-up-2 mt-6 max-w-xl text-lg leading-relaxed text-muted">
              EclipticLink combines AI-driven detection, testing, and triage with experienced
              security analysts to protect your cloud, applications, people, and the AI systems
              you&apos;re building.
            </p>
            <div className="animate-fade-up-3 mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" className="group">
                Get a security assessment
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
            </div>
            <ul
              className="animate-fade-up-3 mt-8 grid max-w-lg grid-cols-1 gap-3 text-sm text-muted sm:grid-cols-2"
              role="list"
            >
              {[
                "Human-verified escalations",
                "Works with your existing tools",
                "AI and LLM security built in",
                "Audit-ready reporting",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-up-2 relative min-w-0 lg:-mr-[4%]" style={{ perspective: "1400px" }}>
            <div className="hero-window-out">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ── Frameworks marquee ───────────────────────────────── */}
      <section aria-label="Security frameworks we align to" className="bg-navy">
        <div className="container-site flex flex-col items-center gap-5 px-5 py-7 sm:px-6 lg:flex-row lg:gap-10 lg:px-8">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-brand">Aligned to</p>
          <div className="marquee w-full overflow-hidden">
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className="flex shrink-0 items-center gap-3 pr-3"
                  role="list"
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {frameworks.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 font-mono text-sm text-white"
                    >
                      <Icon name="shield-check" className="h-4 w-4 text-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── At a glance ──────────────────────────────────────── */}
      <section aria-label="EclipticLink at a glance" className="px-5 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <dl className="container-site flow grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="theme-deep bg-deep flex flex-col-reverse rounded-2xl p-6 sm:p-7"
            >
              <dt className="mt-3 max-w-[14rem] text-sm leading-relaxed text-muted">{f.label}</dt>
              <dd className="text-5xl font-semibold tracking-[-0.04em] text-accent sm:text-6xl">
                <CountUp to={f.value} suffix={f.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Problem ──────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden" aria-labelledby="problem-heading">
        <EdgeMotif kind="radar" side="right" />
        <div className="container-site flow relative">
          <Reveal>
            <SectionHeading
              id="problem-heading"
              eyebrow="The threat landscape"
              title={
                <>
                  The attack surface grew. <span className="text-subtle">Security teams didn&apos;t.</span>
                </>
              }
              description="Cloud sprawl, SaaS everywhere, remote access, and now AI applications. Every new capability is another door. Most teams are defending it with the same headcount as five years ago."
              align="left"
            />
          </Reveal>
          <div className="mt-14">
            <CardSwitcher items={threatItems} label="Threats" />
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-section-alt" aria-labelledby="services-heading">
        <EdgeMotif kind="network" side="right" />
        <div className="container-site flow relative">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading
                id="services-heading"
                eyebrow="Cybersecurity services"
                title={
                  <>
                    Eight services. <span className="text-subtle">One accountable team.</span>
                  </>
                }
                description="From finding weaknesses to watching for attackers to proving compliance, each service uses AI where it makes us faster and people where it matters."
                align="left"
              />
            </Reveal>
            <Link href="/services" className="link-arrow group shrink-0 text-[0.95rem]">
              All services
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14">
            <ServiceScroller />
          </div>
        </div>
      </section>

      {/* ── How AI fits: the detection pipeline ─────────────── */}
      <section className="section-pad relative overflow-hidden" aria-labelledby="ai-heading">
        <div className="container-site flow">
          <Reveal>
            <SectionHeading
              id="ai-heading"
              eyebrow="How it works"
              title={
                <>
                  AI does the triage. <span className="text-accent">Humans make the call.</span>
                </>
              }
              description="AI is excellent at volume and speed, and it can still be wrong. Our detection pipeline uses AI where it outperforms people and keeps analysts accountable for every decision that affects your business."
            />
          </Reveal>
          <div className="relative mt-16">
            {/* The line a signal travels: centre of the first node to centre of the last */}
            <div
              className="pipeline-track pointer-events-none absolute top-7 hidden h-0.5 bg-brand/30 lg:block"
              style={{ left: "calc((100% - 4rem) / 10)", right: "calc((100% - 4rem) / 10)" }}
              aria-hidden="true"
            >
              <span className="packet absolute -left-[7px] -top-[6px] block h-3.5 w-3.5 rounded-full bg-deep ring-4 ring-brand/60" />
            </div>
            <ol className="relative grid gap-8 lg:grid-cols-5 lg:gap-4" role="list">
              {pipeline.map((p, i) => (
                <li key={p.step}>
                  <Reveal delay={i * 90} className="h-full">
                    <div className="flex h-full gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                      <div
                        className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 bg-surface ${
                          p.who === "ai"
                            ? "border-signal/35 text-signal"
                            : p.who === "human"
                              ? "border-accent/40 text-accent"
                              : "border-line-strong text-muted"
                        }`}
                        style={{ "--d": `${i * NODE_STEP_S}s` } as React.CSSProperties}
                      >
                        <span
                          className={`absolute inset-1 rounded-full ${
                            p.who === "ai" ? "bg-signal-soft" : p.who === "human" ? "bg-accent-soft" : "bg-surface-2"
                          }`}
                          aria-hidden="true"
                        />
                        <Icon name={p.icon} className="relative h-6 w-6" />
                        <span
                          className="node-lit absolute -inset-0.5 flex items-center justify-center rounded-full bg-brand-strong text-white"
                          aria-hidden="true"
                        >
                          <Icon name={p.icon} className="h-6 w-6" />
                        </span>
                        <span className="node-ping absolute -inset-0.5 rounded-full border-2 border-brand-strong" aria-hidden="true" />
                        <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-surface font-mono text-[0.6rem] text-ink">
                          {i + 1}
                        </span>
                      </div>
                      <div className="lg:mt-6">
                        <span
                          className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider ${
                            p.who === "ai"
                              ? "border-signal/30 bg-signal-soft text-signal"
                              : p.who === "human"
                                ? "border-accent/30 bg-accent-soft text-accent"
                                : "border-line text-subtle"
                          }`}
                        >
                          {p.who === "ai" ? "AI" : p.who === "human" ? "Analyst" : "Automated"}
                        </span>
                        <h3 className="mt-3 text-lg font-semibold text-ink">{p.step}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── AI / LLM security spotlight ─────────────────────── */}
      <section className="section-pad bg-section-alt" aria-labelledby="llm-heading">
        <div className="container-site flow grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">AI & LLM security</p>
            <h2 id="llm-heading" className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Shipping AI? <span className="text-subtle">Attackers are already testing it.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Every chatbot, copilot, RAG pipeline, and autonomous agent adds a new attack surface.
              We red-team your AI applications the way real attackers do, then help you put
              guardrails in place that hold up in production.
            </p>
            <ul className="mt-7 space-y-3 text-muted" role="list">
              {[
                "Prompt injection and jailbreak testing, direct and indirect",
                "Permission-aware RAG and least-privilege agent design",
                "AI governance aligned to NIST AI RMF and ISO/IEC 42001",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/services/ai-security">Explore AI security</Button>
              <Button href="/blogs/prompt-injection-attacks-how-to-secure-llm-applications" variant="secondary">
                Read: Prompt injection guide
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <LlmCoverage risks={aiRisks} />
          </Reveal>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="process-heading">
        <div className="container-site flow">
          <Reveal>
            <SectionHeading
              id="process-heading"
              eyebrow="Our approach"
              title="From blind spots to provable security"
              description="A practical, repeatable path that improves your security posture every month and shows the improvement."
            />
          </Reveal>
          {/* One line that fills as you scroll through the five steps */}
          <div className="relative mt-14 hidden h-1 rounded-full bg-tint lg:block" aria-hidden="true">
            <div className="progress-fill absolute inset-0 rounded-full bg-brand-strong" />
          </div>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-0 lg:grid-cols-5" role="list">
            {process.map((p, i) => (
              <li key={p.n}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="h-full border-t-2 border-brand-strong pt-6 lg:border-t-0 lg:pt-7">
                    <span className="font-mono text-sm text-accent">{p.n}</span>
                    <h3 className="mt-2 text-xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-section-alt" aria-labelledby="industries-heading">
        <EdgeMotif kind="lock" side="right" />
        <div className="container-site flow relative">
          <Reveal>
            <SectionHeading
              id="industries-heading"
              eyebrow="Who we protect"
              title={
                <>
                  Built for growing companies <span className="text-subtle">with real risk.</span>
                </>
              }
              description="Teams that handle sensitive data, sell to security-conscious customers, or are building with AI, and need enterprise-grade security without an enterprise-sized security department."
              align="left"
            />
          </Reveal>
          <div className="mt-14">
            <CardSwitcher items={industryItems} label="Industries" />
          </div>
        </div>
      </section>

      {/* ── Regions ──────────────────────────────────────────── */}
      <section className="px-5 py-12 sm:px-6 lg:px-8" aria-labelledby="regions-heading">
        <div className="container-site flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 id="regions-heading" className="text-xl font-semibold text-ink">
              Aligned to local regulations
            </h2>
            <p className="mt-1 text-sm text-muted">NCA ECC, SAMA, UAE PDPL, Dubai ISR, Cyber Essentials, SOC 2, HIPAA and more.</p>
          </div>
          <ul className="flex flex-wrap gap-2" role="list">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/locations/${l.slug}`}
                  className="flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent active:scale-[0.97]"
                >
                  <Flag code={l.countryCode} className="h-4 w-6" />
                  {l.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why ──────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-section-alt" aria-labelledby="why-heading">
        <EdgeMotif kind="fingerprint" side="left" />
        <div className="container-site flow relative">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading
                id="why-heading"
                eyebrow="Why EclipticLink"
                title={
                  <>
                    Security partners, <span className="text-subtle">not another dashboard.</span>
                  </>
                }
                description="We built EclipticLink for companies that need real security outcomes and can't afford to staff a full SOC, red team, and GRC function on their own."
                align="left"
              />
            </Reveal>
            <Link href="/about" className="link-arrow group shrink-0 text-[0.95rem]">
              About EclipticLink
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-14">
            <CardSwitcher items={whyItems} label="Why EclipticLink" />
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="testimonials-heading">
        <div className="container-site flow">
          <Reveal>
            <SectionHeading
              id="testimonials-heading"
              eyebrow="Client experience"
              title="What clients say about working with us"
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14">
              <TestimonialSlider />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Insights ─────────────────────────────────────────── */}
      <section className="section-pad bg-section-alt" aria-labelledby="insights-heading">
        <div className="container-site flow">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              id="insights-heading"
              eyebrow="Security insights"
              title="Practical guidance from the front line"
              align="left"
            />
            <Link href="/blogs" className="link-arrow group shrink-0 text-[0.95rem]">
              All articles
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-3" role="list">
            {latestPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blogs/${post.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden rounded-2xl">
                  <BlogCover category={post.category} seed={post.slug} className="aspect-[16/9]" />
                  <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">{post.category}</span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-6 flex items-center justify-between border-t border-line pt-4">
                    <span className="font-mono text-xs text-subtle">{post.readingTime} min read</span>
                    <span className="link-arrow text-xs">
                      Read
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </span>
                  </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="faq-heading">
        <div className="container-site flow grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Straight answers about how we work, what we cover, and what to do if you're under attack right now."
            align="left"
          />
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="faq group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-ink transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                  <h3>{f.q}</h3>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-accent transition-transform duration-200 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="pt-3 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
