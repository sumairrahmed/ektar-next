import type { Metadata } from "next";
import Link from "next/link";
import { hero, whyThisMatters, culture, closing } from "@/lib/content/careers";

export const metadata: Metadata = {
  title: "Careers — Ektar",
  description: hero.sub,
};

export default function CareersPage() {
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
                <Link href="/career/apply" className="btn btn-primary">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="sec reveal">
          <span className="kicker mono">Why this matters</span>
          <h2 className="h2">{whyThisMatters.heading}</h2>
          <p className="lede">{whyThisMatters.text}</p>
        </section>

        <section className="sec reveal">
          <span className="kicker mono">Culture</span>
          <h2 className="h2">{culture.heading}</h2>
          <div className="pgrid">
            {culture.cards.map((c) => (
              <div className="pcard" key={c.tag}>
                <p className="role">{c.tag}</p>
                <h4>{c.t}</h4>
                <p className="bio">{c.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="close reveal">
        <div className="wrap">
          <h3>{closing.heading}</h3>
          <p className="sub">{closing.sub}</p>
          <div className="row">
            <Link href="/career/apply" className="btn btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
