import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

const layers = [
  {
    label: "Business inputs",
    items: ["Leads", "Requests", "Forms", "Messages", "Events"],
  },
  {
    label: "Business logic",
    items: ["Rules", "Routing", "Priorities", "Approvals", "Exceptions"],
    highlight: true,
  },
  {
    label: "Automation & intelligence",
    items: ["Workflows", "AI decisions", "Notifications", "Sequences"],
  },
  {
    label: "Systems & data",
    items: ["CRM", "Apps", "Databases", "APIs", "Documents"],
  },
  {
    label: "Human actions",
    items: ["Review", "Close", "Support", "Decide"],
  },
  {
    label: "Business outcomes",
    items: [
      "Faster response",
      "Less manual work",
      "Cleaner data",
      "More booked meetings",
      "Scalable operations",
    ],
  },
];

export function AutomationEcosystem() {
  return (
    <section className="section-pad bg-surface-muted" aria-labelledby="ecosystem-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="ecosystem-heading"
            eyebrow="How we think about systems"
            title="We design the architecture - not just the connections"
            description="EclipticLink sits between how work starts and how outcomes get delivered. Technology examples live underneath the layers - they never define the story."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-14 max-w-4xl">
            <ul className="space-y-3" role="list">
              {layers.map((layer, i) => (
                <li key={layer.label}>
                  <div
                    className={`rounded-xl border px-5 py-4 sm:px-6 sm:py-5 ${
                      layer.highlight
                        ? "border-brand-teal bg-brand-dark text-white shadow-lg shadow-brand-dark/15"
                        : "border-border-subtle bg-surface"
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <p
                        className={`shrink-0 text-xs font-semibold uppercase tracking-[0.14em] ${
                          layer.highlight ? "text-brand-teal" : "text-brand-blue"
                        }`}
                      >
                        {layer.label}
                      </p>
                      <ul className="flex flex-wrap gap-2" role="list">
                        {layer.items.map((item) => (
                          <li
                            key={item}
                            className={`rounded-md px-2.5 py-1 text-xs font-medium sm:text-sm ${
                              layer.highlight
                                ? "border border-white/15 bg-white/10 text-white/90"
                                : "border border-border-subtle bg-surface-muted text-slate-700"
                            }`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {i < layers.length - 1 ? (
                    <div className="flex flex-col items-center py-1" aria-hidden="true">
                      <span className="h-3 w-px bg-brand-teal/50" />
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-teal/40 bg-surface text-[0.55rem] font-semibold text-brand-teal">
                        ↓
                      </span>
                      <span className="h-3 w-px bg-brand-teal/50" />
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm text-text-muted">
              Powered by the right combination of AI, automation, integrations, APIs, and
              software - chosen for the problem, not the other way around.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
