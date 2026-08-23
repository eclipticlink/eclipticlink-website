import type { MetadataRoute } from "next";
import { blogPosts } from "./data/blogs";
import { HIRE_TEAM_ROLES } from "./data/hire-team";
import { SITE_URL } from "./lib/config";
import { services } from "./services/data";

const AUTOMATION_BLOG_SLUGS = new Set([
  "gohighlevel-lead-follow-up-automation",
  "n8n-make-zapier-which-automation-tool",
  "hubspot-zoho-crm-automation-for-sales-pipelines",
  "ai-workflow-automation-guide-for-small-businesses",
  "ai-automation-use-cases-that-deliver-roi",
  "ai-document-processing-automation",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/services/ai-automations`, lastModified: now, changeFrequency: "weekly", priority: 0.98 },
    { url: `${SITE_URL}/hire`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
  ];

  const servicePages: MetadataRoute.Sitemap = services
    .filter((service) => service.id !== "ai-automations")
    .map((service) => ({
      url: `${SITE_URL}/services/${service.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: service.id === "ai" ? 0.92 : 0.8,
    }));

  const hireRolePages: MetadataRoute.Sitemap = HIRE_TEAM_ROLES.map((role) => ({
    url: `${SITE_URL}/hire/role/${role.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: role.category === "Automation" ? 0.82 : 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blogs/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: AUTOMATION_BLOG_SLUGS.has(post.slug)
      ? 0.9
      : post.category === "AI Development"
        ? 0.85
        : 0.75,
  }));

  return [...staticPages, ...servicePages, ...hireRolePages, ...blogPages];
}
