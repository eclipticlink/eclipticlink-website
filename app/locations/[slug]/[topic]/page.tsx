import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageView, topicMetadata } from "../../../components/topic-page";
import { getLocationBySlug } from "../../../data/locations";
import { getRegionPage, regionPages } from "../../../data/region-pages";
import { getServiceBySlug } from "../../../services/data";

type Props = { params: Promise<{ slug: string; topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return regionPages.map((p) => ({ slug: p.region, topic: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, topic } = await params;
  const page = getRegionPage(slug, topic);
  return page ? topicMetadata(page, `/locations/${page.region}/${page.slug}`) : {};
}

export default async function RegionTopicPage({ params }: Props) {
  const { slug, topic } = await params;
  const page = getRegionPage(slug, topic);
  const loc = getLocationBySlug(slug);
  if (!page || !loc) notFound();
  const service = getServiceBySlug(page.serviceId);
  const siblings = regionPages.filter((p) => p.region === page.region && p.slug !== page.slug);

  return (
    <TopicPageView
      page={page}
      path={`/locations/${page.region}/${page.slug}`}
      from={`region-${page.region}-${page.slug}`}
      serviceTitle={service?.title}
      crumbs={[
        { label: "Locations", href: "/locations" },
        { label: loc.short, href: `/locations/${loc.slug}` },
        { label: page.eyebrow.split(" · ")[0] },
      ]}
      areaServed={{ name: loc.short, code: loc.countryCode }}
      related={[
        ...(service ? [{ href: `/services/${service.id}`, label: `${service.title} service` }] : []),
        { href: `/locations/${loc.slug}`, label: `Cybersecurity in ${loc.short}` },
        ...siblings.map((p) => ({ href: `/locations/${p.region}/${p.slug}`, label: p.seoTitle })),
      ]}
    />
  );
}
