"use client";

import { useEffect, useState } from "react";

const steps = [
  { id: "interest", label: "Interest", detail: "Form · Ad · Chat" },
  { id: "reply", label: "Auto reply", detail: "SMS + Email" },
  { id: "crm", label: "CRM update", detail: "Owner · Stage" },
  { id: "nurture", label: "Follow-up", detail: "Nurture runs" },
  { id: "booked", label: "Booked", detail: "Meeting set" },
];

export function HeroAutomationVisual() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <div
      className="relative w-full max-w-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
      aria-label="Automated lead-to-meeting system preview"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-brand-dark/70 p-5 shadow-2xl shadow-brand-dark/40 backdrop-blur-md sm:p-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 90% 0%, rgb(116 210 176 / 0.22), transparent 55%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mb-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Live system
            </p>
            <p className="mt-1 font-display text-sm font-semibold text-white">
              Lead → booked conversation
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-md border border-brand-teal/30 bg-brand-teal/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-teal">
            <span
              className="h-1.5 w-1.5 rounded-full bg-brand-teal workflow-status-live"
              aria-hidden="true"
            />
            Running
          </span>
        </div>

        <ol className="relative z-10 space-y-2.5" role="list">
          {steps.map((step, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <li key={step.id} className="relative flex items-stretch gap-3">
                <div className="flex w-8 shrink-0 flex-col items-center">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition duration-300 ${
                      isActive
                        ? "border-brand-teal bg-brand-teal text-brand-dark workflow-node-active"
                        : isDone
                          ? "border-brand-teal/50 bg-brand-teal/20 text-brand-teal"
                          : "border-white/20 bg-white/5 text-white/50"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 ? (
                    <span
                      className={`mt-1 w-px flex-1 ${
                        isDone ? "bg-brand-teal/50 workflow-signal" : "bg-white/15"
                      }`}
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <div
                  className={`flex min-w-0 flex-1 items-center justify-between rounded-lg border px-3.5 py-2.5 transition duration-300 ${
                    isActive
                      ? "border-brand-teal/40 bg-brand-teal/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <div className="min-w-0">
                    <p
                      className={`font-display text-sm font-semibold ${
                        isActive ? "text-white" : "text-white/80"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p className="truncate text-xs text-white/50">{step.detail}</p>
                  </div>
                  {isActive ? (
                    <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-teal">
                      Active
                    </span>
                  ) : isDone ? (
                    <span className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-wider text-white/40">
                      Done
                    </span>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
