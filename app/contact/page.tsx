import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | EclipticLink",
  description:
    "Get in touch with EclipticLink. Create powerful IT solutions that transform your business. Reach us by address, phone, or email.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-zinc-900 px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            Create powerful IT solutions that transform your business and drive
            value. We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="contact-heading" className="sr-only">
            Contact details and form
          </h2>
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-zinc-900">Get in touch</h3>
              <div className="mt-6 space-y-8">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    Address
                  </span>
                  <p className="mt-2 text-zinc-700">
                    Flat 1A, Second Floor, Plaza 57, Lane 2, Square Commercial,
                    Bahria Town Phase 7, Rawalpindi
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    Call us
                  </span>
                  <a
                    href="tel:+923335934448"
                    className="mt-2 block text-zinc-700 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 focus-visible:outline-none"
                  >
                    +92 333 5934448
                  </a>
                </div>
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                    Email us
                  </span>
                  <a
                    href="mailto:info@eclipticlink.com"
                    className="mt-2 block text-zinc-700 hover:text-zinc-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900 focus-visible:outline-none"
                  >
                    info@eclipticlink.com
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
