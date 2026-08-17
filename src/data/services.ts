import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "svc-software",
    slug: "software-engineering",
    title: "Software Engineering",
    description:
      "Custom web platforms, internal systems and product engineering built to your operating reality — not a template.",
    icon: "Code2",
    features: ["Web & platform development", "API and systems integration", "Legacy modernisation"],
    benefits: ["Faster time to market", "Lower maintenance cost", "Systems your team can grow into"],
    published: true,
    order: 1,
  },
  {
    id: "svc-cloud",
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    description:
      "Resilient cloud architecture, migration and automation that keeps critical services online and predictable.",
    icon: "CloudCog",
    features: ["Cloud migration", "Infrastructure as code", "Monitoring & reliability"],
    benefits: ["99.9% uptime targets", "Predictable cloud spend", "Scales with demand"],
    published: true,
    order: 2,
  },
  {
    id: "svc-data",
    slug: "data-analytics",
    title: "Data & Analytics",
    description:
      "Turn scattered operational data into dashboards and models leadership can actually make decisions with.",
    icon: "BarChart3",
    features: ["Data warehousing", "Executive dashboards", "Predictive modelling"],
    benefits: ["One source of truth", "Faster decisions", "Measurable performance"],
    published: true,
    order: 3,
  },
  {
    id: "svc-security",
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Assessments, hardening and monitoring that protect your data, your customers and your reputation.",
    icon: "ShieldCheck",
    features: ["Security assessments", "Identity & access management", "Incident response planning"],
    benefits: ["Reduced breach risk", "Regulatory readiness", "Customer trust"],
    published: true,
    order: 4,
  },
  {
    id: "svc-consulting",
    slug: "it-consulting",
    title: "IT Consulting",
    description:
      "Strategy, architecture review and technology roadmaps that align engineering investment with business goals.",
    icon: "Compass",
    features: ["Technology strategy", "Architecture review", "Digital transformation roadmaps"],
    benefits: ["Clear priorities", "Less wasted spend", "Executive alignment"],
    published: true,
    order: 5,
  },
  {
    id: "svc-support",
    slug: "managed-support",
    title: "Managed Support",
    description:
      "Ongoing engineering and support partnership so your systems keep improving long after launch.",
    icon: "LifeBuoy",
    features: ["SLA-backed support", "Continuous improvement", "Dedicated engineers"],
    benefits: ["Fewer outages", "Predictable costs", "A team that knows your stack"],
    published: true,
    order: 6,
  },
];