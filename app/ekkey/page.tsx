import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import SurfaceHero from "@/components/SurfaceHero";
import KeyBindDemo from "@/components/KeyBindDemo";
import { hero, capabilities, howItWorks, whyNow, closing } from "@/lib/content/products/ekkey";

export const metadata: Metadata = {
  title: "ekKey — Passkeys | Ektar",
  description: hero.description,
};

const CAP_ICONS: ReactNode[] = [
  <>
    <rect x="4" y="10" width="16" height="11" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <path d="m9 19 6-6" />
  </>,
  <>
    <path d="M12 3l8 4v5c0 5-3.5 8.2-8 9-4.5-.8-8-4-8-9V7z" />
    <path d="m9 12 2 2 4-5" />
  </>,
  <>
    <path d="M9 11V6a2 2 0 0 1 4 0v6" />
    <path d="M13 10a2 2 0 0 1 4 0v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5v-2l-1.5-2a1.5 1.5 0 0 1 2.4-1.8L9 14" />
  </>,
  <>
    <rect x="6" y="2" width="12" height="20" />
    <path d="M10 18h4" />
    <path d="m9 10 2 2 4-4" />
  </>,
];

export default function EkKeyPage() {
  return (
    <>
      <SurfaceHero
        statusText={hero.statusText}
        title={
          <>
            <span className="line">{hero.titleLine1}</span>
            <span className="line">
              — or a code — <em>at all</em>
            </span>
          </>
        }
        description={hero.description}
        visual={<KeyBindDemo />}
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
