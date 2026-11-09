type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        id={id}
        className={`font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl ${
          eyebrow ? "mt-4" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
