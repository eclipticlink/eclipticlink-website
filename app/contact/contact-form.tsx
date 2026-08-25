"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/lib/emailjs";

const TOOLS = [
  "GoHighLevel",
  "HubSpot",
  "Zoho",
  "n8n",
  "Make",
  "Zapier",
  "Other / custom",
] as const;

const CHALLENGES = [
  { value: "", label: "Select your main challenge" },
  { value: "slow-response", label: "Leads are not getting replies quickly" },
  { value: "messy-crm", label: "CRM is messy or outdated" },
  { value: "inconsistent-followup", label: "Follow-up is inconsistent" },
  { value: "booking-friction", label: "Meetings are hard to book" },
  { value: "tool-silos", label: "Tools are not connected" },
  { value: "need-ai", label: "Need AI / intelligent product" },
  { value: "need-software", label: "Need custom software" },
  { value: "need-capacity", label: "Need dedicated specialists" },
  { value: "other", label: "Something else" },
] as const;

const PROJECT_TYPES = [
  { value: "project", label: "Project delivery" },
  { value: "hire", label: "Hire team / staff augmentation" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [tools, setTools] = useState<string[]>([]);

  function toggleTool(tool: string) {
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const company = (formData.get("company") as string) ?? "";
    const challenge = (formData.get("challenge") as string) ?? "";
    const automate = (formData.get("automate") as string) ?? "";
    const projectType = (formData.get("projectType") as string) ?? "";
    const budget = (formData.get("budget") as string) ?? "";
    const details = (formData.get("details") as string) ?? "";

    const challengeLabel =
      CHALLENGES.find((c) => c.value === challenge)?.label ?? challenge;
    const projectLabel =
      PROJECT_TYPES.find((p) => p.value === projectType)?.label ?? projectType;

    const message = [
      `Company: ${company || "-"}`,
      `Current tools: ${tools.length ? tools.join(", ") : "-"}`,
      `Main challenge: ${challengeLabel || "-"}`,
      `What they want automated: ${automate || "-"}`,
      `Project type: ${projectLabel || "-"}`,
      `Budget / timeline: ${budget || "-"}`,
      "",
      "Additional details:",
      details || "-",
    ].join("\n");

    try {
      await sendContactEmail({ from_name: name, from_email: email, message });
      setStatus("success");
      form.reset();
      setTools([]);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="border border-brand-teal/40 bg-surface p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
          Request received
        </p>
        <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-brand-blue sm:text-2xl">
          Thanks - we have your request.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">
          Here is what happens next:
        </p>
        <ol className="mt-6 space-y-4" role="list">
          {[
            {
              n: "1",
              title: "We review your current process",
              body: "Tools, handoffs, and where leads stall today.",
            },
            {
              n: "2",
              title: "We identify where automation can help",
              body: "Response, CRM hygiene, follow-up, booking - or product work if needed.",
            },
            {
              n: "3",
              title: "We come back with a practical next step",
              body: "A clear recommendation, not a generic pitch deck.",
            },
          ].map((step) => (
            <li key={step.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-teal/15 font-display text-sm font-semibold text-brand-blue">
                {step.n}
              </span>
              <div>
                <p className="font-display font-semibold text-brand-blue">{step.title}</p>
                <p className="mt-0.5 text-sm text-text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-brand-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="border border-border-subtle bg-surface p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold tracking-tight text-brand-blue sm:text-2xl">
        Tell us where leads stall today
      </h2>
      <p className="mt-1 text-sm text-text-muted">
        A few details help us come back with a practical next step. We typically respond
        within one business day.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
              Name <span className="text-red-600" aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              className="mt-2 block w-full rounded-md border border-border-subtle bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
              disabled={status === "sending"}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="contact-company" className="block text-sm font-medium text-slate-700">
              Company
            </label>
            <input
              id="contact-company"
              type="text"
              name="company"
              autoComplete="organization"
              className="mt-2 block w-full rounded-md border border-border-subtle bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
              disabled={status === "sending"}
              placeholder="Company name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">
            Email <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-md border border-border-subtle bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
            disabled={status === "sending"}
            placeholder="you@company.com"
          />
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-slate-700">Current tools / platforms</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {TOOLS.map((tool) => {
              const selected = tools.includes(tool);
              return (
                <button
                  key={tool}
                  type="button"
                  onClick={() => toggleTool(tool)}
                  disabled={status === "sending"}
                  aria-pressed={selected}
                  className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal ${
                    selected
                      ? "border-brand-teal bg-brand-teal-light text-brand-blue"
                      : "border-border-subtle bg-white text-slate-600 hover:border-brand-teal-muted"
                  }`}
                >
                  {tool}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div>
          <label htmlFor="contact-challenge" className="block text-sm font-medium text-slate-700">
            Main challenge <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <select
            id="contact-challenge"
            name="challenge"
            required
            className="mt-2 block w-full rounded-md border border-border-subtle bg-white px-4 py-3 text-slate-900 transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
            disabled={status === "sending"}
            defaultValue=""
          >
            {CHALLENGES.map((c) => (
              <option key={c.value || "empty"} value={c.value} disabled={!c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-automate" className="block text-sm font-medium text-slate-700">
            What do you want automated? <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-automate"
            name="automate"
            required
            rows={3}
            className="mt-2 block min-h-[88px] w-full resize-y rounded-md border border-border-subtle bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
            disabled={status === "sending"}
            placeholder="e.g. Instant lead reply, CRM stage updates, nurture sequences, booking reminders…"
          />
        </div>

        <div>
          <fieldset>
            <legend className="text-sm font-medium text-slate-700">
              Project type <span className="text-red-600" aria-hidden="true">*</span>
            </legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-3">
              {PROJECT_TYPES.map((pt) => (
                <label
                  key={pt.value}
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-border-subtle bg-white px-3 py-3 text-sm has-[:checked]:border-brand-teal has-[:checked]:bg-brand-teal-light/50"
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={pt.value}
                    required
                    disabled={status === "sending"}
                    className="accent-[var(--brand-teal)]"
                  />
                  {pt.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div>
          <label htmlFor="contact-budget" className="block text-sm font-medium text-slate-700">
            Budget / timeline <span className="font-normal text-text-muted">(optional)</span>
          </label>
          <input
            id="contact-budget"
            type="text"
            name="budget"
            className="mt-2 block w-full rounded-md border border-border-subtle bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
            disabled={status === "sending"}
            placeholder="e.g. Starting this quarter, flexible budget"
          />
        </div>

        <div>
          <label htmlFor="contact-details" className="block text-sm font-medium text-slate-700">
            Additional details <span className="font-normal text-text-muted">(optional)</span>
          </label>
          <textarea
            id="contact-details"
            name="details"
            rows={3}
            className="mt-2 block min-h-[88px] w-full resize-y rounded-md border border-border-subtle bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
            disabled={status === "sending"}
            placeholder="Anything else we should know?"
          />
        </div>

        {status === "error" && (
          <p
            className="rounded-md bg-red-50 p-3 text-sm font-medium text-red-800"
            role="alert"
            aria-live="assertive"
          >
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 min-h-11 w-full min-w-[140px] cursor-pointer items-center justify-center rounded-md bg-brand-blue px-6 text-base font-semibold text-white transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Book a discovery call"}
        </button>
      </form>
    </div>
  );
}
