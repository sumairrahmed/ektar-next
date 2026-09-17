// Structured content for app/page.tsx, transcribed from PAGES.md §1 (v3).

export const hero = {
  statusText: "Digital security for banks",
  rotatorWords: ["the User", "the App", "the Device"],
  h1Lines: ["Stop fraud at every", "real entry point"],
  subhead:
    "Ektar protects the user, the device, and the app — Built by ex-bankers who've run the channels they now secure.",
  primaryCta: { label: "Book a demo", href: "/contact" },
  secondaryCta: { label: "See the suite", href: "#solutions" },
};

// The cycle3 tri-scene hero visual (DESIGN.md §4.1). Order must match
// hero.rotatorWords ("the User", "the App", "the Device") — HeroReel
// drives both the rotator text and this scene from one shared index.
export const heroScenes = [
  {
    label: "Protect the user",
    context: "Login attempt",
    verifiedTitle: "Customer verified",
    verifiedDetail: "Device-bound · no code sent",
    chips: [
      { text: "SMS OTP replay", flag: "blocked" },
      { text: "Call-centre impersonation", flag: "challenged" },
    ],
  },
  {
    label: "Protect the app",
    context: "Runtime check",
    verifiedTitle: "App verified",
    verifiedDetail: "No tampering detected",
    chips: [
      { text: "Overlay attack", flag: "blocked" },
      { text: "Remote access tool", flag: "suspended" },
    ],
  },
  {
    label: "Protect the device",
    context: "Session check",
    verifiedTitle: "Device bound",
    verifiedDetail: "Same phone · same SIM",
    chips: [
      { text: "SIM swap attempt", flag: "blocked" },
      { text: "Rooted device", flag: "denied" },
    ],
  },
];

// The trust suite — a single flat, numbered list (no tier grouping as of v4;
// the old "Live today / Shipping through 2026 / Building now" breakdown is gone)
export const trustSuite = {
  heading: "One suite. Seven products, one engine.",
  intro:
    "Each product is licensed on its own — deploy one or all seven, and the portals, APIs and SDKs behave the same either way. The whole suite runs inside your own infrastructure, with no runtime dependency on Ektar.",
  products: [
    { num: "01", name: "ekShield", role: "Authentication", description: "Replaces one-time codes with a login that can't be phished.", href: "/ekshield" },
    { num: "02", name: "ekProtect", role: "Device & app integrity", description: "Spots malware, fake screens, and compromised phones in real time.", href: "/ekprotect" },
    { num: "03", name: "ekBind", role: "SIM & network trust", description: "Catches a SIM swap before a transaction goes through.", href: "/ekbind" },
    { num: "04", name: "ekSign", role: "Document signing", description: "Signed documents that can't be altered after the fact, right inside your app.", href: "/eksign" },
    { num: "05", name: "ekKey", role: "Passkeys", description: "Login without a password at all, tied to the customer's own device.", href: "/ekkey" },
    { num: "06", name: "ekPulse", role: "Behavioural biometrics", description: "Learns how a real customer types and moves, and flags when it isn't them.", href: "/ekpulse" },
    { num: "07", name: "ekRules", role: "Risk decisioning", description: "Takes every signal above and makes one real-time call: allow, verify further, or block.", href: "/ekrules" },
  ],
};

export const proofStrip = [
  { k: "Live", v: "At 2 top-tier UAE banks" },
  { k: "Contracted", v: "With a top-3 Oman bank" },
  { k: "Secured", v: "Over 10 million authentications" },
  { k: "Aligned with", v: "CBUAE · RBI · SAMA · FIDO" },
];

export const hashTicker =
  "9c4e f17b a208 31dd 04af 7b21 e5c9 3f9a c2e1 88d0 5b6e a417 f0c3 92bb 7de4 1a58 · ecdsa p-256 · sha-256 · fido2 · device-bound";

// "How Ektar protects you" — three surface cards (replaces the old flat attack-surface grid)
export const surfaceGrid = {
  heading: "Three places fraud gets in. We close all three.",
  intro: "Every attack on a banking app is really an attack on one of three things — the customer, their phone, or the app itself.",
  surfaces: [
    {
      num: "user",
      label: "user",
      products: "ekShield · ekKey · ekPulse · ekSign",
      copy: "A login that can't be phished, copied, or intercepted — closing the door on stolen one-time codes and call-centre scams.",
      threats: ["Stolen SMS OTP", "Phishing and fake login pages", "Call-centre social engineering", "Deepfakes and synthetic identities"],
      href: "/protect-the-user",
    },
    {
      num: "device",
      label: "device",
      products: "ekBind · ekProtect · ekShield",
      copy: "Confirming it's really your customer's phone and number — catching a SIM swap or a hijacked session before money moves.",
      threats: ["SIM swap and re-issue", "Hijacked sessions", "Rooted and jailbroken phones"],
      href: "/protect-the-device",
    },
    {
      num: "app",
      label: "app",
      products: "ekProtect · ekPulse",
      copy: "Watching for malware, fake overlay screens, and tampering hiding inside the app itself.",
      threats: ["Fake overlay screens", "Malware inside the app", "Repackaging and tampering", "Debuggers and hooking", "Remote access tools"],
      href: "/protect-the-app",
    },
  ],
};

export const decisionEngineCallout =
  "One engine — ekRules — takes signals from all three and decides in real time: allow, verify further, or block.";

export const regulatorySection = {
  heading: "Regulators are ordering the upgrade",
  // Intro switched to "SMS OTP" in v4 — the four rows below still say "text
  // codes"/"Text-message codes" in the source and were NOT normalized
  // (PAGES.md §1.5). Don't "fix" the rows to match; it's an intentional,
  // non-uniform terminology split in the client's export.
  intro: "Across the Gulf, South Asia, and Southeast Asia, SMS OTP is being banned outright — with hard deadlines.",
  rows: [
    { market: "UAE", requirement: "Text and email codes banned. Banks must move to in-app verification and passkeys by March 2026." },
    { market: "Saudi Arabia", requirement: "Device-bound login required. Fines of up to SAR 5 million per breach." },
    { market: "India", requirement: "Banks can no longer rely on text codes alone for high-risk transactions." },
    { market: "Singapore & Philippines", requirement: "Text-message codes are being phased out for retail banking." },
  ],
};

export const statBand = {
  heading: "Fraud has outgrown yesterday's defences",
  stats: [
    { tag: "Data / 01", n: "$485B", label: "Lost to banking fraud", detail: "$485 billion lost to banking fraud in a single year." },
    { tag: "Data / 02", n: "93%", label: "Still on SMS OTP", detail: "93% of banks still rely on SMS OTP — the method regulators are banning." },
    { tag: "Data / 03", n: "+12x", label: "AI-generated fraud", detail: "AI-generated fraud is up more than 12x in the last year alone." },
  ],
};

export const closingCta = {
  heading: "Every bank in these markets has a deadline. Let's talk about yours.",
  cta: { label: "Book a demo", href: "/contact" },
};
