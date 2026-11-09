import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "../lib/config";
import { locations } from "../data/locations";
import { services } from "../services/data";

const company = [
  { label: "About us", href: "/about" },
  { label: "All services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Security insights", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/eclipticlink/" },
  { label: "Instagram", href: "https://www.instagram.com/eclipticlink/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61584739395956" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-bg-elevated">
      <div className="container-site px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="EclipticLink home">
              <Image src="/ecliptic-link-logo.png" alt="" width={36} height={36} className="h-9 w-9" />
              <span className="font-display text-lg font-semibold text-ink">
                Ecliptic<span className="text-accent">Link</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              AI-powered cybersecurity: managed detection and response, penetration testing,
              AI and LLM security, cloud security, and compliance for growing companies.
            </p>
            <div className="mt-6 rounded-xl border border-threat/30 bg-threat-soft p-4">
              <p className="text-sm font-semibold text-[#ffb3ba]">Active security incident?</p>
              <p className="mt-1 text-sm text-muted">
                Call{" "}
                <a href={`tel:${CONTACT_PHONE}`} className="font-medium text-ink hover:text-accent">
                  {CONTACT_PHONE_DISPLAY}
                </a>{" "}
                or see{" "}
                <Link href="/services/incident-response" className="font-medium text-ink hover:text-accent">
                  incident response
                </Link>
                .
              </p>
            </div>
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Services</p>
            <ul className="mt-4 space-y-2.5" role="list">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="text-sm text-muted transition hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Company</p>
            <ul className="mt-4 space-y-2.5" role="list">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted transition hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm" role="list">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-muted transition hover:text-accent">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE}`} className="text-muted transition hover:text-accent">
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
            </ul>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-subtle">Regions</p>
            <ul className="mt-4 space-y-2.5 text-sm" role="list">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-muted transition hover:text-accent">
                    Cybersecurity in {l.short}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-subtle">Follow</p>
            <ul className="mt-4 flex flex-wrap gap-4 text-sm" role="list">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} EclipticLink. All rights reserved.</p>
          <p className="flex items-center gap-2 font-mono">
            <span className="live-dot" aria-hidden="true" />
            Secure by design
          </p>
        </div>
      </div>
    </footer>
  );
}
