import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
          {site.role}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-zinc-950 sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-600">
          {site.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-5">
          <TextLink href="/projects">View projects</TextLink>
          <TextLink href="/resume">View resume</TextLink>
        </div>
      </Container>
    </section>
  );
}
