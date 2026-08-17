import { Link } from "@tanstack/react-router";
import { Hexagon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Hyperion Technology home">
      <span className="relative grid size-10 place-items-center rounded-md surface-royal shadow-soft">
        <Hexagon className="size-5 text-gold" strokeWidth={2.2} />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[1.05rem] font-semibold tracking-tight",
            dark ? "text-primary-foreground" : "text-foreground",
          )}
        >
          Hyperion
        </span>
        <span
          className={cn(
            "block text-[0.65rem] font-semibold uppercase tracking-[0.28em]",
            dark ? "text-gold" : "text-muted-foreground",
          )}
        >
          Technology
        </span>
      </span>
    </Link>
  );
}