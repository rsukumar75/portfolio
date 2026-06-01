import type { OpenSourceProject } from "@/lib/types";

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "xcparse",
    href: "/projects/open-source",
    summary:
      "A command line tool for extracting and inspecting Xcode result bundle data.",
    themes: ["Xcode", "CLI", "Developer productivity"],
  },
  {
    name: "danger-app_size_report",
    href: "/projects/open-source",
    summary:
      "A Danger plugin that brings app size changes into code review before they reach release.",
    themes: ["Automation", "CI", "Code review"],
  },
];
