import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects, projects } from "@/data/projects";

/* Rows rather than cards: the hairline between entries carries the structure,
   and the whole row is the hit target. */
export function SelectedWork() {
  return (
    <section className="mb-18">
      <SectionHeading
        action={
          <Link
            href="/projects"
            className="border-b border-transparent pb-0.5 text-note text-inherit no-underline transition-colors hover:border-accent hover:text-accent-700"
          >
            All {projects.length} repositories →
          </Link>
        }
      >
        Selected work
      </SectionHeading>

      <div className="flex flex-col">
        {featuredProjects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group -ml-2.5 grid grid-cols-[26px_1fr] items-baseline gap-x-[22px] gap-y-2 border-b border-rule py-5 pr-2.5 text-inherit no-underline transition-colors hover:bg-accent/7 md:grid-cols-[26px_1fr_1fr_96px]"
          >
            <span className="tnum pl-2.5 font-heading text-meta text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <div className="mb-[5px] font-heading text-row font-semibold transition-colors group-hover:text-accent-700">
                {project.name}
              </div>
              <div className="tnum text-meta text-ink/52">
                {project.stars} stars · updated {project.updated}
              </div>
            </div>

            <p className="col-start-2 m-0 text-[13.5px]/[1.6] text-ink/72 text-pretty md:col-start-3">
              {project.blurb}
            </p>

            <span className="col-start-2 justify-self-start rounded-sm border border-rule px-2.5 py-[3px] text-kicker tracking-[0.02em] text-ink/60 md:col-start-4 md:justify-self-end">
              {project.lang}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
