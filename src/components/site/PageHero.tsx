interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="surface-royal relative overflow-hidden">
      <div className="grid-lines absolute inset-0 opacity-50" aria-hidden />
      <div
        className="absolute -right-32 -top-32 size-96 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          <span className="h-px w-8 bg-gold" aria-hidden />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}