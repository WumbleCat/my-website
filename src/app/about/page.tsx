import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Plate } from "@/components/ui/Plate";
import { Rule } from "@/components/ui/Rule";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kometh Tauch. BSc Data Science with Industrial Placement at the University of Bristol.",
};

const cv = [
  {
    heading: "Education",
    rows: [
      {
        when: "Current",
        what: "BSc Data Science with Industrial Placement",
        detail: "University of Bristol.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pt-14 pb-10 md:pt-18">
        <h1 className="mb-[30px] font-heading text-[clamp(36px,7vw,46px)]/[1.06] font-normal tracking-display">
          About
        </h1>

        <div className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_260px]">
          <p className="m-0 text-justify hyphens-auto text-[15px]/[1.75] text-ink/82">
            I am Kometh Tauch, studying for a BSc in Data Science with
            Industrial Placement at the University of Bristol, and based in
            Bristol.
          </p>
          <p className="m-0 text-justify hyphens-auto text-[15px]/[1.75] text-ink/82">
            The projects here are public repositories from coursework and
            elsewhere. The weekly note has not started yet.
          </p>
          <Plate className="grid aspect-4/5 place-items-center p-4 text-center text-caption text-ink/45 max-lg:max-w-[260px]">
            Portrait
            <br />
            4:5 plate
          </Plate>
        </div>
      </section>

      <Rule className="mt-3.5 mb-[34px]" />

      {cv.map((section) => (
        <section
          key={section.heading}
          className="grid gap-x-10 pb-[34px] md:grid-cols-[180px_1fr]"
        >
          <h2 className="m-0 pt-1 font-heading text-detail font-semibold tracking-label text-ink/70 uppercase max-md:pb-3">
            {section.heading}
          </h2>
          <div>
            {section.rows.map((row) => (
              <div
                key={row.what}
                className="grid gap-x-6 border-b border-rule py-3.5 md:grid-cols-[110px_1fr]"
              >
                <span className="tnum pt-[3px] text-meta text-ink/50">
                  {row.when}
                </span>
                <div>
                  <div className="mb-[3px] font-heading text-[17px] font-semibold">
                    {row.what}
                  </div>
                  <div className="text-detail text-ink/66 text-pretty">
                    {row.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
