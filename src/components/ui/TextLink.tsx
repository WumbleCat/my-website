import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/**
 * An inline link. Colour is applied as stroke, not fill: the link inherits
 * the surrounding text colour and is marked by a faint accent underline that
 * strengthens on hover.
 */
export function TextLink({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        "border-b border-accent/45 text-inherit no-underline transition-colors",
        "[text-underline-offset:3px] hover:border-accent hover:text-accent-700",
        className,
      )}
    />
  );
}
