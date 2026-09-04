import Link from "next/link";
import type { ReactNode } from "react";

/** The "← Projects" step back up to an index. */
export function BackLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="border-b border-transparent pb-0.5 text-note text-inherit no-underline transition-colors hover:border-accent hover:text-accent-700"
    >
      ← {children}
    </Link>
  );
}
