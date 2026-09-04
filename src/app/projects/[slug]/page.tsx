import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectArticle } from "@/components/projects/ProjectArticle";
import { BackLink } from "@/components/ui/BackLink";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.blurb };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const details = [
    { label: "Language", value: project.lang },
    { label: "Stars", value: project.stars },
    { label: "Updated", value: project.updated },
  ];

  return (
    <PageShell>
      <div className="pt-11">
        <BackLink href="/projects">Projects</BackLink>
      </div>

      <section className="border-b border-rule pt-[34px] pb-[30px]">
        <Kicker className="mb-4">Repository</Kicker>
        <h1 className="mb-[18px] font-heading text-[clamp(38px,8vw,52px)]/[1.05] font-normal tracking-display">
          {project.name}
        </h1>
        <p className="mb-[26px] max-w-[56ch] text-[16.5px]/[1.6] text-ink/76 text-pretty">
          {project.blurb}
        </p>
        <div className="flex flex-wrap gap-2.5">
          <Button variant="primary" href={project.repo}>
            View on GitHub
          </Button>
        </div>
      </section>

      <div className="grid gap-10 pt-11 md:grid-cols-[1fr_240px] md:gap-14">
        <ProjectArticle slug={project.slug} />

        <aside className="flex flex-col gap-5 self-start border-l border-rule pl-[26px] text-note text-ink/64 md:sticky md:top-23 md:row-start-1 md:col-start-2">
          <div>
            <div className="mb-2 text-micro tracking-eyebrow text-ink/50 uppercase">
              Details
            </div>
            <dl className="tnum m-0 flex flex-col gap-1.5">
              {details.map((row) => (
                <div key={row.label} className="flex justify-between">
                  <dt>{row.label}</dt>
                  <dd className="m-0">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
