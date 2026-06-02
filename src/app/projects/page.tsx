import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Professional and open-source projects by Rishab Sukumar, focused on product ownership, engineering quality, and developer workflows.",
};

type ProjectIndexItem = {
  title: string;
  description: string;
  scope: string;
  role: string;
  href: string;
};

const professionalProjects: ProjectIndexItem[] = [
  {
    title: "WhatsApp Business",
    description:
      "Building business messaging experiences that help companies reach customers reliably at global scale.",
    scope:
      "Customer-facing product surfaces for business messaging, monetization, launch quality, and reliability.",
    role:
      "Senior iOS engineer responsible for product execution, technical tradeoffs, and polished user experiences.",
    href: "/projects/whatsapp",
  },
  {
    title: "ChargePoint Apple Ecosystem",
    description:
      "Led Apple platform experiences that helped drivers find, start, and manage charging across everyday contexts.",
    scope:
      "iOS, watchOS, CarPlay, App Clips, widgets, Siri Shortcuts, accessibility, and UI modernization.",
    role:
      "Apple ecosystem lead driving platform strategy, implementation quality, and cross-functional delivery.",
    href: "/projects/chargepoint",
  },
];

const openSourceProjects: ProjectIndexItem[] = [
  {
    title: "xcparse",
    description:
      "A developer tool for extracting useful artifacts from Xcode result bundles and making build output easier to inspect.",
    scope:
      "Command line workflows for test results, screenshots, attachments, logs, and continuous integration artifacts.",
    role:
      "Creator and maintainer focused on practical tooling for iOS engineering teams.",
    href: "/projects/open-source",
  },
  {
    title: "danger-app_size_report",
    description:
      "A review automation tool that surfaces app size changes before they quietly ship to users.",
    scope:
      "Code review feedback for binary size trends, release quality, and performance-aware product development.",
    role:
      "Creator and maintainer building lightweight automation around product quality signals.",
    href: "/projects/open-source",
  },
];

function ProjectIndexCard({ project }: { project: ProjectIndexItem }) {
  return (
    <article className="flex flex-col rounded-lg border border-zinc-200 p-6 sm:p-8">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold tracking-normal text-zinc-950">
          {project.title}
        </h3>
        <p className="mt-4 leading-8 text-zinc-600">{project.description}</p>

        <dl className="mt-8 space-y-6">
          <div>
            <dt className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
              Scope
            </dt>
            <dd className="mt-2 leading-7 text-zinc-700">{project.scope}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
              Role
            </dt>
            <dd className="mt-2 leading-7 text-zinc-700">{project.role}</dd>
          </div>
        </dl>
      </div>

      <p className="mt-8">
        <TextLink href={project.href} ariaLabel={`Learn more about ${project.title}`}>
          Learn more
        </TextLink>
      </p>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <header className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
          Projects
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl">
          Meaningful product and engineering work.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
          A focused index of professional and open-source projects, spanning
          high-scale user experiences, Apple platform leadership, and developer
          tools that improve engineering workflows.
        </p>
      </header>

      <section
        aria-labelledby="professional-work-heading"
        className="mt-16 sm:mt-20"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
            Professional Work
          </p>
          <h2
            id="professional-work-heading"
            className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-4xl"
          >
            Product work with ownership from decision to launch.
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {professionalProjects.map((project) => (
            <ProjectIndexCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section aria-labelledby="open-source-heading" className="mt-16 sm:mt-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-zinc-500">
            Open Source
          </p>
          <h2
            id="open-source-heading"
            className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 sm:text-4xl"
          >
            Developer tools shaped by real engineering workflows.
          </h2>
          <p className="mt-5 leading-8 text-zinc-600">
            These projects focus on making build artifacts easier to understand,
            improving code review signal, and helping teams catch product
            quality issues earlier.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {openSourceProjects.map((project) => (
            <ProjectIndexCard key={project.title} project={project} />
          ))}
        </div>
        <p className="mt-8">
          <TextLink href="/projects/open-source">
            View all open source work
          </TextLink>
        </p>
      </section>
    </Container>
  );
}
