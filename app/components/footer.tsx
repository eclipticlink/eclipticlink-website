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

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/eclipticlink" },
  { label: "Twitter", href: "https://twitter.com/eclipticlink" },
  { label: "Facebook", href: "https://www.facebook.com/eclipticlink" },
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              <li>
                <a
                  href="https://maps.google.com/?q=Plaza+57+Square+Commercial+Bahria+Town+Phase+7+Rawalpindi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                >
                  Flat 1A, Second Floor, Plaza 57, Lane 2, Square Commercial,
                  Bahria Town Phase 7, Rawalpindi
                </a>
              </li>
              <li>
                <a
                  href="tel:+923335934448"
                  className="text-sm text-zinc-400 transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                >
                  +92 333 5934448
                </a>
              </li>
            </ul>
            <Link href="/" className="mt-6 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900">
              <Image
                src="/EclipticLink-logo.png"
                alt="EclipticLink"
                width={375}
                height={200}
                className="h-[200px] w-auto object-contain object-left"
              />
            </Link>
            <p className="mt-4 text-sm text-zinc-500" suppressHydrationWarning>
              © {new Date().getFullYear()} EclipticLink. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-zinc-400 transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
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
            <ul className="mt-4 space-y-3" role="list">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 transition hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
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
            <p className="mt-4 text-sm text-zinc-400">
              Build your software product with expert teams and transparent
              delivery.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex h-11 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
