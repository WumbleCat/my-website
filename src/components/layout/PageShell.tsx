import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

/** The main column every page sits in. */
export function PageShell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <main className="flex-1">
      <Container className={cn("pb-24", className)}>{children}</Container>
    </main>
  );
}
