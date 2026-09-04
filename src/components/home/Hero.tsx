import { Kicker } from "@/components/ui/Kicker";
import { TextLink } from "@/components/ui/TextLink";

const elsewhere = [
  { href: "https://github.com/WumbleCat", label: "github.com/WumbleCat" },
  {
    href: "https://www.linkedin.com/in/kometh-tauch/",
    label: "linkedin.com/in/kometh-tauch",
  },
];

export function Hero() {
  return (
    <section className="grid items-end gap-10 pt-16 pb-18 md:grid-cols-[1fr_300px] md:gap-16 md:pt-26">
      <div>
        <Kicker className="mb-[22px]">
          BSc Data Science with Industrial Placement
        </Kicker>
        <h1 className="mb-6 font-heading text-[clamp(42px,9vw,62px)]/[1.04] font-normal tracking-display">
          Kometh Tauch
        </h1>
        <p className="max-w-[44ch] text-lede text-ink/78 text-pretty">
          University of Bristol
        </p>
      </div>

      <div className="flex flex-col gap-3.5 border-l border-rule pl-6 text-detail text-ink/62">
        <div>Bristol, United Kingdom</div>
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
