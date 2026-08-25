import type { Metadata } from "next";
import Link from "next/link";
import { HeroBackgroundSlider } from "./components/hero-background-slider";
import {
  HomeEngageSection,
  HomePipelineSection,
  HomeProcessSection,
  HomeUseCasesSection,
} from "./components/home-rich-sections";
import { Reveal } from "./components/reveal";
import { SectionHeading } from "./components/section-heading";
import { TestimonialSlider } from "./components/testimonial-slider";
import { Button } from "./components/ui/button";
import { BASE_OG, SITE_URL } from "./lib/config";
import { services } from "./services/data";

export const metadata: Metadata = {
  title: {
    absolute: "EclipticLink | Lead Systems, CRM Workflows & Custom Software",
  },
  description:
    "EclipticLink designs lead response, CRM, and booking workflows on GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier, and builds AI products and software when your stack needs more.",
  keywords: [
    "lead follow-up automation",
    "CRM workflow automation",
    "GoHighLevel agency",
    "GHL automation",
    "n8n Make Zapier",
    "HubSpot Zoho CRM",
    "workflow automation company",
    "AI development company",
    "hire automation specialists",
    "EclipticLink",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    ...BASE_OG,
    title: "EclipticLink | Lead Systems, CRM Workflows & Custom Software",
    description:
      "Follow-up and pipeline systems on GHL, HubSpot, Zoho, n8n, Make, and Zapier, with AI and product engineering when you need to go deeper.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "EclipticLink | Lead Systems & CRM Workflows",
    description:
      "Faster follow-up, cleaner pipelines, and the engineering behind them. GoHighLevel, HubSpot, Zoho, n8n, Make, Zapier.",
  },
};

const platforms = ["GoHighLevel", "n8n", "Make", "Zapier", "HubSpot", "Zoho"];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which platforms does EclipticLink work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of our client work lives in GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier. We connect those tools to how your sales and ops already run: capture, follow-up, pipeline hygiene, nurture, and booking.",
      },
    },
    {
      "@type": "Question",
      name: "What does EclipticLink typically deliver?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Day to day we ship lead and CRM workflows, outreach sequences, and integrations across your stack. When a workflow is not enough, the same team builds chatbots, LLM-backed features, and the web, mobile, or cloud software around them.",
      },
    },
    {
      "@type": "Question",
      name: "What is speed-to-lead, and why should we care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Speed-to-lead is how quickly someone hears back after a form, call, or chat. Buyers expect a reply while interest is still warm. Well-built workflows can send SMS and email, assign an owner, and start nurture in seconds, so your team is not racing a spreadsheet.",
      },
    },
    {
      "@type": "Question",
      name: "Can you scale the team up or down mid-project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If scope expands or you need to ease intensity for a stretch, we adjust capacity. Extra specialists can join without restarting the relationship from zero.",
      },
    },
    {
      "@type": "Question",
      name: "How much visibility do we get during delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We review requirements, share an estimate, and only move forward once you are comfortable with cost and timing. From there you get a clear proposal, milestones, and regular progress, not black-box delivery.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can work begin?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once requirements are clear and the proposal is approved, we start quickly. Exact timing depends on scope; the proposal will spell out the calendar so there are no surprises.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle privacy and confidentiality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We sign NDAs when needed. The people on your work are full-time team members covered by our confidentiality agreements.",
      },
    },
    {
      "@type": "Question",
      name: "Do we need to be technical to work with you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bring a clear sense of the outcome you want. We handle the tools, architecture, and trade-offs, and we explain decisions in plain language along the way.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL }],
};

const faqs = [
  {
    q: "Which platforms does EclipticLink work with?",
    a: "Most of our client work lives in GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier. We connect those tools to how your sales and ops already run: capture, follow-up, pipeline hygiene, nurture, and booking.",
  },
  {
    q: "What does EclipticLink typically deliver?",
    a: "Day to day we ship lead and CRM workflows, outreach sequences, and integrations across your stack. When a workflow is not enough, the same team builds chatbots, LLM-backed features, and the web, mobile, or cloud software around them.",
  },
  {
    q: "What is speed-to-lead, and why should we care?",
    a: "Speed-to-lead is how quickly someone hears back after a form, call, or chat. Buyers expect a reply while interest is still warm. Well-built workflows can send SMS and email, assign an owner, and start nurture in seconds, so your team is not racing a spreadsheet.",
  },
  {
    q: "Can you scale the team up or down mid-project?",
    a: "Yes. If scope expands or you need to ease intensity for a stretch, we adjust capacity. Extra specialists can join without restarting the relationship from zero.",
  },
  {
    q: "How much visibility do we get during delivery?",
    a: "We review requirements, share an estimate, and only move forward once you are comfortable with cost and timing. From there you get a clear proposal, milestones, and regular progress, not black-box delivery.",
  },
  {
    q: "How soon can work begin?",
    a: "Once requirements are clear and the proposal is approved, we start quickly. Exact timing depends on scope; the proposal will spell out the calendar so there are no surprises.",
  },
  {
    q: "How do you handle privacy and confidentiality?",
    a: "We sign NDAs when needed. The people on your work are full-time team members covered by our confidentiality agreements.",
  },
  {
    q: "Do we need to be technical to work with you?",
    a: "No. Bring a clear sense of the outcome you want. We handle the tools, architecture, and trade-offs, and we explain decisions in plain language along the way.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative flex min-h-[min(92vh,48rem)] flex-col overflow-hidden text-white sm:min-h-[min(88vh,50rem)]"
        aria-labelledby="hero-heading"
      >
        <HeroBackgroundSlider />
        <div
          className="absolute inset-0 z-1 bg-linear-to-b from-brand-dark/55 via-brand-dark/75 to-brand-dark/95"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-1 opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <p className="eyebrow animate-fade-up">EclipticLink</p>
          <h1
            id="hero-heading"
            className="animate-fade-up-delay mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Turn inbound interest into booked conversations
          </h1>
          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            We design the follow-up, CRM, and booking workflows sales teams actually rely on,
            across GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier.
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Book a discovery call
            </Button>
            <Button href="/services/ai-automations" variant="secondary" size="lg">
              See how we work
            </Button>
          </div>
        </div>

        {/* Platforms, part of hero, not a separate band */}
        <div className="relative z-10 border-t border-white/10 bg-brand-dark/55 px-4 py-5 backdrop-blur-md sm:px-6 sm:py-6 lg:px-8">
          <div className="container-site">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-8">
              <p className="shrink-0 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-brand-teal/90">
                Platforms we ship on
              </p>
              <ul
                className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 lg:justify-end"
                role="list"
              >
                {platforms.map((name, i) => (
                  <li key={name} className="flex items-center">
                    {i > 0 ? (
                      <span className="mx-3 hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true" />
                    ) : null}
                    <span className="px-1 font-display text-sm font-medium tracking-wide text-white/80 sm:text-[0.95rem]">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HomePipelineSection />

      {/* Services */}
      <section id="services" className="section-pad bg-atmosphere" aria-labelledby="services-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="services-heading"
              eyebrow="What we do"
              title="Workflows that catch every lead. Products when you need more."
              description="Most engagements start with the systems behind response time and pipeline hygiene. When the work calls for it, we also build intelligent products and the software that sits underneath."
            />
          </Reveal>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {services.map((service, i) => (
              <li key={service.id}>
                <Reveal delay={i * 70} className="h-full">
                  <Link
                    href={`/services/${service.id}`}
                    className="card-lift group flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-6 hover:border-brand-teal-muted hover:bg-brand-teal-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 sm:p-7"
                  >
                    <h3 className="font-display text-lg font-semibold text-brand-blue transition group-hover:text-brand-blue-hover">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-text-muted">
                      {service.summary}
                    </p>
                    <span className="link-arrow mt-5">
                      Explore
                      <svg
                        className="h-4 w-4 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Button href="/services" variant="primaryBlue">
                View all services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <HomeUseCasesSection />

      {/* About */}
      <section className="section-pad bg-surface-muted" aria-labelledby="about-heading">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="left" className="min-w-0">
              <p className="eyebrow-on-light">About us</p>
              <span className="accent-line !mx-0" aria-hidden="true" />
              <h2
                id="about-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue sm:text-4xl"
              >
                Built for teams who are tired of leaking opportunity
              </h2>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-text-muted">
                EclipticLink partners with startups and established companies that already
                generate interest, but lose it in slow replies, messy CRMs, and manual chase.
              </p>
              <p className="mt-4 max-w-prose leading-relaxed text-text-muted">
                We put reliable systems around that work, then stay close when the next step
                is a custom product, an intelligent assistant, or a full application.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="primaryBlue">
                  Our story
                </Button>
              </div>
            </Reveal>
            <ul className="min-w-0 space-y-4" role="list">
              {[
                "Hands-on with GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier",
                "Systems designed so inbound interest does not sit unanswered",
                "Product and engineering depth when a workflow alone will not cut it",
                "Clear delivery: milestones you can see, or flexible hourly capacity",
              ].map((item, i) => (
                <li key={item}>
                  <Reveal delay={100 + i * 80}>
                    <div className="card-lift rounded-lg border border-border-subtle bg-surface px-5 py-4 leading-relaxed text-slate-700">
                      <span
                        className="mr-3 inline-block h-1.5 w-1.5 rounded-full bg-brand-teal align-middle"
                        aria-hidden="true"
                      />
                      {item}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-pad bg-atmosphere" aria-labelledby="why-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="why-heading"
              eyebrow="Why EclipticLink"
              title="Fewer dropped balls. More conversations that convert."
              description="We care less about stacking tools and more about whether a lead gets a reply, a deal stays moving, and your team knows what happens next."
            />
          </Reveal>
          <ol className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2" role="list">
            {[
              {
                n: "01",
                title: "Platform fluency",
                body: "We live in GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier, and we wire them to the way your sales and operations actually work.",
              },
              {
                n: "02",
                title: "Outcomes over busywork",
                body: "Response time, nurture, stage hygiene, booking, and reminders are designed to protect conversion, not to generate more noise.",
              },
              {
                n: "03",
                title: "Visibility while we build",
                body: "Milestone plans keep you involved. You always know what shipped, what is next, and what decisions still need you.",
              },
              {
                n: "04",
                title: "Room to go deeper",
                body: "When the stack needs a product layer, an assistant, or a custom app, the same partnership can take you there without a handoff scramble.",
              },
            ].map((item, i) => (
              <li key={item.n}>
                <Reveal delay={i * 90} className="h-full">
                  <div className="card-lift h-full rounded-xl border border-border-subtle bg-surface p-6 sm:p-7">
                    <span className="font-display text-sm font-semibold tracking-widest text-brand-teal">
                      {item.n}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-brand-blue">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-text-muted">{item.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <HomeProcessSection />

      <HomeEngageSection />

      {/* Deliverables */}
      <section className="section-pad bg-surface-muted" aria-labelledby="work-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="work-heading"
              eyebrow="Delivery"
              title="What lands in your hands"
              description="Reliable systems for the pipeline, intelligent features when they earn their place, and software that holds the rest together."
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              {
                title: "Lead & CRM systems",
                body: "Follow-up, pipelines, and integrations across GoHighLevel, HubSpot, Zoho, n8n, Make, and Zapier.",
              },
              {
                title: "Intelligent products",
                body: "Assistants, LLM-backed features, and AI-native tools grounded in your data and processes.",
              },
              {
                title: "Software & apps",
                body: "Custom web and mobile products, cloud foundations, and the engineering to keep them steady.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="h-full">
                <div className="card-lift h-full rounded-xl border border-border-subtle bg-surface p-6 sm:p-7">
                  <h3 className="font-display text-lg font-semibold text-brand-blue">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <Button href="/services" variant="primaryBlue">
                Explore all services
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-atmosphere" aria-labelledby="testimonials-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="testimonials-heading"
              eyebrow="Clients"
              title="What partners say about working with us"
              description="Teams who needed faster response, cleaner handoffs, and delivery they could trust."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14">
              <TestimonialSlider />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad bg-surface" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionHeading id="faq-heading" eyebrow="FAQ" title="Frequently asked questions" />
            </Reveal>
            <dl className="mt-14 divide-y divide-border-subtle border-y border-border-subtle">
              {faqs.map((item, i) => (
                <Reveal key={item.q} delay={Math.min(i * 40, 200)}>
                  <div className="py-7 transition-colors duration-300 hover:bg-brand-teal-light/25">
                    <dt className="font-display text-base font-semibold text-brand-blue">{item.q}</dt>
                    <dd className="mt-3 leading-relaxed text-text-muted">{item.a}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section-pad bg-atmosphere-muted" aria-labelledby="markets-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="markets-heading"
              eyebrow="Where we work"
              title="Clients across five markets"
              description="We collaborate with startups and enterprises in the regions below, with schedules that respect your timezone."
            />
          </Reveal>
          <ul className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {[
              {
                title: "United States",
                body: "Pipeline systems, CRM cleanup, and embedded specialists for US product and revenue teams.",
              },
              {
                title: "United Kingdom",
                body: "Workflow and product work for UK businesses that want clarity on scope, cost, and progress.",
              },
              {
                title: "Pakistan",
                body: "Our home base in Rawalpindi, supporting local and international clients from one delivery hub.",
              },
              {
                title: "Saudi Arabia",
                body: "Lead systems, enterprise applications, and dedicated engineering for Saudi organizations.",
              },
              {
                title: "United Arab Emirates",
                body: "Operations tooling, integrations, and advisory for teams in Dubai and across the UAE.",
              },
            ].map((m, i) => (
              <li key={m.title}>
                <Reveal delay={i * 70} className="h-full">
                  <div className="card-lift h-full rounded-xl border border-border-subtle bg-surface p-6">
                    <h3 className="font-display text-base font-semibold text-brand-blue">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{m.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
            <li>
              <Reveal delay={350} className="h-full">
                <div className="card-lift flex h-full items-center rounded-xl border border-dashed border-border-subtle bg-surface/60 p-6">
                  <Link href="/contact" className="link-arrow">
                    Working from another region? Let&apos;s talk
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            </li>
          </ul>
        </div>
      </section>

      {/* Final CTA, same base as footer so colors match */}
      <section
        className="relative overflow-hidden bg-brand-dark section-pad text-white"
        aria-labelledby="cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 85% 15%, rgb(116 210 176 / 0.14), transparent 55%)",
          }}
        />
        <div className="container-site relative z-10 max-w-3xl text-center">
          <Reveal variant="scale">
            <p className="eyebrow">Next step</p>
            <span className="accent-line" aria-hidden="true" />
            <h2
              id="cta-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Tell us where leads stall today
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Share a short picture of your tools and process. We will come back with a
              practical path, not a generic pitch deck.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Start a conversation
              </Button>
              <Button href="/hire" variant="secondary" size="lg">
                Browse dedicated roles
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
