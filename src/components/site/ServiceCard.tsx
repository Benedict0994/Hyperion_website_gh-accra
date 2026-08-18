import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "./icon-map";
import type { Service } from "@/types/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
      <span
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />
      <span className="grid size-12 place-items-center rounded-lg bg-secondary text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" strokeWidth={1.8} />
      </span>
      <h3 className="mt-6 text-xl font-semibold text-foreground">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
      >
        Learn more
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </article>
  );
}
