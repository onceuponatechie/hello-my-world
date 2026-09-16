"use client";

import { useEffect } from "react";

// Enhance server-rendered content: without JavaScript everything stays visible.
export function MotionEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations: Animation[] = [];
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const ease = "cubic-bezier(0.22,1,0.36,1)";
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        observer.unobserve(element);
        if (reducedMotion.matches) return;
        const kind = element.dataset.reveal;
        const delay = Number(element.dataset.delay ?? 0);
        const transform = getComputedStyle(element).transform;
        const start = kind === "fan" ? `translateX(${(1 - Number(element.dataset.index)) * 53}%) rotate(0deg)` : kind === "badge" ? "translateY(16px) scale(0.75) rotate(0deg)" : "translateY(26px)";
        const end = kind === "fan" || kind === "badge" ? transform : "translateY(0)";
        animations.push(element.animate([{ opacity: 0, transform: start }, { opacity: 1, transform: end }], { duration: kind === "fan" ? 700 : 650, delay, easing: ease, fill: "backwards" }));
      });
    }, { rootMargin: "0px 0px -80px 0px", threshold: 0.05 });
    elements.forEach((element) => observer.observe(element));
    function stopMotion() { if (reducedMotion.matches) animations.forEach((animation) => animation.cancel()); }
    reducedMotion.addEventListener("change", stopMotion);
    return () => { observer.disconnect(); animations.forEach((animation) => animation.cancel()); reducedMotion.removeEventListener("change", stopMotion); };
  }, []);
  return null;
}
