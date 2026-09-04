import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Now",
  description: "What I am actually doing at the moment.",
};

/** The date this page last stopped being out of date. */
const UPDATED = "2026-08-30";

const items = [
  {
    label: "Reading",
    text: "Pollard on empirical processes, slowly, and the 2024 conformal literature rather less slowly.",
  },
  {
    label: "Building",
    text: "A rewrite of conformal-ts around a cleaner splitter API, and a Rust core for the Hawkes estimator.",
  },
  {
    label: "Writing",
    text: "The weekly note, and a longer piece on why crowding measures disagree with each other.",
  },
  {
    label: "Looking for",
    text: "Research roles from summer 2027, and conversations before then with people who think about estimation for a living.",
  },
  {
    label: "Away from this",
    text: "Rowing badly, and learning to make bread that is not dense.",
  },
];

export default function NowPage() {
  return (
    <PageShell>
      <section className="pt-14 pb-[34px] md:pt-18">
        <h1 className="mb-3.5 font-heading text-[clamp(36px,7vw,46px)]/[1.06] font-normal tracking-display">
          Now
        </h1>
        <p className="max-w-[50ch] text-[14.5px] text-ink/62">
          What I am actually doing, as of{" "}
          <time dateTime={UPDATED}>30 August 2026</time>. Updated when it stops
          being true.
        </p>
      </section>

      <dl className="m-0 max-w-reading">
        {items.map((item) => (
          <div
            key={item.label}
            className="grid gap-x-7 border-t border-rule py-[22px] md:grid-cols-[120px_1fr]"
          >
            <dt className="pt-1 text-micro tracking-eyebrow text-accent-700 uppercase max-md:pb-2">
              {item.label}
            </dt>
            <dd className="m-0 text-[15px]/[1.7] text-ink/80 text-pretty">
              {item.text}
            </dd>
          </div>
        ))}
      </dl>
    </PageShell>
  );
}
