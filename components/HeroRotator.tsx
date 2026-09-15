"use client";

import { useLayoutEffect, useRef, useState } from "react";

// "Protect the User / the App / the Device" — cycling reel, DESIGN.md §5.1.
// Ported from the export's own component script: .swap gets a single fixed
// width (the widest word + 16px, measured once) so the layout never jumps
// as shorter/longer words rotate through — it does not resize per word.
// Controlled by `index`/`noTransition` so it stays in lockstep with the
// HeroCycle phone visual — both are driven from one shared timer in
// HeroReel, which also owns the seamless-loop-reset logic.
export default function HeroRotator({
  words,
  index,
  noTransition,
}: {
  words: string[];
  index: number;
  noTransition: boolean;
}) {
  const loop = [...words, words[0]];
  const [swapWidth, setSwapWidth] = useState<number | undefined>(undefined);
  const wordRefs = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const widths = wordRefs.current.slice(0, words.length).map((el) => el?.offsetWidth ?? 0);
    setSwapWidth(Math.max(...widths) + 16);
  }, [words]);

  return (
    <p className="protect">
      Protect
      <span className="swap" style={{ width: swapWidth }}>
        <span className="reel">
          <span
            className="rin"
            style={{
              transform: `translateY(-${index * 1.35}em)`,
              transition: noTransition ? "none" : undefined,
            }}
          >
            {loop.map((word, i) => (
              <em
                key={i}
                ref={(el) => {
                  if (i < words.length) wordRefs.current[i] = el;
                }}
              >
                {word}
              </em>
            ))}
          </span>
        </span>
      </span>
      <span className="caret" aria-hidden="true" />
    </p>
  );
}
