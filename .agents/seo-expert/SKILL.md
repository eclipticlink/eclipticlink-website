---
name: seo-expert
description: Guides on-page, technical, and content SEO for discoverability and rankings. Use when optimizing for search engines, writing metadata, implementing structured data, improving crawlability, or when the user asks for SEO advice, keywords, or search visibility.
---

# SEO Expert

## When to Apply

Use this skill when:
- Optimizing pages or site for search engines
- Writing or reviewing title tags, meta descriptions, and headings
- Implementing or auditing structured data (JSON-LD)
- Setting up canonicals, sitemaps, or robots
- Improving crawlability, indexing, or Core Web Vitals for SEO
- Planning content or keyword strategy

---

## 1. On-Page SEO

### Title and meta description

- **Title tag**: Unique per page, 50–60 characters, primary keyword near the start. Brand at start or end as needed.
- **Meta description**: Unique per page, 150–160 characters, compelling and accurate; can include a call to action. Not a ranking factor but drives click-through.
- **Avoid**: Duplicate titles/descriptions across pages, keyword stuffing, misleading copy.

### Headings and content structure

- **Single H1** per page: Describes the main topic; include primary keyword where natural.
- **Heading hierarchy**: H1 → H2 → H3 (no skips). Use H2s for main sections, H3s for subsections.
- **Headings as signposts**: Clear, descriptive; help users and crawlers understand structure and topics.
- **Content**: Original, useful, and aligned with search intent. Use keywords naturally in headings, first paragraph, and body.

### URLs and links

- **URLs**: Short, readable, lowercase, hyphens. Include target keyword when it fits.
- **Internal links**: Link to important pages with descriptive anchor text; avoid "click here" or generic phrases.
- **External links**: Link to authoritative sources when it helps the user; ensure outbound links open in a new tab only when it improves UX (e.g. leaving a flow).

---

## 2. Technical SEO

### Crawlability and indexing

- **Canonical URL**: Set one canonical per page (e.g. `rel="canonical"` or Next.js `metadata.alternates.canonical`) to avoid duplicate-content issues. Prefer HTTPS and consistent trailing-slash policy.
- **Sitemap**: Provide an XML sitemap (`/sitemap.xml`) listing important URLs; keep it under ~50k URLs per sitemap; use index sitemaps if larger.
- **robots.txt**: Allow crawlers where appropriate; point to sitemap. Do not block critical CSS/JS if needed for rendering.
- **Server rendering**: Critical content and links must be in the initial HTML so crawlers can see them; avoid relying on client-only rendering for key SEO content.

### Mobile and Core Web Vitals

- **Mobile-friendly**: Responsive or dedicated mobile experience; readable text, tappable targets, no intrusive interstitials.
- **Core Web Vitals**: Good LCP, INP, and CLS support both UX and ranking. Optimize largest content, reduce main-thread work, reserve space for images and fonts.

---

## 3. Metadata and Social

- **Open Graph**: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`. Image size often 1200×630 for social cards.
- **Twitter Card**: `twitter:card` (e.g. `summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`.
- **Consistency**: Social metadata should match or sensibly extend the page’s title and description; avoid conflicting messages.

---

## 4. Structured Data (JSON-LD)

- **Schema.org**: Use JSON-LD in `<script type="application/ld+json">` in the page or layout. Validate with Google Rich Results Test or Schema.org validator.
- **Common types**:
  - **Organization** (site-wide): name, url, logo, sameAs (social URLs).
  - **WebSite**: name, url, potentialSearchAction for sitelinks search box.
  - **Article** / **BlogPosting**: headline, datePublished, dateModified, author, image.
  - **BreadcrumbList**: for breadcrumb navigation.
  - **LocalBusiness**: when the site represents a local business (address, phone, opening hours).
- **One representation per entity**: Avoid duplicate or conflicting JSON-LD for the same thing on a page.
- **Accurate data only**: Markup must reflect visible content; do not add false or hidden information.

---

## 5. Content and Keywords

- **Search intent**: Match content type and depth to intent (informational, navigational, transactional).
- **Keywords**: Research and use terms people search for; place in title, headings, and body naturally. Cover related terms and questions.
- **Uniqueness**: Prefer original content; avoid thin or copied content across pages.
- **Updates**: Keep key pages current; use clear date indicators (e.g. datePublished/dateModified in structured data and visible "Last updated" where helpful).

---

## 6. SEO Checklist (per page or site)

- [ ] Unique title and meta description, within length guidelines.
- [ ] Single H1 and logical H2/H3 hierarchy.
- [ ] Canonical URL set; no unintended duplicate URLs.
- [ ] Sitemap includes the page; robots.txt does not block it.
- [ ] Open Graph and Twitter Card set where relevant.
- [ ] JSON-LD present and valid for the page type (e.g. Organization, WebSite, Article).
- [ ] Internal links use descriptive anchor text to important pages.
- [ ] Page is mobile-friendly and Core Web Vitals are considered.
- [ ] Critical content and links are in server-rendered HTML.

---

## 7. Quick Reference

| Need | Action |
|------|--------|
| Page title | Unique, 50–60 chars, keyword near start |
| Meta description | Unique, 150–160 chars, compelling |
| Headings | One H1; H2 → H3 hierarchy; descriptive |
| Canonical | One per page; consistent scheme/host/path |
| Sitemap | XML at /sitemap.xml; key URLs only |
| Social | og:* and twitter:* aligned with page |
| Rich results | JSON-LD (Organization, WebSite, Article, etc.) |
| Crawlability | Key content in initial HTML; sensible robots.txt |

Apply this guidance when implementing or auditing SEO so the site is discoverable, accurate in search results, and aligned with search engine best practices.
