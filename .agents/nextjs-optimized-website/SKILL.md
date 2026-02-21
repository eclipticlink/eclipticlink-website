---
name: nextjs-optimized-website
description: Guides building performant, SEO-friendly websites with Next.js (App Router). Use when creating or optimizing a Next.js site, improving Core Web Vitals, implementing server/client components, or when the user asks for Next.js best practices, performance, or SEO.
---

# Next.js Optimized Website

## When to Apply

Use this skill when:
- Building or refactoring a Next.js website
- Improving performance, Core Web Vitals, or SEO
- Choosing between Server and Client Components
- Setting up routing, metadata, images, or fonts

## Stack Assumptions

- **Next.js** (App Router). Use `app/` directory; avoid `pages/` for new work.
- **React Server Components (RSC)** by default; Client Components only when needed (interactivity, browser APIs, hooks).
- **TypeScript** for type safety unless the project is explicitly JS-only.

---

## 1. Architecture and Routing

- **App Router**: Use `app/` with `layout.tsx` (shared UI) and `page.tsx` (route UI). Nested folders = nested routes.
- **Server Components by default**: No `"use client"` unless the component needs event handlers, `useState`/`useEffect`, or browser-only APIs.
- **Client boundaries**: Add `"use client"` at the top of the file; keep the subtree as small as possible so most of the tree stays server-rendered.
- **Route groups**: Use `(groupName)` folders for organization without changing the URL.
- **Loading and error**: Add `loading.tsx` and `error.tsx` for better UX and error boundaries.

---

## 2. Performance

### Data and rendering

- **Fetch on the server**: Use async Server Components and fetch in the component or in `layout`/`page`; avoid fetching in Client Components for initial data when possible.
- **Caching**: Rely on Next.js fetch cache (default). Use `cache()` for request deduping, or `revalidate` / `revalidateTag` when you need fresh data.
- **Streaming**: Use `<Suspense>` around heavy or slow components so the rest of the page can stream in.

### Assets

- **Images**: Always use `next/image` with explicit `width`/`height` or `fill` and `sizes` for responsive images. Prefer modern formats (e.g. WebP/AVIF) via config if needed.
- **Fonts**: Use `next/font` (e.g. `next/font/google`) to self-host and avoid layout shift; apply in the root layout.
- **Scripts**: Use `next/script` with `strategy="lazyOnload"` (or `afterInteractive`) for non-critical third-party scripts.

### Bundle and code splitting

- **Dynamic imports**: Use `next/dynamic` with `ssr: false` only when the component must not run on the server; otherwise allow SSR and use dynamic import for code splitting.
- **Minimize client JS**: Keep `"use client"` and client-only dependencies in small, leaf components.

---

## 3. SEO and Metadata

- **Metadata API**: Export `metadata` or `generateMetadata` in `layout.tsx` or `page.tsx` (title, description, openGraph, twitter, etc.).
- **Canonical and alternates**: Set `metadata.alternates.canonical` and locale alternates when relevant.
- **Structured data**: Add JSON-LD in the layout or page (e.g. Organization, WebSite, Article) via a `<script type="application/ld+json">` or a small component that outputs it.
- **Semantic HTML**: Use `<main>`, `<article>`, headings in order, and descriptive links.

---

## 4. Core Web Vitals

- **LCP**: Optimize largest content (usually image or hero). Use `priority` on above-the-fold `next/image`, optimize image size and format, and ensure key data is fetched early (server fetch, no unnecessary client waterfalls).
- **INP/FID**: Keep main-thread work low. Defer non-critical JS, use `next/script` with lazy strategies, avoid large synchronous scripts.
- **CLS**: Reserve space for images (width/height or `fill` + container), use `next/font` for text, avoid inserting content above existing content without reserved space.

---

## 5. File and Folder Conventions

- `app/layout.tsx` — root layout (fonts, global styles, metadata, `<html>`, `<body>`).
- `app/page.tsx` — home route.
- `app/[segment]/page.tsx` — dynamic segment.
- `app/(group)/…` — route group (no URL segment).
- Colocate components in the route folder or in a shared `components/` directory; keep Client Components in files that start with `"use client"`.
- Use `lib/` or `utils/` for shared server/client utilities; avoid importing server-only code into Client Components.

---

## 6. Checklist for New or Optimized Pages

- [ ] Page is a Server Component unless it needs interactivity.
- [ ] Data is fetched on the server where possible; client fetch only when necessary.
- [ ] All images use `next/image` with dimensions or `fill` + `sizes`.
- [ ] Fonts use `next/font` and are applied in the root layout.
- [ ] `metadata` (or `generateMetadata`) is set for title, description, and OG/Twitter when relevant.
- [ ] Critical above-the-fold image has `priority` if it's LCP.
- [ ] Third-party scripts use `next/script` with an appropriate strategy.
- [ ] `loading.tsx` and `error.tsx` exist where they improve UX.
- [ ] No layout shift from images or fonts (dimensions and font display configured).

---

## 7. Quick Reference

| Need | Use |
|------|-----|
| Shared UI shell | `app/layout.tsx` |
| Route UI | `app/.../page.tsx` |
| Interactivity / hooks | `"use client"` in that file only |
| Images | `next/image` + dimensions or `fill` + `sizes` |
| Fonts | `next/font` in root layout |
| SEO | `metadata` / `generateMetadata` |
| Slow section | Wrap in `<Suspense>` |
| Non-critical script | `next/script` with lazy strategy |

Keep this skill in mind when implementing or reviewing Next.js pages and layouts; prefer the patterns above for an optimized, maintainable site.
