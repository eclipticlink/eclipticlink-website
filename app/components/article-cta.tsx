import Link from "next/link";
import { COMPANY_WHATSAPP_URL } from "../lib/config";
import { Icon } from "./icons";

/*
 * Lead block placed inside an article, after the reader has got value but
 * before they finish. Links to the contact form with the article's service
 * pre-selected and the article recorded as the source.
 */
export function ArticleCta({
  serviceId,
  serviceTitle,
  from,
}: {
  serviceId?: string;
  serviceTitle?: string;
  from: string;
}) {
  const params = new URLSearchParams({ from });
  if (serviceId) params.set("service", serviceId);
  return (
    <aside
      className="theme-deep bg-deep mx-auto my-12 max-w-3xl rounded-3xl p-7 sm:p-9"
      aria-label="Book a free security assessment"
    >
      <p className="eyebrow">Free 30-minute assessment</p>
      <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-ink">
        {serviceTitle ? `Need help with ${serviceTitle}?` : "Not sure where to start?"}
      </p>
      <p className="mt-3 leading-relaxed text-muted">
        Talk to a security specialist for 30 minutes. We&apos;ll review your setup, flag your highest-risk gaps and
        outline a prioritized plan, whether or not you work with us afterwards.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/contact?${params.toString()}`}
          className="btn-neon inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white"
          data-location="article-cta"
        >
          Book a free assessment
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
        <a
          href={COMPANY_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-location="article-cta"
          className="inline-flex min-h-11 items-center rounded-lg border border-line-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent/50 hover:text-accent"
        >
          Message us on WhatsApp
        </a>
      </div>
    </aside>
  );
}
