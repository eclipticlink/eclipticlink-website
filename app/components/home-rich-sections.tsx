import Link from "next/link";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Button } from "./ui/button";

const pipelineSteps = [
  { label: "Interest lands", detail: "Form, ad, chat, or call" },
  { label: "Immediate reply", detail: "SMS and email while it is warm" },
  { label: "CRM stays current", detail: "Owner and stage assigned" },
  { label: "Nurture continues", detail: "Sequences without manual chase" },
  { label: "Meeting booked", detail: "Calendar confirmed" },
];

const useCases = [
  {
    tag: "Response time",
    title: "Reach people while they still care",
    body: "Inbound interest triggers a real reply, owner assignment, and CRM update within seconds, so your team talks to warm leads first.",
    platforms: ["GoHighLevel", "HubSpot", "Zapier"],
  },
  {
    tag: "Pipeline hygiene",
    title: "Keep stages honest",
    body: "Deals move, tags stick, and handoffs happen without someone babysitting HubSpot, Zoho, or GoHighLevel all afternoon.",
    platforms: ["HubSpot", "Zoho", "n8n"],
  },
  {
    tag: "Follow-up",
    title: "Stay present without the chase",
    body: "Multi-step nurture and reactivation that still feel considered, built in Make, Zapier, or n8n and wired back to your CRM.",
    platforms: ["Make", "n8n", "Zapier"],
  },
  {
    tag: "Scheduling",
    title: "Fill the calendar without the admin tax",
    body: "Booking, reminders, and no-show recovery across channels so demos and consults land without a coordinator living in the inbox.",
    platforms: ["GoHighLevel", "Make", "Zapier"],
  },
];

const processSteps = [
  {
    n: "01",
    title: "Listen",
    body: "We map how leads enter, where they stall, and which tools already carry weight, then agree on outcomes that matter to revenue.",
  },
  {
    n: "02",
    title: "Blueprint",
    body: "You see the workflow architecture, platform choices, and milestone plan before a single path goes live.",
  },
  {
    n: "03",
    title: "Ship",
    body: "Integrations and sequences land in iterations, with progress you can follow instead of a long silent build.",
  },
  {
    n: "04",
    title: "Refine",
    body: "We watch what breaks in the real world, tighten it, document it, and stay on if you want a dedicated partner.",
  },
];

export function HomePipelineSection() {
  return (
    <section
      className="section-pad bg-surface-muted"
      aria-labelledby="pipeline-heading"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="pipeline-heading"
            eyebrow="The path"
            title="From first touch to a confirmed meeting"
            description="A typical EclipticLink lead system carries the work so your people can stay focused on closing."
          />
        </Reveal>

        <ol className="relative mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5" role="list">
          {pipelineSteps.map((step, i) => (
            <li key={step.label} className="relative">
              <Reveal delay={i * 80} className="h-full">
                <div className="card-lift flex h-full flex-col rounded-xl border border-border-subtle bg-surface p-5 text-center sm:p-6">
                  <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/15 font-display text-sm font-semibold text-brand-blue">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-sm font-semibold text-brand-blue sm:text-base">
                    {step.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted sm:text-sm">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
              {i < pipelineSteps.length - 1 ? (
                <span
                  className="absolute top-1/2 -right-2 z-10 hidden h-px w-4 bg-brand-teal/40 lg:block"
                  aria-hidden="true"
                />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HomeUseCasesSection() {
  return (
    <section className="section-pad bg-atmosphere" aria-labelledby="use-cases-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="use-cases-heading"
            eyebrow="Where we help"
            title="Problems growth teams ask us to fix"
            description="Practical systems for response time, CRM discipline, follow-up consistency, and booking."
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {useCases.map((item, i) => (
            <Reveal key={item.tag} delay={i * 60}>
              <article
                className={`card-lift grid overflow-hidden rounded-2xl border border-border-subtle bg-surface lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="relative flex min-h-44 flex-col justify-between bg-brand-dark p-8 text-white sm:min-h-52 sm:p-10"
                  aria-hidden="false"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 70% at 90% 10%, rgb(116 210 176 / 0.28), transparent 55%)",
                    }}
                  />
                  <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
                    {item.tag}
                  </p>
                  <p className="relative z-10 mt-auto font-display text-4xl font-semibold tabular-nums text-white/15 sm:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <h3 className="font-display text-xl font-semibold text-brand-blue sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-text-muted">{item.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" role="list">
                    {item.platforms.map((p) => (
                      <li
                        key={p}
                        className="rounded-md border border-border-subtle bg-surface-muted px-3 py-1 text-xs font-semibold tracking-wide text-brand-blue"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 text-center">
            <Button href="/services/ai-automations" variant="primaryBlue">
              Explore lead &amp; CRM systems
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeProcessSection() {
  return (
    <section className="section-pad bg-surface-muted" aria-labelledby="process-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="How we work"
            title="A clear path from conversation to live systems"
            description="Milestones you can see, so you always know what is shipping next."
          />
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="pointer-events-none absolute top-8 right-[12%] left-[12%] hidden h-px bg-linear-to-r from-transparent via-brand-teal/40 to-transparent lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" role="list">
            {processSteps.map((step, i) => (
              <li key={step.n}>
                <Reveal delay={i * 90} className="h-full">
                  <div className="relative h-full text-center lg:text-left">
                    <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-teal bg-surface font-display text-sm font-semibold text-brand-blue shadow-sm shadow-brand-dark/5 lg:mx-0">
                      {step.n}
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-brand-blue">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function HomeEngageSection() {
  return (
    <section className="section-pad bg-atmosphere" aria-labelledby="engage-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="engage-heading"
            eyebrow="Ways to engage"
            title="A defined project, or people inside your team"
            description="Pick the shape that matches how you like to buy and manage work."
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          <Reveal delay={60} className="h-full">
            <div className="card-lift flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
                Project delivery
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-brand-blue">
                Scoped delivery with milestones
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-text-muted">
                Best when you need a lead system, CRM workflow, or integration built
                end-to-end with clear scope, timing, and a clean handoff.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700" role="list">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                  Discovery through launch and refinement
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                  Progress you can track against milestones
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                  Documentation your team can own afterward
                </li>
              </ul>
              <Button href="/contact" variant="primaryBlue" className="mt-8 w-fit">
                Discuss a project
              </Button>
            </div>
          </Reveal>

          <Reveal delay={140} className="h-full">
            <div className="card-lift relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-blue/20 bg-brand-dark p-8 text-white sm:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 100% 0%, rgb(116 210 176 / 0.22), transparent 50%)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
                  Staff augmentation
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  Dedicated specialists on your roadmap
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-white/70">
                  Add GoHighLevel, n8n, Make, Zapier, product, or engineering capacity
                  without the cost and delay of a full-time hire.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/80" role="list">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                    Vetted talent matched to your stack
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                    Hourly or dedicated engagement models
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                    Onboarding that respects how you already work
                  </li>
                </ul>
                <Button href="/hire" variant="primary" className="mt-8 w-fit">
                  Browse roles
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-text-muted">
            Not sure which fit?{" "}
            <Link href="/contact" className="font-semibold text-brand-blue underline-offset-4 hover:underline">
              Book a short call
            </Link>{" "}
            and we will recommend a path.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
