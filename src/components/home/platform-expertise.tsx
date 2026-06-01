import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

const platforms = [
  "iOS",
  "watchOS",
  "CarPlay",
  "App Clips",
  "Widgets",
  "Siri",
  "SwiftUI",
  "UIKit",
  "Accessibility",
  "Performance",
];

export function PlatformExpertise() {
  return (
    <Section title="Platform Expertise" eyebrow="Apple ecosystem">
      <div className="max-w-3xl">
        <p className="leading-8 text-zinc-600">
          Experience building and leading Apple platform work across product
          surfaces, interface systems, and engineering foundations. The focus is
          durable product quality: accessible UI, reliable architecture,
          observable systems, and maintainable delivery.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <Badge key={platform}>{platform}</Badge>
          ))}
        </div>
      </div>
    </Section>
  );
}
