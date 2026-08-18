import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Talk to Our Team — Hyperion Technologies" },
      {
        name: "description",
        content: "Tell us about your project and our team will respond within one business day.",
      },
      { property: "og:title", content: "Talk to Our Team — Hyperion Technologies" },
      {
        property: "og:description",
        content: "Tell us about your project and our team will respond within one business day.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Talk to Our Team"
        description="Tell us about your project and our team will respond within one business day."
      />
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="text-muted-foreground">This section is being prepared.</p>
      </section>
    </SiteLayout>
  );
}
