import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import ProductHero from "@/components/ProductHero";
import PhoneApprovalFlow from "@/components/PhoneApprovalFlow";
import HashRain from "@/components/HashRain";
import RegulatoryTailwinds from "@/components/RegulatoryTailwinds";
import {
  hero,
  proofLine,
  businessCase,
  breakingPoint,
  capabilities,
  howItWorks,
  whyNow,
  closing,
} from "@/lib/content/products/ekshield";

export const metadata: Metadata = {
  title: "ekShield — Device-bound authentication | Ektar",
  description: hero.description,
};

export default function EkShieldPage() {
  return (
    <>
      <ProductHero
        statusText={hero.statusText}
        title={hero.title}
        description={hero.description}
        motif={
          <div className="cipherbg" aria-hidden="true">
            <HashRain className="rain" />
          </div>
        }
        visual={<PhoneApprovalFlow />}
      />

      <div className="wrap">
        <div className="strip" style={{ "--strip-cols": "repeat(2, minmax(0,1fr))" } as CSSProperties}>
          {proofLine.map((f) => (
            <div key={f.k}>
              <span className="k mono">{f.k}</span>
              <span className="v">{f.v}</span>
            </div>
          ))}
        </div>

        <section className="sec reveal">
          <span className="kicker mono">The business case</span>
          <h2 className="h2">{businessCase.heading}</h2>
          <div className="cards">
            {businessCase.items.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="reveal">
          <RegulatoryTailwinds kicker="The breaking point" heading={breakingPoint.heading} intro={breakingPoint.intro} rows={breakingPoint.rows} blink />
        </div>

        <section className="sec reveal">
          <span className="kicker mono">Capabilities</span>
          <h2 className="h2">{capabilities.heading}</h2>
          <div className="cards">
            {capabilities.items.map((c) => (
              <div className="card2" key={c.tag} style={c.span2 ? { gridColumn: "span 2" } : undefined}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">How it works</span>
          <h2 className="h2">{howItWorks.heading}</h2>
          <div className="cards">
            {howItWorks.items.map((c) => (
              <div className="card2" key={c.tag}>
                <p className="tag mono">{c.tag}</p>
                <p className="t">{c.t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Why now</span>
          <h2 className="h2">{whyNow.heading}</h2>
          <div className="mgrid">
            <div className="mrow" style={{ gridColumn: "1/-1" }}>
              <span className="sq" />
              <p>
                <strong>{whyNow.market}</strong> {whyNow.requirement}
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="close reveal">
        <div className="wrap">
          <h3>{closing.heading}</h3>
          <p className="sub">{closing.sub}</p>
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
