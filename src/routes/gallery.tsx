import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Inside Hyperion — Hyperion Technologies" },
      {
        name: "description",
        content:
          "Moments from our workspace, project deployments, events and the teams behind our technology.",
      },
      { property: "og:title", content: "Inside Hyperion — Hyperion Technologiess" },
      {
        property: "og:description",
        content:
          "Moments from our workspace, project deployments, events and the teams behind our technology.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Inside Hyperion"
        description="Moments from our workspace, project deployments, events and the teams behind our technology."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="text-muted-foreground">This section is being prepared.</p>
      </section>
    </SiteLayout>
  );
}
