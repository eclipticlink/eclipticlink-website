"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/lib/emailjs";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const message = (formData.get("message") as string) ?? "";
    try {
      await sendContactEmail({ from_name: name, from_email: email, message });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold tracking-tight text-brand-blue sm:text-2xl">Send a message</h2>
      <p className="mt-1 text-sm text-zinc-600">We typically respond within one business day.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-700">
            Name <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 shadow-sm transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
            disabled={status === "sending"}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-700">
            Email <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 shadow-sm transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70"
            disabled={status === "sending"}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-700">
            Message <span className="text-red-600" aria-hidden="true">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 shadow-sm transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none disabled:opacity-70 resize-y min-h-[120px]"
            disabled={status === "sending"}
            placeholder="Tell us about your project or question..."
          />
        </div>
        {status === "success" && (
          <p className="rounded-lg bg-green-50 p-3 text-sm font-medium text-green-800" role="status" aria-live="polite">
            Thanks for contacting us. We will get back to you shortly.
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
          className="inline-flex h-12 min-h-11 w-full min-w-[140px] items-center justify-center rounded-lg bg-brand-blue px-6 text-base font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
