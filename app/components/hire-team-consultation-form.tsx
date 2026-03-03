"use client";

import { useState } from "react";
import { sendHireConsultationEmail } from "@/app/lib/emailjs";

const COUNTRY_CODES = [
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+92", label: "+92" },
  { value: "+966", label: "+966" },
  { value: "+971", label: "+971" },
  { value: "+61", label: "+61" },
  { value: "+91", label: "+91" },
  { value: "+49", label: "+49" },
  { value: "+33", label: "+33" },
  { value: "+81", label: "+81" },
  { value: "+86", label: "+86" },
  { value: "+55", label: "+55" },
  { value: "+7", label: "+7" },
  { value: "+39", label: "+39" },
  { value: "+34", label: "+34" },
  { value: "+31", label: "+31" },
  { value: "+82", label: "+82" },
  { value: "+65", label: "+65" },
  { value: "+27", label: "+27" },
  { value: "+234", label: "+234" },
];

export function HireTeamConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [countryCode, setCountryCode] = useState("+1");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const phoneRaw = (formData.get("phone") as string)?.trim() ?? "";
    const phone = phoneRaw ? `${countryCode} ${phoneRaw}` : "";
    try {
      await sendHireConsultationEmail({
        name: (formData.get("name") as string) ?? "",
        company: (formData.get("company") as string) || undefined,
        email: (formData.get("email") as string) ?? "",
        phone: phone || undefined,
        message: (formData.get("message") as string) || undefined,
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
      "w-full rounded-lg border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none min-h-11";

    return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold tracking-tight text-brand-blue">
        Schedule a Free Consultation
      </h3>
      <p className="mt-1 text-sm text-zinc-600">
        So our team can reach out to you on time
      </p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label htmlFor="consult-name" className="sr-only">Name</label>
          <input
            id="consult-name"
            type="text"
            name="name"
            placeholder="Name"
            required
            autoComplete="name"
            disabled={status === "sending"}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="consult-company" className="sr-only">Company / Organization</label>
          <input
            id="consult-company"
            type="text"
            name="company"
            placeholder="Company / Organization"
            autoComplete="organization"
            disabled={status === "sending"}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="consult-email" className="sr-only">Company Email</label>
          <input
            id="consult-email"
            type="email"
            name="email"
            placeholder="Company Email ID"
            required
            autoComplete="email"
            disabled={status === "sending"}
            className={inputClass}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="consult-country" className="sr-only">Country code</label>
          <select
            id="consult-country"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            disabled={status === "sending"}
            className="min-h-11 w-24 shrink-0 rounded-lg border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-900 transition focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
            aria-label="Country code"
          >
            {COUNTRY_CODES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <div className="min-w-0 flex-1">
            <label htmlFor="consult-phone" className="sr-only">Phone</label>
            <input
              id="consult-phone"
              type="tel"
              name="phone"
              placeholder="Phone"
              autoComplete="tel"
              disabled={status === "sending"}
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="consult-message" className="sr-only">Message</label>
          <textarea
            id="consult-message"
            name="message"
            placeholder="Share Your Message"
            rows={3}
            disabled={status === "sending"}
            className={`${inputClass} min-h-[80px] resize-y`}
          />
        </div>
        {status === "success" && (
          <p className="rounded-lg bg-green-50 p-3 text-sm font-medium text-green-800" role="status" aria-live="polite">
            Thank you. We&apos;ll reach out soon.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-800" role="alert" aria-live="assertive">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full min-h-11 rounded-lg bg-brand-blue px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Share Your Message"}
        </button>
      </form>
    </div>
  );
}
