import Link from "next/link";

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70 motion-reduce:active:scale-100";

const variants = {
  primary:
    "btn-neon text-white focus-visible:ring-accent",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-accent/40 hover:bg-accent-soft focus-visible:ring-accent",
  danger:
    "border border-threat/30 bg-threat-soft text-threat hover:border-threat/60 hover:bg-threat/10 focus-visible:ring-threat",
  ghost: "text-muted hover:text-ink focus-visible:ring-accent",
} as const;

type ButtonVariant = keyof typeof variants;

type ButtonProps = {
  variant?: ButtonVariant;
  size?: "default" | "lg";
  className?: string;
  children: React.ReactNode;
} & (
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | (React.ComponentPropsWithoutRef<typeof Link> & { href: string })
);

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [base, variants[variant], size === "lg" ? "h-12 px-6 text-base" : "", className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ComponentPropsWithoutRef<"button">;
  return (
    <button type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
