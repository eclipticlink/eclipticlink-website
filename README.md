This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment variables (production)

Contact and hire forms use [EmailJS](https://www.emailjs.com/). Build-time vars are in **`.env.production`** (committed) so every deploy—including Wrangler—has them without re‑entering in the Cloudflare dashboard. Next.js loads `.env.production` automatically when running `next build`.

If you deploy via the dashboard instead, you can still set the same `NEXT_PUBLIC_*` vars in **Settings → Environment variables** there.

**Receiving emails:** In each [EmailJS template](https://dashboard.emailjs.com/) (Contact and Hire Team), set **To Email** to your inbox (e.g. `info@eclipticlink.com`) in the template settings—same as you did for the working Contact form.

If EmailJS has domain restrictions, allow your production domain (e.g. `eclipticlink.com`).

## HubSpot chat widget

The site loads the HubSpot tracking script and AI chatbot. Optional: set `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` in `.env` if you use a different portal.

**Chat not showing?** In HubSpot: (1) **Service → Chatflows** — turn the chatflow **ON** and **Publish**. (2) **Target** tab — ensure your site’s domain is included (e.g. `eclipticlink.com`); if you only target the production domain, the widget will not appear on `localhost`. (3) Try an **incognito** window and disable **ad/pop-up blockers**. (4) For live chat (not bot), check **Inbox → Chat channel → Availability** so the launcher isn’t hidden outside hours.

## Troubleshooting: site stuck or 503 on navigation

**Root cause (fixed):** The app uses `@opennextjs/cloudflare` for deployment. Previously, `next dev` always ran with `initOpenNextCloudflareForDev()`, which patches the dev server to use the Cloudflare Workers runtime. That layer could return **503** on RSC (React Server Components) requests after some time or on certain routes, making the app appear stuck.

**Fix:** In `next.config.ts`, the OpenNext dev init runs **only when `USE_OPENNEXT_DEV=true`**. For normal local development, run `npm run dev` without that env var. You get the standard Next.js dev server and no 503s from the OpenNext layer. Production is unchanged (`opennextjs-cloudflare build` / deploy). If you need Cloudflare context (e.g. `getCloudflareContext`) during dev, set `USE_OPENNEXT_DEV=true` before `next dev`.

- **Recovery if it happens again:** Click the **logo** (EclipticLink) or **Home** in the mobile menu (full page load), or refresh the page.
- **Console warnings you can ignore:** `[locatorjs]` / `hook.bundle.js` (browser extension); `[quick-fetch]...` (HubSpot).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
