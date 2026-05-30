import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CaseStudySection } from "@/components/projects/case-study-section";
import type { Project } from "@/lib/types";

type CaseStudyLayoutProps = {
  project: Project;
};

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
        {project.eyebrow}
      </p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
        {project.summary}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.themes.map((theme) => (
          <Badge key={theme}>{theme}</Badge>
        ))}
      </div>
      <div className="mt-12">
        {project.sections.map((section) => (
          <CaseStudySection key={section.title} section={section} />
        ))}
      </div>
    </Container>
  );
}
