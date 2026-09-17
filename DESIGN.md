# DESIGN.md — Ektar Design System (v4, verified from source)

Read directly from the client's latest theme export (`Copy_of_ektar_com_Website_Design_160926.zip`). This supersedes v3 — the token system is **still unchanged** (confirmed byte-identical `styles.css` across v2, v3, and v4), and 11 of the 15 pages are **byte-identical** to v3 (about, authentication, blog, careers, contact, ekprotect, ekpulse, ekrules, eksell, protect-the-app, protect-the-device — plus `site.js`/`support.js`/`image-slot.js`). What changed is concentrated in the homepage and three product pages that got richer hero visuals, plus a sitewide copy polish. Referenced by `CLAUDE.md`.

---

## 0. What changed since v3 (read this first if you already built against v3)

- **Homepage hero visual reordered.** The `cycle3` tri-scene sequence now plays User → App → Device, matching the rotator line's own word order exactly (it was User → Device → App in v3 — a mismatch that's now fixed). Pure content-order change, no new CSS.
- **Homepage's tiered product list is gone.** The "Live today / Shipping through 2026 / Building now" three-panel breakdown with `.sp-head` tier headers is replaced by a single flat, numbered `.solpanel` list of all seven products (01–07) — same pattern already used elsewhere. See §6.
- **Tier badges removed** from ekBind, ekKey, ekPulse, ekRules product pages, and the tier-summary line removed from `/protect-the-user`. The per-product "Shipping 2026"/"Building now" pills are gone; each page's own status pill (e.g. "SIM verified") is now the only status signal on that page. Confirm with the client whether this is a deliberate move away from roadmap-stage framing before building any "coming soon" UI around these products.
- **Three product pages got substantially richer, newly-animated hero visuals** — ekBind, ekKey, and ekSign. Each is now a small illustrated/animated demo of the product's actual mechanism, not a static state snapshot. Full detail in §4.4–4.6.
- **Sitewide terminology standardized to "SMS OTP"**, replacing "text-message codes" / "one-time codes sent by text" wherever that softer phrasing previously appeared (homepage, `/protect-the-user`). ekShield's own page already used "SMS OTP" exclusively — this pass just brought the rest of the site in line with it. Use "SMS OTP" as the standard term going forward.
- **Two proof-point figures updated:** homepage "Live — At a top-3 UAE bank" → **"At 2 top-tier UAE banks"**; About's and Investors' founder-tenure line ("29+23+26 years ≈ 78+ years at Standard Chartered") → **"~100 years... in global banking and financial services"** (generalized away from naming Standard Chartered specifically in that one line — the founders' Standard Chartered background is still named explicitly elsewhere on both pages, this was not scrubbed sitewide).
- **Correction to this documentation's own prior gap:** v3's `DESIGN.md` only ever inspected `index.dc.html`'s `<style>` block for the animation catalog. Every page carries its own local `<style>` block with its own keyframes — §4 below now catalogs animations per page, not just the homepage's.

---

## 0.1 What changed since v2 (superseded by the above, kept for history)

- **Navigation restructured** from a flat list of product links into a 3-way mega-dropdown, organized by *surface* (Protect the User / Protect the Device / Protect the App) rather than by product. `site.js` changed to match — see §5.3.
- **One new keyframe animation**: `cycle3` (§5.1) — the homepage hero's product visual is now a cross-fading three-scene sequence, not the old numbered product list.
- **Three new pages**: ekKey, ekPulse, ekRules (new products) — see `PAGES.md`.
- **Three new "surface" pages**: `protect-the-user`, `protect-the-device`, `protect-the-app` — category pages sitting between the homepage and individual product pages.
- **New Investors page.**
- **The AI page is gone** — not in this export. Treat `/ai` as retired; don't rebuild it.
- **Careers page rewritten** — no longer a form; now a culture/pitch page. See `PAGES.md`.
- Colors, type, spacing, radius, shadows: **no change** — everything in §1–4 below is identical to v2.

---

## 1. Color tokens — unchanged from v2

Source: `_ds/modernist-e24f7682-45d3-44d7-95f7-6ac30dfcadde/styles.css`, confirmed identical byte-for-byte to the previous export.

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#f3f2f2` | Warm off-white — light-mode ground |
| `--color-surface` | `#eae9e9` | Cards, inputs |
| `--color-text` | `#201e1d` | Near-black ink — light-mode text |
| `--color-accent` | `#ec3013` | The one brand accent |
| `--color-accent-2` | `#e15b47` | Secondary accent |
| `--color-divider` | `color-mix(in srgb, #201e1d 40%, transparent)` | Hairline rule |

Neutral ramp (100→900): `#f8f4f4 · #eae7e7 · #d7d3d3 · #bab6b6 · #9b9797 · #7d7979 · #605d5d · #444141 · #2d2b2b`

Accent ramp (100→900): `#fff2ef · #ffe0d9 · #ffc4b8 · #ff9783 · #ff563c · #dd2b0f · #ae1800 · #7c1405 · #4d170e`
Accent-2 ramp (100→900): `#fff2ef · #ffe0da · #ffc4b9 · #ff9784 · #ef6853 · #c94b39 · #9e3526 · #71261b · #471d16`

Shadows: `--shadow-sm 0 1px 2px`, `--shadow-md 0 3px 10px`, `--shadow-lg 0 12px 32px`, all `color-mix(in srgb, #2d2b2b N%, transparent)` — ink-tinted, not pure black.

---

## 2. The dark/light inversion — unchanged mechanism

Still the same token-swap, not a separate palette:

```css
:root { --ink: var(--color-text); --paper: var(--color-bg); }
body { background: var(--ink); color: var(--paper); }   /* dark by default */

html[data-theme="light"] {
  --ink: var(--color-bg); --paper: var(--color-text);
  --accent-lt: var(--color-accent-700);                  /* darker accent on light ground */
}
```

Default (dark, no attribute): `--accent-lt` = `--color-accent-400` (`#ff9783`). Light mode: `--color-accent-700` (`#ae1800`). Persisted to `localStorage['ektar-theme']`. See `CLAUDE.md` for the port approach — build this as a semantic-token flip in Tailwind, not two parallel color sets.

---

## 3. Typography and layout — unchanged

Poppins (300–800), both heading and body. Hard `0px` border-radius everywhere — still true, still deliberate, still the single most distinctive visual choice in the system. `.wrap` container at `max-width:1280px`. Full scale detail in the v2 doc's §3–4 stands unchanged; the short version:

| Element | Size | Weight |
|---|---|---|
| `.display` (hero H1) | `clamp(38px,5vw,70px)` | 700 |
| `.protect` (rotator line) | `clamp(26px,3vw,40px)` | 600 |
| `.sub` (hero subhead) | 17.5px | 400 |
| `.mono` (eyebrows/labels) | inherits | — `letter-spacing:.12em; text-transform:uppercase` |
| Body | 15px | 400 |

---

## 4. Animation catalog

**Correction from v3:** the earlier version of this document only ever inspected `index.dc.html`'s own `<style>` block. Every page in the export carries its own local `<style>` block with its own keyframe set — some shared names, some page-specific. The table below is the sitewide core set (present on nearly every page); §4.4–4.6 cover the three pages with substantial page-specific animation beyond this core.

| Keyframe | Used on | Effect |
|---|---|---|
| `blink` | Status dots | Hard digital blink, `1.5s steps(2, jump-none) infinite` |
| `sweep` | `.scanline` | Gradient line sweeps top→bottom over the hero, `7s linear infinite` |
| `caretblink` | Hero rotator caret | `1.06s steps(2, jump-none) infinite` (present on Home and the 3 surface pages; simpler pages like About/Blog/Contact don't have a rotator and so don't define this one) |
| `ringout` | Device/shield ring visual | Concentric rings expand and fade, `4s ease-out infinite` |
| `fpsweep` | Fingerprint/biometric scan | Scan-line across a fingerprint glyph |
| `pulse` | Risk/signal indicators | Soft opacity/scale pulse |
| `cycle3` | Homepage + ekKey + ekPulse + ekRules + the 3 surface pages | The tri-scene cross-fade pattern, §4.1 — reused as a generic "cycle through N illustrative states" primitive well beyond just the homepage |
| `flow` / `flowx` | Data-flow lines | Directional movement suggesting signal transit. Pages with a rotator use `flow`; simpler pages (About, Blog, Careers, Contact, ekProtect, Investors, and — as of this version — ekBind/ekSell/ekSign) use a variant named `flowx` for the same visual idea, at a lighter weight since those pages have less going on above it |
| `drift` | Background mesh/texture | Slow ambient movement |
| `navfade` | `.navstrip .val` | Fades in the nav description line on hover change |

### 4.1 `cycle3` — the tri-scene cross-fade primitive

```css
.cycle .scene { position:absolute; inset:0; opacity:0; animation: cycle3 9s infinite; }
.cycle .scene:nth-child(2) { animation-delay: 3s; }
.cycle .scene:nth-child(3) { animation-delay: 6s; }
@keyframes cycle3 { 0%,3%{opacity:0} 6%,27%{opacity:1} 30%,100%{opacity:0} }
```

**Order fixed in this version.** The homepage's three scenes now play **User → App → Device**, matching the rotator line's own word order above the H1 ("Protect the User / the App / the Device") exactly. In the previous export these were out of sync (scenes played User → Device → App while the rotator said User → App → Device) — that mismatch is now corrected. Build the scene order from the same data source as the rotator word order so they can't drift apart again.

Each scene is a small "session check" card: a label, a context line, a verified checkmark row, and two "chip" rows naming a blocked/challenged/denied threat. Pure CSS, no JS required for the cross-fade itself.

### 4.2 Per-product ledger backgrounds — unchanged

ekSell still has its scrolling vertical ledger background (channel partners) exactly as before. ekBind's and ekSign's hero visuals were upgraded to something more elaborate than a static ledger — see §4.4 and §4.6.

### 4.3 Reduced motion — unchanged

Same `prefers-reduced-motion` scope as before: `.scanline`, status dots, `.ring`, `.fpscan`, `.flowbar`, `.pulsebar i` disabled; hero rotator transition collapses to instant. Extend this list to also pause `.cycle .scene` (freeze on the first scene) and the three new page-specific animation sets below under reduced motion.

### 4.4 ekBind — new "SIM tower" diagram (3 new keyframes: `simpulse`, `towerwave`, `verifyfade`)

The old plain-text "Device → Banking app → Operator" flow is now preceded by a small hand-drawn inline SVG illustration: a phone/device icon (with its SIM chip highlighted in the accent color) on the left, a cell tower icon on the right, connected by three curved signal lines, with concentric broadcast-wave arcs radiating from the tower. Labelled "SIM verified" at the top.

```css
.simtower .sig  { stroke-dasharray:6 4; animation: simpulse 2.4s linear infinite; }
.simtower .sig2 { animation-delay: .8s; }
.simtower .sig3 { animation-delay: 1.6s; }
.simtower .tw   { animation: towerwave 1.8s ease-in-out infinite; }
.simtower .tw2  { animation-delay: .3s; }
.simtower .tw3  { animation-delay: .6s; }
```

`simpulse` animates the dashed signal-line stroke (a "data moving along the wire" effect); `towerwave` pulses the concentric tower arcs outward, both staggered across 3 lines/arcs for a continuous wave rather than a single pulse. `verifyfade` handles the "SIM verified" label's fade-in. This sits above the existing checklist (Silent Network Authentication / Reverse SMS / SIM swap-port-out / Code sent to customer), which is otherwise unchanged.

### 4.5 ekKey — new device-binding demo (keyframes: `cyc3key`, `kbglow`, `kbshake`, replacing v3's `cyc2`/`pulsering`)

Replaces the old plain "Verifying it's you… / Signed in" two-state visual with a concrete three-scene demonstration of device-binding (reusing the `.dev-body`/`.scene` shell from the homepage's cycle, with a `.keybound` variant):

1. **"This device"** — a key icon in `kb-active` state (glowing), caption "Passkey active · signs in instantly"
2. **"Copied to another device"** — the same key icon in `kb-shake` state (shaking, with a red X badge overlaid), caption "Rejected · not the enrolled hardware"
3. **"Device-bound by design"** — a shield-checkmark icon, caption "A stolen passkey file is worthless"

This is a much stronger, more concrete illustration of ekKey's core value prop (a passkey that literally cannot be used off its enrolled hardware) than the previous generic "signing in" animation.

### 4.6 ekSign — new animated signing-completion + hash-seal sequence (6 new keyframes: `hfinalshow`, `hideRow`, `hstep`, `sealglow`, `showRow`, `swapCount`, `swapCount2`)

The execution-status card now animates through a real state change rather than showing a static "2 of 3 signed" snapshot:

- The header count cross-fades from **"2 of 3 signed"** to **"3 of 3 signed"** (`.vcount .cnt1`/`.cnt2`).
- The Guarantor row's status swaps from **"Awaiting"** to **"Signed"** in place (`.vrow-swap` / `.vstatus-swap`, with `.waiting-row` fading out and `.signed-row` fading in — `showRow`/`hideRow`/`hstep`).
- The seal hash cycles through three decoy/scrambling values (`7d2x·91qz`, `c0e4·b8p1`, `4f7a·d3m2`) before settling on the real seal `SHA-256 a3f9·c2d1·e4b8` (`.hashwrap .hv1/.hv2/.hv3` → `.hfinal`, via `swapCount`/`swapCount2`/`hfinalshow`), with a glow on settle (`sealglow`) — the same "computing/verifying" visual idea as the homepage's `hrain` ciphertext effect, applied here to dramatize the seal actually locking in.

This is the most elaborate single animated sequence in the export — budget real implementation time for it, don't treat it as a simple state toggle.

---

## 5. Navigation — restructured (read carefully, this is the biggest UX change)

### 5.1 New structure: 5 top-level items, 3 with dropdowns

```
Home                    → /
Protect the User    ▾   → /protect-the-user
  ekShield  · Authentication
  ekKey     · Passkeys
  ekSign    · Document signing
  ekPulse   · Behavioural biometrics
Protect the Device   ▾  → /protect-the-device
  ekBind    · SIM & network trust
  ekProtect · Device integrity
  ekShield  · Authentication
Protect the App      ▾  → /protect-the-app
  ekProtect · Runtime & app integrity
  ekPulse   · Behavioural signals
About                   → /about
```

Note **ekShield appears in two dropdowns** (User and Device) and **ekProtect** and **ekPulse** each appear in two dropdowns (Device+App, and User+App respectively) — a product can belong to more than one "surface." This is intentional and should be modeled as a many-to-many relationship in your content layer (a product has a list of surfaces, not one), not forced into a single-category structure.

### 5.2 Dropdown styling

```css
.pnav .pdrop {
  position: absolute; top: 100%; left: 0; min-width: 270px;
  border: 2px solid var(--line); border-top: 0;
  background: var(--ink);
  opacity: 0; visibility: hidden; transform: translateY(-4px);
  transition: opacity .18s ease, transform .18s ease, visibility .18s;
}
.pnav .pitem:hover .pdrop, .pnav .pitem:focus-within .pdrop { opacity:1; visibility:visible; transform:none; }
.pnav .pdrop a span { /* the role label under each product name */
  font-size:10.5px; letter-spacing:.12em; text-transform:uppercase; color:var(--accent-lt);
}
```

Hard-cornered like everything else (no radius), opens downward on hover or keyboard focus-within, each product link shows its name plus a small uppercase role label beneath it (e.g. "ekShield" / "Authentication").

### 5.3 Magnetic nav — mechanism updated for the dropdown structure

The accent-colored sliding block (`.pblock`) now measures and targets **only top-level items** (`a.top`), not every `<a>` in the nav — necessary because the dropdown links are also `<a>` tags and must not trigger the magnetic block themselves. Positioning math changed from `offsetWidth`/`offsetLeft` to `getBoundingClientRect()`-relative math (more robust with the nested dropdown layout):

```js
function links() { return [...nav.querySelectorAll('a.top')]; }
// ...on hover/focus of a.top:
var r = el.getBoundingClientRect(), nr = nav.getBoundingClientRect();
block.style.width = r.width + 'px';
block.style.transform = 'translateX(' + (r.left - nr.left) + 'px)';
```

The nav strip's default (mouse-leave) state also changed copy: was *"Five products · One signal layer — each product sharpens the others."*, now **"Seven products · One decision engine — ekRules weighs every signal the three surfaces emit."** — reflecting both the new count and ekRules' new role as the explicit decisioning layer (see `PAGES.md`).

**Port `site.js` directly again** — same as the v2 guidance, it's still real, dependency-free JS, just updated for the new structure.

---

## 6. Component inventory — updated

| Component | Status | Notes |
|---|---|---|
| `Topbar` | **Changed** | Now a 3-way mega-dropdown nav (§5) instead of a flat product list |
| `HeroCycle` | **New**, replaces `HeroRotator`'s old solutions-panel companion | The `cycle3` tri-scene visual (§4.1). The "Protect the X" rotator line above the H1 is unchanged. |
| `SolutionsPanel` (`.solpanel`/`.sol`) | **Simplified again in this version** | No longer in the hero (that was the v3 change). In v3 it appeared three times on the homepage, once per tier, each with an `.sp-head` tier header. **As of this version, the tiering is gone too** — it's now a single flat `.solpanel` list of all 7 products, numbered 01–07, no tier grouping or headers at all. The `.sp-head` CSS rule still exists in the stylesheet but is no longer referenced by any markup — don't build a component around it. |
| `AnnouncementStrip` | **Changed copy** | New stat added: "Secured — Over 10 million authentications" |
| `HashTicker` | Unchanged | Same decorative crypto-term marquee |
| `SurfaceGrid` ("How Ektar protects you") | **New**, replaces `AttackSurfaceGrid` | Three cards now (User/Device/App), each listing its products, a threat-vector list, and an "Open →" link to the matching `/protect-the-*` page — different shape from v2's flat six-vector grid |
| `ThreeLayersSection` | **Removed from homepage** | Its role is now split across the three `/protect-the-*` pages and the `SurfaceGrid` teaser |
| `CryptoProofVisual` | **Removed from homepage** — confirmed absent from `reference/pages/index.dc.html` (no "Sign/Seal/Verify" content remains on the homepage). Not relocated to ekSign either — ekSign's own page was simplified in this update too (`PAGES.md` §7). | |
| `ProductGrid` | **Removed from homepage as a standalone section** — confirmed no separate "Our products" heading remains; product listing now lives entirely in the tiered `SolutionsPanel` repeats (see above) | |
| `RegulatoryTailwinds` | **Condensed** (unchanged from v3) | 4 bullets on Home (UAE with explicit March 2026 deadline, Saudi Arabia, India, Singapore & Philippines combined); full versions still on individual surface/product pages, Malaysia included there |
| `StatBand` | Figures unchanged from v3 | `$485B`, `93%`, `+12x` AI-generated fraud — no change in this version |
| `ProductHero` | Unchanged pattern | Status pill + eyebrow + H1 + description + CTA row + back-link, still shared across all product pages |
| `SurfaceHero` | Unchanged pattern | Same shell as `ProductHero`, used on the three `/protect-the-*` pages. **Note:** `/protect-the-user`'s tier-summary line under the CTA is gone in this version (was "ekShield — live today · ekKey, ekSign — shipping through 2026 · ekPulse — building now") — the other two surface pages never had this line, so `SurfaceHero`'s tier-summary slot is now unused everywhere; consider dropping it from the shared component rather than keeping dead optional content |
| `TierBadge` | **Removed in this version** | The "Live"/"Shipping 2026"/"Building now" status pills on ekBind, ekKey, ekPulse, ekRules, ekSell are gone. Don't build this as a component — if the client wants roadmap-stage signalling back, ask rather than reintroducing your own badge design |
| `DecisionEngineCallout` | Unchanged | "One decision engine" — recurring callout on Home and all three surface pages, pointing at ekRules |
| `Footer` | Unchanged from v3 | Products: 8 items · Company: About us/Blog/Careers/Investors/Contact |
| `SimTowerDiagram` | **New** | ekBind's illustrated device↔tower SVG, §4.4 |
| `KeyBindDemo` | **New** | ekKey's three-scene device-binding demo, §4.5 |
| `SigningCompletionAnimation` | **New** | ekSign's animated 2-of-3→3-of-3 + hash-seal sequence, §4.6 |

---

## 7. Buttons, icons — unchanged

Same `.btn-primary`/`.btn-secondary`/`.btn-ghost`/`.btn-icon`/`.btn-onink` system, same zero-radius, same Poppins-800 button text, same Lucide-on-`currentColor` icon approach as before. Nothing to change here.

---

## 8. What's unverifiable without a browser

Same caveat as v2: I can read every CSS rule and every line of copy, but the *feel* of the new dropdown open/close timing, the `cycle3` cross-fade in motion, and the updated magnetic-nav positioning math are worth a real QA pass once built, not just a read of the numbers.
