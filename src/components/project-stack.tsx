"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ProjectStack({ children }: { children: ReactNode }) {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = Array.from(stackRef.current?.querySelectorAll<HTMLElement>(".project-stack-card") ?? []);
    const motion = window.matchMedia("(min-width: 768px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    function updateCards() {
      frame = 0;
      // Read positions before writing styles to avoid repeated layout work.
      const positions = cards.map((card) => card.getBoundingClientRect().top);
      const pinnedTop = parseFloat(getComputedStyle(document.documentElement).fontSize) * 4;
      cards.forEach((card, index) => {
        const nextTop = positions[index + 1];
        const progress = motion.matches && nextTop !== undefined
          ? Math.min(1, Math.max(0, (window.innerHeight - nextTop) / (window.innerHeight - pinnedTop)))
          : 0;
        card.style.setProperty("--project-scale", String(1 - progress * 0.06));
        card.style.setProperty("--project-shift", `${progress * -24}px`);
      });
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateCards);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    motion.addEventListener("change", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      motion.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  return <div ref={stackRef} className="relative mt-14">{children}</div>;
}
