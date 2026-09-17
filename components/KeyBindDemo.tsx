// ekKey hero visual (DESIGN.md §4.5) — a three-scene device-binding demo,
// replacing the old two-state "Verifying it's you… / Signed in" visual:
// the passkey glows on its enrolled device, shakes and is rejected when
// copied elsewhere, then resolves to "device-bound by design". Reuses the
// homepage's .dev-body/.scene cross-fade shell (cycle3, 3 scenes) rather
// than inventing a new cycle mechanism.
export default function KeyBindDemo() {
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
        <div className="dev-body cycle">
          <div className="scene">
            <p className="dev-label" style={{ textAlign: "center" }}>
              This device
            </p>
            <div className="kb-icon kb-active">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
              </svg>
            </div>
            <p className="fid-label" style={{ textAlign: "center" }}>
              Passkey active · signs in instantly
            </p>
          </div>
          <div className="scene">
            <p className="dev-label" style={{ textAlign: "center" }}>
              Copied to another device
            </p>
            <div className="kb-icon kb-shake">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
              </svg>
              <span className="kb-badge" aria-hidden="true" />
            </div>
            <p className="fid-label" style={{ textAlign: "center" }}>
              Rejected · not the enrolled hardware
            </p>
          </div>
          <div className="scene">
            <p className="dev-label" style={{ textAlign: "center" }}>
              Device-bound by design
            </p>
            <div className="kb-icon kb-shield">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 4v5c0 5-3.5 8.2-8 9-4.5-.8-8-4-8-9V7z" />
                <path d="m9 12 2 2 4-5" />
              </svg>
            </div>
            <p className="fid-label" style={{ textAlign: "center" }}>
              A stolen passkey file is worthless
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
