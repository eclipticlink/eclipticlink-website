import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "../../../components/page-hero";
import { Button } from "../../../components/ui/button";
import {
  getAllRoleSlugs,
  getRoleBySlug,
} from "../../../data/hire-team";
import { BASE_OG, SITE_URL } from "../../../lib/config";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllRoleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoleBySlug(slug);
  if (!role) return { title: "Role | EclipticLink" };
  const title = `Hire ${role.title} | Dedicated ${role.category}`;
  const description = `${role.shortDescription} Dedicated ${role.title} talent from EclipticLink for teams that need capacity without a full hiring cycle.`;
  return {
    title,
    description,
    keywords: [
      `hire ${role.title}`,
      `dedicated ${role.title}`,
      role.category,
      "staff augmentation",
      "hire automation specialists",
      "EclipticLink",
    ],
    alternates: { canonical: `${SITE_URL}/hire/role/${role.slug}` },
    openGraph: {
      ...BASE_OG,
      title: `${title} | EclipticLink`,
      description,
      url: `${SITE_URL}/hire/role/${role.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
      { "@type": "ListItem", position: 1, name: "EclipticLink", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Hire", item: `${SITE_URL}/hire` },
      { "@type": "ListItem", position: 3, name: role.title, item: `${SITE_URL}/hire/role/${role.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHero
        title={role.title}
        description={role.shortDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Hire Team", href: "/hire" },
          { label: role.title },
        ]}
      />

      <section className="section-pad bg-atmosphere">
        <div className="container-site max-w-3xl text-center">
          <p className="eyebrow-on-light">{role.category}</p>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            {role.longDescription}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href={contactHref} variant="primaryBlue" size="lg">
              Hire a {role.title}
            </Button>
            <Button href="/hire" variant="secondaryOnLight" size="lg">
              View all roles
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
