"use client";

import { useState, useCallback } from "react";

const PER_PAGE = 2;

const testimonials = [
  {
    quote:
      "EclipticLink is truly the best. Always helpful and prompt, they are great at fixing things when stuff changes and get it done quickly at a fair price.",
    name: "Steve V.",
    location: "London, GB",
    theme: "Prompt support",
    engagement: "Ongoing engagement",
  },
  {
    quote:
      "Worked well with EclipticLink and communication was great throughout the whole project. Would work with them again in the future and I highly recommend them.",
    name: "Artwell K.",
    location: "Huddersfield, GB",
    theme: "Clear communication",
    engagement: "End-to-end delivery",
  },
  {
    quote:
      "Hired EclipticLink for a 2-part project, first part is complete with no issues whatsoever. Great communication and kept me updated throughout. Would recommend & use again! Looking forward to a seamless and impressive second part of the project.",
    name: "Corrine J.",
    location: "Luton, GB",
    theme: "Ongoing partnership",
    engagement: "Multi-phase project",
  },
  {
    quote: "Excellent work - will use again",
    name: "Nicholas S.",
    location: "Palmers Green, GB",
    theme: "Reliable delivery",
    engagement: "Project delivery",
  },
];

function TestimonialCard({
  quote,
  name,
  location,
  theme,
  engagement,
}: {
  quote: string;
  name: string;
  location: string;
  theme: string;
  engagement: string;
}) {
  return (
    <blockquote className="card flex h-full flex-col px-6 py-6">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accent">
        {theme}
      </p>
      <p className="mt-3 flex-1 leading-relaxed text-ink/90">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-5">
        <cite className="not-italic">
          <span className="font-display font-semibold text-ink">{name}</span>
          <span className="mt-0.5 block text-sm text-muted">{location}</span>
          <span className="mt-1 block text-xs text-subtle">{engagement}</span>
        </cite>
      </footer>
    </blockquote>
  );
}

export function TestimonialSlider() {
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);
  const [pageIndex, setPageIndex] = useState(0);

  const goTo = useCallback(
    (next: number) => {
      setPageIndex(() => (next + totalPages) % totalPages);
    },
    [totalPages]
  );

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:duration-0"
          style={{ transform: `translateX(-${pageIndex * 100}%)` }}
          aria-live="polite"
        >
          {Array.from({ length: totalPages }, (_, page) => {
            const start = page * PER_PAGE;
            const slice = testimonials.slice(start, start + PER_PAGE);
            return (
              <div
                key={page}
                className="grid w-full shrink-0 gap-5 sm:grid-cols-2"
                style={{ minWidth: "100%" }}
              >
                {slice.map((t) => (
                  <TestimonialCard key={t.name} {...t} />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {totalPages > 1 ? (
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => goTo(pageIndex - 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink transition hover:border-accent hover:text-accent"
            aria-label="Previous testimonials"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonial pages">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === pageIndex}
                onClick={() => setPageIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === pageIndex ? "bg-accent" : "bg-line-strong hover:bg-accent/50"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(pageIndex + 1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink transition hover:border-accent hover:text-accent"
            aria-label="Next testimonials"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}
