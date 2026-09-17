"use client";

import { useEffect, useState } from "react";

// ekSign hero visual (DESIGN.md §4.6) — the execution-status card now plays
// through a real completion sequence instead of a static "2 of 3 signed"
// snapshot: the Guarantor row flips from Awaiting to Signed, the header
// count cross-fades to "3 of 3 signed", and the seal hash cycles through
// decoy values before settling and glowing on the real seal. Same timed-step
// + reduced-motion pattern as PhoneApprovalFlow (freezes on the first frame).
const DECOY_HASHES = ["7d2x·91qz", "c0e4·b8p1", "4f7a·d3m2"];
const FINAL_HASH = "a3f9·c2d1·e4b8";
const STEP_MS = [1800, 1000, 1000, 5200];

export default function SigningCompletionAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setStep((s) => (s + 1) % 4), STEP_MS[step]);
    return () => clearTimeout(t);
  }, [step]);

  const settled = step === 3;

  return (
    <div className="viz">
      <div className="vhead">
        <span>ekSign · execution status</span>
        <span key={settled ? "final" : "pending"} className="signfade">
          {settled ? "3 of 3 signed" : "2 of 3 signed"}
        </span>
      </div>
      <div className="vbody">
        {[
          { label: "Primary borrower", status: "Signed" },
          { label: "Co-borrower", status: "Signed" },
        ].map((row) => (
          <div className="vrow" key={row.label}>
            <span className="ic">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 2H6v20h12V7z" />
                <path d="M14 2v5h5" />
              </svg>
            </span>
            <span>
              <b>{row.label}</b>
            </span>
            <span className="ok">{row.status}</span>
          </div>
        ))}
        <div className="vrow" key={settled ? "guarantor-signed" : "guarantor-waiting"}>
          <span className="ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6v20h12V7z" />
              <path d="M14 2v5h5" />
            </svg>
          </span>
          <span>
            <b>Guarantor</b>
          </span>
          <span className={settled ? "ok signfade" : "pending signfade"}>{settled ? "Signed" : "Awaiting"}</span>
        </div>
        <div className="vrow">
          <span className="ic">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M7 10V7a5 5 0 0 1 10 0v3" />
              <rect x="3" y="10" width="18" height="11" />
            </svg>
          </span>
          <span>
            <b>Authentication</b>
          </span>
          <span className="ok">Bank MFA · national ID</span>
        </div>
      </div>
      <div className="vnote">
        Seal{" "}
        <b key={step} className={settled ? "seal-hash seal-final" : "seal-hash"}>
          {settled ? `SHA-256 ${FINAL_HASH}` : DECOY_HASHES[step]}
        </b>{" "}
        — any alteration after signing fails verification
      </div>
    </div>
  );
}
