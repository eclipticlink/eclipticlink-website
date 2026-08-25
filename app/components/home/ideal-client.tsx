import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { Button } from "../ui/button";

const signals = [
  "Slow response",
  "Manual work",
  "Messy CRM",
  "Disconnected tools",
  "Inconsistent follow-up",
  "Process bottlenecks",
  "Unclear AI fit",
];

export function IdealClient() {
  return (
    <section className="section-pad bg-surface-muted" aria-labelledby="ideal-client-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="ideal-client-heading"
            eyebrow="Who this is for"
            title="Built for teams already generating demand - and feeling the friction"
            description="If your business already creates opportunity but loses time, leads, or clarity between the first touch and the outcome you want, EclipticLink is built for you."
          />
        </Reveal>

        <Reveal delay={80}>
          <ul
            className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2"
            role="list"
          >
            {signals.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border-subtle bg-surface px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-text-muted">
            We support businesses across the US, UK, Pakistan, Saudi Arabia, and UAE.
          </p>
          <div className="mt-8 text-center">
            <Button href="#what-to-fix" variant="secondaryOnLight">
              What are you trying to fix?
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
