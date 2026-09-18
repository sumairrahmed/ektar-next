// Transcribed from PAGES.md §3 (source: authentication.dc.html → /ekshield)
// Substantially rewritten from v2 — reframed around a business case rather
// than a security-architecture deep dive. The old security-architecture
// table, PIN-policy table, and hardware-vs-PIN comparison table are removed.

export const hero = {
  statusText: "ekShield · Protect the User",
  title: "Kill SMS OTP. Keep the login.",
  description:
    "No code to steal, no code to intercept. ekShield binds every login and transaction to the customer's own device — phishing-resistant, compliant with CBUAE, RBI, SAMA, BSP and MAS, and already live across mobile, web, call centre and 3DS at the UAE's 3rd largest bank.",
};

export const proofLine = [
  { k: "Live", v: "Securing logins and transactions at two tier-1 banks in the UAE" },
  { k: "Contracted", v: "Deployment underway at a top-3 Omani bank" },
];

export const businessCase = {
  heading: "Three reasons banks make the switch",
  items: [
    { tag: "01", t: "Reduce risk. Closes the phishing, SIM-swap, and replay gaps that SMS OTP can't." },
    { tag: "02", t: "Save cost. Removes the per-message fee banks pay telecom operators on every SMS OTP, multiplied across millions of logins a month." },
    { tag: "03", t: "Improve customer experience. One tap on a trusted device, replacing a code that's slow, easy to mistype, and frustrating to wait for." },
  ],
};

export const breakingPoint = {
  heading: "SMS OTP is the weakest link in digital banking",
  intro: "Six digits, no binding, no encryption — and every way of stealing them already works at scale.",
  rows: [
    { market: "Account takeover", requirement: "SIM swap, SS7 exploits and overlay malware intercept the code before it reaches the customer." },
    { market: "Real-time phishing", requirement: "A code read aloud or typed into a fake screen reaches the attacker as fast as the customer." },
    { market: "Zero transaction binding", requirement: "One code approves any amount, to anyone — no link to what it authorized." },
    { market: "Regulatory bans", requirement: "CBUAE, SAMA, RBI, MAS and BSP have already outlawed it for high-risk transactions." },
    { market: "Approval fatigue", requirement: "Look-alike prompts with no number matching train customers to tap \"approve\" on anything." },
    { market: "Delivery & cost", requirement: "Carrier delays, dead zones and rising per-SMS fees erode trust and margin alike." },
  ],
};

export const capabilities = {
  heading: "Everything ekShield does",
  items: [
    { tag: "01", t: "Stays inside your own infrastructure. Every credential, key, and log lives on the bank's own servers — never on Ektar's." },
    { tag: "02", t: "Extra checks trigger automatically. Step-up verification is driven directly by the bank's own fraud-risk score, not a fixed rule." },
    { tag: "03", t: "Works everywhere. Mobile, web, ATM, cards, contact centre, and messaging — across Retail, Corporate, and SME — all on one platform." },
    { tag: "04", t: "Number matching. Addresses approval fatigue by requiring the customer to match a number, not just tap approve." },
    { tag: "05", t: "Fully offline-capable, with silent registration and automatic key rotation running in the background." },
    { tag: "06", t: "Card-not-present coverage, scheme-agnostic across Visa, Mastercard, and domestic schemes." },
    { tag: "07", t: "Standalone white-label authenticator app, in addition to an embedded SDK." },
    { tag: "08", t: "Pull-based recovery — customers can view and act on any missed approval, right inside the app.", span2: true },
  ],
};

export const howItWorks = {
  heading: "The mechanism behind it",
  items: [
    { tag: "01", t: "On enrollment, the phone generates a rotating credential inside its own secure hardware chip." },
    { tag: "02", t: "Every login or approval is signed with that credential and expires the instant it's used — nothing can be captured and replayed." },
    { tag: "03", t: "Each approval is bound to the exact transaction it authorizes, so a stolen approval can't be reused for a different payment." },
  ],
};

export const whyNow = {
  heading: "Regulators are banning the old way of proving it's you — and fraud losses are mounting.",
  market: "UAE (CBUAE), Saudi Arabia (SAMA), India (RBI), Singapore (MAS), and the Philippines (BSP)",
  requirement: "have all banned or are phasing out SMS one-time codes as a standalone authentication method.",
};

export const closing = {
  heading: "Ready to retire SMS OTP?",
  sub: "Join the banks already live on device-bound MFA — watch ekShield stop a phishing attempt and approve a real transaction, in the same 20-minute walkthrough.",
};
