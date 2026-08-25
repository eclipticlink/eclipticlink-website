import Link from "next/link";

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70 motion-reduce:active:scale-100 motion-reduce:transition-colors";

const variants = {
  primary:
    "bg-brand-teal text-brand-dark shadow-sm shadow-brand-dark/10 hover:-translate-y-0.5 hover:bg-brand-teal-hover hover:shadow-md hover:shadow-brand-teal/25 focus-visible:ring-brand-teal motion-reduce:hover:translate-y-0",
  primaryBlue:
    "bg-brand-blue text-white shadow-sm shadow-brand-blue/20 hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-md hover:shadow-brand-blue/30 focus-visible:ring-brand-blue motion-reduce:hover:translate-y-0",
  secondary:
    "border border-white/35 bg-white/5 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/12 focus-visible:ring-brand-teal motion-reduce:hover:translate-y-0",
  secondaryOnLight:
    "border border-brand-blue/25 bg-transparent text-brand-blue hover:-translate-y-0.5 hover:border-brand-blue hover:bg-brand-blue/[0.04] focus-visible:ring-brand-blue motion-reduce:hover:translate-y-0",
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
