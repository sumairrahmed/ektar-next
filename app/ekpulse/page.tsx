import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SurfaceHero from "@/components/SurfaceHero";
import PulseViz from "@/components/PulseViz";
import { hero, capabilities, howItWorks, whyNow, closing } from "@/lib/content/products/ekpulse";

export const metadata: Metadata = {
  title: "ekPulse — Behavioural biometrics | Ektar",
  description: hero.description,
};

const CAP_ICONS: ReactNode[] = [
  <path key="a" d="M2 12h4l2.5-7 4 14L15 12h7" />,
  <>
    <rect x="4" y="10" width="16" height="11" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <path d="m9 19 6-6" />
  </>,
  <>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
    <path d="M17 6h4M17 11h4M17 16h4" />
  </>,
  <>
    <path d="M12 20v-6M12 14 8 10M12 14l4-4" />
    <path d="M4 4h16v6H4z" />
  </>,
];

export default function EkPulsePage() {
  return (
    <>
      <SurfaceHero
        statusText={hero.statusText}
        title={
          <>
            <span className="line">{hero.titleLine1}</span>
            <span className="line">{hero.titleLine2}</span>
            <span className="line">
              {hero.titleLine3} <em>{hero.titleEmphasis}</em>
            </span>
          </>
        }
        description={hero.description}
        titleClassName="pulse-title"
        visual={<PulseViz />}
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
