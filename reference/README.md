# reference/ — real source files, unaltered (v4)

Everything here is copied verbatim from the client's latest export (`Copy_of_ektar_com_Website_Design_160926.zip`). Nothing has been rewritten or resolved — see `CLAUDE.md` §3 for why the `.dc.html` format needs its own proprietary runtime and shouldn't be rendered directly.

- **`pages/`** — all 15 real, live site pages (`.dc.html`) plus `site.js`, `support.js`, `image-slot.js`. **11 of these 15 page files are byte-identical to the v3 export**: about, authentication (ekShield), blog, careers, contact, ekprotect, ekpulse, ekrules, eksell, protect-the-app, protect-the-device. The four with real content/visual changes this version are `index.dc.html` (Home), `ekbind.dc.html`, `ekkey.dc.html`, and `eksign.dc.html` — see `DESIGN.md` §4.4–4.6 and `PAGES.md` for exactly what changed in each. `site.js` is also byte-identical to v3.
- **`design-tokens.css`** — confirmed byte-identical to both the v2 and v3 exports. No token values have changed across any version of this project.
- **`assets/`** — the real logo and office-flag images, unchanged.
