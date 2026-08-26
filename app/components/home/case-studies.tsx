import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { Button } from "../ui/button";

const cases = [
  {
    title: "Speed-to-lead systems",
    industry: "Professional services · UK",
    engagement: "Project delivery",
    problem:
      "Inbound interest sat unanswered while the team juggled delivery work - replies depended on someone noticing a form fill or missed call.",
    impact: "Warm leads cooled off before a human conversation could start, and owners argued over who was supposed to reply.",
    solution:
      "A response, routing, and CRM-update system that runs as soon as interest arrives - without asking the team to live in the inbox.",
    journey:
      "Lead arrives → system responds → owner assigned → CRM updated → sales takes over warm.",
    technology:
      "Automation, CRM workflows, and messaging integrations - chosen to fit the client's existing stack, not a forced platform swap.",
    outcome:
      "Leads hear back while interest is still warm, and sales starts from a clean, assigned record instead of a shared spreadsheet.",
  },
  {
    title: "CRM hygiene & routing",
    industry: "B2B sales team · multi-tool stack",
    engagement: "Project delivery",
    problem:
      "Stages, owners, and tags drifted out of date, so the pipeline stopped reflecting reality and handoffs failed between marketing and sales.",
    impact: "Reporting could not be trusted for decisions, and follow-up depended on tribal knowledge.",
    solution:
      "Automated validation, enrichment, assignment, and stage sync across the systems that hold customer truth.",
    journey:
      "Incoming data → validated → enriched → assigned → CRM updated → reports stay honest.",
    technology:
      "Integrations, business rules, and CRM configuration - without forcing a platform swap.",
    outcome:
      "Handoffs happen when they should, and leadership can trust what the CRM shows in weekly reviews.",
  },
  {
    title: "Follow-up & booking journeys",
    industry: "Appointment-led business · US / UK",
    engagement: "Project delivery",
    problem:
      "Nurture was inconsistent and booking meant endless email back-and-forth after the first conversation stalled.",
    impact: "Prospects went quiet and meetings never landed on the calendar - even when interest was real.",
    solution:
      "Multi-step follow-up, reminders, and recovery paths wired into calendar and CRM so chase work is not manual.",
    journey:
      "No response → nurture → engagement logged → booking link → confirmation → no-show recovery.",
    technology:
      "Workflow automation, calendar integrations, and messaging - plus AI only where it helped qualify or draft.",
    outcome:
      "Prospects stay engaged without manual chase, and more conversations land on the calendar with fewer empty slots.",
  },
];

export function CaseStudies() {
  return (
    <section className="section-pad bg-surface-muted" aria-labelledby="cases-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="cases-heading"
            eyebrow="Systems we've built"
            title="Problem → solution → outcome"
            description="Representative work patterns from recent engagements - starting with what was broken, not with which tool we used. Named logos and metrics available under NDA."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3" role="list">
          {cases.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 80} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-6 sm:p-7">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                    {item.industry}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{item.engagement}</p>

                  <div className="mt-5 space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        The problem
                      </p>
                      <p className="mt-1.5 text-text-muted">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        The impact
                      </p>
                      <p className="mt-1.5 text-text-muted">{item.impact}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                        The solution
                      </p>
                      <p className="mt-1.5 text-text-muted">{item.solution}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                        The journey
                      </p>
                      <p className="mt-1.5 text-text-muted">{item.journey}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        The technology
                      </p>
                      <p className="mt-1.5 text-text-muted">{item.technology}</p>
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-blue">
                        The outcome
                      </p>
                      <p className="mt-1.5 font-medium text-slate-700">{item.outcome}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={160}>
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
