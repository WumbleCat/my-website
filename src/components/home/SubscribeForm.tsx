"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/cn";

type Props = {
  /** "row" sits the field and action side by side; "stack" puts them in a column. */
  layout?: "row" | "stack";
  className?: string;
};

/**
 * The note sign-up. There is no list provider wired up yet, so this validates
 * the address and acknowledges locally — swap the body of `onSubmit` for the
 * real endpoint when one exists.
 */
export function SubscribeForm({ layout = "row", className }: Props) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p
        className={cn("m-0 text-detail text-accent-700", className)}
        role="status"
      >
        Thank you — the next note arrives on Sunday.
      </p>
    );
  }

  return (
    <form
      className={cn(
        layout === "row"
          ? "flex flex-wrap items-center gap-2.5"
          : "flex flex-col gap-2.5",
        className,
      )}
      onSubmit={(event) => {
        event.preventDefault();
        setDone(true);
      }}
    >
      <label className="sr-only" htmlFor={`subscribe-${layout}`}>
        Email address
      </label>
      <Input
        id={`subscribe-${layout}`}
        type="email"
        required
        autoComplete="email"
        placeholder="you@domain.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className={layout === "row" ? "w-[250px]" : undefined}
      />
      <Button
        type="submit"
        variant="primary"
        block={layout === "stack"}
        className={layout === "stack" ? "mt-0" : undefined}
      >
        Subscribe
      </Button>
    </form>
  );
}
