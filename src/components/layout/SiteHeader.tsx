import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NavLink } from "./NavLink";

const sections = [
  { href: "/projects", label: "Projects" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/now", label: "Now" },
];

/* Sticky, but barely there: the page ground at 92% with a short blur behind
   it, closed by a single hairline. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-page/92 backdrop-blur-[6px]">
      <Container className="flex flex-wrap items-baseline gap-x-7 gap-y-2 py-4">
        <Link
          href="/"
          className="mr-auto font-heading text-[19px] font-semibold tracking-[-0.01em] text-inherit no-underline transition-colors hover:text-accent-700"
        >
          K. Tauch
        </Link>
        {sections.map((section) => (
          <NavLink key={section.href} href={section.href}>
            {section.label}
          </NavLink>
        ))}
      </Container>
    </header>
  );
}
