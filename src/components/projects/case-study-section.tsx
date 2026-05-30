import type { CaseStudySection as CaseStudySectionType } from "@/lib/types";

type CaseStudySectionProps = {
  section: CaseStudySectionType;
};

export function CaseStudySection({ section }: CaseStudySectionProps) {
  return (
    <section className="border-t border-zinc-200 py-10">
      <h2 className="text-2xl font-semibold text-zinc-950">{section.title}</h2>
      <p className="mt-4 max-w-3xl leading-8 text-zinc-600">{section.body}</p>
    </section>
  );
}
