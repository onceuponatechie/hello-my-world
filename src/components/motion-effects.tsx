"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, inView, stagger } from "framer-motion";
const ease = [0.22, 1, 0.36, 1] as const;

// Server content stays readable before JavaScript enhances it.
export function MotionEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;
    const controls: { complete: () => void }[] = [];
    const cleanups: (() => void)[] = [];
    const play = (control: { complete: () => void }) => controls.push(control);
    const chips = document.querySelectorAll<HTMLElement>(".hero-chip");
    if (chips.length) play(animate(chips, { opacity: [0, 1], scale: [0.65, 1], y: [12, 0] }, { duration: 0.7, delay: stagger(0.12), ease }));
    document.querySelectorAll<HTMLElement>("[data-hero]").forEach((element) => {
      play(animate(element, { opacity: [0, 1], y: [16, 0] }, { duration: 0.7, delay: Number(element.dataset.hero), ease }));
    });
    const letters = document.querySelectorAll<HTMLElement>(".hero-letter");
    if (letters.length) play(animate(letters, { opacity: [0, 1], y: ["35%", "0%"], filter: ["blur(5px)", "blur(0px)"] }, { duration: 0.45, delay: stagger(0.018, { startDelay: 0.65 }), ease }));

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      const kind = element.dataset.reveal;
      const finalTransform = getComputedStyle(element).transform;
      const from = kind === "fan" ? `translateX(${(1 - Number(element.dataset.index)) * 53}%) rotate(0deg)`
        : kind === "badge" ? "translateY(18px) scale(0.75)"
        : kind === "left" ? "translateX(-36px)"
        : kind === "right" ? "translateX(36px)"
        : kind === "down" ? "translateY(-48px)" : "translateY(30px)";
      element.style.opacity = "0";
      cleanups.push(() => { element.style.removeProperty("opacity"); element.style.removeProperty("transform"); });
      cleanups.push(inView(element, () => {
        if (preference.matches) { element.style.opacity = "1"; return; }
        play(animate(element, { opacity: [0, 1], transform: [from, finalTransform] }, {
          duration: kind === "fan" ? 0.8 : 0.75,
          delay: Number(element.dataset.delay ?? 0) / 1000,
          ease: kind === "badge" ? [0.34, 1.4, 0.64, 1] : ease,
        }));
      }, { margin: "0px 0px -40px 0px", amount: 0.08 }));
    });
    function finish() { controls.forEach((control) => control.complete()); }
    function reduce() { if (preference.matches) { finish(); cleanups.forEach((cleanup) => cleanup()); } }
    preference.addEventListener("change", reduce);
    return () => { finish(); cleanups.forEach((cleanup) => cleanup()); preference.removeEventListener("change", reduce); };
  }, [pathname]);
  return null;
}
