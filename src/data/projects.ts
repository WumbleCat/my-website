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
    slug: "state-space-vol",
    name: "state-space-vol",
    blurb:
      "Particle filters for stochastic volatility with leverage, written to be read rather than to be fast.",
    lang: "Python",
    stars: 214,
    updated: "2 days ago",
    tags: ["Bayesian", "Time series"],
  },
  {
    slug: "shrinkage-cov",
    name: "shrinkage-cov",
    blurb:
      "Nonlinear shrinkage of large covariance matrices, with the eigenvalue clipping variants side by side on the same data.",
    lang: "Python",
    stars: 168,
    updated: "3 weeks ago",
    tags: ["Statistics", "Estimation"],
  },
  {
    slug: "conformal-ts",
    name: "conformal-ts",
    blurb:
      "Conformal prediction intervals that survive serial dependence. Mostly a study of where the exchangeability assumption breaks.",
    lang: "Python",
    stars: 96,
    updated: "1 month ago",
    tags: ["ML", "Uncertainty"],
  },
  {
    slug: "hawkes-lob",
    name: "hawkes-lob",
    blurb:
      "Multivariate Hawkes estimation on limit order book message data, with the EM and the spectral routes compared.",
    lang: "Rust",
    stars: 74,
    updated: "2 months ago",
    tags: ["Point process", "Microstructure"],
  },
  {
    slug: "gp-yield",
    name: "gp-yield",
    blurb:
      "Gaussian process yield curve fitting with a monotonicity constraint that is honest about being approximate.",
    lang: "Python",
    stars: 41,
    updated: "4 months ago",
    tags: ["ML", "Rates"],
  },
  {
    slug: "boot-cv",
    name: "boot-cv",
    blurb:
      "A small library of block bootstrap and purged cross-validation splitters that work with scikit-learn.",
    lang: "Python",
    stars: 33,
    updated: "6 months ago",
    tags: ["Statistics", "Tooling"],
  },
];

/** The filter chips on /projects. A facet matches either a tag or a language. */
export const projectFilters = [
  "All",
  "Statistics",
  "ML",
  "Bayesian",
  "Time series",
  "Rust",
] as const;

export function filterProjects(list: Project[], facet: string): Project[] {
  if (facet === "All") return list;
  return list.filter((p) => p.tags.includes(facet) || p.lang === facet);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** The three shown under "Selected work" on the home page. */
export const featuredProjects = projects.slice(0, 3);
