import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

/* Actions are outlined, never filled — the primary is an accent hairline on
   transparent. Hover and pressed states are accent tints one step apart, per
   the system's interaction rules. */
/* The border *colour* belongs to the variant, never to the base: Tailwind
   emits .border-transparent after .border-accent, so a transparent default
   here would silently win and strip the outline off every button. */
const base =
  "inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md " +
  "border font-heading text-[14px] leading-tight font-semibold " +
  "no-underline transition-colors disabled:cursor-not-allowed disabled:opacity-45";

const padding = "px-[16.6px] py-(--space-2)";

const variants: Record<Variant, string> = {
  primary: "text-accent border-accent hover:bg-accent/12 active:bg-accent/22",
  secondary: "text-ink border-rule hover:bg-ink/7 active:bg-ink/14",
  ghost:
    "text-accent border-transparent px-(--space-1) hover:bg-accent/10 active:bg-accent/18",
};

type BaseProps = {
  variant?: Variant;
  /** Square 36×36 action with no label — for a lone icon. */
  icon?: boolean;
  /** Full-width, for stacked forms. */
  block?: boolean;
  className?: string;
  children?: ReactNode;
};

type ButtonProps = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & { href?: never };

type AnchorProps = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseProps> & {
    href: string;
  };

export function Button(props: ButtonProps | AnchorProps) {
  const {
    variant = "secondary",
    icon = false,
    block = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    base,
    icon ? "h-9 w-9 p-0" : variant === "ghost" ? "py-(--space-2)" : padding,
    variants[variant],
    block && "mt-(--space-2) w-full",
    className,
  );

  if ("href" in rest && rest.href !== undefined) {
    return (
      <Link {...(rest as AnchorProps)} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      {...(rest as ComponentPropsWithoutRef<"button">)}
      className={classes}
    >
      {children}
    </button>
  );
}
