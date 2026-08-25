import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { Button } from "../ui/button";

const diySteps = [
  "Pick a tool first",
  "Connect a few apps",
  "Ship a basic workflow",
  "Break on edge cases",
  "Nobody owns the system",
];

const oursSteps = [
  "Understand the current process",
  "Identify bottlenecks and leakage",
  "Design the ideal journey",
  "Choose technology that fits",
  "Automate, integrate, add AI where useful",
  "Build custom software if needed",
  "Monitor, document, and improve",
];

export function DiyVsEclipticLink() {
  return (
    <section className="section-pad bg-surface" aria-labelledby="diy-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="diy-heading"
            eyebrow="How we're different"
            title="We don't sell platforms. We solve business problems."
            description="Anyone can connect two apps. We design the system around how your business actually operates - then pick the technology that makes that system reliable."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={60} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-muted/50 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Tool-first approach
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-slate-700">
                Start with software
              </h3>
              <ol className="mt-6 flex-1 space-y-3" role="list">
                {diySteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-text-muted">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200/80 font-display text-[0.65rem] font-semibold text-slate-500">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={140} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-teal/30 bg-brand-dark p-6 text-white sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 55% at 100% 0%, rgb(116 210 176 / 0.25), transparent 50%)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10 flex h-full flex-col">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
                  EclipticLink
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  Start with the problem
                </h3>
                <ol className="mt-6 flex-1 space-y-3" role="list">
                  {oursSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal/20 font-display text-[0.65rem] font-semibold text-brand-teal">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-10 text-center">
            <Button href="/contact" variant="primaryBlue">
              Book a discovery call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
