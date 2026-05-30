import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { getProject } from "@/content/projects";
import { openSourceProjects } from "@/content/open-source";

export const metadata: Metadata = {
  title: "Open Source",
  description: "Placeholder overview of open source projects by Rishab Sukumar.",
};

export default function OpenSourceProjectPage() {
  const project = getProject("open-source");

  if (!project) {
    notFound();
  }

  return (
    <>
      <CaseStudyLayout project={project} />
      <Container className="pb-16 sm:pb-20">
        <section className="border-t border-zinc-200 pt-10">
          <h2 className="text-2xl font-semibold text-zinc-950">Projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {openSourceProjects.map((item) => (
              <article key={item.name} className="rounded-lg border border-zinc-200 p-6">
                <h3 className="text-xl font-semibold text-zinc-950">{item.name}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.themes.map((theme) => (
                    <Badge key={theme}>{theme}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
