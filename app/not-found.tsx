import type { Metadata } from "next";
import { Button } from "./components/ui/button";

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
    <section className="relative overflow-hidden bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="bg-hero-mesh pointer-events-none absolute inset-0 opacity-90" aria-hidden="true" />
      <div className="container-site relative z-10 max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-white/75">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Go to home
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}
