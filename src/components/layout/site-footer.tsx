import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 py-8">
      <Container className="flex flex-col gap-2 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <a
          href={`mailto:${site.email}`}
          className="hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-4"
        >
          {site.email}
        </a>
      </Container>
    </footer>
  );
}
