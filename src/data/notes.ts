/**
 * The weekly note. Shared by the home page, the archive and the reading
 * route, so it lives here rather than inline; the prose of each note is
 * written into its own page component.
 *
 * Empty for now. Prepend the first issue here when it exists — the list is
 * ordered newest first — and give it a body in `NoteBody`.
 */
export type Note = {
  slug: string;
  number: number;
  /** ISO date of publication — always a Sunday. */
  date: string;
  title: string;
  dek: string;
  minutes: number;
};

export const notes: Note[] = [];

/** The three most recent, for the home page. */
export const recentNotes = notes.slice(0, 3);

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}

/** The note published before / after this one, for the reading route's footer. */
export function noteNeighbours(slug: string) {
  const i = notes.findIndex((n) => n.slug === slug);
  return {
    // The list runs newest first, so the *older* note is the next index.
    older: i === -1 ? undefined : notes[i + 1],
    newer: i <= 0 ? undefined : notes[i - 1],
  };
}

/** Archive groups, newest year first. */
export function notesByYear() {
  const years = new Map<string, Note[]>();
  for (const note of notes) {
    const year = note.date.slice(0, 4);
    years.set(year, [...(years.get(year) ?? []), note]);
  }
  return [...years.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([year, items]) => ({ year, items }));
}
