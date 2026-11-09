import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs";
import { HeroBackdrop } from "./home/hero-backdrop";

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
      className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:min-h-[34rem] lg:px-8"
      aria-labelledby={headingId}
    >
      <HeroBackdrop art />
      <div className="container-site relative z-10">
        <div className="lg:max-w-[calc(50%-5rem)]">
        <Breadcrumbs items={breadcrumbs} align="start" className="mb-8" />
        <p className="eyebrow animate-fade-up">{eyebrow}</p>
        <h1
          id={headingId}
          className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.1rem] lg:leading-[1.08]"
        >
          <span className="line-mask">
            <span style={{ animationDelay: "0.08s" }}>{title}</span>
          </span>
        </h1>
        <p className="animate-fade-up-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {description}
        </p>
        {children ? <div className="animate-fade-up-3 mt-9">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
