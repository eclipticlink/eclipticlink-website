import Link from "next/link";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { Button } from "../ui/button";

const processSteps = [
  {
    n: "01",
    title: "Understand",
    body: "Map the current process - where work starts, stalls, and gets handed off.",
  },
  {
    n: "02",
    title: "Identify",
    body: "Find bottlenecks, repetitive work, leakage, and opportunities for automation.",
  },
  {
    n: "03",
    title: "Design",
    body: "Design the ideal future-state journey before choosing technology.",
  },
  {
    n: "04",
    title: "Automate",
    body: "Automate the steps that should not depend on memory or manual chase.",
  },
  {
    n: "05",
    title: "Integrate",
    body: "Connect the systems and data the process actually needs.",
  },
  {
    n: "06",
    title: "Add intelligence",
    body: "Use AI only where it improves decisions, speed, or quality.",
  },
  {
    n: "07",
    title: "Build",
    body: "Create custom software when existing tools cannot carry the process.",
  },
  {
    n: "08",
    title: "Optimize",
    body: "Monitor, measure, document, and continuously improve.",
  },
];

export function HomeProcessSection() {
  return (
    <section className="section-pad bg-surface-muted" aria-labelledby="process-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="process-heading"
            eyebrow="Our methodology"
            title="A clear path from problem to live system"
            description="You bring the problem. We understand the process, design the journey, choose the right technology, and improve what we ship."
          />
        </Reveal>

        <ol
          className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {processSteps.map((step, i) => (
            <li key={step.n}>
              <Reveal delay={i * 40} className="h-full">
                <div className="h-full rounded-xl border border-border-subtle bg-surface p-5">
                  <span className="font-display text-sm font-semibold tracking-widest text-brand-teal">
                    {step.n}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-brand-blue">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
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
            title="Which model is right for you?"
            description="A defined project when you need a system shipped end-to-end, or dedicated specialists when you need capacity inside your team."
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
                Best when you need a process fixed end-to-end - automation, integrations,
                AI, or software - with clear scope, timing, and a clean handoff.
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
              <p className="mt-6 rounded-lg bg-brand-teal-light/60 px-4 py-3 text-sm text-brand-dark">
                <strong className="font-semibold">Choose this if</strong> you have a clear
                outcome and want a scoped build.
              </p>
              <Button href="/contact" variant="primaryBlue" className="mt-6 w-fit">
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
                  Add automation, AI, product, or engineering capacity without the cost and
                  delay of a full-time hire.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-white/80" role="list">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" aria-hidden="true" />
                    Vetted talent matched to your needs
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
                <p className="mt-6 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/85">
                  <strong className="font-semibold text-white">Choose this if</strong> you
                  need ongoing capacity on your team.
                </p>
                <Button href="/hire" variant="primary" className="mt-6 w-fit">
                  Browse dedicated roles
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-text-muted">
            Not sure which fit?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-blue underline-offset-4 hover:underline"
            >
              Book a short call
            </Link>{" "}
            and we will recommend a path.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
