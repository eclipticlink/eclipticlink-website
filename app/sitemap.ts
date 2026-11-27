import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blogs";
import { locations } from "./data/locations";
import { regionPages } from "./data/region-pages";
import { SITE_URL } from "./lib/config";
import { services } from "./services/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/blogs`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/regional-privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.id}`,
   
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/locations`, changeFrequency: "monthly" as const, priority: 0.8 },
    ...locations.map((l) => ({
      url: `${SITE_URL}/locations/${l.slug}`,
     
      changeFrequency: "monthly" as const,
      priority: l.slug === "saudi-arabia" || l.slug === "uae" ? 0.9 : 0.8,
    })),
  ];

  const regionServicePages: MetadataRoute.Sitemap = regionPages.map((p) => ({
    url: `${SITE_URL}/locations/${p.region}/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...locationPages, ...regionServicePages, ...blogPages];
}
