"use client";

import { useState } from "react";

export function HireTeamConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("idle");
    }
  }

  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5">
      <h3 className="text-base font-bold text-zinc-900">
        Schedule a Free Consultation
      </h3>
      <p className="mt-1 text-sm text-zinc-500">
        So our team can reach out to you on time
      </p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
        />
        <input
          type="text"
          name="company"
          placeholder="Company / Organization"
          className="w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
        />
        <input
          type="email"
          name="email"
          placeholder="Company Email ID"
          required
          className="w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
        />
        <input
          type="text"
          name="help"
          placeholder="How Can We Help You?"
          className="w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
        />
        <div className="flex gap-1">
          <div className="flex w-20 shrink-0 items-center justify-center rounded border border-zinc-300 bg-white px-2 text-sm text-zinc-600">
            +92
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        <textarea
          name="message"
          placeholder="Share Your Message"
          rows={3}
          className="w-full resize-none rounded border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
        />
        {status === "success" && (
          <p className="text-sm font-medium text-green-700">Thank you. We&apos;ll reach out soon.</p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded bg-zinc-900 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Share Your Message"}
        </button>
      </form>
    </div>
  );
}
