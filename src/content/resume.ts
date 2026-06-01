import type { ResumeData } from "@/lib/types";

export const resume: ResumeData = {
  summary:
    "Software engineer with experience building consumer-facing products, platform capabilities, and developer tools.",
  skills: [
    "iOS",
    "SwiftUI",
    "UIKit",
    "Mobile architecture",
    "Accessibility",
    "Reliability",
    "Performance",
    "Developer tooling",
  ],
  roles: [
    {
      company: "Meta",
      title: "Software Engineer, WhatsApp Business",
      period: "Present",
      summary:
        "Placeholder summary for product engineering work on WhatsApp Business.",
      highlights: [
        "Business messaging experiences",
        "Reliability and critical flows",
        "Launch execution",
      ],
    },
    {
      company: "ChargePoint",
      title: "Apple Platform Engineering Lead",
      period: "Previous",
      summary:
        "Placeholder summary for Apple ecosystem ownership across ChargePoint products.",
      highlights: [
        "iOS, watchOS, CarPlay, App Clips, widgets, and Siri Shortcuts",
        "SwiftUI adoption and UI modernization",
        "Accessibility and platform quality",
      ],
    },
  ],
};
