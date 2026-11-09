import { blogPosts } from "../data/blogs";
import { locations } from "../data/locations";
import { CONTACT_EMAIL, SITE_URL } from "../lib/config";
import { services } from "../services/data";

export const dynamic = "force-static";

/** llms.txt: a plain-text summary of the site for AI assistants and answer engines. */
export function GET() {
  const lines = [
    "# EclipticLink",
    "",
    "> EclipticLink is an AI-powered cybersecurity company. We combine AI-driven detection, testing, and triage with experienced security professionals who validate findings and make response decisions. We serve growing companies in Saudi Arabia, the UAE, the United Kingdom, the United States, and Pakistan.",
    "",
    `Contact: ${CONTACT_EMAIL} | ${SITE_URL}/contact`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.title}](${SITE_URL}/services/${s.id}): ${s.summary}`),
    "",
    "## Regions",
    ...locations.map(
      (l) =>
        `- [Cybersecurity in ${l.short}](${SITE_URL}/locations/${l.slug}): ${l.regulations
          .map((r) => r.name)
          .slice(0, 4)
          .join(", ")}`,
    ),
    "",
    "## Security insights",
    ...[...blogPosts]
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
      .map((p) => `- [${p.title}](${SITE_URL}/blogs/${p.slug}): ${p.excerpt}`),
    "",
    "## Company",
    `- [About](${SITE_URL}/about)`,
    `- [All services](${SITE_URL}/services)`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
