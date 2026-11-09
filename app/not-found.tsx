import type { Metadata } from "next";
import { Button } from "./components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden px-5 pb-28 pt-40 sm:px-6 lg:px-8">
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-site relative z-10 max-w-2xl text-center">
        <p className="font-mono text-sm text-threat">ERR 404 · resource not found</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          This page isn&apos;t here
        </h1>
        <p className="mt-4 text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved as part of our focus on
          AI-powered cybersecurity.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/" size="lg">
            Go to home
          </Button>
          <Button href="/services" variant="secondary" size="lg">
            View services
          </Button>
        </div>
      </div>
    </section>
  );
}
