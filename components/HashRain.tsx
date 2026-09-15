"use client";

import { useEffect, useRef } from "react";

// Ported from the export's canvas rain effect (index.dc.html's inline
// component script) — columns of falling hex/glyph characters with a
// fading trail, colored from --paper / --accent-lt so it follows the
// theme toggle. Freezes to a single static frame under reduced motion.
const GLYPHS = "0123456789abcdef<>/\\|=+*#$%&@{}[]".split("");
const g = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

type Row = { head: number; speed: number; trail: number; glyphs: string[]; accent: boolean };

export default function HashRain({ className = "hrain" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cell = 16;
    const lineH = 24;
    let cells = 1;
    let vw = 0;
    let vh = 0;
    let rows: Row[] = [];
    let raf = 0;
    let frame = 0;
    let cPaper: [number, number, number] = [243, 242, 242];
    let cAccent: [number, number, number] = [255, 151, 131];

    function rgbOf(css: string, fallback: string): [number, number, number] {
      const probe = document.createElement("canvas").getContext("2d")!;
      probe.fillStyle = fallback;
      probe.fillStyle = css || fallback;
      const v = probe.fillStyle as string;
      if (v[0] === "#") {
        const h = v.length === 4 ? v.slice(1).split("").map((c) => c + c).join("") : v.slice(1);
        return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
      }
      const m = v.match(/[\d.]+/g) || [];
      return [Number(m[0] ?? 0) || 0, Number(m[1] ?? 0) || 0, Number(m[2] ?? 0) || 0];
    }

    function readColors() {
      const cs = getComputedStyle(canvas!);
      cPaper = rgbOf(cs.getPropertyValue("--paper").trim(), "#f3f2f2");
      cAccent = rgbOf(
        cs.getPropertyValue("--accent-lt").trim() || cs.getPropertyValue("--color-accent").trim(),
        "#ec3013"
      );
    }

    function makeRow(seed: boolean): Row {
      return {
        // On first paint, scatter heads across the full width so the rain is
        // already filling the canvas immediately — not crawling in from the
        // left over the next several seconds. Only rows that respawn after
        // scrolling off (seed: false) start just offscreen to the left.
        head: seed ? Math.random() * cells : -Math.random() * 14,
        speed: 0.02 + Math.random() * 0.05,
        trail: 10 + Math.floor(Math.random() * 22),
        glyphs: Array.from({ length: cells }, g),
        accent: Math.random() < 0.12,
      };
    }

    function sizeRain() {
      const r = canvas!.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(r.width * dpr);
      canvas!.height = Math.round(r.height * dpr);
      ctx!.scale(dpr, dpr);
      vw = r.width;
      vh = r.height;
      cells = Math.max(1, Math.ceil(vw / cell) + 2);
      const rowCount = Math.max(1, Math.ceil(vh / lineH));
      rows = Array.from({ length: rowCount }, () => makeRow(true));
    }

    function drawRain() {
      ctx!.clearRect(0, 0, vw, vh);
      ctx!.font = "13px ui-monospace, SFMono-Regular, Menlo, monospace";
      ctx!.textBaseline = "top";
      const [pr, pg, pb] = cPaper;
      const [ar, ag, ab] = cAccent;
      for (let j = 0; j < rows.length; j++) {
        const row = rows[j];
        row.head += row.speed;
        const headCol = Math.floor(row.head);
        const wrap = (i: number) => ((i % cells) + cells) % cells;
        if (Math.random() < 0.03) row.glyphs[wrap(headCol)] = g();
        for (let t = 0; t < row.trail; t++) {
          const cx = headCol - t;
          if (cx < 0 || cx > cells) continue;
          const f = 1 - t / row.trail;
          let a = f * f * 0.42;
          let r = pr;
          let gr = pg;
          let b = pb;
          if (t === 0) {
            a = 0.9;
            if (row.accent) {
              r = ar;
              gr = ag;
              b = ab;
            }
          } else if (t === 1) a = 0.38;
          if (row.accent && t > 0) {
            r = Math.round((r + ar) / 2);
            gr = Math.round((gr + ag) / 2);
            b = Math.round((b + ab) / 2);
          }
          ctx!.fillStyle = `rgba(${r},${gr},${b},${a.toFixed(3)})`;
          ctx!.fillText(row.glyphs[wrap(cx)], cx * cell, j * lineH);
        }
        if (headCol - row.trail > cells) rows[j] = makeRow(false);
      }
      frame++;
      if (frame % 90 === 0) readColors();
      raf = requestAnimationFrame(drawRain);
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    readColors();
    sizeRain();
    if (reduced) {
      rows.forEach((r) => (r.head = Math.random() * cells));
      const realRaf = window.requestAnimationFrame;
      window.requestAnimationFrame = (() => 0) as typeof requestAnimationFrame;
      drawRain();
      window.requestAnimationFrame = realRaf;
    } else {
      drawRain();
    }

    const onResize = () => sizeRain();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
