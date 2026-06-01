import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";
import { openSourceProjects } from "@/content/open-source";

export function OpenSourcePreview() {
  return (
    <Section title="Open Source" eyebrow="Developer tooling">
      <p className="mb-8 max-w-3xl leading-8 text-zinc-600">
        Tools built around day-to-day engineering work: inspecting build
        artifacts, improving code review signal, and reducing manual release
        overhead.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {openSourceProjects.map((project) => (
          <article key={project.name} className="rounded-lg border border-zinc-200 p-6">
            <h3 className="text-xl font-semibold text-zinc-950">{project.name}</h3>
            <p className="mt-3 leading-7 text-zinc-600">{project.summary}</p>
          </article>
        ))}
      </div>
      <p className="mt-8">
        <TextLink href="/projects/open-source">Explore open source projects</TextLink>
      </p>
    </Section>
  );
}
