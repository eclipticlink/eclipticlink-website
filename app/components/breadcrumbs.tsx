import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  align?: "center" | "start";
  className?: string;
};

export function Breadcrumbs({ items, align = "center", className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={`flex flex-wrap items-center gap-2 font-mono text-xs text-subtle ${
          align === "start" ? "justify-start" : "justify-center"
        }`}
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href != null && !isLast ? (
                <Link href={item.href} className="rounded transition hover:text-accent">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-muted" : undefined} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
