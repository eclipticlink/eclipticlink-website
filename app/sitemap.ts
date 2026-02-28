import type { MetadataRoute } from "next";
import { HIRE_TEAM_ROLES } from "./data/hire-team";
import { SITE_URL } from "./lib/config";
import { services } from "./services/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/hire`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const hireRolePages: MetadataRoute.Sitemap = HIRE_TEAM_ROLES.map((role) => ({
    url: `${SITE_URL}/hire/role/${role.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...hireRolePages];
}
