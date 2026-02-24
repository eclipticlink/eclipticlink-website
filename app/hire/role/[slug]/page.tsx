import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "../../../components/breadcrumbs";
import {
  getAllRoleSlugs,
  getRoleBySlug,
} from "../../../data/hire-team";
import { SITE_URL } from "../../../lib/config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllRoleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) return { title: "Role | EclipticLink" };
  const title = `Hire ${role.title} — Dedicated ${role.category} Talent`;
  return {
    title,
    description: `${role.shortDescription} Hire a dedicated ${role.title} from EclipticLink for your next project.`,
    alternates: { canonical: `${SITE_URL}/hire/role/${role.slug}` },
    openGraph: {
      title: `${title} | EclipticLink`,
      description: role.shortDescription,
      url: `${SITE_URL}/hire/role/${role.slug}`,
    },
  };
}

export default async function HireRolePage({ params }: Props) {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) notFound();

  const contactHref = `/contact?role=${encodeURIComponent(role.title)}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Hire Team", item: `${SITE_URL}/hire` },
      { "@type": "ListItem", position: 3, name: role.title, item: `${SITE_URL}/hire/role/${role.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="bg-brand-dark px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Hire Team", href: "/hire" },
              { label: role.title },
            ]}
            className="mb-6"
          />
          <p className="text-sm font-medium text-brand-teal uppercase tracking-wider">
            {role.category}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {role.title}
          </h1>
          <p className="mt-4 text-lg text-zinc-200">
            {role.shortDescription}
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="prose prose-zinc mx-auto max-w-none prose-p:text-zinc-600 prose-p:leading-relaxed prose-p:text-lg">
            <p>{role.longDescription}</p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href={contactHref}
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg bg-brand-blue px-6 text-base font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
            >
              Hire a {role.title}
            </Link>
            <Link
              href="/hire"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg border-2 border-zinc-300 px-6 text-base font-semibold text-zinc-700 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-teal"
            >
              View all roles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
