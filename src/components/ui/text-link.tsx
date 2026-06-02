import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

export function TextLink({ href, children, ariaLabel }: TextLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-4"
    >
      {children}
    </Link>
  );
}
