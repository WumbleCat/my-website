import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Plate } from "./Plate";

/** A matted figure with its caption set below in the muted caption size. */
export function Figure({
  caption,
  className,
  children,
}: {
  caption: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <figure className={cn("m-0", className)}>
      <Plate className="px-5 pt-[22px] pb-3.5">{children}</Plate>
      <figcaption className="mt-2 text-caption text-ink/55 text-pretty">
        {caption}
      </figcaption>
    </figure>
  );
}
