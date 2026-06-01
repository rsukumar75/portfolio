import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "whatsapp",
    title: "WhatsApp Business",
    href: "/projects/whatsapp",
    eyebrow: "Meta",
    summary:
      "Building messaging experiences used by businesses to reach customers at scale.",
    themes: ["Business messaging", "Reliability", "Product ownership"],
    sections: [
      {
        title: "Overview",
        body: "A placeholder overview for work on WhatsApp Business experiences.",
      },
      {
        title: "Technical Decisions",
        body: "Placeholder notes for architecture, tradeoffs, and execution details.",
      },
      {
        title: "Outcome",
        body: "Placeholder outcome content to be replaced with specific impact.",
      },
    ],
  },
  {
    slug: "chargepoint",
    title: "ChargePoint Apple Ecosystem",
    href: "/projects/chargepoint",
    eyebrow: "ChargePoint",
    summary:
      "Led customer experiences across iOS, watchOS, CarPlay, App Clips, widgets, and Siri.",
    themes: ["Apple platforms", "SwiftUI", "Accessibility"],
    sections: [
      {
        title: "Overview",
        body: "A placeholder overview for leading Apple platform work at ChargePoint.",
      },
      {
        title: "Technical Decisions",
        body: "Placeholder notes for platform strategy, modernization, and delivery.",
      },
      {
        title: "Outcome",
        body: "Placeholder outcome content to be replaced with specific impact.",
      },
    ],
  },
  {
    slug: "open-source",
    title: "Open Source",
    href: "/projects/open-source",
    eyebrow: "Developer tooling",
    summary:
      "Placeholder overview for open source projects focused on developer productivity and tooling.",
    themes: ["Tooling", "Automation", "Community"],
    sections: [
      {
        title: "Overview",
        body: "A placeholder overview for open source contributions and tooling work.",
      },
      {
        title: "Motivation",
        body: "Placeholder notes for why these tools were built and who they serve.",
      },
      {
        title: "Lessons Learned",
        body: "Placeholder notes for maintenance, adoption, and community impact.",
      },
    ],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.slug === "whatsapp" || project.slug === "chargepoint",
);

export function getProject(slug: Project["slug"]) {
  return projects.find((project) => project.slug === slug);
}
