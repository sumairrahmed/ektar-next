export type CycleScene = {
  label: string;
  context: string;
  verifiedTitle: string;
  verifiedDetail: string;
  chips: { text: string; flag: string }[];
};

// The cycle3/cycle2 cross-fade hero visual (DESIGN.md §4.1). By default this
// is a pure CSS animation, no JS state needed — used as-is on surface pages.
// On the homepage it's driven by `activeIndex` instead (from HeroReel), so
// the visible scene stays in sync with the "Protect the X" rotator text
// rather than looping on its own independent timer.
export default function HeroCycle({
  scenes,
  variant = "cycle",
  activeIndex,
}: {
  scenes: CycleScene[];
  variant?: "cycle" | "cycle2";
  activeIndex?: number;
}) {
  const controlled = activeIndex !== undefined;
  return (
    <div className="shield-stack">
      <span className="ring r1" />
      <span className="ring r2" />
      <span className="ring r3" />
      <div className="device">
        <div className="dev-top mono">
          <span>09:41</span>
          <span className="bars">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className={`dev-body ${variant}${controlled ? " js-cycle" : ""}`}>
          {scenes.map((scene, i) => (
            <div className={`scene${controlled && i === activeIndex ? " active" : ""}`} key={scene.label}>
              <p className="dev-label">{scene.label}</p>
              <p className="dev-app">{scene.context}</p>
              <div className="verified">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 13 4 4 10-11" />
                </svg>
                <div>
                  <b>{scene.verifiedTitle}</b>
                  <span>{scene.verifiedDetail}</span>
                </div>
              </div>
              <div className="chips">
                {scene.chips.map((chip) => (
                  <div className="chip" key={chip.text}>
                    <span className="x" />
                    {chip.text}
                    <b>{chip.flag}</b>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
