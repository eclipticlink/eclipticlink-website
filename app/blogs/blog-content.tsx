import type { BlogBlock } from "../data/blogs";

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-12 mb-4 text-2xl font-bold tracking-tight text-brand-blue sm:text-3xl first:mt-0"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-8 mb-3 text-xl font-semibold tracking-tight text-brand-blue"
              >
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="mb-5 text-zinc-700 leading-8"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            );
          case "ul":
            return (
              <ul key={i} className="mb-6 space-y-2 pl-6">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="relative text-zinc-700 leading-7 before:absolute before:-left-4 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-teal"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mb-6 space-y-3 pl-6 list-decimal marker:text-brand-teal marker:font-semibold">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="text-zinc-700 leading-7 pl-1"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ol>
            );
          case "blockquote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-4 border-brand-teal bg-zinc-50 px-6 py-5 rounded-r-xl"
              >
                <p className="text-zinc-700 italic leading-8">{block.text}</p>
              </blockquote>
            );
          case "table":
            return (
              <div key={i} className="my-8 overflow-x-auto rounded-xl border border-zinc-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead className="bg-zinc-50 border-b border-zinc-200">
                    <tr>
                      {block.headers.map((h, j) => (
                        <th
                          key={j}
                          className="px-4 py-3 text-left font-semibold text-brand-blue"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {block.rows.map((row, j) => (
                      <tr key={j} className="hover:bg-zinc-50/50 transition-colors">
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className={`px-4 py-3 text-zinc-600 leading-relaxed ${k === 0 ? "font-medium text-zinc-800" : ""}`}
                          >
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
