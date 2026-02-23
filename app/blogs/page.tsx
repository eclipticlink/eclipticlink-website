import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/breadcrumbs";

export const metadata: Metadata = {
  title: "Blogs | EclipticLink",
  description:
    "Insights on software development, consulting, and technology from the EclipticLink team.",
};

export default function BlogsPage() {
  return (
    <>
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blogs" }]} className="mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Blogs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200">
            Insights on software development, consulting, and technology from
            the EclipticLink team.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="blogs-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="blogs-heading" className="sr-only">
            Blog posts
          </h2>
          <div className="mx-auto max-w-2xl rounded-xl border border-zinc-200 bg-zinc-50/50 p-12 text-center">
            <p className="text-lg font-medium text-zinc-700">
              New posts will appear here soon.
            </p>
            <p className="mt-2 text-zinc-600">
              We are preparing articles on software development, best
              practices, and industry insights. Check back later or get in
              touch for updates.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-brand-blue px-5 text-sm font-semibold text-white transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
