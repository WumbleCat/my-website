import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ProjectArticle } from "@/components/projects/ProjectArticle";
import { BackLink } from "@/components/ui/BackLink";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Kicker";
import { TextLink } from "@/components/ui/TextLink";
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

const reading = [
  {
    href: "https://doi.org/10.1080/01621459.1999.10474153",
    label: "Pitt & Shephard (1999)",
  },
  {
    href: "https://doi.org/10.1111/1467-937X.00050",
    label: "Kim, Shephard & Chib (1998)",
  },
  {
    href: "https://doi.org/10.1111/j.1467-9868.2009.00736.x",
    label: "Andrieu et al. (2010)",
  },
];

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const details = [
    { label: "Language", value: project.lang },
    { label: "Licence", value: "MIT" },
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
          <Button
            variant="primary"
            href={`https://github.com/anovak/${project.slug}`}
          >
            View on GitHub
          </Button>
          <Button href={`/papers/${project.slug}.pdf`}>
            Read the note (PDF)
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

          {project.slug === "state-space-vol" && (
            <div>
              <div className="mb-2 text-micro tracking-eyebrow text-ink/50 uppercase">
                Reading
              </div>
              <div className="flex flex-col items-start gap-[7px]">
                {reading.map((ref) => (
                  <TextLink key={ref.label} href={ref.href}>
                    {ref.label}
                  </TextLink>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </PageShell>
  );
}
