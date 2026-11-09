import type { Metadata } from "next";
import Link from "next/link";
import { SocConsole } from "./components/home/soc-console";
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

const problems = [
  {
    icon: "bolt" as const,
    title: "Attackers already use AI",
    body: "Phishing is more convincing, recon is automated, and exploits for new vulnerabilities appear faster. Manual-only defense can't keep pace.",
  },
  {
    icon: "alert" as const,
    title: "Alert fatigue hides real threats",
    body: "Thousands of alerts a day, most of them noise. The one that matters gets buried, and your best people burn out triaging the rest.",
  },
  {
    icon: "brain" as const,
    title: "Your AI is a new attack surface",
    body: "Chatbots, copilots, and agents can be manipulated through prompt injection, leak sensitive data, or take actions nobody approved.",
  },
];

const pipeline = [
  { step: "Ingest", body: "Endpoint, identity, cloud, email, network, and AI-app telemetry.", who: "auto" },
  { step: "Correlate", body: "Machine learning baselines behavior and links related events.", who: "ai" },
  { step: "Triage", body: "AI enriches, maps to MITRE ATT&CK, and ranks by impact.", who: "ai" },
  { step: "Verify", body: "A security analyst validates every escalation.", who: "human" },
  { step: "Respond", body: "Pre-approved playbooks contain threats in minutes.", who: "human" },
];

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

const industries = [
  { title: "SaaS & technology", body: "SOC 2, secure SDLC, and customer security reviews that don't stall deals." },
  { title: "AI-native startups", body: "LLM red teaming and secure agent architecture before launch." },
  { title: "Fintech & payments", body: "PCI DSS, fraud-resistant identity, and API security." },
  { title: "Healthcare", body: "HIPAA safeguards and protection for patient data and devices." },
  { title: "E-commerce & retail", body: "Account takeover defense, payment security, and bot mitigation." },
  { title: "Professional services", body: "Email security, client-data protection, and ransomware readiness." },
];

const why = [
  {
    title: "AI does the heavy lifting. Humans make the call.",
    body: "Automation handles scale and speed. Experienced analysts and testers make the decisions that need judgment.",
  },
  {
    title: "Outcomes, not alert dumps",
    body: "You get a short, ranked list of what to fix and why, written for the people who will fix it.",
  },
  {
    title: "Your stack, not ours",
    body: "We work with the security tools you already own and only recommend new ones where there is a real gap.",
  },
  {
    title: "Security for the AI era",
    body: "We secure the AI you build and adopt, not just the infrastructure underneath it.",
  },
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
    a: "Contact us immediately by phone. Disconnect affected systems from the network rather than powering them off, so forensic evidence is preserved, and avoid using potentially compromised email accounts to coordinate.",
  },
];

export default function Home() {
  const latestPosts = [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40"
        aria-labelledby="hero-heading"
      >
        <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="bg-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="container-site relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow animate-fade-up">AI-powered cybersecurity</p>
            <h1
              id="hero-heading"
              className="mt-5 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
            >
              Stop threats at <span className="text-gradient">machine speed.</span> Keep humans in
              control.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              EclipticLink combines AI-driven detection, testing, and triage with experienced
              security analysts to protect your cloud, applications, people, and the AI systems
              you&apos;re building.
            </p>
            <div className="animate-fade-up-3 mt-9 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                Get a security assessment
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
            </div>
            <ul className="animate-fade-up-3 mt-10 grid max-w-lg grid-cols-1 gap-3 text-sm text-muted sm:grid-cols-2" role="list">
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
          <div className="animate-fade-up-2 relative">
            <SocConsole />
          </div>
        </div>
      </section>

      {/* ── Frameworks strip ─────────────────────────────────── */}
      <section aria-label="Security frameworks we align to" className="border-y border-line bg-bg-elevated">
        <div className="container-site flex flex-col items-center gap-5 px-5 py-8 sm:px-6 lg:flex-row lg:px-8">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-subtle">
            Aligned to
          </p>
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3 lg:justify-start" role="list">
            {frameworks.map((f) => (
              <li key={f} className="font-mono text-sm text-muted">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Problem ──────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="problem-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="problem-heading"
              eyebrow="The threat landscape"
              title="The attack surface grew. Security teams didn't."
              description="Cloud sprawl, SaaS everywhere, remote access, and now AI applications. Every new capability is another door. Most teams are defending it with the same headcount as five years ago."
            />
          </Reveal>
          <ul className="mt-14 grid gap-5 md:grid-cols-3" role="list">
            {problems.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 90} className="h-full">
                  <article className="card h-full p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-threat/30 bg-threat-soft text-[#ff8f9a]">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="section-pad bg-section-alt" aria-labelledby="services-heading">
        <div className="container-site">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading
                id="services-heading"
                eyebrow="Cybersecurity services"
                title="End-to-end protection, accelerated by AI"
                description="From finding weaknesses to watching for attackers to proving compliance, each service uses AI where it makes us faster and people where it matters."
                align="left"
              />
            </Reveal>
            <Button href="/services" variant="secondary" className="shrink-0">
              All services
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {services.map((s, i) => (
              <li key={s.id}>
                <Reveal delay={(i % 4) * 70} className="h-full">
                  <Link
                    href={`/services/${s.id}`}
                    className="card card-hover group flex h-full flex-col p-6"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-accent-soft text-accent">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.summary}</p>
                    <span className="link-arrow mt-5">
                      Learn more
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How AI fits ──────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="ai-heading">
        <div className="container-site">
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
          <ol className="relative mt-16 grid gap-4 lg:grid-cols-5" role="list">
            <div
              className="pointer-events-none absolute left-0 right-0 top-[2.2rem] hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent lg:block"
              aria-hidden="true"
            />
            {pipeline.map((p, i) => (
              <li key={p.step} className="relative">
                <Reveal delay={i * 90} className="h-full">
                  <div className="card h-full p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                      <span
                        className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider ${
                          p.who === "ai"
                            ? "border-signal/40 bg-signal-soft text-[#9db6ff]"
                            : p.who === "human"
                              ? "border-accent/40 bg-accent-soft text-accent"
                              : "border-line text-subtle"
                        }`}
                      >
                        {p.who === "ai" ? "AI" : p.who === "human" ? "Analyst" : "Automated"}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-ink">{p.step}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── AI / LLM security spotlight ─────────────────────── */}
      <section className="section-pad bg-section-alt" aria-labelledby="llm-heading">
        <div className="container-site grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">AI & LLM security</p>
            <h2 id="llm-heading" className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Shipping AI? Attackers are already testing it.
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
            <div className="card p-2">
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <p className="font-mono text-xs text-subtle">owasp-llm-top-10 · coverage</p>
                <span className="font-mono text-xs text-accent">tested</span>
              </div>
              <ul className="divide-y divide-line" role="list">
                {aiRisks.map((r) => (
                  <li key={r.id} className="flex items-start gap-4 px-4 py-4">
                    <span className="mt-0.5 rounded border border-line bg-bg-elevated px-2 py-0.5 font-mono text-[0.68rem] text-[#9db6ff]">
                      {r.id}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-ink">{r.name}</p>
                      <p className="mt-0.5 text-sm text-muted">{r.body}</p>
                    </div>
                    <Icon name="shield-check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="process-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="process-heading"
              eyebrow="Our approach"
              title="From blind spots to provable security"
              description="A practical, repeatable path that improves your security posture every month and shows the improvement."
            />
          </Reveal>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" role="list">
            {process.map((p, i) => (
              <li key={p.n}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="h-full border-t-2 border-accent/60 pt-6">
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
      <section className="section-pad bg-section-alt" aria-labelledby="industries-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="industries-heading"
              eyebrow="Who we protect"
              title="Built for growing companies with real risk"
              description="Teams that handle sensitive data, sell to security-conscious customers, or are building with AI, and need enterprise-grade security without an enterprise-sized security department."
            />
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {industries.map((ind, i) => (
              <li key={ind.title}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <div className="card h-full p-6">
                    <h3 className="text-lg font-semibold text-ink">{ind.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{ind.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Regions ──────────────────────────────────────────── */}
      <section className="border-y border-line px-5 py-12 sm:px-6 lg:px-8" aria-labelledby="regions-heading">
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
                  className="flex items-center gap-2 rounded-lg border border-line bg-surface px-4 py-2 text-sm text-ink transition hover:border-accent/50 hover:text-accent"
                >
                  <span className="font-mono text-xs text-subtle">{l.countryCode}</span>
                  {l.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why ──────────────────────────────────────────────── */}
      <section className="section-pad" aria-labelledby="why-heading">
        <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              id="why-heading"
              eyebrow="Why EclipticLink"
              title="Security partners, not another dashboard"
              description="We built EclipticLink for companies that need real security outcomes and can't afford to staff a full SOC, red team, and GRC function on their own."
              align="left"
            />
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                About EclipticLink
              </Button>
            </div>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2" role="list">
            {why.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="card h-full p-6">
                    <Icon name="shield-check" className="h-6 w-6 text-accent" />
                    <h3 className="mt-4 text-lg font-semibold text-ink">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section-pad bg-section-alt" aria-labelledby="testimonials-heading">
        <div className="container-site">
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
      <section className="section-pad" aria-labelledby="insights-heading">
        <div className="container-site">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              id="insights-heading"
              eyebrow="Security insights"
              title="Practical guidance from the front line"
              align="left"
            />
            <Button href="/blogs" variant="secondary" className="shrink-0">
              All articles
            </Button>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3" role="list">
            {latestPosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blogs/${post.slug}`} className="card card-hover group flex h-full flex-col p-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">{post.category}</span>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-ink group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-5 font-mono text-xs text-subtle">{post.readingTime} min read</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section-pad bg-section-alt" aria-labelledby="faq-heading">
        <div className="container-site max-w-3xl">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-12 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-ink [&::-webkit-details-marker]:hidden">
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

      <CtaBand />
    </>
  );
}
