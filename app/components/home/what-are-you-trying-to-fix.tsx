"use client";

import { useState } from "react";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { Button } from "../ui/button";

const problems = [
  {
    id: "losing-leads",
    label: "We're losing leads",
    journey: "Sales journey",
    flow: [
      { label: "Lead captured", detail: "Interest arrives" },
      { label: "System responds", detail: "While interest is warm" },
      { label: "Qualified & routed", detail: "Right owner, right stage" },
      { label: "Follow-up runs", detail: "Without manual chase" },
      { label: "Meeting booked", detail: "Sales focuses on closing" },
    ],
  },
  {
    id: "too-manual",
    label: "We're doing too much manually",
    journey: "Operations journey",
    flow: [
      { label: "Manual task", detail: "Repeated every day" },
      { label: "Workflow defined", detail: "Steps and rules clear" },
      { label: "Automated action", detail: "System does the work" },
      { label: "Human approval", detail: "Only where judgment matters" },
      { label: "Done & logged", detail: "Less admin, more progress" },
    ],
  },
  {
    id: "systems-silos",
    label: "Our systems don't talk",
    journey: "Integration journey",
    flow: [
      { label: "System A", detail: "Holds part of the truth" },
      { label: "Integration", detail: "Reliable connection" },
      { label: "Business logic", detail: "Rules for your process" },
      { label: "System B", detail: "Updated automatically" },
      { label: "Synchronized data", detail: "One reliable picture" },
    ],
  },
  {
    id: "messy-crm",
    label: "Our CRM is a mess",
    journey: "CRM journey",
    flow: [
      { label: "Incoming data", detail: "Forms, calls, chats" },
      { label: "Validate & enrich", detail: "Clean before it lands" },
      { label: "Assign owner", detail: "Clear responsibility" },
      { label: "CRM updated", detail: "Stages stay honest" },
      { label: "Reporting", detail: "Numbers you can trust" },
    ],
  },
  {
    id: "need-ai",
    label: "We need AI, but where?",
    journey: "AI journey",
    flow: [
      { label: "Business process", detail: "Map what happens today" },
      { label: "AI opportunity", detail: "Where judgment helps" },
      { label: "AI action", detail: "Score, draft, classify, decide" },
      { label: "Human handoff", detail: "When it matters" },
      { label: "Outcome", detail: "Faster, smarter follow-through" },
    ],
  },
  {
    id: "software-fit",
    label: "Existing software doesn't fit",
    journey: "Build journey",
    flow: [
      { label: "Requirements", detail: "How the business really works" },
      { label: "Custom application", detail: "Built around the process" },
      { label: "Integrations", detail: "Talks to what you keep" },
      { label: "Automation", detail: "Removes the busywork" },
      { label: "Operational flow", detail: "A system your team owns" },
    ],
  },
  {
    id: "scale-ops",
    label: "We need to scale operations",
    journey: "Scale journey",
    flow: [
      { label: "Manual process", detail: "Works until volume grows" },
      { label: "Standardize", detail: "Clear, repeatable steps" },
      { label: "Automate", detail: "Capacity without headcount" },
      { label: "Monitor", detail: "See what breaks early" },
      { label: "Scale", detail: "Reliable as you grow" },
    ],
  },
];

export function WhatAreYouTryingToFix() {
  const [activeId, setActiveId] = useState(problems[0].id);
  const active = problems.find((p) => p.id === activeId) ?? problems[0];

  return (
    <section
      id="what-to-fix"
      className="section-pad scroll-mt-24 bg-atmosphere"
      aria-labelledby="fix-heading"
    >
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="fix-heading"
            eyebrow="Start with the problem"
            title="What are you trying to fix?"
            description="Pick the friction that sounds familiar. We'll show the journey a well-designed system creates - technology comes after the process is clear."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div
            className="flex flex-wrap content-start gap-2"
            role="tablist"
            aria-label="Business problems"
          >
            {problems.map((item) => {
              const selected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`fix-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`fix-panel-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={`rounded-md border px-3 py-2 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 ${
                    selected
                      ? "border-brand-teal bg-brand-teal-light text-brand-blue"
                      : "border-border-subtle bg-surface text-slate-600 hover:border-brand-teal-muted"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`fix-panel-${active.id}`}
            aria-labelledby={`fix-tab-${active.id}`}
            className="overflow-hidden rounded-2xl border border-border-subtle bg-brand-dark p-5 text-white sm:p-7"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-teal">
                  {active.journey}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold">{active.label}</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-brand-teal/30 bg-brand-teal/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-teal">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand-teal workflow-status-live"
                  aria-hidden="true"
                />
                Ideal flow
              </span>
            </div>

            <ol className="space-y-0" role="list">
              {active.flow.map((step, i) => (
                <li key={step.label} className="relative flex gap-4 pb-5 last:pb-0">
                  {i < active.flow.length - 1 ? (
                    <span
                      className="absolute top-8 bottom-0 left-[0.9375rem] w-px bg-brand-teal/35"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-teal/20 font-display text-xs font-semibold text-brand-teal">
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-display text-sm font-semibold text-white">{step.label}</p>
                    <p className="mt-0.5 text-xs text-white/55">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mt-10 text-center">
            <Button href="/contact" variant="primaryBlue">
              Book a discovery call
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
