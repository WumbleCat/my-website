"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/* In the imported design the header's active state came from a `view` field on
   component state. Here the route is the state, so the active section is read
   from the pathname — /notes/no-24 still lights "Notes". */
export function NavLink({
  href,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Link> & { href: string }) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      {...props}
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "border-b border-transparent pb-0.5 font-body text-nav tracking-[0.01em]",
        "text-inherit no-underline transition-colors hover:border-accent hover:text-accent-700",
        active && "border-accent text-accent-700",
        className,
      )}
    />
  );
}
