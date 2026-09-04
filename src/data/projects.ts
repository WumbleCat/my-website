/**
 * The repository list. It lives here rather than inline because both the
 * index (/projects) and the detail route (/projects/[slug]) read from it;
 * everything else on the site is written straight into its component.
 */
export type Project = {
  slug: string;
  name: string;
  blurb: string;
  lang: string;
  stars: number;
  updated: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "2d-particle-simulation",
    name: "2d-particle-simulation",
    blurb:
      "Random motion of hard disks in a box. Broken C++ sources and headers rebuilt from the reference manual, with a Python wrapper and viewer.",
    lang: "C++",
    stars: 0,
    updated: "February 2025",
    tags: ["Simulation", "Coursework"],
  },
];

/** The filter chips on /projects. A facet matches either a tag or a language. */
export const projectFilters = ["All", "Simulation", "Coursework", "C++"] as const;

export function filterProjects(list: Project[], facet: string): Project[] {
  if (facet === "All") return list;
  return list.filter((p) => p.tags.includes(facet) || p.lang === facet);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** The three shown under "Selected work" on the home page. */
export const featuredProjects = projects.slice(0, 3);
