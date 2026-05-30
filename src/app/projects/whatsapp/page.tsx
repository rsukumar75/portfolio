import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { getProject } from "@/content/projects";

export const metadata: Metadata = {
  title: "WhatsApp Business",
  description: "Placeholder case study for WhatsApp Business work.",
};

export default function WhatsAppProjectPage() {
  const project = getProject("whatsapp");

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}
