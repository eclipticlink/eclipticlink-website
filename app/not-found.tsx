import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-zinc-300">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg bg-brand-teal px-6 text-base font-semibold text-brand-dark shadow-sm transition hover:bg-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal"
          >
            Go to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg border-2 border-brand-teal px-6 text-base font-semibold text-white transition hover:bg-brand-teal/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
