import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Hire Team", href: "/hire" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61584739395956" },
  { label: "Instagram", href: "https://www.instagram.com/eclipticlink/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/eclipticlink/" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-dark text-white" role="contentinfo">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 0% 100%, rgb(116 210 176 / 0.12), transparent 55%)",
        }}
      />
      <div className="container-site relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <Link
              href="/"
              aria-label="EclipticLink home"
              className="inline-block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              <Image
                src="/ecliptic-link-logo.png"
                alt="EclipticLink footer logo"
                width={180}
                height={48}
                className="h-12 w-auto object-contain object-left sm:h-14"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              Lead systems, CRM workflows, and the product engineering behind
              teams that refuse to let opportunity sit unanswered.
            </p>
            <p className="mt-6 text-sm text-white/50" suppressHydrationWarning>
              © {new Date().getFullYear()} EclipticLink. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
              Quick links
            </h3>
            <ul className="mt-4 flex flex-col gap-1" role="list">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center py-1.5 text-sm text-white/70 transition hover:text-brand-teal focus-visible:rounded focus-visible:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
              Contact
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <span className="text-sm text-white/55">Offices</span>
                <p className="mt-1 text-sm text-white/80">Pakistan · UK · UAE</p>
              </li>
              <li>
                <a
                  href="tel:+923335934448"
                  className="inline-flex min-h-11 items-center text-sm text-white/80 transition hover:text-brand-teal focus-visible:rounded focus-visible:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                >
                  +92 333 5934448
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@eclipticlink.com"
                  className="inline-flex min-h-11 items-center text-sm text-white/80 transition hover:text-brand-teal focus-visible:rounded focus-visible:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                >
                  info@eclipticlink.com
                </a>
              </li>
            </ul>
            <ul className="mt-6 flex gap-4" role="list">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 transition hover:text-brand-teal focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
              Ready when you are
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Tell us where follow-up stalls or what you want to build. We will
              reply with a practical next step.
            </p>
            <Button
              href="/contact"
              variant="primary"
              className="mt-5 focus-visible:ring-offset-brand-dark"
            >
              Book a discovery call
            </Button>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          Serving clients in the US, UK, Pakistan, Saudi Arabia &amp; UAE.
        </p>
      </div>
    </footer>
  );
}
