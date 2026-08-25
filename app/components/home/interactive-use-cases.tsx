"use client";

import { useState } from "react";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { Button } from "../ui/button";

const useCases = [
  {
    id: "response",
    tag: "01 - Response time",
    title: "Reach people while they still care",
    body: "Inbound interest triggers a real reply, owner assignment, and CRM update within seconds, so your team talks to warm leads first.",
    platforms: ["GoHighLevel", "HubSpot", "Zapier"],
    flow: [
      { label: "Lead enters", detail: "Form, ad, chat, or call" },
      { label: "Instant SMS / email", detail: "Reply while interest is warm" },
      { label: "CRM assignment", detail: "Owner + stage set" },
      { label: "Sales notified", detail: "Ready to take the conversation" },
    ],
  },
  {
    id: "pipeline",
    tag: "02 - Pipeline hygiene",
    title: "Keep stages honest",
    body: "Deals move, tags stick, and handoffs happen without someone babysitting HubSpot, Zoho, or GoHighLevel all afternoon.",
    platforms: ["HubSpot", "Zoho", "n8n"],
    flow: [
      { label: "Lead changes", detail: "Status or activity updates" },
      { label: "CRM updates", detail: "Stage and fields sync" },
      { label: "Owner assigned", detail: "Right person, right time" },
      { label: "Tags synchronized", detail: "Reports stay trustworthy" },
    ],
  },
  {
    id: "followup",
    tag: "03 - Follow-up",
    title: "Stay present without the chase",
    body: "Multi-step nurture and reactivation that still feel considered, built in Make, Zapier, or n8n and wired back to your CRM.",
    platforms: ["Make", "n8n", "Zapier"],
    flow: [
      { label: "No response", detail: "Silence after first touch" },
      { label: "Nurture starts", detail: "Timed, personal sequences" },
      { label: "Reminder + reactivation", detail: "Second chances, not spam" },
      { label: "CRM updated", detail: "Engagement logged" },
    ],
  },
  {
    id: "scheduling",
    tag: "04 - Scheduling",
    title: "Fill the calendar without the admin tax",
    body: "Booking, reminders, and no-show recovery across channels so demos and consults land without a coordinator living in the inbox.",
    platforms: ["GoHighLevel", "Make", "Zapier"],
    flow: [
      { label: "Interested lead", detail: "Ready to meet" },
      { label: "Booking link", detail: "Self-serve scheduling" },
      { label: "Confirmation", detail: "Calendar + reminders" },
      { label: "No-show recovery", detail: "Automatic rebook path" },
    ],
  },
];

export function InteractiveUseCases() {
  const [activeId, setActiveId] = useState(useCases[0].id);
  const active = useCases.find((u) => u.id === activeId) ?? useCases[0];

  return (
    <section className="section-pad bg-surface" aria-labelledby="use-cases-heading">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            id="use-cases-heading"
            eyebrow="Where we help"
            title="Problems growth teams ask us to fix"
            description="Select a use case to see the automation flow underneath."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div
            className="flex flex-row gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible"
            role="tablist"
            aria-label="Use cases"
          >
            {useCases.map((item) => {
              const selected = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`usecase-tab-${item.id}`}
                  aria-controls={`usecase-panel-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={`min-w-[11rem] shrink-0 rounded-xl border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 lg:min-w-0 ${
                    selected
                      ? "border-brand-teal bg-brand-teal-light/60 shadow-sm"
                      : "border-border-subtle bg-surface-muted/50 hover:border-brand-teal-muted"
                  }`}
                >
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-teal">
                    {item.tag}
                  </span>
                  <span className="mt-1.5 block font-display text-sm font-semibold text-brand-blue sm:text-base">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`usecase-panel-${active.id}`}
            aria-labelledby={`usecase-tab-${active.id}`}
            className="rounded-2xl border border-border-subtle bg-surface-muted/40 p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold text-brand-blue sm:text-2xl">
              {active.title}
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-text-muted">{active.body}</p>

            <div className="mt-8 overflow-hidden rounded-xl border border-border-subtle bg-brand-dark p-5 text-white sm:p-6">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-brand-teal">
                Automation flow
              </p>
              <ol className="mt-4 space-y-0" role="list">
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
                      <p className="font-display text-sm font-semibold text-white">
                        {step.label}
                      </p>
                      <p className="mt-0.5 text-xs text-white/55">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2" role="list">
              {active.platforms.map((p) => (
                <li
                  key={p}
                  className="rounded-md border border-border-subtle bg-surface px-3 py-1 text-xs font-semibold text-brand-blue"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-12 text-center">
            <Button href="/services/ai-automations" variant="primaryBlue">
              Explore lead &amp; CRM systems
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
