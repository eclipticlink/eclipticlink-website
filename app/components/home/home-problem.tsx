import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";

const problems = [
  {
    title: "Leads are not followed up fast enough",
    solution: "Automated response, qualification, routing, and nurture.",
  },
  {
    title: "Your team spends hours on repetitive work",
    solution: "Automate operational workflows and remove unnecessary manual steps.",
  },
  {
    title: "Your systems don't communicate",
    solution: "Connect the systems and data needed for one reliable workflow.",
  },
  {
    title: "Your CRM doesn't reflect reality",
    solution: "Automate sync, ownership, stages, updates, and handoffs.",
  },
  {
    title: "People repeat the same decisions every day",
    solution: "Use workflow logic and AI for appropriate decisions and actions.",
  },
  {
    title: "You've outgrown off-the-shelf tools",
    solution: "Build software around the process instead of forcing another tool.",
  },
  {
    title: "Information is scattered across systems",
    solution: "Connect data sources and create a reliable flow of information.",
  },
  {
    title: "You need AI, but don't know where it fits",
    solution: "Identify practical AI opportunities inside the existing workflow.",
  },
];

export function HomeProblem() {
  return (
    <section className="section-pad bg-surface" aria-labelledby="problem-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="problem-heading"
            eyebrow="The problem"
            title="Where businesses leak opportunity"
            description="Opportunity is lost in slow replies, repetitive admin, disconnected systems, and processes that never quite match the tools. We start with the problem - then design the system that fixes it."
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2" role="list">
          {problems.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={Math.min(i * 50, 200)} className="h-full">
                <div className="h-full border-l-2 border-brand-teal/70 bg-surface-muted/60 px-5 py-5">
                  <h3 className="font-display text-base font-semibold text-brand-blue">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    <span className="font-semibold text-brand-teal">Solution: </span>
                    {item.solution}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
