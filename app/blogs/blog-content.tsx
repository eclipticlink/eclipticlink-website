import type { BlogBlock } from "../data/blogs";

/** Renders trusted, first-party article content (HTML allowed in p/li). */
export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-cyber mx-auto max-w-3xl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className="mb-4 mt-14 text-2xl font-semibold tracking-tight text-ink first:mt-0 sm:text-3xl">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mb-3 mt-9 text-xl font-semibold tracking-tight text-ink">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="mb-5 text-[1.05rem] leading-8 text-muted" dangerouslySetInnerHTML={{ __html: block.text }} />
            );
          case "ul":
            return (
              <ul key={i} className="mb-7 space-y-2.5 pl-6">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative leading-7 text-muted before:absolute before:-left-5 before:top-[0.7rem] before:h-1.5 before:w-1.5 before:rounded-sm before:bg-accent"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mb-7 list-decimal space-y-3 pl-6 marker:font-mono marker:text-accent">
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1 leading-7 text-muted" dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            );
          case "blockquote":
            return (
              <blockquote key={i} className="my-9 rounded-r-xl border-l-2 border-accent bg-accent-soft px-6 py-5">
                <p className="text-lg leading-8 text-ink">{block.text}</p>
              </blockquote>
            );
          case "table":
            return (
              <div key={i} className="my-9 overflow-x-auto rounded-xl border border-line">
                <table className="w-full text-sm">
                  <thead className="border-b border-line bg-surface-2">
                    <tr>
                      {block.headers.map((h, j) => (
                        <th key={j} scope="col" className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-accent">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line bg-surface">
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k} className={`px-4 py-3 leading-relaxed ${k === 0 ? "font-medium text-ink" : "text-muted"}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
