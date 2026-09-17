import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SurfaceHero from "@/components/SurfaceHero";
import HeroCycle from "@/components/HeroCycle";
import DecisionEngineCallout from "@/components/DecisionEngineCallout";
import RegulatoryTailwinds from "@/components/RegulatoryTailwinds";
import { hero, heroScenes, threats, products, decisionEngineText, whyNow, closing } from "@/lib/content/surfaces/protect-the-user";

const THREAT_ICONS: ReactNode[] = [
  <>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" />
  </>,
  <>
    <path d="M4 4h16v12H4z" />
    <path d="M4 8h16" />
    <path d="m9 20 3-4 3 4" />
  </>,
  <>
    <path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" />
    <path d="M5 11a7 7 0 0 0 14 0" />
    <path d="M12 18v3" />
  </>,
  <>
    <circle cx="12" cy="9" r="4" />
    <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
    <path d="m17 3 2 2-2 2" />
  </>,
];

export const metadata: Metadata = {
  title: "Protect the User — Ektar",
  description: hero.description,
};

export default function ProtectTheUserPage() {
  return (
    <>
      <SurfaceHero
        statusText={hero.statusText}
        title={
          <>
            <span className="line">{hero.titleLine1}</span>
            <span className="line">
              {hero.titleLine2} <em>{hero.titleEmphasis}</em>
            </span>
          </>
        }
        description={hero.description}
        visual={<HeroCycle scenes={heroScenes} variant="cycle2" />}
      />

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">The threats</span>
          <h2 className="h2">{threats.heading}</h2>
          <div className="threats" style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}>
            {threats.items.map((t, i) => (
              <div className="threat" key={t.name}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {THREAT_ICONS[i]}
                </svg>
                <p className="n">{t.name}</p>
                <p className="d">{t.detail}</p>
                <p className="st">{t.tag}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">The products</span>
          <h2 className="h2">{products.heading}</h2>
          <div className="solpanel">
            {products.items.map((p) => (
              <Link key={p.href} href={p.href} className="sol">
                <span className="num mono">{p.num}</span>
                <span className="nm">{p.name}</span>
                <span className="role">{p.role}</span>
                <p className="d">{p.description}</p>
              </Link>
            ))}
          </div>
          <DecisionEngineCallout text={decisionEngineText} />
        </section>

        <div className="reveal">
          <RegulatoryTailwinds
            heading={whyNow.heading}
            rows={[{ market: whyNow.market, requirement: whyNow.requirement, fullWidth: true }]}
          />
        </div>
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
