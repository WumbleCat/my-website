import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { notes, notesByYear } from "@/data/notes";
import { shortDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "The weekly note",
  description: "A weekly note. Nothing published yet.",
};

export default function NotesPage() {
  return (
    <PageShell>
      <section className="grid items-end gap-10 pt-14 pb-[38px] md:grid-cols-[1fr_300px] md:gap-16 md:pt-18">
        <div>
          <h1 className="mb-4 font-heading text-[clamp(36px,7vw,46px)]/[1.06] font-normal tracking-display">
            The weekly note
          </h1>
          <p className="max-w-[52ch] text-ink/70 text-pretty">
            One question a week, written down before the answer is known.
          </p>
        </div>

        <div className="border-l border-rule pl-6 text-caption text-ink/50">
          <Link
            href="/rss.xml"
            className="text-inherit no-underline hover:text-accent-700"
          >
            RSS
          </Link>{" "}
          available.
        </div>
      </section>

      {notes.length === 0 && (
        <p className="m-0 border-t border-rule py-10 text-detail text-ink/55">
          Nothing published yet.
        </p>
      )}

      {notesByYear().map(({ year, items }) => (
        <div
          key={year}
          className="grid gap-x-8 pt-[26px] md:grid-cols-[70px_1fr]"
        >
          <div className="tnum self-start pt-[26px] font-heading text-detail text-accent max-md:pt-0 max-md:pb-3 md:sticky md:top-24">
            {year}
          </div>

          <div>
            {items.map((note) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                className="group -mx-2.5 grid grid-cols-[1fr_auto] items-baseline gap-x-[26px] gap-y-1 border-t border-rule px-2.5 py-[22px] text-inherit no-underline transition-colors hover:bg-accent/7 md:grid-cols-[64px_1fr_78px]"
              >
                <span className="tnum text-caption text-ink/48 max-md:order-first">
                  {shortDate(note.date)}
                </span>
                <div className="col-span-2 md:col-span-1">
                  <div className="mb-[5px] font-heading text-row font-semibold transition-colors group-hover:text-accent-700">
                    {note.title}
                  </div>
                  <p className="m-0 max-w-[62ch] text-[13.5px]/[1.6] text-ink/68 text-pretty">
                    {note.dek}
                  </p>
                </div>
                <span className="tnum text-right text-kicker text-ink/45 max-md:order-first">
                  {note.minutes} min
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </PageShell>
  );
}
