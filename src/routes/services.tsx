import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Technology Services — Hyperion Technology" },
      {
        name: "description",
        content:
          "Software engineering, cloud, data, cybersecurity and IT consulting services built around measurable business outcomes.",
      },
      { property: "og:title", content: "Technology Services — Hyperion Technology" },
      {
        property: "og:description",
        content:
          "Software engineering, cloud, data, cybersecurity and IT consulting services built around measurable business outcomes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Technology Services"
        description="Software engineering, cloud, data, cybersecurity and IT consulting services built around measurable business outcomes."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="text-muted-foreground">This section is being prepared.</p>
      </section>
    </SiteLayout>
  );
}
