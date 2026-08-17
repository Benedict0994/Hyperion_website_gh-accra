import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { siteConfig, navLinks } from "@/config/site";

const socials = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: Linkedin },
  { label: "Twitter", href: siteConfig.social.twitter, Icon: Twitter },
  { label: "Facebook", href: siteConfig.social.facebook, Icon: Facebook },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: Instagram },
];

export function Footer() {
  return (
    <footer className="surface-royal relative overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-md border border-white/15 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Company</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/75">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Innovation • Excellence • Trust</p>
        </div>
      </div>
    </footer>
  );
}