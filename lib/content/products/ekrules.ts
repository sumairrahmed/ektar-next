// Transcribed from PAGES.md §10 (source: ekrules.dc.html → /ekrules) — NEW PAGE
// The explicit "decision engine" every other product/surface page points to.

export const hero = {
  statusText: "ekRules · All three surfaces",
  titleLine1: "Every signal, one decision,",
  titleEmphasis: "in real time",
  description:
    "ekRules takes every signal from the user, device, and app — a login, a SIM check, a tamper flag — and makes one call in milliseconds: allow, verify further, or block.",
};

export const capabilities = {
  heading: "The layer that turns signals into decisions",
  items: [
    { name: "One engine, not seven silos", detail: "Every product's signal lands in the same place, so nothing gets decided in isolation." },
    { name: "Real-time, not batch", detail: "The decision happens in the moment a transaction or login is attempted." },
    { name: "Three outcomes, not just yes/no", detail: "Allow, step up to further verification, or block — matching the actual risk." },
    { name: "Tunable by your own risk team", detail: "Rules and thresholds are configured by the bank, not fixed by Ektar." },
  ],
};

export const howItWorks = {
  heading: "Signals in, one verdict out",
  steps: [
    "Every surface — user, device, app — continuously sends signals as they're generated.",
    "ekRules evaluates all of them together against your bank's own risk policy.",
    "A verdict is returned in milliseconds, and where applicable, handed to ekSign to create a permanent, signed record of that decision.",
  ],
};

export const whyNow = {
  heading: "Static rules are no longer enough",
  text: "Regulators increasingly expect real-time, risk-based decisioning rather than static rules — this is the layer that makes every other product's signal actually actionable.",
};

export const closing = { heading: "Ready to make every signal count?" };
