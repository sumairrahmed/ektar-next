import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/ProductHero";
import LedgerBackground from "@/components/LedgerBackground";
import TierBadge from "@/components/TierBadge";
import { hero, ledgerRows, howItWorks, whyBanksUseIt, closing } from "@/lib/content/products/eksell";

export const metadata: Metadata = {
  title: "ekSell — Distribution | Ektar",
  description: hero.description,
};

export default function EkSellPage() {
  return (
    <>
      <ProductHero
        statusText={hero.statusText}
        title={hero.title}
        description={hero.description}
        motif={<LedgerBackground rows={ledgerRows} />}
        badge={<TierBadge label={hero.badge} />}
        visual={
          <div className="viz">
            <div className="vhead">
              <span>ekSell · distribution</span>
              <span>Connected</span>
            </div>
            <div className="vbody">
              <div className="nodes">
                <div className="node">
                  <span>Bank</span>Digital products
                </div>
                <div className="dashlink" />
                <div className="node">
                  <span>Channels</span>Retail ecosystems
                </div>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
                  </svg>
                </span>
                <span>
                  <b>Employers</b>
                </span>
                <span className="ok">Connected</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="6" y="6" width="12" height="12" />
                    <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
                  </svg>
                </span>
                <span>
                  <b>Fintechs</b>
                </span>
                <span className="ok">Connected</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span>
                  <b>Retailers</b>
                </span>
                <span className="ok">Connected</span>
              </div>
            </div>
            <div className="vnote">
              Ektar&apos;s founding platform — <b>cost-effective digital distribution</b>
            </div>
          </div>
        }
      />

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">How it works</span>
          <h2 className="h2">{howItWorks.heading}</h2>
          <p className="lede">{howItWorks.intro}</p>
          <div className="cards">
            {howItWorks.items.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Why banks use it</span>
          <h2 className="h2">{whyBanksUseIt.heading}</h2>
          <div className="cards">
            {whyBanksUseIt.items.map((c) => (
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
