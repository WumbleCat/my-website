import { FilteredVarianceChart } from "@/components/charts/FilteredVarianceChart";
import { Figure } from "@/components/ui/Figure";

const heading =
  "m-0 mb-[18px] font-heading text-[15px] font-semibold tracking-eyebrow uppercase";
const para = "m-0 mb-[18px] text-justify hyphens-auto";

const usage = `from ssvol import HestonDiscrete, APF

model = HestonDiscrete(mu=0.02, kappa=1.8, theta=0.04,
                       xi=0.35, rho=-0.72)
filt  = APF(model, n_particles=5_000, seed=11)
out   = filt.run(returns)          # -> FilterResult
out.loglik, out.ess.mean()`;

/**
 * The written body of a repository page. Only state-space-vol has one so far;
 * every other project renders its lede and figures alone, which is what the
 * layout is designed to degrade to.
 */
export function ProjectArticle({ slug }: { slug: string }) {
  if (slug !== "state-space-vol") return null;

  return (
    <article className="text-[15.5px]/[1.75]">
      <h2 className={heading}>Why</h2>
      <p className={para}>
        Stochastic volatility models are easy to write down and awkward to
        estimate. The latent variance is never observed, so the likelihood is an
        integral over a path, and the usual approaches either linearise the
        problem until it is no longer the problem you had, or sample the path
        with a Gibbs scheme whose mixing degrades exactly where the model is
        interesting — in the tails, and when the leverage correlation is
        strongly negative.
      </p>
      <p className="m-0 mb-[30px] text-justify hyphens-auto">
        This repository implements the bootstrap and auxiliary particle filters
        for the Heston-type discretisation, plus a particle-marginal
        Metropolis–Hastings loop for the parameters. The point was pedagogical:
        every step is a short function with a docstring citing the line of the
        paper it comes from.
      </p>

      <Figure
        className="mb-3"
        caption={
          <>
            Filtered variance (dark) against the simulated latent path (light),
            5,000 particles, T = 1,500.
          </>
        }
      >
        <FilteredVarianceChart />
      </Figure>

      <h2 className={`${heading} mt-[34px]`}>Usage</h2>
      <pre className="mb-[18px] overflow-x-auto rounded-md border border-rule bg-surface px-[18px] py-4 font-mono text-[12.5px]/[1.7] text-accent-900">
        {usage}
      </pre>

      <p className="m-0 text-justify hyphens-auto">
        Benchmarks, the Metropolis loop and the reproduction script for the
        figure above are in{" "}
        <code className="rounded-sm bg-accent-100 px-[5px] py-px font-mono text-detail">
          examples/
        </code>
        . Tests run under pytest in about forty seconds.
      </p>
    </article>
  );
}
