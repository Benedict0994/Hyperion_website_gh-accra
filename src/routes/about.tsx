import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who We Are — Hyperion Technology" },
      {
        name: "description",
        content:
          "Learn about Hyperion Technology, our mission, vision, values and the way we deliver technology that lasts.",
      },
      { property: "og:title", content: "Who We Are — Hyperion Technology" },
      {
        property: "og:description",
        content:
          "Learn about Hyperion Technology, our mission, vision, values and the way we deliver technology that lasts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="Who We Are"
        description="Learn about Hyperion Technology, our mission, vision, values and the way we deliver technology that lasts."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="text-muted-foreground">This section is being prepared.</p>
      </section>
    </SiteLayout>
  );
}
