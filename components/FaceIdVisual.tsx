// ekKey hero visual — a two-scene cross-fade: a bordered biometric scan box
// (face outline + corner brackets + sweeping beam, same visual language as
// ekShield's fingerprint scene) sweeping through "Verifying it's you…",
// then a signed-in confirmation carrying the passkey's own crypto signature
// — mirrors the FIDO2/ECDSA specifics from the "How it works" copy.
export default function FaceIdVisual() {
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
          </span>
        </div>
        <div className="dev-body cycle2">
          <div className="scene">
            <p className="dev-label" style={{ textAlign: "center" }}>
              Face ID
            </p>
            <div className="fp">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "color-mix(in srgb, var(--paper) 62%, transparent)", padding: 22, boxSizing: "border-box" }}
              >
                <path d="M4 7V5a2 2 0 0 1 2-2h2M4 17v2a2 2 0 0 0 2 2h2M20 7V5a2 2 0 0 0-2-2h-2M20 17v2a2 2 0 0 1-2 2h-2" />
                <circle cx="12" cy="12" r="6" />
                <path d="M9.3 10.3v1.4M14.7 10.3v1.4" />
                <path d="M9.2 15.2c.9.85 1.9 1.3 2.8 1.3s1.9-.45 2.8-1.3" />
              </svg>
              <span className="fpscan" />
            </div>
            <p className="fid-label">Verifying it&apos;s you…</p>
          </div>
          <div className="scene">
            <div className="verified">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
              </svg>
              <div>
                <b>Signed in</b>
                <span>No password used</span>
              </div>
            </div>
            <p className="hash">
              FIDO2 · ECDSA P-256 · key <b>9f21·8ac4</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
