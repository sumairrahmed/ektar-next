// Transcribed from PAGES.md §9 (source: ekpulse.dc.html → /ekpulse) — NEW PAGE

export const hero = {
  statusText: "ekPulse · Protect the User & App",
  titleLine1: "The way someone",
  titleLine2: "types and",
  titleLine3: "moves is",
  titleEmphasis: "as unique as a fingerprint",
  description:
    "ekPulse learns how a genuine customer holds their phone, types, and swipes — then flags the moment those patterns don't match, even if every password and code was entered correctly.",
  badge: "Building now",
};

export const capabilities = {
  heading: "A signal a stolen credential can't fake",
  items: [
    { name: "Works silently in the background", detail: "No extra step for the customer — it learns from normal use of the app." },
    { name: "Catches what passwords can't", detail: "A stolen credential still won't behave like the real customer." },
    { name: "Covers both people and sessions", detail: "Flags a different person typing, and a remote-control tool moving the cursor in ways a human wouldn't." },
    { name: "Gets stronger with use", detail: "The more a genuine customer uses the app, the sharper the behavioural profile becomes." },
  ],
};

export const howItWorks = {
  heading: "A profile built from ordinary use",
  steps: [
    "The app observes typing rhythm, swipe pressure, and how the phone is held during normal use.",
    "Over time, this builds a behavioural profile unique to that customer.",
    "Every new session is compared against that profile in real time, and any mismatch is passed to ekRules as a signal.",
  ],
};

export const whyNow = {
  heading: "Continuous, not one-time",
  text: "Behavioural biometrics are increasingly cited by regulators, including SAMA and RBI, as an expected layer of continuous authentication, beyond a one-time login check.",
};

export const closing = { heading: "Ready to verify more than just a password?" };
