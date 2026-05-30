import { Section } from "@/components/ui/section";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section title="Contact" eyebrow="Get in touch">
      <p className="max-w-3xl leading-8 text-zinc-600">
        Placeholder contact copy. Reach Rishab at{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-4"
        >
          {site.email}
        </a>
        .
      </p>
    </Section>
  );
}
