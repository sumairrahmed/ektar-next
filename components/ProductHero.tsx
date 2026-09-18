import Link from "next/link";
import type { ReactNode } from "react";

export default function ProductHero({
  statusText,
  title,
  description,
  motif,
  visual,
  badge,
}: {
  statusText: string;
  title: string;
  description: string;
  motif: ReactNode;
  visual: ReactNode;
  badge?: ReactNode;
}) {
  return (
    <section className="stage">
      {motif}
      <div className="glow" />
      <div className="scan" />
      <div className="wrap">
        <div className="hero">
          <div className="reveal">
            <p className="status mono">
              <span className="dot" />
              {statusText}
            </p>
            <h1 className="display">{title}</h1>
            <p className="sub">{description}</p>
            <div className="row">
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
            </div>
            {badge}
          </div>
          <div className="reveal">{visual}</div>
        </div>
      </div>
    </section>
  );
}
