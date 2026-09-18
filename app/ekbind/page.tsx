import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/ProductHero";
import LedgerBackground from "@/components/LedgerBackground";
import SimTowerViz from "@/components/SimTowerViz";
import { hero, ledgerRows, howItWorks, whyNow, closing } from "@/lib/content/products/ekbind";

export const metadata: Metadata = {
  title: "ekBind — SIM binding | Ektar",
  description: hero.description,
};

export default function EkBindPage() {
  return (
    <>
      <ProductHero
        statusText={hero.statusText}
        title={hero.title}
        description={hero.description}
        motif={<LedgerBackground rows={ledgerRows} />}
        visual={
          <div className="viz">
            <div className="vhead">
              <span>ekBind · SIM verification</span>
              <span>Verified</span>
            </div>
            <div className="vbody">
              <SimTowerViz />
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 2h8l4 4v16H6z" />
                    <rect x="9" y="12" width="6" height="6" />
                  </svg>
                </span>
                <span>
                  <b>Silent Network Authentication</b>
                </span>
                <span className="ok">Verified</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="5" y="2" width="14" height="20" />
                    <path d="M9 18h6" />
                  </svg>
                </span>
                <span>
                  <b>Reverse SMS</b>
                </span>
                <span className="ok">Sent from device</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 3 6v6c0 5 3.5 8.5 9 10 5.5-1.5 9-5 9-10V6z" />
                  </svg>
                </span>
                <span>
                  <b>SIM swap / port-out</b>
                </span>
                <span className="ok">None detected</span>
              </div>
              <div className="vrow">
                <span className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="2" y="4" width="20" height="16" />
                    <path d="m2 6 10 7 10-7" />
                  </svg>
                </span>
                <span>
                  <b>Code sent to customer</b>
                </span>
                <span className="no">None</span>
              </div>
            </div>
            <div className="vnote">
              The SIM is proven with the operator — <b>nothing is sent to intercept</b>
            </div>
          </div>
        }
      />

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">How binding works</span>
          <h2 className="h2">Two ways to prove the SIM. No OTP in either.</h2>
          <div className="cards">
            {howItWorks.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Why now</span>
          <h2 className="h2">{whyNow.heading}</h2>
          <p className="lede" style={{ marginBottom: 0 }}>
            {whyNow.text}
          </p>
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
