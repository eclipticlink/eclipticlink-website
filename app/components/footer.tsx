import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Hire Team", href: "/hire" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

// Social links (Facebook, Instagram, LinkedIn)
const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61584739395956" },
  { label: "Instagram", href: "https://www.instagram.com/eclipticlink/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/eclipticlink/" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <span className="text-sm font-medium text-zinc-300">Office locations</span>
                <ul className="mt-2 flex flex-wrap items-center gap-3" role="list" aria-label="Office locations">
                  <li className="inline-flex items-center gap-1.5 text-sm text-zinc-300">
                    <span className="text-lg leading-none" aria-hidden="true">🇵🇰</span>
                    <span>Pakistan</span>
                  </li>
                  <li className="inline-flex items-center gap-1.5 text-sm text-zinc-300">
                    <span className="text-lg leading-none" aria-hidden="true">🇬🇧</span>
                    <span>UK</span>
                  </li>
                  <li className="inline-flex items-center gap-1.5 text-sm text-zinc-300">
                    <span className="text-lg leading-none" aria-hidden="true">🇦🇪</span>
                    <span>UAE</span>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="tel:+923335934448"
                  className="inline-flex min-h-11 items-center text-sm text-zinc-300 transition hover:text-brand-teal focus-visible:rounded focus-visible:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                >
                  +92 333 5934448
                </a>
              </li>
            </ul>
            <Link href="/" className="mt-6 inline-block rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark">
              <Image
                src="/ecliptic-link-logo.png"
                alt="EclipticLink"
                width={180}
                height={48}
                className="h-12 w-auto object-contain object-left sm:h-14"
              />
            </Link>
            <p className="mt-4 text-sm text-zinc-400" suppressHydrationWarning>
              © {new Date().getFullYear()} EclipticLink. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-zinc-500">
              Serving clients in the US, UK, Pakistan, Saudi Arabia &amp; UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-3 flex flex-col gap-1" role="list">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex min-h-0 items-center py-1.5 text-sm text-zinc-300 transition hover:text-brand-teal focus-visible:rounded focus-visible:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Social Media
            </h3>
            <ul className="mt-3 flex flex-col gap-1" role="list">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-0 items-center py-1.5 text-sm text-zinc-300 transition hover:text-brand-teal focus-visible:rounded focus-visible:text-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Ready to get started?
            </h3>
            <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
              Build your software product with expert teams and transparent
              delivery.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-brand-teal px-5 text-sm font-semibold text-brand-dark shadow-sm transition hover:bg-brand-teal-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
