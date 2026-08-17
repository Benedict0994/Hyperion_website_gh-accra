import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Our Projects — Hyperion Technology" },
      { name: "description", content: "A selection of platforms, systems and digital products Hyperion Technology has delivered for clients." },
      { property: "og:title", content: "Our Projects — Hyperion Technology" },
      { property: "og:description", content: "A selection of platforms, systems and digital products Hyperion Technology has delivered for clients." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects/" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Portfolio" title="Our Projects" description="A selection of platforms, systems and digital products Hyperion Technology has delivered for clients." />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="text-muted-foreground">This section is being prepared.</p>
      </section>
    </SiteLayout>
  );
}
