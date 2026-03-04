import type { Metadata } from "next";
import { Breadcrumbs } from "../components/breadcrumbs";
import { BASE_OG, SITE_URL } from "../lib/config";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact EclipticLink — Get a Free Consultation",
  description:
    "Contact EclipticLink for custom software, AI, mobile app, cloud, and DevOps projects. Get a free consultation and quote for your next product.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    ...BASE_OG,
    title: "Contact EclipticLink — Get a Free Consultation",
    description: "Reach out to EclipticLink for custom software development, AI solutions, and dedicated team hiring.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} className="mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200">
            Whether you&apos;re based in the US, UK, Pakistan, Saudi Arabia, or the
            UAE—we&apos;d love to hear about your project. Get a free consultation
            and let&apos;s build something great together.
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
