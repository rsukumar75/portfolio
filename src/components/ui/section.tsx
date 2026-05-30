import { Container } from "@/components/ui/container";

type SectionProps = {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  title,
  eyebrow,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-8 max-w-3xl">
            {eyebrow ? (
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-3xl font-semibold tracking-normal text-zinc-950 sm:text-4xl">
                {title}
              </h2>
            ) : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
