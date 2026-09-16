"use client";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export function ProjectStack({ children }: { children: ReactNode }) {
  return <div className="relative mt-14">{children}</div>;
}

export function ProjectStackCard({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const progress = useMotionValue(0);
  const smooth = useSpring(progress, { stiffness: 220, damping: 36 });
  const scale = useTransform(smooth, [0, 1], [1, 0.95]);
  const y = useTransform(smooth, [0, 1], [0, -12]);
  function update() {
    const card = ref.current;
    const next = card?.nextElementSibling;
    if (!card || !next || reduced) { progress.set(0); return; }
    const pin = parseFloat(getComputedStyle(card).top) || 0;
    progress.set(Math.min(1, Math.max(0, (window.innerHeight - next.getBoundingClientRect().top) / (window.innerHeight - pin))));
  }
  useMotionValueEvent(scrollY, "change", update);
  useEffect(() => {
    const card = ref.current;
    const article = card?.querySelector("article");
    if (!card || !article) return;
    const observer = new ResizeObserver(() => card.style.setProperty("--card-height", `${article.offsetHeight}px`));
    observer.observe(article);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className="project-stack-card relative mt-5 first:mt-0 md:mt-6" style={{ zIndex: index + 1, "--card-index": index } as CSSProperties}>
    <motion.div className="project-card-surface" style={{ scale: reduced ? 1 : scale, y: reduced ? 0 : y, transformOrigin: "top center" }}>{children}</motion.div>
  </div>;
}
