import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional story, engineering philosophy, and career journey for Rishab Sukumar.",
};

export default function AboutPage() {
  return (
    <>
      <Container className="py-16 sm:py-20">
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
          About
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
          Product-focused Apple platform engineering.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
          Placeholder story for Rishab&apos;s engineering philosophy, design
          appreciation, collaboration style, and technical leadership.
        </p>
      </Container>
      <Section title="Engineering philosophy">
        <p className="max-w-3xl leading-8 text-zinc-600">
          Placeholder content for principles around quality, accessibility,
          reliability, and maintainable mobile architecture.
        </p>
      </Section>
      <Section title="Career journey">
        <p className="max-w-3xl leading-8 text-zinc-600">
          Placeholder content for the path through ChargePoint, WhatsApp
          Business, and future work.
        </p>
      </Section>
    </>
  );
}
