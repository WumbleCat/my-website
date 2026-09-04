/**
 * The written body of a note. Nothing is published yet, so every slug
 * renders its masthead alone. Add a branch on `slug` to give a note prose.
 */
export function NoteBody({ slug }: { slug: string }) {
  void slug;
  return null;
}
