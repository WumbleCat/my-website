"use client";

import { useState } from "react";
import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import { filterProjects, projectFilters, type Project } from "@/data/projects";
import { cn } from "@/lib/cn";

/* The imported design held the chosen facet on component state; it stays
   client state here because it is a view preference, not a location. */
export function ProjectFilters({ projects }: { projects: Project[] }) {
  const [facet, setFacet] = useState<string>("All");
  const shown = filterProjects(projects, facet);

  return (
    <>
      <div
        role="group"
        aria-label="Filter repositories"
        className="mb-1.5 flex flex-wrap gap-2 border-b border-rule pb-[18px]"
      >
        {projectFilters.map((label) => {
          const on = facet === label;
          return (
            <button
              key={label}
              type="button"
              aria-pressed={on}
              onClick={() => setFacet(label)}
              className={cn(
                "cursor-pointer rounded-sm border px-3 py-[5px] font-body text-meta tracking-[0.02em] transition-colors",
                on
                  ? "border-accent bg-accent-100 text-accent-800"
                  : "border-rule text-ink/62 hover:border-ink/45 hover:text-ink",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {shown.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group -mx-2.5 grid grid-cols-1 items-start gap-x-8 gap-y-4 border-b border-rule px-2.5 py-[26px] text-inherit no-underline transition-colors hover:bg-accent/7 md:grid-cols-[1fr_300px_130px]"
        >
          <div>
            <div className="mb-[7px] font-heading text-repo font-semibold transition-colors group-hover:text-accent-700">
              {project.name}
            </div>
            <p className="m-0 max-w-[46ch] text-[13.5px]/[1.6] text-ink/70 text-pretty">
              {project.blurb}
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1.5">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="tnum flex gap-x-4 gap-y-[5px] pt-1.5 text-caption text-ink/50 max-md:flex-wrap md:flex-col md:text-right">
            <span>{project.lang}</span>
            <span>★ {project.stars}</span>
            <span>{project.updated}</span>
          </div>
        </Link>
      ))}

      {shown.length === 0 && (
        <p className="py-10 text-detail text-ink/55">
          Nothing under that facet yet.
        </p>
      )}
    </>
  );
}
