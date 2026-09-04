import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { recentNotes } from "@/data/notes";
import { shortDate } from "@/lib/date";

export function WeeklyNote() {
  return (
    <section>
      <SectionHeading
        action={
          <Link
            href="/notes"
            className="border-b border-transparent pb-0.5 text-note text-inherit no-underline transition-colors hover:border-accent hover:text-accent-700"
          >
            Archive →
          </Link>
        }
      >
        The weekly note
      </SectionHeading>

      <p className="mb-[30px] max-w-[58ch] text-[14.5px] text-ink/68">
        Published Sunday evenings. Roughly a thousand words on one thing the
        market seems to be assuming, and whether the data supports it. No calls,
        no track record — an argument and its evidence.
      </p>

      {/* A one-pixel gap over the divider colour draws the grid's rules. */}
      <div className="grid gap-px border-y border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {recentNotes.map((note) => (
          <Link
            key={note.slug}
            href={`/notes/${note.slug}`}
            className="group flex min-h-[190px] flex-col gap-2.5 bg-page px-[22px] pt-6 pb-[26px] text-inherit no-underline transition-colors hover:bg-accent/7"
          >
            <div className="tnum text-kicker tracking-eyebrow text-accent-700 uppercase">
              No. {note.number} · {shortDate(note.date)}
            </div>
            <div className="font-heading text-[20px]/[1.22] font-semibold transition-colors group-hover:text-accent-700">
              {note.title}
            </div>
            <p className="m-0 text-detail text-ink/66 text-pretty">
              {note.dek}
            </p>
            <div className="tnum mt-auto text-kicker text-ink/45">
              {note.minutes} min
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
