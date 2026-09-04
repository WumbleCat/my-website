/**
 * The weekly note. Shared by the home page, the archive and the reading
 * route, so it lives here rather than inline; the prose of each note is
 * written into its own page component.
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

export const notes: Note[] = [
  {
    slug: "the-dispersion-trade-has-stopped-being-a-trade",
    number: 24,
    date: "2026-08-24",
    title: "The dispersion trade has stopped being a trade",
    dek: "Implied correlation is at the bottom of its range. That is a description of who is left, not a signal.",
    minutes: 11,
  },
  {
    slug: "what-the-two-year-is-not-saying",
    number: 23,
    date: "2026-08-17",
    title: "What the two-year is not saying",
    dek: "A rate path that looks like a forecast is mostly a convexity artefact once you strip the term premium.",
    minutes: 9,
  },
  {
    slug: "earnings-drift-again",
    number: 22,
    date: "2026-08-10",
    title: "Earnings drift, again",
    dek: "The anomaly is still there in the data and still not there after costs. Both facts deserve equal billing.",
    minutes: 8,
  },
  {
    slug: "everyone-is-running-the-same-factor",
    number: 21,
    date: "2026-08-03",
    title: "Everyone is running the same factor",
    dek: "Crowding measures disagree with each other more than they disagree with random noise.",
    minutes: 12,
  },
  {
    slug: "on-backtests-that-cannot-fail",
    number: 20,
    date: "2026-07-27",
    title: "On backtests that cannot fail",
    dek: "A short taxonomy of the ways a research pipeline learns the answer before you ask the question.",
    minutes: 10,
  },
  {
    slug: "liquidity-is-a-schedule-not-a-number",
    number: 19,
    date: "2026-07-20",
    title: "Liquidity is a schedule, not a number",
    dek: "Depth at the touch tells you very little about the cost of the trade you actually want to do.",
    minutes: 7,
  },
];

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
