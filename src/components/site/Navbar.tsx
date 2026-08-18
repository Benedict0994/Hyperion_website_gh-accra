import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-soft"
          : "border-b border-transparent bg-background/60 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ "data-active": "true" }}
              className="relative rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
            >
              {link.label}
              <span className="pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 in-data-[active=true]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[4.5rem] bottom-0 z-40 origin-top bg-background px-5 pb-10 pt-6 transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "bg-secondary text-foreground" }}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="hero" size="xl" className="mt-6 w-full">
          <Link to="/contact" onClick={() => setOpen(false)}>
            Get in touch <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
