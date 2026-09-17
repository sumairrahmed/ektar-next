import Link from "next/link";
import type { ReactNode } from "react";
import HashRain from "@/components/HashRain";

export default function SurfaceHero({
  statusText,
  title,
  description,
  scanline = true,
  visual,
  titleClassName,
}: {
  statusText: string;
  title: ReactNode;
  description: string;
  scanline?: boolean;
  visual: ReactNode;
  titleClassName?: string;
}) {
  return (
    <section className="stage">
      <HashRain />
      <div className="mesh" />
      <div className="glow" />
      {scanline && <div className="scanline" />}
      <div className="wrap">
        <div className="hero">
          <div className="reveal">
            <p className="status mono">
              <span className="dot" />
              {statusText}
            </p>
            <h1 className={titleClassName ? `display ${titleClassName}` : "display"}>{title}</h1>
            <p className="sub">{description}</p>
            <div className="row">
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
            </div>
          </div>
          <div className="reveal">{visual}</div>
        </div>
      </div>
    </section>
  );
}
