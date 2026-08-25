"use client";

import { useEffect, useState } from "react";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { Button } from "../ui/button";

const pathSteps = [
  {
    n: "01",
    title: "Interest lands",
    detail: "Form, ad, chat, or call captures intent.",
    status: "Lead captured",
    signals: ["Website form", "Ad click", "Chat", "Missed call"],
  },
  {
    n: "02",
    title: "Automation responds",
    detail: "SMS and email go out while interest is still warm.",
    status: "Reply sent",
    signals: ["Instant SMS", "Email reply", "Channel match"],
  },
  {
    n: "03",
    title: "CRM updates",
    detail: "Owner assigned, stage moved, tags synchronized.",
    status: "Pipeline current",
    signals: ["Owner assigned", "Stage updated", "Tags synced"],
  },
  {
    n: "04",
    title: "Follow-up runs",
    detail: "Nurture and reactivation continue without manual chase.",
    status: "Sequence active",
    signals: ["Nurture", "Reminders", "Reactivation"],
  },
  {
    n: "05",
    title: "Meeting booked",
    detail: "Calendar confirmation and reminders land automatically.",
    status: "Confirmed",
    signals: ["Booking link", "Confirmation", "No-show recovery"],
  },
];

export function AutomationPath() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % pathSteps.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = pathSteps[active];

  return (
    <section
      id="automation-path"
      className="section-pad scroll-mt-24 bg-surface-muted"
      aria-labelledby="pipeline-heading"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="pipeline-heading"
            eyebrow="Example journey · Sales"
            title="From first touch to a confirmed meeting"
            description="One flagship example of how a designed system carries the work. Sales is a strong pattern for us - the same thinking applies to operations, support, and internal workflows."
          />
        </Reveal>

        <div
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Desktop horizontal flow - connector sits outside the grid so it cannot steal a column */}
          <div className="relative hidden lg:block">
            <div
              className="pointer-events-none absolute top-7 right-[10%] left-[10%] h-px bg-linear-to-r from-brand-teal/20 via-brand-teal/50 to-brand-teal/20 workflow-signal"
              aria-hidden="true"
            />
            <ol className="relative grid grid-cols-5 gap-3" role="list">
              {pathSteps.map((step, i) => {
                const isActive = i === active;
                return (
                  <li key={step.n} className="min-w-0">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onFocus={() => setPaused(true)}
                      className={`relative flex h-full w-full flex-col items-center rounded-xl border px-3 py-5 text-center transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                        isActive
                          ? "border-brand-teal bg-surface shadow-lg shadow-brand-dark/10"
                          : "border-border-subtle bg-surface/70 hover:border-brand-teal-muted"
                      }`}
                      aria-current={isActive ? "step" : undefined}
                    >
                      <span
                        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-semibold ${
                          isActive
                            ? "bg-brand-teal text-brand-dark workflow-node-active"
                            : "bg-brand-teal/15 text-brand-blue"
                        }`}
                      >
                        {step.n}
                      </span>
                      <h3 className="mt-4 font-display text-sm font-semibold text-brand-blue">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                        {step.detail}
                      </p>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Mobile / tablet vertical */}
          <ol className="space-y-3 lg:hidden" role="list">
            {pathSteps.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.n}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-brand-teal bg-surface shadow-md shadow-brand-dark/8"
                        : "border-border-subtle bg-surface"
                    }`}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-display text-xs font-semibold ${
                        isActive
                          ? "bg-brand-teal text-brand-dark"
                          : "bg-brand-teal/15 text-brand-blue"
                      }`}
                    >
                      {step.n}
                    </span>
                    <span className="min-w-0">
                      <span className="font-display text-sm font-semibold text-brand-blue">
                        {step.title}
                      </span>
                      <span className="mt-1 block text-sm text-text-muted">{step.detail}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Active step detail panel */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border-subtle bg-brand-dark p-6 text-white sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
                  Step {current.n} · System status
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{current.title}</h3>
                <p className="mt-2 max-w-xl text-white/70">{current.detail}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-md border border-brand-teal/30 bg-brand-teal/10 px-3 py-1.5 text-xs font-semibold text-brand-teal">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand-teal workflow-status-live"
                  aria-hidden="true"
                />
                {current.status}
              </span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" role="list">
              {current.signals.map((signal) => (
                <li
                  key={signal}
                  className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                >
                  {signal}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <Button href="/services/ai-automations" variant="primaryBlue">
              Explore lead &amp; CRM systems
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
