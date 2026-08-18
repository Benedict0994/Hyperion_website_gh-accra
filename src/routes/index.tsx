import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Quote, Sparkles, Target, Users2, Zap } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

import heroImage from "@/assets/hero-tech.jpg";
import aboutImage from "@/assets/about-team.jpg";
import projectCloud from "@/assets/project-cloud.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectFintech from "@/assets/project-fintech.jpg";

const TITLE = "Hyperion Technology — Powering Innovation Through Technology";
const DESCRIPTION =
  "Hyperion Technology delivers software engineering, cloud, data and cybersecurity solutions that help organisations solve problems, improve operations and grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Hyperion Technologies",
          description: DESCRIPTION,
          email: siteConfig.email,
          telephone: siteConfig.phone,
          address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
        }),
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: 180, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "", label: "Years of experience" },
  { value: 60, suffix: "+", label: "Enterprise clients" },
  { value: 99, suffix: "%", label: "Client retention" },
];

const reasons = [
  {
    icon: Target,
    title: "Outcome-driven delivery",
    body: "Every engagement starts with the business result you need, then works backwards to the architecture.",
  },
  {
    icon: Users2,
    title: "Senior engineering teams",
    body: "You work directly with experienced engineers and architects — no hand-offs to junior benches.",
  },
  {
    icon: Zap,
    title: "Built to scale",
    body: "Systems designed for growth, with clean documentation and infrastructure your team can own.",
  },
  {
    icon: Sparkles,
    title: "Long-term partnership",
    body: "We stay beyond launch with SLA-backed support and a roadmap of continuous improvement.",
  },
];

const featuredProjects = [
  {
    id: "national-cloud-migration",
    title: "National Cloud Migration",
    category: "Cloud & Infrastructure",
    image: projectCloud,
    summary: "Migrated 40+ critical workloads to a resilient multi-region cloud platform.",
  },
  {
    id: "operations-intelligence",
    title: "Operations Intelligence Platform",
    category: "Data & Analytics",
    image: projectAnalytics,
    summary: "Unified twelve data sources into a single executive decision dashboard.",
  },
  {
    id: "digital-banking-suite",
    title: "Digital Banking Suite",
    category: "Software Engineering",
    image: projectFintech,
    summary: "A secure mobile banking experience serving over 250,000 customers.",
  },
];

const galleryPreview = [projectCloud, aboutImage, projectAnalytics, projectFintech];

const latestPosts = [
  {
    slug: "cloud-cost-discipline",
    title: "Cloud cost discipline without slowing engineering down",
    category: "Cloud",
    date: "12 Aug 2026",
    excerpt:
      "Most cloud overspend is architectural, not accidental. Here is the review cadence we run with clients.",
  },
  {
    slug: "data-platform-foundations",
    title: "Data platform foundations every growing organisation needs",
    category: "Data",
    date: "29 Jul 2026",
    excerpt:
      "Before dashboards and models, three foundations decide whether your data programme survives year two.",
  },
  {
    slug: "security-by-default",
    title: "Security by default: hardening delivery pipelines",
    category: "Security",
    date: "04 Jul 2026",
    excerpt:
      "Shipping fast and shipping safely are not opposites — if security lives inside the pipeline.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="surface-royal relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden
          width={1600}
          height={1200}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
        <div
          className="absolute inset-0 bg-[linear-gradient(100deg,var(--primary-deep)_25%,transparent_85%)]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Innovation • Excellence • Trust
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-[4rem]">
                Powering Innovation Through Technology
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Hyperion Technology designs, builds and operates technology solutions that help
                businesses and organisations solve real problems, improve operations and grow with
                confidence.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="gold" size="xl">
                  <Link to="/services">
                    Explore Our Services <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="onDark" size="xl">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
                {["ISO-aligned processes", "24/7 monitored systems", "Senior-led delivery"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="size-4 text-gold" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={250} className="hidden lg:block">
            <div className="relative rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Delivery snapshot
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl font-semibold text-primary-foreground">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-sm text-primary-foreground/65">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Hyperion Technology engineers collaborating in the Accra office"
                loading="lazy"
                width={1400}
                height={1000}
                className="w-full rounded-2xl object-cover shadow-elevated"
              />
              <div className="absolute -bottom-8 -right-4 hidden rounded-xl border border-border bg-card p-6 shadow-soft sm:block">
                <p className="font-display text-3xl font-semibold text-primary">
                  <Counter value={12} suffix="+" />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">years building for scale</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About Hyperion"
              title="A technology partner built for serious organisations"
              description="We are engineers, architects and strategists who believe technology should make organisations measurably stronger. From startups scaling their first platform to institutions modernising decades-old systems, we deliver work that holds up in production."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Cross-functional teams of senior engineers and consultants",
                "Transparent delivery with clear milestones and reporting",
                "Solutions documented and handed over — never locked in",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="xl" className="mt-9">
              <Link to="/about">
                Our story <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Services engineered around business outcomes"
              description="Six practice areas that work together — so strategy, build and operations are never disconnected."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="The difference is in how we work"
              description="Premium delivery is not a slogan — it is a set of habits we apply to every engagement."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 80}>
                <div className="group h-full rounded-xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                  <reason.icon className="size-6 text-gold" strokeWidth={1.9} />
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{reason.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {reason.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="surface-royal relative overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80} className="text-center sm:text-left">
              <p className="font-display text-5xl font-semibold text-primary-foreground">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-primary-foreground/60">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured work"
              title="Projects that moved the needle"
              className="max-w-xl"
            />
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                View all projects <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <article className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="Inside Hyperion Technology"
              description="A look at the teams, deployments and workspaces behind the work."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryPreview.map((image, index) => (
              <Reveal key={index} delay={index * 70}>
                <div className="group relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt="Hyperion Technology gallery"
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary-deep/0 transition-colors duration-500 group-hover:bg-primary-deep/40" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/gallery">
                Open gallery <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Insights" title="Latest from our team" className="max-w-xl" />
            <Button asChild variant="outline" size="lg">
              <Link to="/blog">
                Read the blog <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 90}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em]">
                  <span className="rounded-full bg-secondary px-3 py-1 text-primary">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read article
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonial + CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
        <Reveal>
          <figure className="rounded-2xl border border-border bg-card p-10 shadow-soft lg:p-14">
            <Quote className="size-8 text-gold" />
            <blockquote className="mt-6 max-w-3xl text-balance font-display text-xl leading-relaxed text-foreground sm:text-2xl">
              “Hyperion rebuilt the backbone of our operations in nine months. The difference shows
              up in our numbers every single quarter.”
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Adwoa Mensah</span> — Chief Operating
              Officer, Meridian Group
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-royal relative mt-10 overflow-hidden rounded-2xl px-8 py-16 text-center lg:px-16 lg:py-20">
            <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
            <div
              className="absolute -left-20 -top-20 size-72 rounded-full bg-gold/20 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold text-primary-foreground sm:text-4xl lg:text-5xl">
                Let&rsquo;s Build Something Great Together
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75">
                Share your challenge with our team and we&rsquo;ll come back with a clear, practical
                path forward.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild variant="gold" size="xl">
                  <Link to="/contact">
                    Start a conversation <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="onDark" size="xl">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
