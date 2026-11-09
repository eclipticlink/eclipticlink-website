/**
 * Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver…).
 * Run after each production deploy:  npm run indexnow
 * The key file public/85a0db48bb24f6c52aa32baeec0f977b.txt must be live on the site.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://eclipticlink.com";
const KEY = "85a0db48bb24f6c52aa32baeec0f977b";

const xml = await (await fetch(`${SITE_URL}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error("No URLs found in sitemap");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE_URL).host,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList,
  }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
if (res.status >= 400) process.exit(1);
