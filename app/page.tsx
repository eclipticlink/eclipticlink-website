import type { Metadata } from "next";
import {
  AutomationEcosystem,
  AutomationPath,
  BeforeAfter,
  CaseStudies,
  DiyVsEclipticLink,
  HomeEngageSection,
  HomeHero,
  HomeProblem,
  HomeProcessSection,
  HomeServicesLadder,
  IdealClient,
  TechnologySecond,
  WhatAreYouTryingToFix,
} from "./components/home";
import { Reveal } from "./components/reveal";
import { SectionHeading } from "./components/section-heading";
import { TestimonialSlider } from "./components/testimonial-slider";
import { Button } from "./components/ui/button";
import { BASE_OG, SITE_URL } from "./lib/config";

export const metadata: Metadata = {
  title: {
    absolute: "EclipticLink | Automation, AI & Systems That Solve Business Problems",
  },
  description:
    "EclipticLink helps businesses identify operational bottlenecks, design better processes, and build automated systems - using AI, integrations, and custom software when the problem requires it.",
  keywords: [
    "business process automation",
    "workflow automation",
    "AI automation",
    "CRM systems",
    "custom software",
    "business systems",
    "operational automation",
    "EclipticLink",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    ...BASE_OG,
    title: "EclipticLink | Automation, AI & Systems That Solve Business Problems",
    description:
      "Problem-first systems: remove manual work, connect your tools, apply AI where useful, and create better business outcomes.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "EclipticLink | Problem-First Automation & Technology",
    description:
      "We design systems around your process - automation, AI, integrations, and software as needed.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does EclipticLink do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We help businesses identify operational bottlenecks, design better processes, and build automated systems that remove manual work, connect tools, apply AI where useful, and create better outcomes. Technology follows the problem.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only work with specific platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We choose technology based on what needs to be solved, what you already use, and what will stay reliable as you grow. Common CRM and automation platforms may appear in a solution when they fit - they are not what we sell.",
      },
    },
    {
      "@type": "Question",
      name: "What is speed-to-lead, and why should we care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Speed-to-lead is how quickly someone hears back after a form, call, or chat. Buyers expect a reply while interest is still warm. Well-designed systems can respond, assign an owner, and start nurture in seconds - so your team is not racing a spreadsheet.",
      },
    },
    {
      "@type": "Question",
      name: "Why not just connect tools ourselves?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Connecting apps is one step. We design the system around how your process actually runs: discovery, journey design, edge cases, monitoring, documentation, and improvement. Tools are chosen after the process is clear.",
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
    q: "What does EclipticLink do?",
    a: "We help businesses identify operational bottlenecks, design better processes, and build automated systems that remove manual work, connect tools, apply AI where useful, and create better outcomes. Technology follows the problem.",
  },
  {
    q: "Do you only work with specific platforms?",
    a: "No. We choose technology based on what needs to be solved, what you already use, and what will stay reliable as you grow. Common CRM and automation platforms may appear in a solution when they fit - they are not what we sell.",
  },
  {
    q: "What is speed-to-lead, and why should we care?",
    a: "Speed-to-lead is how quickly someone hears back after a form, call, or chat. Buyers expect a reply while interest is still warm. Well-designed systems can respond, assign an owner, and start nurture in seconds - so your team is not racing a spreadsheet.",
  },
  {
    q: "Why not just connect tools ourselves?",
    a: "Connecting apps is one step. We design the system around how your process actually runs: discovery, journey design, edge cases, monitoring, documentation, and improvement. Tools are chosen after the process is clear.",
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

      <HomeHero />
      <HomeProblem />
      <IdealClient />
      <WhatAreYouTryingToFix />
      <AutomationPath />
      <BeforeAfter />
      <AutomationEcosystem />
      <TechnologySecond />
      <HomeServicesLadder />
      <DiyVsEclipticLink />
      <CaseStudies />

      <section className="section-pad bg-surface" aria-labelledby="why-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="why-heading"
              eyebrow="Why EclipticLink"
              title="Fewer dropped balls. More conversations that convert."
              description="We design systems around how your business actually operates - then stay visible while we build and refine them."
            />
          </Reveal>
          <ol className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2" role="list">
            {[
              {
                n: "01",
                title: "Problem first, technology second",
                body: "We start with the bottleneck. Automation, AI, integrations, and software are chosen only after the journey is clear.",
              },
              {
                n: "02",
                title: "Outcomes over tool sprawl",
                body: "Faster replies, cleaner data, less manual work, and more reliable operations matter more than stacking another app.",
              },
              {
                n: "03",
                title: "Visibility while we build",
                body: "Milestone plans keep you involved. You always know what shipped, what is next, and what decisions still need you.",
              },
              {
                n: "04",
                title: "Room to go deeper",
                body: "When the process needs an assistant, a product layer, or a custom app, the same partnership can take you there.",
              },
            ].map((item, i) => (
              <li key={item.n}>
                <Reveal delay={i * 90} className="h-full">
                  <div className="h-full rounded-xl border border-border-subtle bg-surface-muted/40 p-6 sm:p-7">
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
          <Reveal delay={160}>
            <div className="mt-10 text-center">
              <Button href="/about" variant="secondaryOnLight">
                Our story
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <HomeProcessSection />
      <HomeEngageSection />

      <section className="section-pad bg-atmosphere" aria-labelledby="testimonials-heading">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              id="testimonials-heading"
              eyebrow="Client experience"
              title="What partners say about working with us"
              description="Feedback from recent project engagements - on communication, delivery, and staying close when priorities shift."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14">
              <TestimonialSlider />
            </div>
          </Reveal>
        </div>
      </section>

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
              Tell us where your process stalls
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Tell us what is costing time, leads, or clarity today. We&apos;ll map the
              process, identify what should be automated, and suggest a practical next step
              - technology included only where it earns its place.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Book a discovery call
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
