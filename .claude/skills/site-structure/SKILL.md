---
name: site-structure
description: How this Next.js site is laid out and how to extend it - where routes, components, data and content live, what may be a client component, and the conventions for adding a page, a repository or a weekly note. Load before adding or moving any file, adding a route, or deciding where a piece of code or copy belongs.
---

# Site structure

A Next.js App Router site, statically generated. Read this before adding a
file so it lands where the rest of the code expects it.

## Layout

```
src/
  app/                      Routes only. A page file wires data to components.
    layout.tsx              Fonts, metadata, the header/footer shell.
    page.tsx                /
    not-found.tsx           404
    rss.xml/route.ts        The feed for the weekly note
    projects/page.tsx       /projects
    projects/[slug]/page.tsx
    notes/page.tsx          /notes
    notes/[slug]/page.tsx
    about/page.tsx  now/page.tsx
  components/
    ui/                     Design-system primitives. No data, no domain.
    layout/                 Header, footer, nav, page shell.
    home/  projects/  notes/  Feature components, named for their route.
    charts/                 Inline SVG figures.
  data/                     Lists read by more than one route.
  lib/                      Small helpers (cn, date formatting, site constants).
```

Import with the `@/*` alias. Never use a relative path that climbs out of a
directory (`../../`).

## Where a thing belongs

**Copy is hardcoded in components.** Prose lives in the JSX of the component
that renders it. There is no CMS, no MDX and no content layer, and adding one
is a decision to raise, not to make silently.

The one exception is **list data read by more than one route** — the
repository list and the note index — which lives in `src/data/`. The test is
narrow: if a second route needs it, it goes in `src/data/`; otherwise it stays
in the component. A list used by exactly one page stays in that page.

Long-form bodies get their own component (`ProjectArticle`, `NoteBody`) that
switches on the slug. This keeps a page file readable, and lets an entry
without a written body degrade to its masthead instead of breaking.

**A component in `ui/` may not import from `data/`.** Primitives take props.

## Server by default

Everything is a server component unless it genuinely needs the browser. Only
two things are `"use client"` today, and each earns it:

- `NavLink` — reads `usePathname()` for the active section.
- `ProjectFilters` — holds the chosen facet in `useState`.

Before adding `"use client"`, check whether the state is really **location**.
The imported design held all seven views in one `view` field; here they are
routes, which is why the site prerenders. Reach for a route or a search param
before reaching for state.

## Adding things

**A repository.** Append to `src/data/projects.ts`. The index, the home page's
featured three (or fewer) and `generateStaticParams` all pick it up. Give it prose by
adding a branch to `ProjectArticle`; without one it renders masthead-only,
which is fine.

**A weekly note.** Prepend to `notes` in `src/data/notes.ts` — the list is
ordered newest first, and the archive grouping, the home page's recent three,
the previous/next links and the RSS feed all derive from that order. Write the
body as a branch in `NoteBody`.

**A page.** Add `src/app/<segment>/page.tsx` exporting `metadata` and a default
component wrapped in `PageShell`. If it belongs in the header, add it to
`sections` in `SiteHeader`.

## Conventions

- Every route exports `metadata`; dynamic routes export `generateMetadata` and
  `generateStaticParams`, and call `notFound()` on an unknown slug.
- Dynamic route `params` is a promise — `const { slug } = await params`.
- Use `PageProps<"/route">` and `LayoutProps<"/">`; Next generates these.
- Use the semantic element: a label/value pair is a `dl`, a sequence of issues
  is a list of links, a date is a `<time dateTime>`.
- Decorative SVG takes `aria-hidden` and lets the `figcaption` carry meaning.

## Verifying

```bash
npm run lint
npm run build     # must prerender every route; ● marks an SSG path
```

A build that succeeds proves nothing about how the page looks. For anything
visual, follow the checking section of the `frontend-design` skill.
