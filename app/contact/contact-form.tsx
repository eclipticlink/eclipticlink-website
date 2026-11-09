"use client";

import { useState } from "react";
import { trackEvent } from "@/app/lib/analytics";
import { sendContactEmail } from "@/app/lib/emailjs";
import { services } from "@/app/services/data";

const URGENCY = [
  { value: "planning", label: "Planning ahead" },
  { value: "soon", label: "Need help this month" },
  { value: "incident", label: "Active incident" },
] as const;

const SIZES = ["1–50", "51–200", "201–1,000", "1,000+"] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [interests, setInterests] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<string>("");

  function toggle(id: string) {
    setInterests((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    // Honeypot: bots fill hidden fields
    if (fd.get("website")) return;
    setStatus("sending");

    const get = (k: string) => ((fd.get(k) as string) ?? "").trim();
    const interestLabels = interests
      .map((id) => services.find((s) => s.id === id)?.title ?? id)
      .join(", ");
    const urgencyLabel = URGENCY.find((u) => u.value === urgency)?.label ?? "-";

    const message = [
      `Company: ${get("company") || "-"}`,
      `Role: ${get("role") || "-"}`,
      `Company size: ${get("size") || "-"}`,
      `Urgency: ${urgencyLabel}`,
      `Services of interest: ${interestLabels || "-"}`,
      "",
      "What they need:",
      get("details") || "-",
    ].join("\n");

    try {
      await sendContactEmail({ from_name: get("name"), from_email: get("email"), message });
      setStatus("success");
      trackEvent("generate_lead", {
        form: "contact",
        urgency,
        services: interests.join(",") || "none",
        company_size: get("size") || "unknown",
      });
      form.reset();
      setInterests([]);
      setUrgency("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card brackets p-8" role="status" aria-live="polite">
        <p className="eyebrow">Request received</p>
        <h2 className="mt-4 text-2xl font-semibold text-ink">Thanks, we&apos;re on it.</h2>
        <ol className="mt-6 space-y-4" role="list">
          {[
            ["A security specialist reviews your request", "Usually within one business day."],
            ["We schedule a short scoping call", "To understand your environment, risks, and goals."],
            ["You get a clear, prioritized proposal", "Scope, timeline, and cost, with no surprises."],
          ].map(([t, b], i) => (
            <li key={t} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/40 bg-accent-soft font-mono text-sm text-accent">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-ink">{t}</p>
                <p className="text-sm text-muted">{b}</p>
              </div>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  const disabled = status === "sending";

  return (
    <div className="card p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-ink">Request a security assessment</h2>
      <p className="mt-1 text-sm text-muted">
        Tell us a little about your environment. All information is treated as confidential.
      </p>

      {urgency === "incident" ? (
        <div className="mt-6 rounded-xl border border-threat/40 bg-threat-soft p-4 text-sm" role="alert">
          <p className="font-semibold text-[#ffb3ba]">Active incident? Don&apos;t wait for email.</p>
          <p className="mt-1 text-muted">
            Call{" "}
            <a href="tel:+923438788662" className="font-semibold text-ink underline underline-offset-2">
              +92 343 8788662
            </a>{" "}
            now. Isolate affected systems from the network, but don&apos;t power them off.
          </p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="c-name" className="text-sm font-medium text-ink">
              Full name <span className="text-threat" aria-hidden="true">*</span>
            </label>
            <input id="c-name" name="name" required autoComplete="name" className="field" disabled={disabled} placeholder="Jane Doe" />
          </div>
          <div>
            <label htmlFor="c-email" className="text-sm font-medium text-ink">
              Work email <span className="text-threat" aria-hidden="true">*</span>
            </label>
            <input id="c-email" name="email" type="email" required autoComplete="email" className="field" disabled={disabled} placeholder="jane@company.com" />
          </div>
          <div>
            <label htmlFor="c-company" className="text-sm font-medium text-ink">
              Company
            </label>
            <input id="c-company" name="company" autoComplete="organization" className="field" disabled={disabled} placeholder="Company name" />
          </div>
          <div>
            <label htmlFor="c-role" className="text-sm font-medium text-ink">
              Your role
            </label>
            <input id="c-role" name="role" autoComplete="organization-title" className="field" disabled={disabled} placeholder="CTO, IT manager, founder…" />
          </div>
        </div>

        <div>
          <label htmlFor="c-size" className="text-sm font-medium text-ink">
            Company size
          </label>
          <select id="c-size" name="size" className="field" disabled={disabled} defaultValue="">
            <option value="">Select employees</option>
            {SIZES.map((s) => (
              <option key={s} value={s}>
                {s} employees
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-ink">What can we help with?</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((s) => {
              const on = interests.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={on}
                  disabled={disabled}
                  onClick={() => toggle(s.id)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                    on ? "border-accent bg-accent-soft text-accent" : "border-line-strong text-muted hover:border-accent/50 hover:text-ink"
                  }`}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-ink">
            Urgency <span className="text-threat" aria-hidden="true">*</span>
          </legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {URGENCY.map((u) => (
              <label
                key={u.value}
                className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-3 text-sm transition has-[:checked]:border-accent has-[:checked]:bg-accent-soft ${
                  u.value === "incident" ? "border-threat/40 text-[#ffb3ba] has-[:checked]:border-threat has-[:checked]:bg-threat-soft" : "border-line-strong text-ink"
                }`}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={u.value}
                  required
                  disabled={disabled}
                  checked={urgency === u.value}
                  onChange={() => setUrgency(u.value)}
                  className="accent-[var(--accent)]"
                />
                {u.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="c-details" className="text-sm font-medium text-ink">
            What&apos;s going on? <span className="text-threat" aria-hidden="true">*</span>
          </label>
          <textarea
            id="c-details"
            name="details"
            required
            rows={4}
            className="field min-h-28 resize-y"
            disabled={disabled}
            placeholder="e.g. Customer asked for a SOC 2 report, we're launching an AI assistant, we need a pentest before a funding round…"
          />
          <p className="mt-2 text-xs text-subtle">Please don&apos;t include passwords, keys, or other secrets.</p>
        </div>

        {status === "error" ? (
          <p className="rounded-lg border border-threat/40 bg-threat-soft p-3 text-sm text-[#ffb3ba]" role="alert">
            Something went wrong. Please try again or email info@eclipticlink.com.
          </p>
        ) : null}

        <button
          type="submit"
          disabled={disabled}
          className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-accent px-6 font-semibold text-bg transition hover:bg-accent-hover disabled:opacity-70 sm:w-auto"
        >
          {disabled ? "Sending…" : "Request assessment"}
        </button>
      </form>
    </div>
  );
}
