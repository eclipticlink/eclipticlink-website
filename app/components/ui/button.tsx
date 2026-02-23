import Link from "next/link";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold shadow-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70 motion-reduce:active:scale-100";

const variants = {
  primary:
    "bg-brand-teal text-brand-dark hover:bg-brand-teal-hover focus-visible:ring-brand-teal",
  primaryBlue:
    "bg-brand-blue text-white hover:bg-brand-blue-hover focus-visible:ring-brand-blue",
  secondary:
    "border-2 border-brand-teal bg-transparent text-white hover:bg-brand-teal/10 focus-visible:ring-brand-teal",
  secondaryOnLight:
    "border-2 border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue/5 focus-visible:ring-brand-blue",
  ghost:
    "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-zinc-900",
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
  const classes = [
    base,
    variants[variant],
    size === "lg" ? "h-12 px-6 text-base" : "",
    className,
  ]
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
