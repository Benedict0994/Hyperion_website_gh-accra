import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog and News — Hyperion Technology" },
      {
        name: "description",
        content:
          "Practical engineering insight, product updates and technology commentary from the Hyperion Technology team.",
      },
      { property: "og:title", content: "Blog and News — Hyperion Technology" },
      {
        property: "og:description",
        content:
          "Practical engineering insight, product updates and technology commentary from the Hyperion Technology team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog/" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Insights"
        title="Blog and News"
        description="Practical engineering insight, product updates and technology commentary from the Hyperion Technology team."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="text-muted-foreground">This section is being prepared.</p>
      </section>
    </SiteLayout>
  );
}
