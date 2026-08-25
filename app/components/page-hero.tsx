import { Breadcrumbs, type BreadcrumbItem } from "./breadcrumbs";

type PageHeroProps = {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  headingId?: string;
};

export function PageHero({
  title,
  description,
  breadcrumbs,
  headingId = "page-heading",
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-brand-dark px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      aria-labelledby={headingId}
    >
      <div className="bg-hero-mesh mesh-animate pointer-events-none absolute inset-0 opacity-90" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <div className="container-site relative z-10 text-center">
        <Breadcrumbs items={breadcrumbs} className="mb-8" />
        <p className="eyebrow mb-4">EclipticLink</p>
        <h1
          id={headingId}
          className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem]"
        >
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          {description}
        </p>
      </div>
    </section>
  );
}
