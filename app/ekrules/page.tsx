import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SurfaceHero from "@/components/SurfaceHero";
import RulesViz from "@/components/RulesViz";
import { hero, capabilities, howItWorks, whyNow, closing } from "@/lib/content/products/ekrules";

export const metadata: Metadata = {
  title: "ekRules — Risk decisioning | Ektar",
  description: hero.description,
};

const CAP_ICONS: ReactNode[] = [
  <>
    <circle cx={12} cy={12} r={3} />
    <path d="M12 2v7M4 5l5 5M20 5l-5 5M12 22v-7M4 19l5-5M20 19l-5-5" />
  </>,
  <>
    <circle cx={12} cy={12} r={9} />
    <path d="M12 7v5l3 2" />
  </>,
  <>
    <path d="M12 3v6" />
    <path d="M12 9 5 20M12 9l7 11M12 9v11" />
  </>,
  <>
    <path d="M6 3v6M6 15v6M12 3v10M12 19v2M18 3v3M18 12v9" />
    <circle cx={6} cy={12} r={2.5} />
    <circle cx={12} cy={16} r={2.5} />
    <circle cx={18} cy={9} r={2.5} />
  </>,
];

export default function EkRulesPage() {
  return (
    <>
      <SurfaceHero
        statusText={hero.statusText}
        title={
          <>
            <span className="line">{hero.titleLine1}</span>
            <span className="line">
              <em>{hero.titleEmphasis}</em>
            </span>
          </>
        }
        description={hero.description}
        visual={<RulesViz />}
      />

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">Capabilities</span>
          <h2 className="h2">{capabilities.heading}</h2>
          <div className="threats" style={{ gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}>
            {capabilities.items.map((c, i) => (
              <div className="threat" key={c.name}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {CAP_ICONS[i]}
                </svg>
                <p className="n">{c.name}</p>
                <p className="d">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">How it works</span>
          <h2 className="h2">{howItWorks.heading}</h2>
          <div className="mgrid">
            {howItWorks.steps.map((s, i) => (
              <div
                className="mrow"
                key={s}
                style={i === howItWorks.steps.length - 1 ? { gridColumn: "1/-1" } : undefined}
              >
                <span className="sq" />
                <p>
                  <strong>{String(i + 1).padStart(2, "0")}.</strong> {s}
                </p>
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
              <p>{whyNow.text}</p>
            </div>
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
