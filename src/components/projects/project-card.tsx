import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { TextLink } from "@/components/ui/text-link";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 p-6">
      <p className="mb-3 text-sm font-medium text-zinc-500">{project.eyebrow}</p>
      <h3 className="text-xl font-semibold text-zinc-950">{project.title}</h3>
      <p className="mt-3 leading-7 text-zinc-600">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.themes.map((theme) => (
          <Badge key={theme}>{theme}</Badge>
        ))}
      </div>
      <p className="mt-6">
        <TextLink href={project.href}>Read case study</TextLink>
      </p>
    </article>
  );
}
