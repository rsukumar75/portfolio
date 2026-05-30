import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and case studies by Rishab Sukumar.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
        Projects
      </p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
        Case studies and selected engineering work.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
        Placeholder overview for professional projects, Apple platform work,
        and open source tooling.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Container>
  );
}
