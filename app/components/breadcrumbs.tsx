import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  /** Use "dark" for dark hero (light text), "light" for light background */
  variant?: "dark" | "light";
  className?: string;
};

const variantStyles = {
  dark: {
    link: "text-zinc-300 transition hover:text-white focus-visible:text-white",
    current: "text-white",
    separator: "text-zinc-400",
  },
  light: {
    link: "text-zinc-600 transition hover:text-zinc-900 focus-visible:text-zinc-900",
    current: "text-zinc-900 font-medium",
    separator: "text-zinc-400",
  },
} as const;

export function Breadcrumbs({ items, variant = "dark", className = "" }: BreadcrumbsProps) {
  const styles = variantStyles[variant];

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center justify-center gap-2 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span className={styles.separator} aria-hidden>/</span>}
              {item.href != null && !isLast ? (
                <Link
                  href={item.href}
                  className={styles.link + " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? styles.current : undefined} aria-current={isLast ? "page" : undefined}>
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
