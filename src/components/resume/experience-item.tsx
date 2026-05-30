import type { ResumeRole } from "@/lib/types";

type ExperienceItemProps = {
  role: ResumeRole;
};

export function ExperienceItem({ role }: ExperienceItemProps) {
  return (
    <article className="grid gap-4 py-6 first:pt-0 sm:grid-cols-[12rem_1fr]">
      <div>
        <p className="font-medium text-zinc-950">{role.company}</p>
        <p className="mt-1 text-sm text-zinc-500">{role.period}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-zinc-950">{role.title}</h3>
        <p className="mt-3 leading-7 text-zinc-600">{role.summary}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-600">
          {role.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
