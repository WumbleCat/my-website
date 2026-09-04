import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** The site measure: 1000px, with the page's generous side margins. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-page px-6 sm:px-10", className)}>
      {children}
    </div>
  );
}
