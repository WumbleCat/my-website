/**
 * Filtered variance against the simulated latent path. Drawn inline so the
 * strokes read from the theme's accent ramp and stay in step if it is
 * retuned. Decorative in the accessibility sense — the figcaption carries
 * the finding — so the SVG is hidden from assistive tech.
 */
export function FilteredVarianceChart() {
  return (
    <svg
      viewBox="0 0 640 210"
      role="presentation"
      aria-hidden="true"
      className="block h-auto w-full"
    >
      <g stroke="var(--color-ink)" strokeOpacity="0.12" strokeWidth="1">
        <line x1="40" y1="20" x2="620" y2="20" />
        <line x1="40" y1="65" x2="620" y2="65" />
        <line x1="40" y1="110" x2="620" y2="110" />
        <line x1="40" y1="155" x2="620" y2="155" />
      </g>
      <line x1="40" y1="180" x2="620" y2="180" stroke="var(--color-ink)" />
      <line x1="40" y1="20" x2="40" y2="180" stroke="var(--color-ink)" />
      <polyline
        fill="none"
        stroke="var(--color-accent-400)"
        strokeWidth="1.2"
        points="40,150 80,142 120,158 160,120 200,131 240,96 280,110 320,72 360,95 400,60 440,84 480,48 520,70 560,40 600,58"
      />
      <polyline
        fill="none"
        stroke="var(--color-accent-700)"
        strokeWidth="2"
        points="40,148 80,144 120,150 160,128 200,132 240,106 280,112 320,84 360,96 400,72 440,86 480,60 520,72 560,52 600,62"
      />
      <text
        x="44"
        y="34"
        fontSize="10"
        fill="var(--color-ink)"
        fillOpacity="0.55"
        className="font-heading"
      >
        σ²ₜ
      </text>
    </svg>
  );
}
