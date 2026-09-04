import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A section rubric with an optional link to its full index, sitting on a
 * shared baseline at either end of the measure.
 */
export function SectionHeading({
  children,
  action,
  className,
}: {
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2",
        className,
      )}
    >
      <h2 className="font-heading text-[14px] font-semibold tracking-label uppercase">
        {children}
      </h2>
      {action}
    </div>
  );
}
