# PAGES.md — Ektar Page Content & Layout (v4, verified from source)

All copy transcribed verbatim from the client's latest theme export. This supersedes v3. Referenced by `CLAUDE.md`. See `SITEMAP.md` for the route tree.

---

## What changed since v3 — read this first

This was a lighter pass than v2→v3: **no new pages or products, no IA changes.** 11 of 15 pages are byte-identical to v3 (About, ekShield, ekProtect, ekPulse, ekRules, ekSell, Blog, Careers, Contact, and both `/protect-the-app` and `/protect-the-device`). What changed:

- **Homepage's "trust suite" list is no longer tiered.** The old "Live today / Shipping through 2026 / Building now" three-panel breakdown is gone — now a single flat, numbered list of all 7 products. See §1.2.
- **Homepage hero visual scene order fixed** — now matches the rotator line's word order (User → App → Device). See §1.1.
- **Tier badges removed** from ekBind, ekKey, ekPulse, ekRules pages, and the tier-summary line removed from `/protect-the-user`. See each page below.
- **ekBind, ekKey, and ekSign got substantially richer hero visuals** — new illustrated/animated demonstrations of each product's actual mechanism. Full copy and structure in each page's section (§5, §8, §6 respectively); full animation detail in `DESIGN.md` §4.4–4.6.
- **Terminology standardized to "SMS OTP"** sitewide, replacing "text-message codes" (homepage, `/protect-the-user`).
- **Two stats updated:** homepage proof line "At a top-3 UAE bank" → "At 2 top-tier UAE banks"; About's and Investors' founder-tenure line now says "~100 years... in global banking and financial services" instead of naming the combined 78+ years at Standard Chartered specifically in that one line (Standard Chartered is still named elsewhere on both pages).

Everything else in this document — page order, all other copy, all unchanged pages — carries forward from v3 exactly. Where a page's section below doesn't mention a v4 change, assume it's identical to the v3 content already documented there.

---

## What changed since v2 (superseded by the above, kept for history)

- **The suite grew from 5 to 8 products.** New: **ekKey** (passkeys), **ekPulse** (behavioural biometrics), **ekRules** (risk decisioning engine). ekShield, ekProtect, ekBind, ekSign, ekSell all continue to exist.
- **Three new "surface" pages** sit between the homepage and individual products: `/protect-the-user`, `/protect-the-device`, `/protect-the-app` — each groups several products by which attack surface they defend.
- **New Investors page.**
- **The AI page (`/ai`) is gone.** Not in this export — treat as retired.
- **Careers page rewritten** — no longer a resume-upload form; now culture/pitch copy with a "Get in touch" CTA.
- **ekShield, ekProtect, ekSign, ekSell pages substantially rewritten** — see each page's section below for exactly what changed.
- **Homepage restructured end to end** — new hero visual, new "trust suite" tiered product listing, new "How Ektar protects you" surface-grid section, condensed regulatory section, updated stats.

---

## Global chrome (every page)

### Topbar navigation — see `SITEMAP.md` §2 for the full tree

Home · Protect the User (dropdown: ekShield, ekKey, ekSign, ekPulse) · Protect the Device (dropdown: ekBind, ekProtect, ekShield) · Protect the App (dropdown: ekProtect, ekPulse) · About · theme toggle · "Book a demo" (→ Contact).

A status pill sits near the logo, changing per page: "Systems live" (Home), "Since 2022" (About, Investors, Careers), "Session secured" (ekShield), "Device & app secured" (ekProtect), "SIM verified" (ekBind), "Signatures valid" (ekSign), "Founding platform" (ekSell), "Notes" (Blog), "Channel open" (Contact). ekKey/ekPulse/ekRules/the three surface pages show the default "Systems live" topbar pill but carry their own in-page status badge instead (see each page below).

### Footer (every page)

**Products** — ekShield · ekProtect · ekBind · ekSign · ekSell · ekKey · ekPulse · ekRules (8 items, up from 5)
**Company** — About us · Blog · Careers · Investors · Contact (AI removed, Investors added)
**Contact** — Talk to us · LinkedIn · YouTube

**Offices** — unchanged from v2: Singapore (18 Boon Lay Way #05-95 Tradehub 21, Singapore 609966) · UAE (Ektar Technologies LLC, 606, Latifa Towers, Near World Trade Center, Dubai, UAE) · India (Rattha Tek Meadows, Ground Floor, Tower A, No: 51, Rajiv Gandhi Salai, Sholinganallur, Chennai, Tamil Nadu 600119, India)

**Copyright:** © Ektar 2022–2026. All rights reserved. · **Legal:** Terms of Use · Privacy Policy

---

## 1. Home (`index.dc.html` → `/`)

### 1.1 Hero
- **Eyebrow:** "Digital security for banks"
- **Rotator line:** "Protect **the User** / **the App** / **the Device**" (unchanged mechanic — `DESIGN.md` §4)
- **H1:** "Stop fraud at every **real entry point**"
- **Subhead:** "Ektar protects the user, the device, and the app — Built by ex-bankers who've run the channels they now secure."
- **Primary CTA:** "Book a demo" → Contact
- **Secondary CTA:** "See the suite" → `#solutions` anchor
- **Hero visual:** the `cycle3` tri-scene cross-fade (`DESIGN.md` §4.1), **now in User → App → Device order** (fixed in this version to match the rotator line above it — was User → Device → App): "Protect the user" (Login attempt: Customer verified/Device-bound · no code sent; chips: SMS OTP replay blocked, Call-centre impersonation challenged) → "Protect the app" (Runtime check: App verified/No tampering detected; chips: Overlay attack blocked, Remote access tool suspended) → "Protect the device" (Session check: Device bound/Same phone · same SIM; chips: SIM swap attempt blocked, Rooted device denied)

### 1.2 The trust suite (id: `solutions`)
**Heading:** "One suite. Seven products, one engine."
**Intro:** "Each product is licensed on its own — deploy one or all seven, and the portals, APIs and SDKs behave the same either way. The whole suite runs inside your own infrastructure, with no runtime dependency on Ektar."

**No longer tiered — as of this version this is a single flat, numbered list**, `.solpanel`/`.sol`, same component pattern used on every other page's product listings (the old three-panel "Live today / Shipping through 2026 / Building now" breakdown with `.sp-head` tier headers is gone):

| # | Product | Role | Description |
|---|---|---|---|
| 01 | ekShield | Authentication | Replaces one-time codes with a login that can't be phished. |
| 02 | ekProtect | Device & app integrity | Spots malware, fake screens, and compromised phones in real time. |
| 03 | ekBind | SIM & network trust | Catches a SIM swap before a transaction goes through. |
| 04 | ekSign | Document signing | Signed documents that can't be altered after the fact, right inside your app. |
| 05 | ekKey | Passkeys | Login without a password at all, tied to the customer's own device. |
| 06 | ekPulse | Behavioural biometrics | Learns how a real customer types and moves, and flags when it isn't them. |
| 07 | ekRules | Risk decisioning | Takes every signal above and makes one real-time call: allow, verify further, or block. |

**ekSell is still not part of this list** — it remains a separate distribution product, listed in the footer but not here (matches its positioning as "Ektar's founding platform", distinct from the fraud-prevention suite).

### 1.3 Proof strip
- **Live** — **At 2 top-tier UAE banks** *(updated this version — was "At a top-3 UAE bank")*
- **Contracted** — With a top-3 Oman bank
- **Secured** — Over 10 million authentications
- **Aligned with** — CBUAE · RBI · SAMA · FIDO
- Decorative hex/crypto-term ticker beneath (unchanged): `ecdsa p-256 · sha-256 · fido2 · device-bound`

### 1.4 How Ektar protects you
**Heading:** "Three places fraud gets in. We close all three."
**Intro:** "Every attack on a banking app is really an attack on one of three things — the customer, their phone, or the app itself."

Three cards:

**Protect the user** — ekShield · ekKey · ekPulse · ekSign
> A login that can't be phished, copied, or intercepted — closing the door on stolen one-time codes and call-centre scams.
Threats listed: **Stolen SMS OTP** *(updated this version — was "Stolen text-message codes")* · Phishing and fake login pages · Call-centre social engineering · Deepfakes and synthetic identities
Link: "Open →" → `/protect-the-user`

**Protect the device** — ekBind · ekProtect · ekShield
> Confirming it's really your customer's phone and number — catching a SIM swap or a hijacked session before money moves.
Threats listed: SIM swap and re-issue · Hijacked sessions · Rooted and jailbroken phones
Link: "Open →" → `/protect-the-device`

**Protect the app** — ekProtect · ekPulse
> Watching for malware, fake overlay screens, and tampering hiding inside the app itself.
Threats listed: Fake overlay screens · Malware inside the app · Repackaging and tampering · Debuggers and hooking · Remote access tools
Link: "Open →" → `/protect-the-app`

**Callout — "One decision engine":** "One engine — ekRules — takes signals from all three and decides in real time: allow, verify further, or block."

### 1.5 Why now (regulatory)
**Heading:** "Regulators are ordering the upgrade"
**Intro:** "Across the Gulf, South Asia, and Southeast Asia, **SMS OTP** is being banned outright — with hard deadlines." *(updated this version — was "one-time codes sent by text")*

- **UAE.** Text and email codes banned. Banks must move to in-app verification and passkeys by **March 2026**.
- **Saudi Arabia.** Device-bound login required. Fines of up to SAR 5 million per breach.
- **India.** Banks can no longer rely on text codes alone for high-risk transactions.
- **Singapore & Philippines.** Text-message codes are being phased out for retail banking.

*(The section heading/intro switched to "SMS OTP" this version, but — checked precisely against the source — these four bullet points themselves still use "Text and email codes" / "text codes alone" / "Text-message codes", unchanged. The terminology standardization wasn't a full find-and-replace; don't over-correct these four lines to "SMS OTP" on your own, they're accurately transcribed as still using the older phrasing.)*

*(Also unchanged from v3: condensed to these four bullets vs. a six-market list on earlier versions — Malaysia is still absent from the homepage version, though it still appears on `/protect-the-device`, §12 below.)*

### 1.6 Why it matters (stat band)
**Heading:** "Fraud has outgrown yesterday's defences"

| # | Stat | Label | Detail |
|---|---|---|---|
| Data/01 | $485B | Lost to banking fraud | $485 billion lost to banking fraud in a single year. |
| Data/02 | 93% | **Still on SMS OTP** | 93% of banks still rely on **SMS OTP** — the method regulators are banning. |
| Data/03 | +12x | AI-generated fraud | AI-generated fraud is up more than 12x in the last year alone. |

*(Data/02's label and detail line switched from "text-message codes" to "SMS OTP" this version. $485B and +12x unchanged.)*

### 1.7 Closing CTA
"Every bank in these markets has a deadline. Let's talk about yours." → "Book a demo"

---

## 2. About (`about.dc.html` → `/about`)

Mostly unchanged from v2 (founders, advisory board, vision/mission all identical):

- **Status pill:** "Since 2022"
- **Eyebrow:** "Our story — Dubai · Singapore · Chennai"
- **H1:** "We think like bankers. We build like technologists."
- **Intro:** "Ektar was founded in 2022 by three experienced ex-bankers. We build digital security solutions for banking's digital channels — and we have lived inside the institutions we now serve, which means we understand the operational constraints, compliance requirements, and procurement realities that shape how banks actually adopt technology."
- **At a glance:** Founded 2022 · Founders: 3 ex-bankers · Markets: GCC · South Asia · SEA · Offices: Dubai · Singapore · Chennai. Sub-line: **"~100 years in global banking — we've run the channels we now secure."** *(updated this version — was "Standard Chartered leadership backgrounds — we have run the channels we now secure". The founders' Standard Chartered background is still named explicitly in each founder's own bio further down this page — only this one summary sub-line was generalized.)*

*(The v2 "Live, not theoretical" callout block has been removed.)*

**Vision:** "To make banking safer, smarter, and more trustworthy — for every bank, every channel, and every customer — until trust is no longer something people hope for, but something they simply expect from the banks they rely on each and every day."

**Mission:** "We build digital security products that close the three layers of vulnerability in banking's digital channels — protecting every device, every app, and every user interaction — so banks can serve their customers with confidence."

**Founders** (unchanged): Sandeep Bose (Co-Founder & CEO, 29 years Standard Chartered), Ramanathan Mullainathan (Co-Founder & CTO, 23 years IT leadership), Sethu Ramaswamy (Co-founder & CPO, 26 years Standard Chartered).

**Advisory board** (unchanged): A. D. Ganesh, Andrew Bainbridge, Suvo Sarkar, Vignesh Ramanujam — no duplicate entries.

### 2.1 New section — "Beyond banking"
- "Interested in joining us?" → **Careers** (`/join-us`)
- "Interested in investing in Ektar?" → **Get in touch** → **Investors** (`/investors`, not directly to Contact)

**Closing:** "Built by bankers, for bankers." → "Book a demo"

---

## 3. ekShield — Authentication (`authentication.dc.html` → `/ekshield`)

**Substantially rewritten from v2** — reframed around a business case rather than a security-architecture deep dive. The old "security architecture" hardware-chip section, PIN-policy/retry/lockout table, and hardware-backed-vs-PIN-only comparison table are **all removed**. Do not carry those over from the v2 documentation.

- **Status pill:** "Session secured"
- **Eyebrow:** "ekShield · Protect the User"
- **H1:** "Kill SMS OTP. Keep the login."
- **Description:** "No code to steal, no code to intercept. ekShield binds every login and transaction to the customer's own device — phishing-resistant, compliant with CBUAE, RBI, SAMA, BSP and MAS, and already live across mobile, web, call centre and 3DS at the UAE's 3rd largest bank."
- CTA: "Book a demo" · Back-link: "← All layers"

**Hero visual** (unchanged from v2): simulated transfer-approval flow — "Secure session · Ektar Bank · locked · 09:41", push notification, transfer detail card (AED 42,500.00 to Al Futtaim Trading LLC, account AE07····4412, Mobile banking), biometric hold-to-approve, "Transfer approved — Device-bound passkey · Verified · no OTP sent", reference TRF·88301, ECDSA P-256.

**Proof line:** Live — Securing logins at two tier-1 banks in the UAE. Contracted — Deployment underway at a top-3 Omani bank.

### 3.1 The business case — three reasons banks switch (new section)
01. **Reduce risk.** Closes the phishing, SIM-swap, and replay gaps that SMS OTP can't.
02. **Save cost.** Removes the per-message fee banks pay telecom operators on every SMS OTP, multiplied across millions of logins a month.
03. **Improve customer experience.** One tap on a trusted device, replacing a code that's slow, easy to mistype, and frustrating to wait for.

### 3.2 The breaking point — "SMS OTP is the weakest link in digital banking" (new section)
> Six digits, no binding, no encryption — and every way of stealing them already works at scale.

- **Account takeover.** SIM swap, SS7 exploits and overlay malware intercept the code before it reaches the customer.
- **Real-time phishing.** A code read aloud or typed into a fake screen reaches the attacker as fast as the customer.
- **Zero transaction binding.** One code approves any amount, to anyone — no link to what it authorized.
- **Regulatory bans.** CBUAE, SAMA, RBI, MAS and BSP have already outlawed it for high-risk transactions.
- **Approval fatigue.** Look-alike prompts with no number matching train customers to tap "approve" on anything.
- **Delivery & cost.** Carrier delays, dead zones and rising per-SMS fees erode trust and margin alike.

### 3.3 Capabilities — "Everything ekShield does" (8 items)
01. Stays inside your own infrastructure — every credential, key, and log lives on the bank's own servers, never on Ektar's.
02. Extra checks trigger automatically — step-up verification is driven directly by the bank's own fraud-risk score, not a fixed rule.
03. Works everywhere — mobile, web, ATM, cards, contact centre, and messaging, across Retail, Corporate, and SME, all on one platform.
04. Number matching — addresses approval fatigue by requiring the customer to match a number, not just tap approve.
05. Fully offline-capable, with silent registration and automatic key rotation running in the background.
06. Card-not-present coverage, scheme-agnostic across Visa, Mastercard, and domestic schemes.
07. Standalone white-label authenticator app, in addition to an embedded SDK.
08. Pull-based recovery — customers can view and act on any missed approval, right inside the app.

### 3.4 How it works (simplified to 3 steps)
01. On enrollment, the phone generates a rotating credential inside its own secure hardware chip.
02. Every login or approval is signed with that credential and expires the instant it's used — nothing can be captured and replayed.
03. Each approval is bound to the exact transaction it authorizes, so a stolen approval can't be reused for a different payment.

### 3.5 Why now
> Regulators are banning the old way of proving it's you — and fraud losses are mounting. UAE (CBUAE), Saudi Arabia (SAMA), India (RBI), Singapore (MAS), and the Philippines (BSP) have all banned or are phasing out SMS one-time codes as a standalone authentication method.

**Closing:** "Ready to retire SMS OTP?" — "Join the banks already live on device-bound MFA — watch ekShield stop a phishing attempt and approve a real transaction, in the same 20-minute walkthrough." → "Book a demo"

---

## 4. ekProtect — Device & App Integrity (`ekprotect.dc.html` → `/ekprotect`)

**Scope narrowed** — behavioural analysis and full malware tracking have moved to ekPulse; ekProtect no longer claims its own risk-decisioning output, that's explicitly ekRules' (or the bank's existing system's) job now.

- **Status pill:** "Device & app secured"
- **Eyebrow:** "ekProtect · Protect the Device & App"
- **H1:** "Attest the device. Read the behaviour. Kill the session."
- **Description:** "ekProtect embeds in the banking app. It attests device and app integrity, detects overlay attacks, malware, rooted devices, and remote access tools in real time, and suspends the session automatically when a threat is found. Every signal feeds into your risk decisioning — your existing system, or ekRules."
- CTA: "Book a demo" · Back-link: "← All layers"

**Hero visual** (marked "Illustrative", now labeled "→ Feeding ekRules"): App & device attestation "Pass", Overlay attack "Blocked", Remote access tool "Suspended", Rooted device "Denied". Caption: "Every detection here is sent to ekRules, alongside the user and device surfaces."

### 4.1 Capabilities — "What ekProtect detects and stops" (5 items, behavioural analysis removed)
01. Device & app attestation — confirms the app is genuine and unmodified, and the device is in a state the bank can trust.
02. Overlay attacks & basic malware detection — detects fake screens drawn over the real app and flags malicious code running alongside it, from inside the app itself. *(Reframed as "basic" — full malware tracking is now ekPulse's job.)*
03. Rooted and jailbroken devices — compromised operating systems are identified before a session is trusted.
04. Remote access tools (RATs) — detects sessions being driven remotely while the customer watches.
05. Automatic session suspension — when a threat is found the session is suspended automatically, no manual review in the path.

**Callout:** "Full malware tracking, elimination, and behavioural analysis run on ekPulse — see how →" *(cross-sell link to ekPulse — ekProtect and ekPulse now have a clear, explicit division of labor, don't blur it)*

### 4.2 Feeding the decision
**Heading:** "One signal, wherever your decisioning lives"
> ekProtect's device and app signals feed straight into your risk decisioning — plugging into the fraud and risk system you already run, or into ekRules if you'd rather bring every layer under one engine.

Inputs: User, device, and app signals ("every layer the bank deploys"). Output: "One real-time decision, made by your risk engine — existing system or ekRules" ("decisioned in the transaction path, not after the fact").

**Closing:** "See ekProtect catch a live threat." → "Book a demo"

---

## 5. ekBind — SIM & Network Trust (`ekbind.dc.html` → `/ekbind`)

Core mechanism and copy unchanged from v3. **This version's real change is visual:** the hero now leads with a new illustrated SVG diagram, and the old "Shipping 2026" status badge is gone.

- **Status pill:** "SIM verified"
- **Eyebrow:** "SIM binding · ekBind"
- **H1:** "Bind the account to the SIM. Catch the swap."
- **Description:** "ekBind verifies the SIM behind every session. Silent Network Authentication confirms the SIM directly with the mobile operator over the data connection — no code, no customer action. Reverse SMS proves possession of the SIM from the device itself. Both bind the account to a known SIM, so a swapped SIM or a moved number is caught before a transaction proceeds."
- **Badge:** none *(the "Shipping 2026" badge from the previous version is gone)*
- CTA: "Book a demo" · Back-link: "← All products"

**Background ledger visual** (unchanged): masked phone numbers across UAE/Oman/India/Singapore/Saudi/Bahrain, tagged with SIM hashes, one each tagged "sna verified · operator confirmed", "swap detected", "reverse sms · sent from device".

**Hero visual — NEW illustrated SIM/tower diagram** (`DESIGN.md` §4.4): a small animated SVG now sits above the existing checklist — a phone icon (SIM chip highlighted) on the left, a cell tower with pulsing broadcast-wave arcs on the right, connected by animated signal lines, labelled "SIM verified". Beneath it, the checklist is unchanged: Silent Network Authentication "Verified", Reverse SMS "Sent from device", SIM swap/port-out "None detected", Code sent to customer "None".

**How binding works** (unchanged, 3 items): 01. Silent Network Authentication · 02. Reverse SMS · 03. SIM-swap and port-out detection.

### 5.1 Why now (rewritten)
**Heading:** "Regulators are mandating device and SIM-level proof"
> Saudi Arabia's SAMA framework mandates device-bound credentials, and Malaysia's BNM RMiT 2026 mandates device binding for every licensed bank — SIM-swap and port-out checks are a core part of meeting that bar.

*(Malaysia is explicitly named here, even though it was dropped from the homepage's condensed regulatory list — §1.5. Keep it on this page.)*

**Closing:** "Bind every session to a verified SIM." → "Book a demo"

---

## 6. ekSign — Document Signing & Integrity (`eksign.dc.html` → `/eksign`)

**Substantially condensed from v2.** The old three-lettered signing-track breakdown (Track A/B/C with numbered steps each), the sequential/parallel/mixed signing-order table, the detailed "what the signature looks like" table, the "priority use cases" table, and the "authentication by signer type" table are **all removed and consolidated**. This page is now much shorter and punchier.

- **Status pill:** "Signatures valid"
- **Eyebrow:** "Document signing & integrity · ekSign"
- **H1:** "Signing inside your own channel. Proof that outlives the session."
- **Description:** "ekSign brings document signing back inside the bank. Customers sign in your own app or branded page — with the MFA they already use, and a signature that's cryptographically bound to the document so tampering is detectable forever."
- CTA: "Book a demo" · Back-link: "← All products"

**Background ledger visual** (unchanged): document types (mandate change, FATCA declaration, suitability form, etc.), one marked "signed · sha-256 sealed".

**Hero visual — execution status, now ANIMATED** (`DESIGN.md` §4.6 — new this version, was a static snapshot before): the card now plays through a real completion sequence rather than showing a fixed state. It starts at "2 of 3 signed" — Primary borrower Signed, Co-borrower Signed, Guarantor **Awaiting** — then animates to "**3 of 3 signed**" as the Guarantor row switches in place to **Signed**. Authentication: Bank MFA · national ID, unchanged. The seal line animates too: it cycles through three decoy hash values (`7d2x·91qz`, `c0e4·b8p1`, `4f7a·d3m2`) before settling on the real seal `SHA-256 a3f9·c2d1·e4b8` with a glow effect, dramatizing the seal "computing" and locking in. Build this as a real animated sequence, not a static end-state screenshot.

### 6.1 "Why banks move signing in-house" (unchanged from v2)
**Heading:** "A third-party portal breaks the journey and holds your record."
Same intro paragraph and same three-row problem framing (Experience / Identity / Custody & cost) as v2.

### 6.2 How it works — "Two capabilities, joined into one product" (rewritten, 4 bullets)
> Every signature is mathematically bound to the exact document and to a verified identity — so nothing about it can be faked, altered, or disputed later.

01. Tamper-evident by design — alter one character after signing, and verification fails immediately.
02. Bound to a verified identity — the bank's existing MFA fires at the moment of signing, so the signature is tied to a real, verified customer.
03. Non-customers verified too — guarantors and co-applicants sign using national digital ID, no bank account or new app required.
04. One complete audit record — every signature, chained to the ones before it, held entirely on the bank's own systems.

### 6.3 Who can sign, and how (new, replaces the old three-track breakdown)
**Heading:** "One customer, many parties, one process"

01. **A single customer** — a push notification, a review inside the banking app, and one authentication step, the same MFA already used for transfers.
02. **Multiple signatories** — loan agreements, joint accounts, and mandate changes often need more than one signature. ekSign supports signing in sequence, in parallel, or a mix of both; the bank's workflow decides the order.
03. **Guarantors and other non-customers** — a secure link sent from the bank's own domain, opened on a bank-branded page, verified with national digital ID, no bank account or app required.

### 6.4 ekSign vs. a third-party portal (condensed to 4 rows, was 8 in v2)

| Third-party e-signature platform | ekSign |
|---|---|
| Customer redirected to another brand's portal | Customer signs inside your own app or branded page |
| Authenticated by vendor SMS OTP or email | Authenticated by the bank's own MFA, or national digital ID |
| Audit trail held by the vendor — the bank is a tenant | Full audit trail owned and held by the bank |
| Fixed per-envelope licence fee | Marginal cost per signing event, on infrastructure the bank already runs |

**Closing:** "Replace a recurring licence with a capability you own." → "Book a demo"

---

## 7. ekSell — Distribution (`eksell.dc.html` → `/eksell`)

**Substantially fleshed out from v2**, where it was the thinnest page in the export. Scope explicitly broadened to include insurance products, not just banking products.

- **Status pill:** "Founding platform"
- **Eyebrow:** "Distribution · ekSell"
- **H1:** "Bank and insurance products, in the places customers already are" *(was banking-only framing in v2)*
- **Description:** "ekSell connects banks and insurers to the retailers, employers, and platforms people already use — so a customer can apply for a card, account, or policy through a channel they already trust, instead of only through the bank's own website or a sales agent."
- **Badge:** "Live"
- CTA: "Book a demo" · Back-link: "← All products"

**Background ledger visual** (unchanged): channel partners (employer payroll, fintech wallet, retail chain, telco bundle, marketplace lending, insurance broker, etc.), one marked "connected · distributing".

**Hero visual** (unchanged): Bank → Digital products → Channels fan-out — Employers/Fintechs/Retailers all "Connected".

### 7.1 How it works — "One connection, many channels" (new section)
01. **Banks and insurers connect via API** — credit cards, accounts, mortgages, and insurance products all flow through the same connection.
02. **Channel partners reach their own customers** — retailers, employers, and associations offer these products through their own app, website, email, or in-store QR code, no separate build required on their side.
03. **Applications happen inside a channel people already trust** — a customer applies through a retailer's app or an employer's benefits portal, not a cold digital ad or an unfamiliar bank sign-up page.

### 7.2 Why banks use it — "A cheaper, safer way to reach new customers" (new section)
01. **Lower cost per new customer** — compared to direct sales agents and paid digital acquisition.
02. **Less exposure handling customer data in the field** — a channel partner's own app handles the interaction, not a door-to-door agent.
03. **Reaches customers earlier in their decision** — through a channel they already use daily, not only when they think to visit a bank's website.

**Closing:** "Take your products to new channels." → "Book a demo"

---

## 8. ekKey — Passkeys (`ekkey.dc.html` → `/ekkey`) — unchanged content from v3 except badge/hero visual

- **Eyebrow:** "ekKey · Protect the User"
- **H1:** "Login without a password — or a code — at all"
- **Description:** "ekKey replaces passwords and one-time codes with a passkey tied to the customer's own device — the same industry standard already used by major banks and tech platforms worldwide."
- **Badge:** none *(the "Shipping 2026" badge from the previous version is gone)*
- CTA: "Book a demo"

**Hero visual — NEW three-scene device-binding demo** (`DESIGN.md` §4.5 — replaces the old two-state "Verifying it's you… → Signed in" visual entirely):
1. **"This device"** — key icon glowing/active, caption "Passkey active · signs in instantly"
2. **"Copied to another device"** — the same key icon shaking with a red X badge, caption "Rejected · not the enrolled hardware"
3. **"Device-bound by design"** — shield-checkmark icon, caption "A stolen passkey file is worthless"

### 8.1 Capabilities — "A credential that can't be stolen, because it never travels"
- **No password to steal** — there's nothing to phish, guess, or leak in a data breach; the credential never leaves the customer's device.
- **Built on FIDO2, not a proprietary standard** — works with passkey infrastructure customers may already use elsewhere.
- **One tap to log in** — face or fingerprint unlock replaces typing anything at all.
- **Fully device-bound** — a passkey copied off the device is useless; it only works on the hardware it was created on.

### 8.2 How it works — "Three steps, and nothing to type"
01. The customer's phone generates a unique cryptographic key pair on enrollment.
02. The private key never leaves the device's secure hardware.
03. Each login is signed with that key and verified instantly — no code to type, nothing to intercept.

### 8.3 Why now — "Written into the new rules"
> Directly satisfies the passkey and device-bound login requirements now appearing in UAE, Saudi, and Malaysian banking regulation.

**Closing:** "Ready to remove the password entirely?" → "Book a demo"

---

## 9. ekPulse — Behavioural Biometrics (`ekpulse.dc.html` → `/ekpulse`) — unchanged from v3

- **Eyebrow:** "ekPulse · Protect the User & App" *(the only product page explicitly tagged with two surfaces in its own eyebrow)*
- **H1:** "The way someone types and moves is as unique as a fingerprint"
- **Description:** "ekPulse learns how a genuine customer holds their phone, types, and swipes — then flags the moment those patterns don't match, even if every password and code was entered correctly."
- **Badge:** none *(the "Building now" badge from the previous version is gone — this is the only change on this page; everything else, including the animation set, is byte-identical to v3)*
- CTA: "Book a demo"

**Hero visual:** "Continuous behaviour check" — "Pattern matched" / "Reviewing signal…"

### 9.1 Capabilities — "A signal a stolen credential can't fake"
- **Works silently in the background** — no extra step for the customer; it learns from normal use of the app.
- **Catches what passwords can't** — a stolen credential still won't behave like the real customer.
- **Covers both people and sessions** — flags a different person typing, and a remote-control tool moving the cursor in ways a human wouldn't.
- **Gets stronger with use** — the more a genuine customer uses the app, the sharper the behavioural profile becomes.

### 9.2 How it works — "A profile built from ordinary use"
01. The app observes typing rhythm, swipe pressure, and how the phone is held during normal use.
02. Over time, this builds a behavioural profile unique to that customer.
03. Every new session is compared against that profile in real time, and any mismatch is passed to ekRules as a signal.

### 9.3 Why now — "Continuous, not one-time"
> Behavioural biometrics are increasingly cited by regulators, including SAMA and RBI, as an expected layer of continuous authentication, beyond a one-time login check.

**Closing:** "Ready to verify more than just a password?" → "Book a demo"

---

## 10. ekRules — Risk Decisioning (`ekrules.dc.html` → `/ekrules`) — unchanged from v3 except badge removed

The explicit "decision engine" every other product and surface page now points to.

- **Eyebrow:** "ekRules · All three surfaces"
- **H1:** "Every signal, one decision, in real time"
- **Description:** "ekRules takes every signal from the user, device, and app — a login, a SIM check, a tamper flag — and makes one call in milliseconds: allow, verify further, or block."
- **Badge:** none *(the "Building now" badge from the previous version is gone — this is the only change on this page)*
- CTA: "Book a demo"

**Hero visual — "Every signal, one verdict":** User → Device → App all feed into ekRules → three possible outputs: Allow / Verify / Block.

### 10.1 Capabilities — "The layer that turns signals into decisions"
- **One engine, not seven silos** — every product's signal lands in the same place, so nothing gets decided in isolation.
- **Real-time, not batch** — the decision happens in the moment a transaction or login is attempted.
- **Three outcomes, not just yes/no** — allow, step up to further verification, or block, matching the actual risk.
- **Tunable by your own risk team** — rules and thresholds are configured by the bank, not fixed by Ektar.

### 10.2 How it works — "Signals in, one verdict out"
01. Every surface — user, device, app — continuously sends signals as they're generated.
02. ekRules evaluates all of them together against your bank's own risk policy.
03. A verdict is returned in milliseconds, and where applicable, handed to ekSign to create a permanent, signed record of that decision. *(A real, specific cross-product integration claim — ekRules' verdicts can trigger an ekSign record. Preserve this connection if building any kind of product-relationship diagram.)*

### 10.3 Why now — "Static rules are no longer enough"
> Regulators increasingly expect real-time, risk-based decisioning rather than static rules — this is the layer that makes every other product's signal actually actionable.

**Closing:** "Ready to make every signal count?" → "Book a demo"

---

## 11. Protect the User (`protect-the-user.dc.html` → `/protect-the-user`)

- **Eyebrow:** "Protect the User"
- **H1:** "The person is often the easiest way in. We close that door."
- **Description:** "Fraud rarely breaks through a bank's systems — it goes around them, through a phished login, a stolen code, or a convincing fake. These products make the person themselves the hardest part to fool."
- **Tier summary line:** none *(removed this version — was "ekShield — live today · ekKey, ekSign — shipping through 2026 · ekPulse — building now")*
- CTA: "Book a demo"

**Hero visual** — two mini panels: **ekShield** (Login attempt: Customer verified/Device-bound · no code sent; chips: SMS OTP replay blocked, Call-centre impersonation challenged) and **ekPulse** (Behaviour check: Behaviour verified/Typing pattern matched; chips: Session takeover flagged, Synthetic identity challenged).

### 11.1 The threats — "Four ways fraud targets the person, not the system"
- **Stolen SMS OTP** *(updated this version — was "Stolen text-message codes")* — the most exploited method in retail banking today. *Now banned across five markets*
- **Phishing and fake login pages** — designed to look identical to the real thing. *Credential capture*
- **Call-centre social engineering** — a convincing voice, not a broken system. *Human channel*
- **Deepfakes and synthetic identities** — AI-generated voices and faces, up over 12x in the past year. *Fastest-growing vector*

### 11.2 The products — "Four products that protect the person"
01. **ekShield** — Authentication. Replaces one-time codes with a login that can't be phished — device-bound, working across mobile, web, call centre, ATM, and 3DS.
02. **ekKey** — Passkeys. Login without a password at all, using the industry-standard FIDO2 passkey tied to the customer's own device.
03. **ekSign** — Document signing. Signs banking documents against an identity the suite has already proven, so a signed record can't be altered after the fact.
04. **ekPulse** — Behavioural biometrics. Learns how a real customer types and moves, so it can flag the moment someone else is in control.

**Callout — "One decision engine":** "Every signal from this page — a login, a signature, a typing pattern — feeds into ekRules alongside the device and app surfaces. One engine decides in real time: allow, verify further, or block."

### 11.3 Why now
**Heading:** "Regulators are banning the old way of proving it's you"
> UAE (CBUAE), Saudi Arabia (SAMA), India (RBI), Singapore (MAS), and the Philippines (BSP) have all banned or are phasing out SMS one-time codes as a standalone authentication method.

**Closing:** "Ready to close the door on stolen logins?" → "Book a demo"

---

## 12. Protect the Device (`protect-the-device.dc.html` → `/protect-the-device`) — byte-identical to v3

- **Eyebrow:** "Protect the Device"
- **H1:** "A stolen password is useless without the right phone. We make sure it stays that way."
- **Description:** "A SIM swap, a rooted phone, or a hijacked session can undo even a strong login. These products prove it's still the customer's own device."
- CTA: "Book a demo"

**Hero visual — "Device attestation", six checks all "✓ verified":** SIM binding · Network match · Platform integrity · Root/jailbreak check · Persistent device binding · Reinstall detection. Caption: "Verified continuously · no action needed."

### 12.1 The threats — "Four ways fraud takes over the device itself"
- **SIM swap and re-issue** — a criminal takes over the customer's phone number. *Network layer*
- **Hijacked sessions** — a session continues on hardware it was never meant to. *Session layer*
- **Rooted and jailbroken phones** — the phone's own protections are disabled. *Platform layer*
- **Overlay attacks** — a fake screen drawn over the real app to capture credentials. *Runtime layer*

### 12.2 The products — "Three products that prove the device"
01. **ekBind** — SIM & network trust. Confirms the SIM is still the one the customer enrolled with, catching a swap or re-issue before a transaction goes through.
02. **ekProtect** — Device integrity. Detects rooted or jailbroken phones and platform-level tampering in real time.
03. **ekShield** — Authentication. Also binds the login itself to the enrolled device, closing the gap a stolen credential alone can't get through.

**Callout — "One decision engine":** "Every signal from this page — a SIM check, a device-integrity read — feeds into ekRules alongside the user and app surfaces. One engine decides in real time: allow, verify further, or block."

### 12.3 Why now
**Heading:** "Regulators are mandating device-level proof"
- **Saudi Arabia.** The SAMA framework mandates FIDO2 device-bound credentials, with penalties up to SAR 5 million per breach.
- **Malaysia.** BNM RMiT 2026 mandates device binding for every licensed bank.

**Closing:** "Ready to stop trusting the device by default?" → "Book a demo"

---

## 13. Protect the App (`protect-the-app.dc.html` → `/protect-the-app`) — byte-identical to v3

- **Eyebrow:** "Protect the App"
- **H1:** "Assume the app is already being tampered with. We catch it while it's happening."
- **Description:** "Malware doesn't need to break in from outside — it can run right alongside a legitimate banking app. We watch the app itself, while it's running, not just at install."
- CTA: "Book a demo"

**Hero visual — "Runtime integrity scan"**, a terminal-style checklist, all clear/none:
`binary_integrity ····· clear` · `debugger_hook ········ clear` · `overlay_scan ·········· clear` · `malware_signature ····· none` · `code_integrity ········ clear` · `deny_list_check ······· clear`
Caption: "Scanning continuously · in real time."

### 13.1 The threats — "Three ways fraud gets inside the app"
- **Malware running alongside a trusted app** — invisible to the customer. *Runtime layer*
- **Repackaging and tampering** — a modified copy of the real app. *Binary layer*
- **Remote access tools** — a criminal quietly controlling the session while the customer watches. *Session layer*

### 13.2 The products — "Two products that defend the app itself"
01. **ekProtect** — Runtime & app integrity. Detects tampering, repackaging, and malware running inside the app itself, in real time.
02. **ekPulse** — Behavioural signals. Adds an extra layer of app-level behavioural signal to catch what integrity checks alone might miss.

**Callout — "One decision engine":** "Every signal from this page — an integrity check, a tamper flag — feeds into ekRules alongside the user and device surfaces. One engine decides in real time: allow, verify further, or block."

### 13.3 Why now
**Heading:** "Regulators now require real-time app defence"
- **UAE.** CBUAE Notice 3057 requires real-time malware session suspension.
- **Saudi Arabia.** The SAMA framework requires real-time fraud monitoring at the app layer.

**Closing:** "Ready to stop assuming your app is safe?" → "Book a demo"

---

## 14. Investors (`investors.dc.html` → `/investors`) — unchanged except founder-tenure line

- **Status pill:** "Since 2022"
- **H1:** "Investors"
- **Sub-heading:** "Banking fraud is a large, urgent, and solvable problem"
- **Intro:** "Regulators across the Gulf, South Asia, and Southeast Asia are actively banning the authentication methods banks rely on today, on hard deadlines. Ektar is already live at a top-3 regional bank, with the rest of a seven-product suite shipping through 2026 and beyond."
- CTA: "Get in touch"

### 14.1 Why now
**Heading:** "The old defences are being phased out by regulation, not choice"
> SMS one-time codes — the method most banks still rely on — are being banned outright across multiple markets, on fixed deadlines. That regulatory pressure is forcing a wave of infrastructure replacement across the region's banks.

### 14.2 The team
**Heading:** "Three ex-bankers, decades inside the institutions we now serve"
> Our founders bring **~100 years of combined leadership in global banking and financial services**, across consumer banking, technology, and product leadership. Our advisory board includes former senior executives from Emirates NBD, Standard Chartered, and experienced venture investors.

*(Updated this version — was "Our founders spent a combined 78+ years in senior roles at Standard Chartered Bank..." The advisory-board sentence is unchanged. This mirrors the same rewording applied to About's founder-tenure sub-line, §2.)*

**Closing:** "Interested in investing in Ektar? Get in touch to start the conversation." → "Get in touch"

*(No pitch deck, financials, or funding-round details are in this export — this is a relationship-starting page, not a data room. Don't fabricate figures.)*

---

## 15. Blog (`blog.dc.html` → `/blog`) — unchanged from v2

Still honestly placeholder. Same copy as v2: "Notes on fraud, devices, and regulation." / three "What we write about" categories (Fraud tactics — Analysis, Regulation and deadlines — Briefings, Engineering notes — Practice) / explicit "Posts are placeholders until real entries are published" with three placeholder cards. **Still build the placeholder state, don't invent posts.**

---

## 16. Careers (`careers.dc.html` → `/join-us`) — REWRITTEN, no longer a form

**The v2 resume-upload application form is gone entirely.** This is now a culture/pitch page with no form fields at all — confirmed by checking the raw source for any `<form>`, file-upload, or resume-related markup (none found).

- **Eyebrow:** "Careers · Since 2022"
- **H1:** "Build the security layer banks actually need"
- **Description:** "We're a small team of ex-bankers and engineers building the products we wished existed when we worked inside these institutions. If you want your work running in production at real banks, not stuck in a pilot, this is that kind of place."
- CTA: "Get in touch"

### 16.1 Why this matters
**Heading:** "Fraud at scale is a solvable problem, and we're solving it"
> Banking fraud isn't a rare edge case — it's a structural gap in how most digital channels were built. The work here goes directly into stopping it, at institutions with millions of real customers.

### 16.2 Culture — "Small team, real customers, fast decisions"
01. **Founder-led, not committee-run** — our founders spent decades inside the banks we now serve; decisions move fast because we've lived the problem, not guessed at it.
02. **Your work ships** — products go into production at real banks, not just a pitch deck.
03. **Based across three hubs** — Dubai, Singapore, and Chennai — a small, connected team rather than a large distributed one.

**Closing:** "Don't see an open role that fits? We're growing steadily — reach out and tell us what you'd bring." → "Get in touch"

*(Both CTAs on this page say "Get in touch", not "Book a demo" — the only page in the export where the primary CTA language changes; port that distinction, don't normalize it to "Book a demo".)*

---

## 17. Contact (`contact.dc.html` → `/contact`) — unchanged from v2

- **Status pill:** "Channel open"
- **Eyebrow:** "Average response under 24 hours"
- **H1:** "Let's talk about your fraud gaps."
- **Intro:** "Tell us where fraud is hitting you — the login, the app, or the document — and we'll show you what closes it."
- **Quick contact:** customer@ektar.com · Dubai · Singapore · Chennai (3 offices) · "Demo request — Under 24h — Tell us which layer is hurting — login, app, SIM or document"
- **Form ("Request a demo"):** Name · Email · Phone Number · Company Name · Message · Submit
- Offices repeated with full addresses (UAE, Singapore, India) plus email.

This remains the destination for every "Book a demo" CTA site-wide, **and** for Careers' and Investors' own "Get in touch" buttons (both confirmed pointing at `contact.dc.html`). One exception: About's "Interested in investing in Ektar? → Get in touch" link points at `investors.dc.html`, not directly at Contact — About's "Interested in joining us? → Careers" link points at `careers.dc.html` as expected.
