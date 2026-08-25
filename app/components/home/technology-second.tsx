import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

const categories = [
  { name: "AI", examples: "Assistants, scoring, document intelligence" },
  { name: "Automation", examples: "Workflows, sequences, human-in-the-loop" },
  { name: "Integrations", examples: "APIs, sync, event-driven connections" },
  { name: "CRM", examples: "Pipelines, ownership, hygiene" },
  { name: "Custom software", examples: "Apps, portals, internal tools" },
  { name: "Cloud & data", examples: "Infrastructure, reporting, reliability" },
];

export function TechnologySecond() {
  return (
    <section className="section-pad bg-surface" aria-labelledby="tech-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="tech-heading"
            eyebrow="Technology comes second"
            title="The right technology for the problem"
            description="We don't force businesses into a specific platform. We choose technology based on what needs to be solved, what you already use, and what will stay reliable as you grow."
          />
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {categories.map((item, i) => (
            <li key={item.name}>
              <Reveal delay={i * 50} className="h-full">
                <div className="h-full rounded-xl border border-border-subtle bg-surface-muted/50 px-5 py-5">
                  <h3 className="font-display text-base font-semibold text-brand-blue">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{item.examples}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-text-muted">
            When useful, we work with tools you may already know - including common CRM and
            automation platforms. They support the solution; they are not what we sell.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
