// ekBind hero visual — a SIM card and a mobile-network tower, connected by
// two traveling signals (Silent Network Authentication out, Reverse SMS
// back), with the tower pulsing radar-style rings. Native SVG <animate>/
// <animateMotion>, no JS state — same pattern as RulesViz.
export default function SimTowerViz() {
  return (
    <div className="simtower">
      <div className="st-col">
        <svg className="st-icon" width="54" height="60" viewBox="0 0 54 60" fill="none">
          <path d="M4 2h34l14 14v42H4z" stroke="var(--paper)" strokeWidth={2} strokeLinejoin="round" />
          <path d="M38 2v14h14" stroke="var(--paper)" strokeWidth={2} strokeLinejoin="round" />
          <rect x="12" y="24" width="30" height="22" stroke="var(--accent-lt)" strokeWidth={1.6} />
          <path d="M22 24v22M32 24v22M12 35h30" stroke="var(--accent-lt)" strokeWidth={1.2} />
        </svg>
        <span>Device</span>
        <b>Banking app</b>
      </div>

      <svg className="st-link" viewBox="0 0 120 36" preserveAspectRatio="none">
        <path id="stpath" d="M2,18 C40,2 80,34 118,18" fill="none" stroke="var(--line)" strokeWidth={1.5} strokeDasharray="4 6" />
        <circle r={3.2} fill="var(--color-accent)">
          <animateMotion dur="2.4s" repeatCount="indefinite">
            <mpath href="#stpath" />
          </animateMotion>
        </circle>
        <circle r={3.2} fill="var(--accent-lt)">
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.2s" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
            <mpath href="#stpath" />
          </animateMotion>
        </circle>
      </svg>

      <div className="st-col">
        <svg className="st-icon" width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ overflow: "visible" }}>
          <circle cx="34" cy="16" r="6" opacity="0.65" stroke="var(--color-accent)" strokeWidth={1.4}>
            <animate attributeName="r" values="4;22" dur="3s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.65;0" dur="3s" begin="0s" repeatCount="indefinite" />
          </circle>
          <circle cx="34" cy="16" r="6" opacity="0.65" stroke="var(--color-accent)" strokeWidth={1.4}>
            <animate attributeName="r" values="4;22" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.65;0" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="34" cy="16" r="6" opacity="0.65" stroke="var(--color-accent)" strokeWidth={1.4}>
            <animate attributeName="r" values="4;22" dur="3s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.65;0" dur="3s" begin="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="34" cy="16" r="1.8" fill="var(--accent-lt)" />
          <path d="M34 16V56M18 56 34 16l16 40" stroke="var(--paper)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 46h24M25.5 34h17" stroke="var(--paper)" strokeWidth={2} />
        </svg>
        <span>Operator</span>
        <b>Network check</b>
      </div>
    </div>
  );
}
