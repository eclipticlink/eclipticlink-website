import type { Metadata } from "next";
import Link from "next/link";
import { HeroBackgroundSlider } from "./components/hero-background-slider";
import { TestimonialSlider } from "./components/testimonial-slider";
import { BASE_OG, SITE_URL } from "./lib/config";
import { services } from "./services/data";

export const metadata: Metadata = {
  title: {
    absolute: "AI Automation Agency | Lead Follow-Up & CRM | EclipticLink",
  },
  description:
    "Hire an AI automation agency for lead follow-up & CRM workflows. Experts in GoHighLevel (GHL), n8n, Make, Zapier, HubSpot & Zoho — plus AI development & full-stack.",
  keywords: [
    "AI automation agency",
    "AI automation services",
    "lead follow-up automation",
    "GoHighLevel automation",
    "GHL automation",
    "n8n Make Zapier",
    "HubSpot Zoho CRM automation",
    "workflow automation company",
    "AI development company",
    "hire automation specialists",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    ...BASE_OG,
    title: "AI Automation Agency | Lead Follow-Up & CRM | EclipticLink",
    description:
      "Automate leads, follow-ups & pipelines with GHL, n8n, Make, Zapier, HubSpot & Zoho. AI development and full-stack software from EclipticLink.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Agency | GHL, n8n, Make & Zapier",
    description:
      "Lead follow-up & CRM automation experts. GoHighLevel, n8n, Make, Zapier, HubSpot & Zoho — plus AI development.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI automation platforms does EclipticLink work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build and optimize automations on GoHighLevel (GHL), n8n, Make, Zapier, HubSpot, and Zoho—covering lead capture, follow-ups, CRM pipelines, nurture sequences, and booking workflows so your team spends less time on manual tasks.",
      },
    },
    {
      "@type": "Question",
      name: "What AI automation and development services does EclipticLink offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our primary focus is AI automations: lead and follow-up systems, CRM and sales pipeline automation, workflow orchestration, AI-powered outreach, and omnichannel booking. We also offer AI development—chatbots, LLM/RAG solutions, and AI SaaS—plus full-stack web, mobile, cloud, and custom software when your product needs them.",
      },
    },
    {
      "@type": "Question",
      name: "What is speed-to-lead and why does it matter for AI automations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Speed-to-lead is how fast you respond after someone opts in, calls, or submits a form. AI automations on GoHighLevel, HubSpot, Zoho, n8n, Make, or Zapier can reply in seconds with SMS and email, assign an owner, and start a nurture sequence—so hot leads do not go cold.",
      },
    },
    {
      "@type": "Question",
      name: "Will you be able to increase the number of people in your team if necessary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you wish to partly reduce the project work intensity or, on the contrary, to increase it at times, we are always ready to adapt. When necessary, we will easily involve more team members in your project to meet your expectations.",
      },
    },
    {
      "@type": "Question",
      name: "What control do you have over project development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We review project requirements, analyze them, and inform you of estimation results. Once you are fine with the cost and time, we create a project report and proposal for review. Once finalized, we move to the development stage.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to start my automation or product work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After we review your requirements and you approve the estimation and proposal, we move quickly to implementation. Timeline depends on scope—we will give you a clear timeline in the proposal.",
      },
    },
    {
      "@type": "Question",
      name: "How do we assure privacy and confidentiality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We sign NDAs and Confidentiality Agreements as required. All our employees are full-time and bound by company Confidentiality and Non-Disclosure clauses.",
      },
    },
    {
      "@type": "Question",
      name: "Should I be familiar with technical details to work with you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You do not need to be an expert in automation tools or software development—we are. We explain unclear moments and the essence of all stages. You need a clear vision of what you want to achieve; we help make it a reality.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL }],
};

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
        className="relative min-h-128 overflow-hidden px-4 py-24 text-white sm:min-h-144 sm:px-6 sm:py-32 lg:min-h-160 lg:px-8"
        aria-labelledby="hero-heading"
      >
        <HeroBackgroundSlider />
        <div
          className="absolute inset-0 z-1 bg-linear-to-b from-brand-dark/35 via-brand-dark/55 to-brand-dark/85"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex min-h-112 max-w-7xl flex-col items-center justify-center text-center sm:min-h-128 lg:min-h-144">
          <h1
            id="hero-heading"
            className="mx-auto max-w-4xl text-4xl font-bold tracking-tight drop-shadow-sm sm:text-5xl lg:text-6xl"
          >
            AI Automation Agency for Leads, Follow-Ups &amp; CRM
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200 drop-shadow-sm">
            EclipticLink is an AI automation agency that builds lead follow-up and
            CRM workflows on GoHighLevel (GHL), n8n, Make, Zapier, HubSpot, and
            Zoho—so speed-to-lead stays high and your pipeline never stalls. Need
            more than workflows? We also deliver custom AI development and
            full-stack software.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-teal px-6 text-base font-semibold text-brand-dark shadow-lg shadow-brand-dark/30 transition hover:bg-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Get a free automation consult
            </Link>
            <Link
              href="/services/ai-automations"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg border-2 border-white/80 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Explore AI Automations
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="services-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              AI Automation, AI Development &amp; Full-Stack Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-zinc-600">
              Primary: AI automation services for GHL, n8n, Make, Zapier, HubSpot &amp; Zoho.
              Next: AI development. Then custom software, mobile, and cloud when you need to build.
            </p>
          </div>
          <div className="mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm transition hover:shadow-md hover:border-brand-teal-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
              >
                <h3 className="text-lg font-semibold text-brand-blue group-hover:text-brand-blue-hover">{service.title}</h3>
                <p className="mt-2 flex-1 text-zinc-600 leading-relaxed">{service.summary}</p>
                <span className="mt-4 inline-flex cursor-pointer items-center text-sm font-medium text-brand-teal transition group-hover:text-brand-teal-hover">
                  Explore {service.title.toLowerCase()} services
                  <svg className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex h-11 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-blue px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue active:scale-[0.98] motion-reduce:active:scale-100"
            >
              View all AI automation &amp; software services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="about-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 id="about-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                About EclipticLink
              </h2>
              <p className="mt-4 max-w-prose text-lg leading-relaxed text-zinc-600">
                We help startups and enterprises automate growth—leads, follow-ups,
                CRM pipelines, and customer journeys—using AI and modern automation
                platforms. With years of combined experience, we deliver through
                milestone-based and hourly engagement, dedicated project managers,
                and a hands-on technical team.
              </p>
              <p className="mt-4 max-w-prose text-zinc-600 leading-relaxed">
                From AI automations and custom AI development to full-stack web,
                mobile, cloud, and UI/UX—we build what your business needs to scale
                without drowning in manual work.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex h-11 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-blue px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue active:scale-[0.98] motion-reduce:active:scale-100"
                >
                  Learn more about EclipticLink
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm lg:p-8">
              <h3 className="text-lg font-semibold text-brand-blue">Why work with us</h3>
              <ul className="mt-4 space-y-3" role="list">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-dark" aria-hidden="true">✓</span>
                  <span className="text-zinc-600">Specialists in GHL, n8n, Make, Zapier, HubSpot &amp; Zoho</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-dark" aria-hidden="true">✓</span>
                  <span className="text-zinc-600">Automations that capture leads and never miss a follow-up</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-dark" aria-hidden="true">✓</span>
                  <span className="text-zinc-600">AI development and full-stack build when workflows are not enough</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-dark" aria-hidden="true">✓</span>
                  <span className="text-zinc-600">Transparent delivery: milestone-based or hourly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Value proposition */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              Automate growth. Scale with confidence.
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              We help businesses stop leaking leads and start running predictable, AI-assisted follow-up and operations.
            </p>
          </div>
          <ul className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2" role="list">
            <li className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Platform expertise</h3>
              <p className="mt-2 text-zinc-600 leading-relaxed">Deep experience with GoHighLevel, n8n, Make, Zapier, HubSpot, and Zoho—wired to how your sales and ops actually work.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Outcome-focused automations</h3>
              <p className="mt-2 text-zinc-600 leading-relaxed">Lead response, nurture sequences, pipeline hygiene, booking, and reminders designed for conversion—not busywork.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Real-time visibility</h3>
              <p className="mt-2 text-zinc-600 leading-relaxed">Milestone-based plans keep you involved with clear progress on every automation and product engagement.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Full capability when needed</h3>
              <p className="mt-2 text-zinc-600 leading-relaxed">Custom AI, web, mobile, and cloud teams ready when your automation layer needs a product or deeper integration.</p>
            </li>
          </ul>
          <p className="mx-auto mt-12 max-w-prose text-center text-zinc-600 leading-relaxed">
            Stand apart with AI automation and software services tailored to your business—rapid, iterative delivery that keeps you in the loop from the first workflow to production.
          </p>
        </div>
      </section>

      {/* Hire Team / Staff Augmentation */}
      <section className="bg-brand-dark px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8" aria-labelledby="hire-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="hire-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Hire automation &amp; AI specialists
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-zinc-200">
              Scale your capacity with vetted automation experts, AI engineers, and full-stack talent. From GHL and n8n specialists to AI and mobile developers—hire without the overhead.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/hire"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-teal px-6 text-base font-semibold text-brand-dark shadow-sm transition hover:bg-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Hire dedicated specialists
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg border-2 border-brand-teal px-6 text-base font-semibold text-white transition hover:bg-brand-teal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Get a consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Our Work / Featured solutions */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="work-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="work-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              What we deliver
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              AI automations that grow your pipeline, AI products that differentiate your business, and full-stack software when you need to build.
            </p>
          </div>
          <div className="mx-auto mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-blue">AI Automations</h3>
              <p className="mt-2 text-zinc-600">Lead follow-ups, CRM pipelines, and workflows on GHL, n8n, Make, Zapier, HubSpot, and Zoho.</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-blue">AI Development</h3>
              <p className="mt-2 text-zinc-600">Chatbots, LLM/RAG solutions, AI integrations, and AI-native SaaS products.</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-blue">Full-stack &amp; apps</h3>
              <p className="mt-2 text-zinc-600">Custom software, web and mobile apps, cloud, and DevOps to support your stack.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex h-11 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-blue px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Explore all services we offer
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              Testimonials
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              What our clients say about working with EclipticLink.
            </p>
          </div>
          <div className="mt-16">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-heading" className="text-center text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <dl className="mt-16 space-y-8">
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                What AI automation platforms does EclipticLink work with?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                We build and optimize automations on GoHighLevel (GHL), n8n, Make, Zapier, HubSpot, and Zoho—covering lead capture, follow-ups, CRM pipelines, nurture sequences, and booking workflows so your team spends less time on manual tasks.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                What AI automation and development services does EclipticLink offer?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                Our primary focus is AI automations: lead and follow-up systems, CRM and sales pipeline automation, workflow orchestration, AI-powered outreach, and omnichannel booking. We also offer AI development—chatbots, LLM/RAG solutions, and AI SaaS—plus full-stack web, mobile, cloud, and custom software when your product needs them.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                What is speed-to-lead and why does it matter for AI automations?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                Speed-to-lead is how fast you respond after someone opts in, calls, or submits a form. AI automations on GoHighLevel, HubSpot, Zoho, n8n, Make, or Zapier can reply in seconds with SMS and email, assign an owner, and start a nurture sequence—so hot leads do not go cold.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                Will you be able to increase the number of people in your team if necessary?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                If you wish to partly reduce the project work intensity or, on the contrary, to increase it at times, we are always ready to adapt. When necessary, we will easily involve more team members in your project to meet your expectations.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                What control do you have over project development?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                We review project requirements, analyze them, and inform you of estimation results. Once you are fine with the cost and time, we create a project report and proposal for review. Once finalized, we move to the development stage.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                How long does it take to start my automation or product work?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                After we review your requirements and you approve the estimation and proposal, we move quickly to implementation. Timeline depends on scope—we will give you a clear timeline in the proposal.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                How do we assure privacy and confidentiality?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                We sign NDAs and Confidentiality Agreements as required. All our employees are full-time and bound by company Confidentiality and Non-Disclosure clauses.
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-brand-blue">
                Should I be familiar with technical details to work with you?
              </dt>
              <dd className="mt-2 text-zinc-600 leading-relaxed">
                No. You do not need to be an expert in automation tools or software development—we are. We explain unclear moments and the essence of all stages. You need a clear vision of what you want to achieve; we help make it a reality.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Markets we serve */}
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="markets-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="markets-heading" className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
              Serving clients worldwide
            </h2>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              We partner with startups and enterprises across five key markets, delivering AI automations,
              AI development, and dedicated engineering teams with timezone-friendly collaboration.
            </p>
          </div>
          <ul className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            <li className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">United States</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">AI automations, CRM workflows, and staff augmentation for US startups and enterprises. Hire remote specialists with US-aligned working hours.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">United Kingdom</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">Automation and AI development for UK businesses. Scalable solutions with transparent, milestone-based delivery.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Pakistan</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">AI automation hub in Rawalpindi. GHL, n8n, Make, Zapier, HubSpot, Zoho, AI development, and full-stack delivery for local and international clients.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">Saudi Arabia</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">AI automations and digital transformation for Saudi Arabian businesses. Lead systems, enterprise apps, and dedicated engineering teams.</p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm">
              <h3 className="text-base font-semibold text-brand-blue">United Arab Emirates</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">Automation, AI, and IT consulting for Dubai and UAE enterprises. CRM workflows, SaaS products, and cloud infrastructure built to scale.</p>
            </li>
            <li className="flex items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50/30 p-6">
              <Link
                href="/contact"
                className="text-sm font-semibold text-brand-teal transition hover:text-brand-teal-hover"
              >
                Working from another region? Let&apos;s talk &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA - Get in touch */}
      <section className="bg-brand-dark px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to automate your growth?
          </h2>
          <p className="mt-4 text-lg text-zinc-200 leading-relaxed">
            Tell us about your leads, CRM, and tools—we&apos;ll map an AI automation plan and get back to you with next steps.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-teal px-6 text-base font-semibold text-brand-dark shadow-sm transition hover:bg-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Get in touch
            </Link>
            <Link
              href="/hire"
              className="inline-flex h-12 min-h-11 cursor-pointer items-center justify-center rounded-lg border-2 border-brand-teal px-6 text-base font-semibold text-white transition hover:bg-brand-teal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Hire a dedicated team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
