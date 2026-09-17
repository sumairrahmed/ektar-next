import type { Metadata } from "next";
import Link from "next/link";
import { hero, whyNow, team, closing } from "@/lib/content/investors";

export const metadata: Metadata = {
  title: "Investors — Ektar",
  description: hero.sub,
};

export default function InvestorsPage() {
  return (
    <>
      <section className="stage">
        <div className="mesh" />
        <div className="glow" />
        <div className="scan" />
        <div className="wrap">
          <div className="hero">
            <div className="reveal">
              <p className="status mono">
                <span className="dot" />
                {hero.statusText}
              </p>
              <h1 className="display">{hero.title}</h1>
              <p className="sub">{hero.sub}</p>
              <div className="row">
                <Link href="/investors/contact" className="btn btn-primary">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">Why now</span>
          <h2 className="h2">{whyNow.heading}</h2>
          <p className="lede">{whyNow.text}</p>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">The team</span>
          <h2 className="h2">{team.heading}</h2>
          <p className="lede">{team.text}</p>
        </section>
      </div>

      <section className="close reveal">
        <div className="wrap">
          <h3>{closing.heading}</h3>
          <p className="sub">{closing.sub}</p>
          <div className="row">
            <Link href="/investors/contact" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
