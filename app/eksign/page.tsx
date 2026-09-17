import type { Metadata } from "next";
import Link from "next/link";
import ProductHero from "@/components/ProductHero";
import LedgerBackground from "@/components/LedgerBackground";
import SigningCompletionAnimation from "@/components/SigningCompletionAnimation";
import { hero, ledgerRows, whyInHouse, howItWorks, whoCanSign, comparison, closing } from "@/lib/content/products/eksign";

export const metadata: Metadata = {
  title: "ekSign — In-channel document signing | Ektar",
  description: hero.description,
};

export default function EkSignPage() {
  return (
    <>
      <ProductHero
        statusText={hero.statusText}
        title={hero.title}
        description={hero.description}
        backLabel="← All products"
        motif={<LedgerBackground rows={ledgerRows} />}
        visual={<SigningCompletionAnimation />}
      />

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">Why banks move signing in-house</span>
          <h2 className="h2">{whyInHouse.heading}</h2>
          <p className="lede">{whyInHouse.intro}</p>
          <div className="cards">
            {whyInHouse.cards.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">How it works</span>
          <h2 className="h2">{howItWorks.heading}</h2>
          <p className="lede">{howItWorks.intro}</p>
          <div className="cards">
            {howItWorks.items.map((c) => (
              <div className="card2" key={c.tag} style={c.span2 ? { gridColumn: "span 2" } : undefined}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Who can sign, and how</span>
          <h2 className="h2">{whoCanSign.heading}</h2>
          <div className="cards">
            {whoCanSign.items.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
                <p className="d">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">ekSign vs a third-party portal</span>
          <h2 className="h2">{comparison.heading}</h2>
          <table className="tbl">
            <thead>
              <tr>
                {comparison.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
