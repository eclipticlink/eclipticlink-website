type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <>
          <p className={light ? "eyebrow" : "eyebrow-on-light"}>{eyebrow}</p>
          <span
            className={`accent-line ${align === "left" ? "!mx-0" : ""} ${
              light ? "bg-brand-teal" : ""
            }`}
            aria-hidden="true"
          />
        </>
      ) : null}
      <h2
        id={id}
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-brand-blue"
        } ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/75" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
