import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { Button } from "../ui/button";

const withoutSteps = [
  "Lead comes in",
  "Someone notices - eventually",
  "Manual reply",
  "Spreadsheet or CRM update",
  "Someone remembers to follow up",
  "Calendar coordination by email",
  "Potential lead disappears",
];

const withSteps = [
  "Lead comes in",
  "Instant response",
  "CRM automatically updated",
  "Owner assigned",
  "Follow-up starts automatically",
  "Meeting booked",
  "Team focuses on closing",
];

export function BeforeAfter() {
  return (
    <section className="section-pad bg-atmosphere" aria-labelledby="before-after-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="before-after-heading"
            eyebrow="Before vs after"
            title="The difference a designed system makes"
            description="Same inbound interest. Completely different odds of a booked conversation - powered by the right mix of automation, AI, integrations, and software."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={60} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Without automation
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-slate-700">
                Manual chase, fragile handoffs
              </h3>
              <ol className="mt-6 flex-1 space-y-3" role="list">
                {withoutSteps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-text-muted">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 font-display text-[0.65rem] font-semibold text-slate-500">
                      {i + 1}
                    </span>
                    <span className={i === withoutSteps.length - 1 ? "font-medium text-slate-600" : ""}>
                      {step}
                    </span>
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
                  With EclipticLink
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  Systems carry the work
                </h3>
                <ol className="mt-6 flex-1 space-y-3" role="list">
                  {withSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal/20 font-display text-[0.65rem] font-semibold text-brand-teal">
                        {i + 1}
                      </span>
                      <span className={i === withSteps.length - 1 ? "font-semibold text-white" : ""}>
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-10 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Book a discovery call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
