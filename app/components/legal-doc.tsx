import { PageHero } from "./page-hero";

/*
 * Shared layout for the legal pages: the standard page hero, a sticky table
 * of contents, and numbered sections. Content is plain data so the three
 * documents stay consistent and easy to update.
 */

export type LegalBlock = string | { list: string[] } | { table: [string, string][] };
export type LegalSection = { id: string; title: string; blocks: LegalBlock[] };

export function LegalDoc({
  eyebrow,
  title,
  description,
  updated,
  crumb,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  updated: string;
  crumb: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: crumb }]}
      >
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">Last updated {updated}</p>
      </PageHero>

      <section className="section-pad pt-8" aria-label={title}>
        <div className="container-site grid gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">On this page</p>
            <ol className="mt-4 space-y-2 border-l border-line" role="list">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px flex gap-3 border-l-2 border-transparent py-1 pl-4 text-sm text-muted transition-colors hover:border-brand-strong hover:text-accent"
                  >
                    <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="card rounded-3xl p-7 sm:p-10">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-line py-8 first:pt-0 last:border-b-0 last:pb-0">
                <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="prose-cyber mt-4 space-y-4 leading-relaxed text-muted">
                  {s.blocks.map((b, k) =>
                    typeof b === "string" ? (
                      <p key={k} dangerouslySetInnerHTML={{ __html: b }} />
                    ) : "list" in b ? (
                      <ul key={k} className="space-y-2" role="list">
                        {b.list.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-strong" aria-hidden="true" />
                            <span dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div key={k} className="overflow-hidden rounded-xl border border-line">
                        <table className="w-full text-left text-sm">
                          <tbody className="divide-y divide-line">
                            {b.table.map(([k1, v]) => (
                              <tr key={k1} className="align-top">
                                <th scope="row" className="w-2/5 bg-bg-elevated px-4 py-3 font-semibold text-ink">
                                  {k1}
                                </th>
                                <td className="px-4 py-3" dangerouslySetInnerHTML={{ __html: v }} />
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
