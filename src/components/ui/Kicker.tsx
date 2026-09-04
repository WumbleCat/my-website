import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** The small letter-spaced label that sits above a heading. */
export function Kicker({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "tnum font-heading text-kicker tracking-kicker text-accent-700 uppercase",
        className,
      )}
    >
      {children}
    </div>
  );
}
