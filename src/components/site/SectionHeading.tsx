import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-gold" : "text-primary",
          )}
        >
          <span className={cn("h-px w-8", dark ? "bg-gold" : "bg-gold")} aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          dark ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
