/**
 * The written text of an issue. No issue has been set for the web yet; add a
 * branch on `slug` here when the first one is written.
 */
export function NoteBody({ slug }: { slug: string }) {
  void slug;
  return (
    <p className="pt-[34px] text-detail text-ink/55">
      The full text of this issue has not been set for the web yet.
    </p>
  );
}
