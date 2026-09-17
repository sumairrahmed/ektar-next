// Transcribed from PAGES.md §8 (source: ekkey.dc.html → /ekkey) — NEW PAGE

export const hero = {
  statusText: "ekKey · Protect the User",
  titleLine1: "Login without a password",
  titleLine2: "— or a code — at all",
  description:
    "ekKey replaces passwords and one-time codes with a passkey tied to the customer's own device — the same industry standard already used by major banks and tech platforms worldwide.",
};

export const capabilities = {
  heading: "A credential that can't be stolen, because it never travels",
  items: [
    { name: "No password to steal", detail: "There's nothing to phish, guess, or leak in a data breach — the credential never leaves the customer's device." },
    { name: "Built on FIDO2, not a proprietary standard", detail: "Works with passkey infrastructure customers may already use elsewhere." },
    { name: "One tap to log in", detail: "Face or fingerprint unlock replaces typing anything at all." },
    { name: "Fully device-bound", detail: "A passkey copied off the device is useless — it only works on the hardware it was created on." },
  ],
};

export const howItWorks = {
  heading: "Three steps, and nothing to type",
  steps: [
    "The customer's phone generates a unique cryptographic key pair on enrollment.",
    "The private key never leaves the device's secure hardware.",
    "Each login is signed with that key and verified instantly — no code to type, nothing to intercept.",
  ],
};

export const whyNow = {
  heading: "Written into the new rules",
  text: "Directly satisfies the passkey and device-bound login requirements now appearing in UAE, Saudi, and Malaysian banking regulation.",
};

export const closing = { heading: "Ready to remove the password entirely?" };
