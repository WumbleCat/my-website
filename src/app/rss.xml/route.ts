import { notes } from "@/data/notes";
import { site } from "@/lib/site";

const escape = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[c]!,
  );

/** The feed for the weekly note, linked from the footer and the archive. */
export function GET() {
  const items = notes
    .map((note) => {
      const url = `${site.url}/notes/${note.slug}`;
      return `    <item>
      <title>${escape(`No. ${note.number} — ${note.title}`)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${note.date}T18:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(note.dek)}</description>
    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(`${site.note} — ${site.name}`)}</title>
    <link>${site.url}/notes</link>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escape(site.description)}</description>
    <language>en-GB</language>
    <managingEditor>${escape(site.author)}</managingEditor>
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: {
      "content-type": "application/rss+xml; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
