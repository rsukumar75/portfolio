import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/ui/section";
import { featuredProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <Section title="Work Experience" eyebrow="Work">
      <p className="mb-8 max-w-3xl leading-8 text-zinc-600">
        Engineering work across business messaging, connected mobility,
        and Apple platform experiences.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
