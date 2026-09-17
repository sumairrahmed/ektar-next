// Transcribed from PAGES.md §11 (source: protect-the-user.dc.html → /protect-the-user)
import type { CycleScene } from "@/components/HeroCycle";

export const hero = {
  statusText: "Protect the User",
  titleLine1: "The person is often the",
  titleLine2: "easiest way in.",
  titleEmphasis: "We close that door.",
  description:
    "Fraud rarely breaks through a bank's systems — it goes around them, through a phished login, a stolen code, or a convincing fake. These products make the person themselves the hardest part to fool.",
};

export const heroScenes: CycleScene[] = [
  {
    label: "ekShield",
    context: "Login attempt",
    verifiedTitle: "Customer verified",
    verifiedDetail: "Device-bound · no code sent",
    chips: [
      { text: "SMS OTP replay", flag: "blocked" },
      { text: "Call-centre impersonation", flag: "challenged" },
    ],
  },
  {
    label: "ekPulse",
    context: "Behaviour check",
    verifiedTitle: "Behaviour verified",
    verifiedDetail: "Typing pattern matched",
    chips: [
      { text: "Session takeover", flag: "flagged" },
      { text: "Synthetic identity", flag: "challenged" },
    ],
  },
];

export const threats = {
  heading: "Four ways fraud targets the person, not the system",
  items: [
    { name: "Stolen SMS OTP", detail: "The most exploited method in retail banking today.", tag: "Now banned across five markets" },
    { name: "Phishing and fake login pages", detail: "Designed to look identical to the real thing.", tag: "Credential capture" },
    { name: "Call-centre social engineering", detail: "A convincing voice, not a broken system.", tag: "Human channel" },
    { name: "Deepfakes and synthetic identities", detail: "AI-generated voices and faces, up over 12x in the past year.", tag: "Fastest-growing vector" },
  ],
};

export const products = {
  heading: "Four products that protect the person",
  items: [
    { num: "01", name: "ekShield", role: "Authentication", description: "Replaces one-time codes with a login that can't be phished — device-bound, working across mobile, web, call centre, ATM, and 3DS.", href: "/ekshield" },
    { num: "02", name: "ekKey", role: "Passkeys", description: "Login without a password at all, using the industry-standard FIDO2 passkey tied to the customer's own device.", href: "/ekkey" },
    { num: "03", name: "ekSign", role: "Document signing", description: "Signs banking documents against an identity the suite has already proven, so a signed record can't be altered after the fact.", href: "/eksign" },
    { num: "04", name: "ekPulse", role: "Behavioural biometrics", description: "Learns how a real customer types and moves, so it can flag the moment someone else is in control.", href: "/ekpulse" },
  ],
};

export const decisionEngineText =
  "Every signal from this page — a login, a signature, a typing pattern — feeds into ekRules alongside the device and app surfaces. One engine decides in real time: allow, verify further, or block.";

export const whyNow = {
  heading: "Regulators are banning the old way of proving it's you",
  market: "UAE (CBUAE), Saudi Arabia (SAMA), India (RBI), Singapore (MAS), and the Philippines (BSP)",
  requirement: "have all banned or are phasing out SMS one-time codes as a standalone authentication method.",
};

export const closing = { heading: "Ready to close the door on stolen logins?" };
