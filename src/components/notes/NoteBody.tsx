import { ImpliedCorrelationChart } from "@/components/charts/ImpliedCorrelationChart";
import { Figure } from "@/components/ui/Figure";
import { Rule } from "@/components/ui/Rule";
import { TextLink } from "@/components/ui/TextLink";

const para = "m-0 mb-5 text-justify hyphens-auto";

/**
 * The written text of an issue. Only No. 24 has been set so far; the reading
 * route falls back to the masthead alone for the rest.
 */
export function NoteBody({ slug }: { slug: string }) {
  if (slug !== "the-dispersion-trade-has-stopped-being-a-trade") {
    return (
      <p className="pt-[34px] text-detail text-ink/55">
        The full text of this issue has not been set for the web yet.
      </p>
    );
  }

  return (
    <div className="pt-[34px] text-read">
      <p className={para}>
        {/* The drop cap is the one place the heading face sets at display size
            inside running text. */}
        <span
          aria-hidden="true"
          className="float-left pt-1.5 pr-3 font-heading text-[62px]/[0.78] text-accent-800"
        >
          T
        </span>
        <span className="sr-only">T</span>he standard account of dispersion is
        straightforward. Index options are expensive relative to the options on
        their constituents, because index volatility embeds a correlation that
        is itself priced with a risk premium. Sell the index vol, buy the single
        names, and you are paid for holding correlation risk. It has worked for
        most of two decades and it has failed, spectacularly, on roughly four
        occasions.
      </p>
      <p className={para}>
        What is unusual about the current setup is not the level of implied
        correlation — it is low, but it has been low before — so much as the
        composition of the flow producing it. A structural seller of index
        volatility that is indifferent to the correlation premium is not the
        same counterparty as a dispersion book, and the two leave very different
        fingerprints in the term structure.
      </p>

      <Figure
        className="my-8"
        caption={
          <>
            Fig. 1 — Three-month implied correlation (solid) and realised
            (dashed), top 50 constituents. Source: author&rsquo;s calculation
            from public option chains.
          </>
        }
      >
        <ImpliedCorrelationChart />
      </Figure>

      <h2 className="m-0 mt-9 mb-3.5 font-heading text-[24px] font-semibold">
        Who is on the other side
      </h2>
      <p className={para}>
        The honest answer is that I do not know, and neither does anyone quoting
        the number on a screen. What is observable is the shape: the front end
        of the correlation curve has flattened while the twelve-month point has
        barely moved, which is what you would expect if the selling pressure
        were concentrated in systematic overwriting rather than in
        relative-value books that would naturally spread themselves across
        tenors.
      </p>

      <blockquote className="my-[26px] border-l-2 border-accent pl-[22px] text-[17px]/[1.65] italic text-ink/78">
        A cheap position that nobody wants to own is not the same as a cheap
        position that everybody has already bought.
      </blockquote>

      <p className={para}>
        If that reading is right, the level of implied correlation carries much
        less information about future realised correlation than the historical
        relationship suggests, and the regressions people are quoting are fitted
        on a period when the marginal seller had a view. Estimating that
        relationship on the post-2022 subsample gives a coefficient about a
        third of the full-sample one, with a standard error that comfortably
        contains zero.
        <sup className="text-kicker text-accent-700">
          <a href="#fn-1" id="fnref-1" className="text-inherit no-underline">
            1
          </a>
        </sup>
      </p>
      <p className={para}>
        None of this makes the trade bad. It makes the usual argument for it —
        that the premium is mechanically there — weaker than it is normally
        stated, and it means the risk is worse compensated in exactly the states
        where it matters.
      </p>

      <Rule className="mt-9 mb-[18px]" />
      <ol className="m-0 pl-[18px] text-note/[1.7] text-ink/58">
        <li id="fn-1">
          Code and data for the subsample regression are in{" "}
          <TextLink href="https://github.com/anovak/dispersion-notes">
            anovak/dispersion-notes
          </TextLink>
          . Nothing here is advice, and I hold no position in any of it.{" "}
          <a href="#fnref-1" className="text-inherit no-underline">
            ↩
          </a>
        </li>
      </ol>
    </div>
  );
}
