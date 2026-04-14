import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@demostudio.com", label: "Email" }
];

// Footer
// The footer intentionally contrasts with the light pages to give the experience a graceful endpoint.
export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-footer bg-[linear-gradient(160deg,#1c1814,#14110f)] px-5 py-14 text-white md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
        <div className="space-y-5">
          <Logo dark />
          <p className="max-w-sm text-sm font-light leading-7 text-white/65">
            Quietly luxurious interiors shaped with clarity, warmth, and a deeply considered sense
            of home.
          </p>
        </div>

        <div className="space-y-4 text-sm font-light text-white/70">
          <div className="flex items-start gap-3">
            <MapPin size={16} strokeWidth={1.5} className="mt-1 text-accent" />
            <p>27 Mercer Street, New York, NY 10013</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} strokeWidth={1.5} className="text-accent" />
            <Link href="tel:+12125550188">+1 (212) 555-0188</Link>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} strokeWidth={1.5} className="text-accent" />
            <Link href="mailto:hello@demostudio.com">hello@demostudio.com</Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/75 transition-colors duration-300 hover:text-white"
              >
                <Icon size={15} strokeWidth={1.5} />
              </Link>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
            Copyright (c) 2026 Demo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
