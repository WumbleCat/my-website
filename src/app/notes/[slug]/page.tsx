import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { NoteBody } from "@/components/notes/NoteBody";
import { BackLink } from "@/components/ui/BackLink";
import { getNote, noteNeighbours, notes } from "@/data/notes";
import { longDate } from "@/lib/date";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/notes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.dek,
    openGraph: { type: "article", publishedTime: note.date },
  };
}

const stepLink =
  "border-b border-transparent pb-0.5 text-inherit no-underline transition-colors hover:border-accent hover:text-accent-700";

export default async function NotePage({ params }: PageProps<"/notes/[slug]">) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const { older, newer } = noteNeighbours(slug);

  return (
    <PageShell>
      <div className="pt-11">
        <BackLink href="/notes">The weekly note</BackLink>
      </div>

      <article className="mx-auto max-w-reading">
        <header className="border-b border-rule pt-10 pb-[30px] text-center">
          <div className="tnum mb-[18px] font-heading text-kicker tracking-kicker text-accent-700 uppercase">
            No. {note.number} ·{" "}
            <time dateTime={note.date}>{longDate(note.date)}</time>
          </div>
          <h1 className="mb-4 font-heading text-[clamp(32px,7vw,44px)]/[1.1] font-normal tracking-[-0.015em] text-balance">
            {note.title}
          </h1>
          <p className="m-0 text-[16px] italic text-ink/62 text-pretty">
            {note.dek}
          </p>
        </header>

        <NoteBody slug={note.slug} />

        <nav className="mt-[34px] flex justify-between gap-6 border-t border-rule pt-[34px] text-detail">
          {older ? (
            <Link href={`/notes/${older.slug}`} className={stepLink}>
              ← No. {older.number} — {older.title}
            </Link>
          ) : (
            <span />
          )}
          {newer ? (
            <Link
              href={`/notes/${newer.slug}`}
              className={`${stepLink} text-right`}
            >
              No. {newer.number} — {newer.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </PageShell>
  );
}
