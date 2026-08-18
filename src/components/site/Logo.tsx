import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Hyperion Technology home">
      <span className="relative grid size-25 place-items-center overflow-hidden rounded-md  p-1.5  ring-1 ring-black/5">
        <img
          src="/image.png"
          alt="Hyperion Technology logo"
          className="h-full w-full object-contain"
        />
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
          Technologies
        </span>
      </span>
    </Link>
  );
}
