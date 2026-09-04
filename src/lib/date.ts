const SHORT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});

const LONG = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** "24 Aug" — for lists and cards. */
export const shortDate = (iso: string) => SHORT.format(new Date(iso));

/** "24 August 2026" — for a note's own masthead. */
export const longDate = (iso: string) => LONG.format(new Date(iso));
