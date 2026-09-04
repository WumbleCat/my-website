import { Kicker } from "@/components/ui/Kicker";
import { TextLink } from "@/components/ui/TextLink";

const elsewhere = [
  { href: "https://github.com/anovak", label: "github.com/anovak" },
  { href: "mailto:a.novak@cantab.ac.uk", label: "a.novak@cantab.ac.uk" },
  { href: "/anders-novak-cv.pdf", label: "Curriculum vitae (PDF)" },
];

export function Hero() {
  return (
    <section className="grid items-end gap-10 pt-16 pb-18 md:grid-cols-[1fr_300px] md:gap-16 md:pt-26">
      <div>
        <Kicker className="mb-[22px]">
          Mathematics · Statistics · Markets
        </Kicker>
        <h1 className="mb-6 font-heading text-[clamp(42px,9vw,62px)]/[1.04] font-normal tracking-display">
          Anders Novak
        </h1>
        <p className="max-w-[44ch] text-lede text-ink/78 text-pretty">
          Final-year mathematics and computer science. Two years in systematic
          equities research at a mid-size quant fund before returning to study.
          I write code for statistical inference and a weekly note on what the
          market appears to be pricing.
        </p>
      </div>

      <div className="flex flex-col gap-3.5 border-l border-rule pl-6 text-detail text-ink/62">
        <div>Cambridge, UK</div>
        <div className="flex flex-col items-start gap-[7px]">
          {elsewhere.map((link) => (
            <TextLink key={link.label} href={link.href}>
              {link.label}
            </TextLink>
          ))}
        </div>
      </div>
    </section>
  );
}
