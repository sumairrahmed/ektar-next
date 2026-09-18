import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/ProductHero";
import IntrusionGrid from "@/components/IntrusionGrid";
import { hero, capabilities, feedingDecision, closing } from "@/lib/content/products/ekprotect";

export const metadata: Metadata = {
  title: "ekProtect — Attestation & runtime defence | Ektar",
  description: hero.description,
};

export default function EkProtectPage() {
  return (
    <>
      <ProductHero
        statusText={hero.statusText}
        title={hero.title}
        description={hero.description}
        motif={<IntrusionGrid />}
        visual={
          <div className="viz">
            <div className="vhead">
              <span>ekProtect · runtime state</span>
              <span>Illustrative</span>
            </div>
            <div className="vbody">
              <p className="mono" style={{ margin: "0 0 4px", fontSize: 11.5, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent-lt)" }}>
                → Feeding ekRules
              </p>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 3 6v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V6z" />
                  </svg>
                </span>
                <span>
                  <b>App &amp; device attestation</b>
                </span>
                <span className="ok">Pass</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="5" y="2" width="14" height="20" />
                    <path d="M9 18h6" />
                  </svg>
                </span>
                <span>
                  <b>Overlay attack</b>
                </span>
                <span className="ok">Blocked</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="6" y="6" width="12" height="12" />
                    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                  </svg>
                </span>
                <span>
                  <b>Remote access tool</b>
                </span>
                <span className="ok">Suspended</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                    <rect x="3" y="10" width="18" height="11" />
                  </svg>
                </span>
                <span>
                  <b>Rooted device</b>
                </span>
                <span className="ok">Denied</span>
              </div>
            </div>
            <div className="vnote">
              Every detection here is sent to <b>ekRules</b>, alongside the user and device surfaces.
            </div>
          </div>
        }
      />

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">Capabilities</span>
          <h2 className="h2">{capabilities.heading}</h2>
          <div className="cards">
            {capabilities.items.map((c) => (
              <div className="card2" key={c.tag} style={c.span2 ? { gridColumn: "span 2" } : undefined}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="lede" style={{ margin: "calc(1.4 * var(--leading)) 0 0" }}>
            {capabilities.crossSell} <Link href="/ekpulse">see how →</Link>
          </p>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Feeding the decision</span>
          <h2 className="h2">{feedingDecision.heading}</h2>
          <p className="lede">{feedingDecision.intro}</p>
          <div className="cards two">
            {feedingDecision.cards.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="close reveal">
        <div className="wrap">
          <h3>{closing.heading}</h3>
          <div className="row">
            <Link href="/contact" className="btn btn-primary">
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
