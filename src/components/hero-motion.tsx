"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import reading from "@/assets/images/essy-reading.jpg";
import portrait from "@/assets/images/essy-portrait.jpg";
import notes from "@/assets/images/essy-notes.jpg";
import waves from "@/assets/images/essy-waves.jpg";

function subscribeMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function useReducedMotion() {
  return useSyncExternalStore(subscribeMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);
}

const images = [reading, portrait, notes, waves];

export function HeroMedia({ offset, delay }: { offset: number; delay: number }) {
  const [index, setIndex] = useState(offset);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % images.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <span aria-hidden="true" className="hero-chip relative mx-[6px] inline-block h-[41px] w-[68px] overflow-hidden rounded-2xl border border-white/20 bg-ink align-middle shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)] md:h-11 md:w-[72px]" style={{ animationDelay: `${2.4 + delay}s` }}>
      {images.map((image, imageIndex) => <Image key={image.src} src={image} alt="" fill sizes="(min-width: 768px) 72px, 68px" className="object-cover transition-opacity duration-[800ms] motion-reduce:transition-none" style={{ opacity: imageIndex === (reducedMotion ? offset : index) ? 1 : 0 }} />)}
    </span>
  );
}

export function SmileyReel() {
  const [panel, setPanel] = useState(0);
  const [wink, setWink] = useState(false);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    if (panel === 0) {
      const winkTimer = window.setTimeout(() => setWink(true), 1400);
      const handTimer = window.setTimeout(() => { setWink(false); setPanel(1); }, 2000);
      return () => { window.clearTimeout(winkTimer); window.clearTimeout(handTimer); };
    }
    const timer = window.setTimeout(() => setPanel((current) => current === 1 ? 2 : 0), panel === 1 ? 1500 : 400);
    return () => window.clearTimeout(timer);
  }, [panel, reducedMotion]);

  return (
    <div aria-hidden="true" className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#FDFBE6]">
      <div className="h-7 w-7 overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] motion-reduce:transition-none" style={{ transform: `translateY(-${(reducedMotion ? 0 : panel) * 100}%)` }}>
          <div className="grid h-7 w-7 place-items-center"><svg viewBox="0 0 44 44" className="h-6 w-6"><circle cx="16" cy="18" r="2.4" fill="#1a1a1a" />{wink && !reducedMotion ? <path d="M25 18.5c1.4-1.6 3.4-1.6 4.8 0" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" /> : <circle cx="28" cy="18" r="2.4" fill="#1a1a1a" />}<path d="M14 26c2.6 3.6 13.4 3.6 16 0" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" /></svg></div>
          <div className="grid h-7 w-7 place-items-center"><svg viewBox="0 0 44 44" className="hero-hand h-6 w-6"><g stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M15 24V13.5a2 2 0 0 1 4 0V22" /><path d="M19 21v-9.5a2 2 0 0 1 4 0V22" /><path d="M23 21v-8a2 2 0 0 1 4 0V23" /><path d="M27 22v-5a2 2 0 0 1 4 0v9a9 9 0 0 1-9 9c-4 0-6-2-7.4-5L11 25a2 2 0 0 1 3.4-2.1l1.6 2.3" /></g></svg></div>
          <div className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
}

export function Intro() {
  const [progress, setProgress] = useState(0);
  const reducedMotion = useReducedMotion();
  useEffect(() => {
    if (reducedMotion) return;
    const start = performance.now();
    const timer = window.setInterval(() => {
      const next = Math.min(100, Math.floor((performance.now() - start) / 40) * 2);
      setProgress(next);
      if (next === 100) window.clearInterval(timer);
    }, 40);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <div aria-hidden="true" className="intro-screen pointer-events-none fixed inset-0 z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center"><div className="intro-orb relative flex aspect-square w-[min(440px,82vw)] items-center justify-center rounded-full"><div className="intro-orb-shine absolute rounded-full" /><div className="relative flex text-[52px] font-medium tracking-tight text-neutral-500">{"Essy".split("").map((letter, index) => <span key={index} className="intro-letter" style={{ animationDelay: `${0.15 + index * 0.08}s` }}>{letter}</span>)}</div></div><div className="mt-6 text-[15px] tabular-nums text-neutral-500">{progress}%</div></div>
    </div>
  );
}
