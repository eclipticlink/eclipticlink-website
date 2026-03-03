"use client";

import { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { sendHireConsultationEmail } from "@/app/lib/emailjs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PHONE_DIGITS = 10;

export function HireTeamConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [phoneValue, setPhoneValue] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const t = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(t);
  }, [status]);

  function validateName(value: string): string | undefined {
    const t = value?.trim() ?? "";
    if (!t) return "Name is required";
    return undefined;
  }

  function validateEmail(value: string): string | undefined {
    const t = value?.trim() ?? "";
    if (!t) return "Email is required";
    if (!EMAIL_REGEX.test(t)) return "Enter a valid email address";
    return undefined;
  }

  function validatePhone(value: string): string | undefined {
    const digits = (value ?? "").replace(/\D/g, "");
    if (digits.length === 0) return undefined;
    if (digits.length <= 3) return undefined;
    if (digits.length < MIN_PHONE_DIGITS) return "Enter a valid phone number";
    return undefined;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = (formData.get("name") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const message = (formData.get("message") as string) ?? "";

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phoneValue);

    setErrors({ name: nameError, email: emailError, phone: phoneError });

    if (nameError || emailError || phoneError) return;

    setStatus("sending");
    try {
      await sendHireConsultationEmail({
        name: name.trim(),
        email: email.trim(),
        phone: phoneValue?.trim() || undefined,
        message: message?.trim() || undefined,
      });
      setStatus("success");
      form.reset();
      setPhoneValue("");
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  const baseInputClass =
    "w-full rounded-lg border bg-white px-3 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus-visible:outline-none min-h-11";
  const inputBorderClass = (field: "name" | "email" | "phone") =>
    errors[field]
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
      : "border-zinc-300 focus:border-brand-teal";

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
            className={`${baseInputClass} ${inputBorderClass("name")}`}
            onBlur={(e) => setErrors((prev) => ({ ...prev, name: validateName(e.target.value) }))}
            aria-invalid={!!errors.name}
          />
        </div>
        <div>
          <label htmlFor="consult-email" className="sr-only">Email</label>
          <input
            id="consult-email"
            type="email"
            name="email"
            placeholder="Email"
            required
            autoComplete="email"
            disabled={status === "sending"}
            className={`${baseInputClass} ${inputBorderClass("email")}`}
            onBlur={(e) => setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }))}
            aria-invalid={!!errors.email}
          />
        </div>
        <div className={`hire-phone-wrapper w-full ${errors.phone ? "hire-phone-wrapper--error" : ""}`}>
          <label htmlFor="consult-phone" className="sr-only">Phone</label>
          <PhoneInput
            defaultCountry="us"
            value={phoneValue}
            onChange={(phone) => {
              setPhoneValue(phone ?? "");
              setErrors((prev) => ({ ...prev, phone: validatePhone(phone ?? "") }));
            }}
            disabled={status === "sending"}
            placeholder="Phone"
            inputProps={{
              id: "consult-phone",
              autoComplete: "tel",
              required: false,
              "aria-required": false,
              "aria-invalid": !!errors.phone,
              onBlur: () => setErrors((prev) => ({ ...prev, phone: validatePhone(phoneValue) })),
            }}
            className="hire-phone-input w-full"
            inputClassName="hire-phone-input-field"
          />
        </div>
        <div>
          <label htmlFor="consult-message" className="sr-only">Message</label>
          <textarea
            id="consult-message"
            name="message"
            placeholder="Share Your Message"
            rows={3}
            disabled={status === "sending"}
            className={`${baseInputClass} border-zinc-300 focus:border-brand-teal min-h-[80px] resize-y`}
          />
        </div>
        {status === "success" && (
          <p className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800" role="status" aria-live="polite">
            Thanks for reaching out. We&apos;ll get back to you within one business day.
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
