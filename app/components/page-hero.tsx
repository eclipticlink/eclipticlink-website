import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  headingId?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow = "EclipticLink Security",
  title,
  description,
  breadcrumbs,
  headingId = "page-heading",
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b border-line px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8"
      aria-labelledby={headingId}
    >
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="bg-hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-site relative z-10">
        <Breadcrumbs items={breadcrumbs} align="start" className="mb-8" />
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1
          id={headingId}
          className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
        >
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {description}
        </p>
        {children ? <div className="animate-fade-up-3 mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
