import type { Metadata } from "next";
import { DownloadResumeLink } from "@/components/resume/download-resume-link";
import { ExperienceItem } from "@/components/resume/experience-item";
import { ResumeSection } from "@/components/resume/resume-section";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { resume } from "@/content/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Interactive resume for Rishab Sukumar.",
};

export default function ResumePage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
            Resume
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
            Experience and platform expertise.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            {resume.summary}
          </p>
        </div>
        <DownloadResumeLink />
      </div>
      <ResumeSection title="Experience">
        <div className="divide-y divide-zinc-200">
          {resume.roles.map((role) => (
            <ExperienceItem key={`${role.company}-${role.title}`} role={role} />
          ))}
        </div>
      </ResumeSection>
      <ResumeSection title="Skills">
        <div className="flex flex-wrap gap-2">
          {resume.skills.map((skill) => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </ResumeSection>
    </Container>
  );
}
