import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllServiceSlugs, getServiceBySlug } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service | EclipticLink" };
  const description =
    service.metaDescription ?? `${service.summary} | EclipticLink.`;
  return {
    title: `${service.title} | EclipticLink`,
    description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="bg-zinc-900 px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-sm text-zinc-400">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
            {service.summary}
          </p>
        </div>
      </section>

      <section
        className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="service-overview-heading"
      >
        <div className="mx-auto max-w-3xl">
          <h2 id="service-overview-heading" className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Overview
          </h2>
          <div className="prose prose-zinc mt-6 max-w-none prose-p:text-zinc-600 prose-p:leading-8">
            <p className="text-lg">{service.details}</p>
          </div>
        </div>
      </section>

      <section
        className="bg-zinc-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="subservices-heading"
      >
        <div className="mx-auto max-w-4xl">
          <h2 id="subservices-heading" className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            What we offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-600">
            Our {service.title} capabilities include the following.
          </p>
          <ul className="mt-12 grid gap-8 sm:grid-cols-1 lg:gap-10">
            {service.subServices.map((sub) => (
              <li
                key={sub.id}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
              >
                <h3 className="text-xl font-semibold text-zinc-900">
                  {sub.title}
                </h3>
                <p className="mt-2 text-zinc-600">{sub.summary}</p>
                <p className="mt-4 text-zinc-500 leading-7">{sub.details}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg bg-zinc-900 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900"
            >
              Get in touch
            </Link>
            <Link
              href="/services"
              className="inline-flex h-12 min-h-11 items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 text-base font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-900"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
