import Link from "next/link";
import HeroReel from "@/components/HeroReel";
import HashRain from "@/components/HashRain";
import AnnouncementStrip from "@/components/AnnouncementStrip";
import TieredSolutionsPanel from "@/components/TieredSolutionsPanel";
import SurfaceGrid from "@/components/SurfaceGrid";
import RegulatoryTailwinds from "@/components/RegulatoryTailwinds";
import StatBand from "@/components/StatBand";
import { hero, heroScenes, trustSuite, regulatorySection, closingCta } from "@/lib/content/home";

export default function Home() {
  return (
    <>
      <section className="stage">
        <HashRain />
        <div className="mesh" />
        <div className="glow" />
        <div className="scanline" />
        <div className="wrap">
          <div className="hero">
            <HeroReel statusText={hero.statusText} words={hero.rotatorWords} scenes={heroScenes}>
              <h1 className="display">
                <span className="line">{hero.h1Lines[0]}</span>
                <span className="line">
                  <em>{hero.h1Lines[1]}</em>
                </span>
              </h1>
              <p className="sub">{hero.subhead}</p>
              <div className="row">
                <Link href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} className="btn btn-ghost btn-onink">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </HeroReel>
          </div>
        </div>
      </section>

      <div className="wrap" id="solutions">
        <section className="sec reveal">
          <span className="kicker mono">The trust suite</span>
          <h2 className="h2">{trustSuite.heading}</h2>
          <p className="lede">{trustSuite.intro}</p>
          {trustSuite.tiers.map((t) => (
            <TieredSolutionsPanel key={t.tier} tier={t.tier} count={t.count} products={t.products} />
          ))}
        </section>
      </div>

      <div className="wrap">
        <AnnouncementStrip />
        <div className="reveal">
          <SurfaceGrid />
        </div>
        <div className="reveal">
          <RegulatoryTailwinds heading={regulatorySection.heading} intro={regulatorySection.intro} rows={regulatorySection.rows} />
        </div>
        <div className="reveal">
          <StatBand />
        </div>
      </div>

      <section className="close reveal">
        <div className="wrap">
          <h3>{closingCta.heading}</h3>
          <div className="row">
            <Link href={closingCta.cta.href} className="btn btn-primary">
              {closingCta.cta.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
