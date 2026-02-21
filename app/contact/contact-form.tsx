"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      // Replace with your API route or form service when ready
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-zinc-900">Send a message</h3>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-700">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900 focus:ring-opacity-50 focus-visible:outline-none"
            disabled={status === "sending"}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-700">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900 focus:ring-opacity-50 focus-visible:outline-none"
            disabled={status === "sending"}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-700">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900 focus:ring-opacity-50 focus-visible:outline-none disabled:opacity-70"
            disabled={status === "sending"}
          />
        </div>
        {status === "success" && (
          <p className="text-sm font-medium text-green-700" role="status">
            Thanks for contacting us. We will get back to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-700" role="alert">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 min-h-11 w-full items-center justify-center rounded-lg bg-zinc-900 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
}
