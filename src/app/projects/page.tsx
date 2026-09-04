import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Public repositories, mostly estimation and inference problems that came out of coursework or the desk.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="grid items-end gap-10 pt-14 pb-[34px] md:grid-cols-[1fr_300px] md:gap-16 md:pt-18">
        <div>
          <h1 className="mb-4 font-heading text-[clamp(36px,7vw,46px)]/[1.06] font-normal tracking-display">
            Projects
          </h1>
          <p className="max-w-[52ch] text-ink/70 text-pretty">
            Eleven public repositories, mostly estimation and inference problems
            that came out of coursework or the desk. Each has a written README;
            several have a short paper.
          </p>
        </div>

        <dl className="flex flex-col gap-2 border-l border-rule pl-6 text-note text-ink/60">
          <div className="flex justify-between">
            <dt>Repositories</dt>
            <dd className="tnum m-0">{projects.length}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Primary language</dt>
            <dd className="m-0">Python</dd>
          </div>
          <div className="flex justify-between">
            <dt>Last push</dt>
            <dd className="tnum m-0">2 days ago</dd>
          </div>
        </dl>
      </section>

      <ProjectFilters projects={projects} />
    </PageShell>
  );
}
