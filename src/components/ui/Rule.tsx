import { cn } from "@/lib/cn";

/** A hairline. The system lets these carry the page's structure. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cn("h-px border-0 bg-rule", className)} />;
}
