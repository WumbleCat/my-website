/**
 * The written body of a repository page. No repository has one yet, so every
 * project renders its lede and details alone, which is what the layout is
 * designed to degrade to. Add a branch on `slug` to give one prose.
 */
export function ProjectArticle({ slug }: { slug: string }) {
  void slug;
  return null;
}
