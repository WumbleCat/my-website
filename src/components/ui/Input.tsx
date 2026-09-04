import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/* A hairline field on transparent — the system draws with borders rather than
   fills. 14px matches the button, since the two sit side by side in the
   subscribe rows. */
export function Input({
  className,
  ...props
}: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      className={cn(
        "min-h-9 w-full rounded-md border border-rule bg-transparent px-2.5 py-1.5",
        "text-[14px] text-ink caret-accent transition-colors",
        "placeholder:text-ink/45",
        "hover:border-ink/45 focus-visible:border-accent focus-visible:outline-offset-0",
        className,
      )}
    />
  );
}
