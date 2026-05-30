type ResumeSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="border-t border-zinc-200 py-10">
      <h2 className="text-2xl font-semibold text-zinc-950">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
