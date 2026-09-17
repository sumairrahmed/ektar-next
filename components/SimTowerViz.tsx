// ekBind hero visual (DESIGN.md §4.4, transcribed from ekbind.dc.html's inline
// .simtower SVG): a phone/SIM icon on the left and a cell tower on the right,
// joined by three curved signal lines, with broadcast-wave arcs radiating
// from the tower and a "SIM verified" label fading in above. Plain CSS
// keyframe animations (simpulse/towerwave/verifyfade) — reduced motion is
// handled by app/globals.css freezing them at their settled, visible state.
export default function SimTowerViz() {
  return (
    <div className="simtower">
      <svg width="100%" height="125" viewBox="0 0 320 145">
        <rect x="20" y="55" width="46" height="60" rx="6" fill="none" stroke="var(--paper)" strokeWidth={2} />
        <path d="M50 55 L66 71 L66 55 Z" fill="var(--ink)" stroke="var(--paper)" strokeWidth={2} />
        <rect x="30" y="70" width="18" height="14" rx="2" fill="var(--accent-lt)" opacity={0.85} />

        <path d="M240 120 L255 55 L270 120 Z" fill="none" stroke="var(--paper)" strokeWidth={2} />
        <line x1="255" y1="55" x2="255" y2="40" stroke="var(--paper)" strokeWidth={2} />
        <circle cx="255" cy="37" r="3" fill="var(--paper)" />
        <path className="tw" d="M240 42 A22 22 0 0 1 270 42" fill="none" stroke="var(--color-accent)" strokeWidth={2} />
        <path className="tw tw2" d="M232 50 A34 34 0 0 1 278 50" fill="none" stroke="var(--color-accent)" strokeWidth={2} />
        <path className="tw tw3" d="M224 58 A46 46 0 0 1 286 58" fill="none" stroke="var(--color-accent)" strokeWidth={2} />

        <path className="sig" d="M70 80 Q150 40 235 80" fill="none" stroke="var(--color-accent)" strokeWidth={2} />
        <path className="sig sig2" d="M70 85 Q150 50 235 85" fill="none" stroke="var(--color-accent)" strokeWidth={2} />
        <path className="sig sig3" d="M70 90 Q150 60 235 90" fill="none" stroke="var(--color-accent)" strokeWidth={2} />

        <text x="43" y="132" textAnchor="middle" fontSize="11" fill="var(--dim)">Device</text>
        <text x="255" y="132" textAnchor="middle" fontSize="11" fill="var(--dim)">Operator</text>

        <g className="verify">
          <rect x="110" y="8" width="100" height="26" rx="4" fill="var(--ink)" stroke="var(--accent-lt)" strokeWidth={1.5} />
          <text x="160" y="25" textAnchor="middle" fontSize="12" fill="var(--accent-lt)">SIM verified</text>
        </g>
      </svg>
    </div>
  );
}
