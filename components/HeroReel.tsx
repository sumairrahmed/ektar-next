"use client";

import { useEffect, useState, type ReactNode } from "react";
import HeroRotator from "@/components/HeroRotator";
import HeroCycle, { type CycleScene } from "@/components/HeroCycle";

// Owns the single shared index that drives both the "Protect the X" rotator
// text and the phone's cycle3 scene, so the two never drift out of sync —
// previously HeroRotator ran its own 2600ms JS interval while HeroCycle's
// scenes looped independently on a 9s CSS animation-delay schedule.
// `words` and `scenes` must be the same length and in matching order.
export default function HeroReel({
  statusText,
  words,
  scenes,
  children,
}: {
  statusText: string;
  words: string[];
  scenes: CycleScene[];
  children: ReactNode;
}) {
  const loopLength = words.length + 1;
  const [index, setIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index === loopLength - 1) {
      const t = setTimeout(() => {
        setNoTransition(true);
        setIndex(0);
      }, 520);
      return () => clearTimeout(t);
    }
    if (noTransition) {
      const t = requestAnimationFrame(() => setNoTransition(false));
      return () => cancelAnimationFrame(t);
    }
  }, [index, loopLength, noTransition]);

  return (
    <>
      <div className="reveal">
        <p className="status mono">
          <span className="dot" />
          {statusText}
        </p>
        <HeroRotator words={words} index={index} noTransition={noTransition} />
        {children}
      </div>
      <div className="reveal">
        <HeroCycle scenes={scenes} activeIndex={index % scenes.length} />
      </div>
    </>
  );
}
