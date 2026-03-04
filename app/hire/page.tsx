import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/breadcrumbs";
import {
  HIRE_TEAM_CATEGORIES,
  getRolesByCategory,
} from "../data/hire-team";
import { BASE_OG, SITE_URL } from "../lib/config";

export const metadata: Metadata = {
  title: "Hire Dedicated Developers — AI, Backend, Frontend, DevOps & More",
  description:
    "Hire dedicated AI engineers, ML specialists, mobile developers, automation experts, backend & frontend developers, DevOps, and cloud engineers. Scale your team with EclipticLink.",
  alternates: { canonical: `${SITE_URL}/hire` },
  openGraph: {
    ...BASE_OG,
    title: "Hire Dedicated Developers & Engineers | EclipticLink",
    description: "Staff augmentation for AI, ML, mobile, automation, backend, frontend, DevOps, and cloud. Hire dedicated talent with EclipticLink.",
    url: `${SITE_URL}/hire`,
  },
};

export default function HirePage() {
  return (
    <>
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Hire Team" }]} className="mb-6" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hire Team
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-200">
            Scale your product with dedicated engineers and specialists. From AI and machine learning to mobile, automation, backend, frontend, DevOps, and cloud—hire the right talent without the overhead.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-labelledby="hire-list-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="hire-list-heading" className="sr-only">
            Hire by role
          </h2>
          <div className="space-y-16">
            {HIRE_TEAM_CATEGORIES.map((category) => {
              const roles = getRolesByCategory(category);
              const categoryId = category.toLowerCase().replace(/\s+/g, "-");
              return (
                <div key={category} id={categoryId} className="scroll-mt-24">
                  <h3 className="text-2xl font-bold text-zinc-900 border-b border-zinc-200 pb-3 mb-6">
                    {category}
                  </h3>
                  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
                    {roles.map((role) => (
                      <li key={role.slug} className="flex min-h-[180px]">
                        <Link
                          href={`/hire/role/${role.slug}`}
                          className="flex w-full min-h-full flex-col rounded-xl border border-zinc-200 bg-zinc-50/50 p-5 shadow-sm transition hover:shadow-md hover:border-brand-teal-light hover:bg-brand-teal-light/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
                        >
                          <span className="text-lg font-semibold text-zinc-900">
                            {role.title}
                          </span>
                          <p className="mt-2 flex-1 text-sm text-zinc-600 line-clamp-2 min-h-0">
                            {role.shortDescription}
                          </p>
                          <span className="mt-3 shrink-0 text-sm font-medium text-brand-blue">
                            View role details →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg bg-brand-blue px-6 text-base font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
