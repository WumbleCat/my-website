/**
 * Three-month implied correlation (solid) against realised (dashed). Inline
 * so the strokes come from the accent ramp; the axis figures are set tabular.
 */
export function ImpliedCorrelationChart() {
  const years = [
    { x: 46, label: "2021" },
    { x: 184, label: "2022" },
    { x: 322, label: "2023" },
    { x: 460, label: "2024" },
    { x: 576, label: "2026" },
  ];

  return (
    <svg
      viewBox="0 0 620 230"
      role="presentation"
      aria-hidden="true"
      className="block h-auto w-full"
    >
      <g stroke="var(--color-ink)" strokeOpacity="0.12" strokeWidth="1">
        <line x1="46" y1="26" x2="600" y2="26" />
        <line x1="46" y1="74" x2="600" y2="74" />
        <line x1="46" y1="122" x2="600" y2="122" />
        <line x1="46" y1="170" x2="600" y2="170" />
      </g>
      <line x1="46" y1="196" x2="600" y2="196" stroke="var(--color-ink)" />
      <line x1="46" y1="26" x2="46" y2="196" stroke="var(--color-ink)" />
      <polyline
        fill="none"
        stroke="var(--color-accent-700)"
        strokeWidth="2"
        points="46,62 92,70 138,58 184,84 230,92 276,80 322,104 368,118 414,112 460,136 506,150 552,146 598,162"
      />
      <polyline
        fill="none"
        stroke="var(--color-accent-400)"
        strokeWidth="1.4"
        strokeDasharray="4 4"
        points="46,96 92,98 138,94 184,100 230,102 276,99 322,104 368,108 414,106 460,112 506,116 552,114 598,120"
      />
      <g
        fontSize="9.5"
        fill="var(--color-ink)"
        fillOpacity="0.55"
        className="tnum font-heading"
      >
        {years.map((year) => (
          <text key={year.label} x={year.x} y="212">
            {year.label}
          </text>
        ))}
        <text x="18" y="30">
          60
        </text>
        <text x="18" y="126">
          40
        </text>
        <text x="18" y="199">
          20
        </text>
      </g>
    </svg>
  );
}
