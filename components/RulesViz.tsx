// ekRules hero visual — User/Device/App nodes feeding a decision box,
// with a cycling Allow/Verify/Block verdict. Traveling dots animate along
// the connecting paths via native SVG <animateMotion>.
export default function RulesViz() {
  return (
    <div className="rulesviz">
      <p className="dev-label" style={{ textAlign: "center" }}>
        Every signal, one verdict
      </p>
      <svg width="100%" height="190" viewBox="0 0 260 200">
        <path id="l1" d="M40,26 Q60,90 130,130" fill="none" stroke="var(--line)" strokeWidth={1.5} />
        <path id="l2" d="M130,22 Q100,60 130,130" fill="none" stroke="var(--line)" strokeWidth={1.5} />
        <path id="l3" d="M220,26 Q200,90 130,130" fill="none" stroke="var(--line)" strokeWidth={1.5} />

        <circle r={5} fill="var(--color-accent)">
          <animateMotion dur="1.8s" repeatCount="indefinite">
            <mpath href="#l1" />
          </animateMotion>
        </circle>
        <circle r={5} fill="var(--color-accent)">
          <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.6s">
            <mpath href="#l2" />
          </animateMotion>
        </circle>
        <circle r={5} fill="var(--color-accent)">
          <animateMotion dur="1.8s" repeatCount="indefinite" begin="1.2s">
            <mpath href="#l3" />
          </animateMotion>
        </circle>

        <circle cx={40} cy={22} r={15} fill="var(--ink)" stroke="var(--paper)" strokeWidth={1.5} />
        <circle cx={130} cy={20} r={15} fill="var(--ink)" stroke="var(--paper)" strokeWidth={1.5} />
        <circle cx={220} cy={22} r={15} fill="var(--ink)" stroke="var(--paper)" strokeWidth={1.5} />
        <text x={40} y={50} textAnchor="middle" fontSize={10.5} fill="var(--dim)">User</text>
        <text x={130} y={50} textAnchor="middle" fontSize={10.5} fill="var(--dim)">Device</text>
        <text x={220} y={50} textAnchor="middle" fontSize={10.5} fill="var(--dim)">App</text>

        <rect x={78} y={140} width={104} height={38} rx={4} fill="var(--ink)" stroke="var(--paper)" strokeWidth={2} />
        <text x={130} y={164} textAnchor="middle" fontSize={12} fontWeight={600} fill="var(--paper)">ekRules</text>

        <text x={130} y={196} textAnchor="middle" fontSize={13} fontWeight={600} fill="var(--accent-lt)" className="verd v1">Allow</text>
        <text x={130} y={196} textAnchor="middle" fontSize={13} fontWeight={600} fill="var(--color-accent)" className="verd v2">Verify</text>
        <text x={130} y={196} textAnchor="middle" fontSize={13} fontWeight={600} fill="var(--rules-block)" className="verd v3">Block</text>
      </svg>
    </div>
  );
}
