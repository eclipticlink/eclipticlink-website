import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicPageView, topicMetadata } from "../../../components/topic-page";
import { getServiceTopic, serviceTopics } from "../../../data/service-topics";
import { getServiceBySlug } from "../../data";

type Props = { params: Promise<{ slug: string; topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceTopics.map((p) => ({ slug: p.serviceId, topic: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, topic } = await params;
  const page = getServiceTopic(slug, topic);
  return page ? topicMetadata(page, `/services/${page.serviceId}/${page.slug}`) : {};
}

export default async function ServiceTopicPage({ params }: Props) {
  const { slug, topic } = await params;
  const page = getServiceTopic(slug, topic);
  const service = getServiceBySlug(slug);
  if (!page || !service) notFound();
  const siblings = serviceTopics.filter((p) => p.serviceId === page.serviceId && p.slug !== page.slug);

  return (
    <TopicPageView
      page={page}
      path={`/services/${page.serviceId}/${page.slug}`}
      from={`service-${page.serviceId}-${page.slug}`}
      serviceTitle={service.title}
      crumbs={[
        { label: "Services", href: "/services" },
        { label: service.title, href: `/services/${service.id}` },
        { label: page.eyebrow.split(" · ")[0] },
      ]}
      related={[
        { href: `/services/${service.id}`, label: `${service.title} service` },
        ...siblings.map((p) => ({ href: `/services/${p.serviceId}/${p.slug}`, label: p.seoTitle })),
      ]}
    />
  );
}
