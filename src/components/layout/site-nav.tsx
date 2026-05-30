import Link from "next/link";
import { navigationItems } from "@/content/navigation";

export function SiteNav() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-5 text-sm font-medium text-zinc-600">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:text-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-4"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
