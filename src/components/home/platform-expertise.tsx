import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";

const platforms = ["iOS", "watchOS", "CarPlay", "App Clips", "Widgets", "Siri Shortcuts"];

export function PlatformExpertise() {
  return (
    <Section title="Platform expertise" eyebrow="Apple ecosystem">
      <div className="max-w-3xl">
        <p className="leading-8 text-zinc-600">
          Placeholder content for Apple platform depth, product thinking, and
          technical leadership.
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
