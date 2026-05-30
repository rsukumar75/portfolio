import { ProjectCard } from "@/components/projects/project-card";
import { Section } from "@/components/ui/section";
import { featuredProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <Section title="Selected work" eyebrow="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
