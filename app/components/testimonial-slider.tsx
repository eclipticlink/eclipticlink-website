"use client";

import { useState, useCallback } from "react";

const PER_PAGE = 3;

const testimonials = [
  {
    quote:
      "EclipticLink is truly the best. Always helpful and prompt—they are great at fixing things when stuff changes and get it done quickly at a fair price.",
    name: "Steve V.",
    location: "London, GB",
  },
  {
    quote:
      "Worked well with EclipticLink and communication was great throughout the whole project. Would work with them again in the future and I highly recommend them.",
    name: "Artwell K.",
    location: "Huddersfield, GB",
  },
  {
    quote:
      "EclipticLink helped with very short notice and did exactly what we needed. Much appreciate the guidance and support—will definitely be in touch for future work!",
    name: "Huzaifa Sarmad",
    location: "Islamabad, Pakistan",
  },
  {
    quote:
      "Hired EclipticLink for a 2-part project, first part is complete with no issues whatsoever. Great communication and kept me updated throughout. Would recommend & use again! Looking forward to a seamless and impressive second part of the project.",
    name: "Corrine J.",
    location: "Luton, GB",
  },
];

function TestimonialCard({
  quote,
  name,
  location,
}: {
  quote: string;
  name: string;
  location: string;
}) {
  return (
    <blockquote className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-zinc-700 leading-relaxed">{quote}</p>
      <footer className="mt-4">
        <cite className="not-italic">
          <span className="font-semibold text-brand-blue">{name}</span>
          <span className="block text-sm text-zinc-600">{location}</span>
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
                className="grid min-w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                aria-hidden={page !== pageIndex}
              >
                {slice.map((t, i) => (
                  <TestimonialCard
                    key={start + i}
                    quote={t.quote}
                    name={t.name}
                    location={t.location}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goTo(pageIndex - 1)}
            className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            aria-label="Previous testimonials"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                  i === pageIndex ? "w-6 bg-brand-teal" : "w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === pageIndex ? "true" : undefined}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(pageIndex + 1)}
            className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
            aria-label="Next testimonials"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
