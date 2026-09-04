import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { Plate } from "@/components/ui/Plate";
import { Rule } from "@/components/ui/Rule";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mathematics and computer science at Cambridge, after two years on a systematic equities research desk.",
};

const cv = [
  {
    heading: "Education",
    rows: [
      {
        when: "2024 — 2027",
        what: "MMath / BA, Mathematics with Computer Science",
        detail:
          "University of Cambridge. Part III options in statistical inference, stochastic calculus, and machine learning theory.",
      },
      {
        when: "2018 — 2021",
        what: "BSc Mathematics",
        detail:
          "University of Warwick. Dissertation on empirical processes for dependent data.",
      },
    ],
  },
  {
    heading: "Experience",
    rows: [
      {
        when: "2022 — 2024",
        what: "Quantitative Researcher",
        detail:
          "Systematic equities, medium frequency. Signal research, and the maintenance of the internal risk model.",
      },
      {
        when: "Summer 2021",
        what: "Research Intern",
        detail:
          "Volatility arbitrage desk. Built the calibration harness that later became state-space-vol.",
      },
    ],
  },
  {
    heading: "Writing",
    rows: [
      {
        when: "Weekly",
        what: "The weekly note",
        detail:
          "Twenty-four issues since March 2026. Roughly a thousand subscribers, none of whom pay.",
      },
      {
        when: "2023",
        what: "Shrinkage estimators under regime change",
        detail:
          "Working paper, with two co-authors. Never submitted; the referee in my head won.",
      },
    ],
  },
  {
    heading: "Tools",
    rows: [
      {
        when: "Daily",
        what: "Python, Rust, SQL",
        detail:
          "NumPy, JAX, polars, scikit-learn. Rust when the loop is the problem.",
      },
      {
        when: "Occasionally",
        what: "R, Stan, LaTeX",
        detail:
          "Stan for anything hierarchical that deserves a proper posterior.",
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
            I read mathematics and computer science, finishing next spring.
            Before that I spent two years on a systematic equities research
            desk, mostly building and breaking signals in the medium-frequency
            bucket, and a year of that maintaining the risk model everyone
            complained about.
          </p>
          <p className="m-0 text-justify hyphens-auto text-[15px]/[1.75] text-ink/82">
            I left because the interesting questions had started to look
            statistical rather than financial, and I wanted the time to do them
            properly. The projects here are the residue of that. The weekly note
            is the part of the desk habit I did not want to lose: an argument,
            written down, before the outcome is known.
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
