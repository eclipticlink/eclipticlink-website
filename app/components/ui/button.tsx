import Link from "next/link";

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70 motion-reduce:active:scale-100";

const variants = {
  primary:
    "bg-accent text-bg shadow-[0_0_0_1px_rgb(116_210_176/0.4),0_10px_30px_-10px_rgb(116_210_176/0.6)] hover:bg-accent-hover hover:shadow-[0_0_0_1px_rgb(116_210_176/0.6),0_14px_40px_-10px_rgb(116_210_176/0.75)] focus-visible:ring-accent",
  secondary:
    "border border-line-strong bg-white/[0.03] text-ink hover:border-accent/60 hover:bg-accent-soft focus-visible:ring-accent",
  danger:
    "border border-threat/50 bg-threat-soft text-[#ffb3ba] hover:border-threat hover:bg-threat/20 focus-visible:ring-threat",
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
