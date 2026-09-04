import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "accent" | "neutral" | "outline";
  className?: string;
  children: ReactNode;
};

const variants = {
  accent: "bg-accent-100 text-accent-800",
  neutral: "bg-neutral-100 text-neutral-800",
  outline: "border border-rule text-ink/60",
} as const;

/** A small label tinted from a ramp — light fill, dark text of the same role. */
export function Tag({ variant = "accent", className, children }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[3px] px-2 py-[3px]",
        "text-micro tracking-[0.06em] uppercase",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
