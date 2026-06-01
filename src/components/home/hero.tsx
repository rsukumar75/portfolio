import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-normal text-zinc-950 sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-zinc-950 sm:text-2xl">
          {site.role}
        </p>
        <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
          {site.summary}
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">
          Currently at WhatsApp. Previously led development across
          ChargePoint&apos;s Apple ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap gap-5">
          <TextLink href="/projects">View work experience</TextLink>
          <TextLink href="/resume">View resume</TextLink>
        </div>
      </Container>
    </section>
  );
}
