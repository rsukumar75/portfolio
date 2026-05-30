import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyLayout } from "@/components/projects/case-study-layout";
import { getProject } from "@/content/projects";

export const metadata: Metadata = {
  title: "ChargePoint Apple Ecosystem",
  description: "Placeholder case study for ChargePoint Apple platform work.",
};

export default function ChargePointProjectPage() {
  const project = getProject("chargepoint");

  if (!project) {
    notFound();
  }

  return <CaseStudyLayout project={project} />;
}
