# CLAUDE.md — Ektar Website (Next.js + Tailwind Rebuild) — v4

You are rebuilding the Ektar marketing site in **Next.js (App Router) + Tailwind CSS**, matching the client's latest theme export exactly. This is v4 of this documentation. Unlike the v2→v3 jump (which was a major IA overhaul), v3→v4 is a **lighter refinement pass**: no new pages, no new products, no nav changes — mostly richer hero visuals on three product pages, a couple of copy/stat updates, and one product-list simplification on the homepage.

**Read `SITEMAP.md`, `DESIGN.md`, and `PAGES.md` before writing any code**, in that order. All three were produced by directly reading the export's real files — not reconstructed from memory or a prior version. Where this version disagrees with an earlier one you may have seen, **this version is correct.**

---

## 1. Version history — what changed and when

- **v1 (discard entirely):** built from a live-site web scrape before any real export was available. Wrong product line (ekVerify/ekBank that don't exist), wrong palette, wrong font, wrong corners. Nothing in v1 should be trusted.
- **v2:** built from the client's first real theme export. Correct palette/font/radius/dark-mode system (all still correct — unchanged through every version since). Five products (ekShield, ekProtect, ekBind, ekSign, ekSell), flat nav, an AI page, a form-based Careers page.
- **v3:** **Eight products** (adds ekKey, ekPulse, ekRules). Nav reorganized into three surface-based dropdowns (Protect the User/Device/App) instead of a flat product list. Three new surface pages. New Investors page. AI page retired. Careers rewritten as a culture page, no longer a form. ekShield, ekProtect, ekSign, and ekSell pages substantially rewritten.
- **v4 (this version):** No new pages, no new products, no nav or IA changes — **11 of 15 pages are byte-identical to v3.** What changed: the homepage's tiered "Live today/Shipping through 2026/Building now" product list collapsed into one flat list (and the matching per-product tier badges were removed from ekBind/ekKey/ekPulse/ekRules); the homepage hero's tri-scene visual order was fixed to match the rotator line; ekBind, ekKey, and ekSign each got a substantially richer, newly-animated hero visual; "text-message codes" was partially standardized to "SMS OTP" (not uniformly — see `PAGES.md` §1.5 for the precise, non-obvious split); two proof-point stats were reworded. See `DESIGN.md` §0 and `PAGES.md`'s "What changed since v3" header for the full diff.

If you're resuming work built against v3, most of it still stands — check `PAGES.md`'s per-page "unchanged"/"byte-identical" notes before re-reading a page you already built; only ekBind, ekKey, ekSign, the homepage, About, and Investors need a second look.

---

## 2. What this project is

Ektar Technologies — B2B digital-security company for banks, founded 2022 by three ex-Standard Chartered bankers. The suite is now organized around **three surfaces fraud attacks**, each defended by a subset of the (now eight) products:

- **Protect the User** — ekShield (authentication), ekKey (passkeys), ekSign (document signing), ekPulse (behavioural biometrics)
- **Protect the Device** — ekBind (SIM & network trust), ekProtect (device integrity), ekShield (also here — binds login to device)
- **Protect the App** — ekProtect (runtime & app integrity), ekPulse (also here — app-level behavioural signal)

**ekRules** sits above all three as the shared decision engine (allow / verify further / block), explicitly called out on the homepage and every surface page but not itself part of any dropdown. **ekSell** is a separate distribution product — not part of the "trust suite" of seven, listed independently in the footer.

Products can belong to more than one surface (ekShield: User + Device; ekProtect: Device + App; ekPulse: User + App) — build this as a data relationship, not a fixed single category per product.

Tone is unchanged: technical, confident, regulator-literate — real named mandates (CBUAE Notice 3057, SAMA Counter-Fraud Framework, BNM RMiT 2026, etc.), real cryptographic specifics, real proof points ("At 2 top-tier UAE banks", "Over 10 million authentications"). Preserve that register in any new copy.

---

## 3. Source format — unchanged guidance

Same proprietary `.dc.html` template format, same caveat: the `<style>` blocks, class structure, and copy are authoritative; the `{{ }}` template expressions and the `support.js`/`image-slot.js` compiler are export tooling, not the real site — don't port them. `site.js` is real, plain JS and **is** the source of truth for nav and theme behavior — byte-identical to the v3 version, no further changes to port here.

---

## 4. Tech stack — unchanged

- **Next.js 14+, App Router**
- **Tailwind CSS**, modeled on the same semantic-token approach throughout: `ink`/`paper`/`line`/`dim`/`accent`/`accent-lt` resolving differently under `[data-theme="light"]`. Token values themselves are unchanged (`DESIGN.md` §1–2).
- **`next/font/google`** for Poppins (300–800).
- **`next/image`** for the real assets (`reference/assets/` — logo + 3 office images, unchanged).
- **`next/link`** for internal nav.
- **Zero border-radius, everywhere** — still true, still deliberate.

---

## 5. Suggested project structure (updated for v4)

```
app/
├── layout.tsx
├── globals.css
├── page.tsx                    Home — cycle3 hero visual (now User→App→Device order),
│                                FLAT trust-suite list (no more tiering), surface-grid
│                                section, condensed regulatory list
├── ekshield/page.tsx            (source: authentication.dc.html) — byte-identical to v3
├── ekprotect/page.tsx           byte-identical to v3
├── ekbind/page.tsx              NEW hero visual — SIM/tower SVG diagram (DESIGN.md §4.4)
├── eksign/page.tsx              NEW animated hero — 2/3→3/3 signed + hash-seal reveal (§4.6)
├── eksell/page.tsx              byte-identical to v3
├── ekkey/page.tsx                NEW hero visual — 3-scene device-binding demo (§4.5)
├── ekpulse/page.tsx              byte-identical to v3 except badge removed
├── ekrules/page.tsx              byte-identical to v3 except badge removed
├── protect-the-user/page.tsx     tier-summary line removed, "SMS OTP" terminology update
├── protect-the-device/page.tsx   byte-identical to v3
├── protect-the-app/page.tsx      byte-identical to v3
├── about/page.tsx                founder-tenure sub-line reworded ("~100 years")
├── investors/page.tsx            founder-tenure line reworded (same change as About)
├── blog/page.tsx                 unchanged — still placeholder posts
├── join-us/page.tsx              unchanged — culture page, no form
├── contact/page.tsx              unchanged
├── termsofuse/page.tsx
└── privacy-policy/page.tsx
                                   NOTE: no /ai route — still retired

components/
├── Topbar.tsx                    unchanged from v3 — mega-dropdown, a.top-only magnetic block
├── NavDropdown.tsx                unchanged
├── HeroCycle.tsx                  unchanged mechanism; fix the scene ORDER prop/data to
│                                 User→App→Device on Home (was mismatched in v3)
├── SolutionsPanel.tsx             SIMPLIFIED from v3's TieredSolutionsPanel — v4 only needs
│                                 ONE flat instance on Home (7 products, numbered, no tier
│                                 grouping); if you built a tiered/3-instance version for v3,
│                                 collapse it back down
├── AnnouncementStrip.tsx          unchanged
├── HashTicker.tsx                 unchanged
├── SurfaceGrid.tsx                unchanged
├── RegulatoryTailwinds.tsx        unchanged structurally; Home's 4-bullet copy still mixes
│                                 "SMS OTP" (intro) with "text codes"/"Text-message codes"
│                                 (the bullets themselves) — transcribe exactly, don't
│                                 "fix" the inconsistency yourself (PAGES.md §1.5)
├── StatBand.tsx                   Data/02 label+detail now say "SMS OTP" not "text-message
│                                 codes"; $485B and +12x unchanged
├── ProductHero.tsx                unchanged shell
├── SurfaceHero.tsx                unchanged shell; its "tier summary" slot is now unused on
│                                 all 3 surface pages (protect-the-user's line was removed
│                                 this version, the other two never had one) — consider
│                                 dropping the slot from the shared component
├── SimTowerDiagram.tsx            NEW — ekBind's illustrated SVG (§4.4); build as inline SVG
│                                 + CSS animation, not a raster image
├── KeyBindDemo.tsx                NEW — ekKey's 3-scene device-binding demo (§4.5)
├── SigningCompletionAnimation.tsx NEW — ekSign's animated hero sequence (§4.6); this is
│                                 the most involved single animation in the whole site,
│                                 budget real time for it
├── ProductLedgerBackground.tsx    unchanged — ekSell's (and ekBind's, ekSign's underlying)
│                                 scrolling ledgers, now supplemented by the new diagrams above
├── ComparisonTable.tsx            unchanged from v3 (4 rows on ekSign)
├── Footer.tsx                     unchanged from v3
├── ThemeToggle.tsx                unchanged
└── icons/                         unchanged

lib/
├── content/
│   ├── home.ts                    remove tier grouping from the product list data shape;
│   │                              fix scene order for the hero cycle
│   ├── about.ts                    founder-tenure sub-line updated
│   ├── investors.ts                founder-tenure line updated (mirrors about.ts)
│   ├── products/
│   │   ├── ekshield.ts             unchanged
│   │   ├── ekprotect.ts            unchanged
│   │   ├── ekbind.ts               + new hero-visual data (device/tower diagram states);
│   │   │                          remove tier-badge field
│   │   ├── eksign.ts                + new hero-visual animation states (2/3, 3/3, hash
│   │   │                           sequence); everything else unchanged from v3
│   │   ├── eksell.ts               unchanged
│   │   ├── ekkey.ts                 + new hero-visual data (3-scene demo); remove tier-badge
│   │   │                           field
│   │   └── ekpulse.ts, ekrules.ts   remove tier-badge field only
│   ├── surfaces/                    protect-the-user.ts loses its tier-summary field;
│   │                                the other two unchanged
│   ├── blog.ts, careers.ts, contact.ts   unchanged
└── theme.ts                        unchanged, still ports from site.js (byte-identical to v3)

public/
├── ektar-logo.png
└── offices/                        unchanged
```

---

## 6. Build order

If building fresh: follow the v3 build order (tokens → theme/layout → topbar → homepage → surface pages → product pages → remaining pages → cross-links → responsive/reduced-motion pass), just with the v4 content from `PAGES.md` instead of v3's.

If **migrating an existing v3 build**, the delta is small and targeted:
1. Homepage: flatten the tiered product list to one list; fix the hero cycle's scene order (User→App→Device); update the "Live" proof stat; update the regulatory intro + Data/02 stat band copy to "SMS OTP".
2. Remove the tier-badge UI element from ekBind, ekKey, ekPulse, ekRules pages, and the tier-summary line from `/protect-the-user`.
3. Build the three new hero visuals — ekBind's SVG diagram, ekKey's 3-scene demo, ekSign's animated completion sequence (`DESIGN.md` §4.4–4.6). These are genuinely new UI work, not copy edits — budget accordingly, ekSign's especially.
4. About and Investors: reword the founder-tenure line.
5. Re-run a reduced-motion pass covering the three new animated hero visuals specifically — they weren't part of the v3 reduced-motion scope because they didn't exist yet.

---

## 7. Hard rules (carried forward, plus one addition)

- **Eight products, three surfaces, one decision engine.** No ekVerify, no ekBank (v1 hallucination). No AI page.
- **No tier/roadmap badges anywhere as of this version.** Don't add "Shipping 2026"/"Building now"/"Live" pills back to ekBind/ekKey/ekPulse/ekRules or reintroduce tiered grouping on the homepage's product list — that's a deliberate removal, not a gap to fill in.
- **Don't silently "fix" the SMS OTP / text-codes terminology split** on the homepage's "Why now" section (`PAGES.md` §1.5) — the section intro and the stat band say "SMS OTP", the four regulatory bullets still say "text codes"/"Text-message codes". This is exactly what's in the source; flag it to the client as a possible oversight rather than unilaterally normalizing it either direction.
- **Careers has no form. Don't round any corners. Don't invent blog posts. Don't invent Terms/Privacy copy.** All carried forward unchanged.
- **A product can belong to more than one nav dropdown / surface.** Don't force a single-category data model.
- **ekRules has no nav entry of its own.**
- **"Get in touch" vs. "Book a demo"** remains a deliberate copy distinction on Careers/Investors vs. everywhere else.

---

## 8. Open items to flag to the client

- Terms of Use and Privacy Policy still have no source content
- Confirm the exact back-link targets ("← All layers" vs "← All products") on each product page
- **New this version:** confirm whether removing the tier badges and the homepage's tiered product grouping is final, or a placeholder simplification — it's a fairly consequential positioning change (every product now reads as simply "available" rather than signalling what's live today vs. shipping later)
- **New this version:** the "SMS OTP" vs. "text codes" terminology split on the homepage's regulatory section (§7 above) — likely worth a copy-consistency pass before launch
- No pitch deck, financials, or funding data exist for the Investors page
- `/ai` remains absent — confirm this is deliberate
