import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SiteNav } from "@/components/layout/site-nav";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <Container className="flex min-h-16 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-4"
        >
          {site.name}
        </Link>
        <SiteNav />
      </Container>
    </header>
  );
}
