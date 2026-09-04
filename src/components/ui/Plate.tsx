import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * The image wrapper. Every content photograph and figure goes through it, so
 * it reads as a tipped-in book plate rather than a banner.
 */
export function Plate({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("plate bg-surface", className)}>{children}</div>;
}
