"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import books from "@/assets/images/essy-books.jpg";
import slide from "@/assets/images/essy-slide.jpg";
import notes from "@/assets/images/essy-notes.jpg";
import laptopDash from "@/assets/images/essy-laptop-dash.jpg";

const adventures = [
  { tag: "Shop", title: "Pitch Deck Starter", subtitle: "Tools & Templates", body: "Twelve slides that respect the three-second decision — structured the way investors actually read, and editable in Figma without touching a single master component.", image: slide, alt: "A pitch deck slide open on a laptop", href: "/tools-and-templates", cta: "Browse the kits" },
  { tag: "Read", title: "Rabbit holes are a feature", subtitle: "Why Not Build?", body: "Curiosity compounds. A short field guide to following the thread all the way down without losing the plot — and turning what you find into something you can actually build.", image: books, alt: "A stack of books on a desk", href: "/blog", cta: "Read the publication" },
  { tag: "Learn", title: "Build Your First Digital Product", subtitle: "Courses & Certifications", body: "From fuzzy idea to a real thing people can use. Research it, scope it, ship it, then tell the story — the same loop I run in public, taught step by step.", image: laptopDash, alt: "A dashboard being designed on a laptop", href: "/courses", cta: "Enter the classroom" },
  { tag: "Shop", title: "Product Brief Template", subtitle: "Tools & Templates", body: "The one-pager that turns a fuzzy idea into a scope you can hand to someone else. Problem, user, bet, and the smallest thing worth shipping first.", image: notes, alt: "A notebook open beside a laptop", href: "/tools-and-templates", cta: "Browse the kits" },
];

export function Adventures() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useRef(false);
  const swipe = useRef<{ x: number; y: number; pointerId: number } | null>(null);

  function changeSlide(direction: number) {
    setIndex((current) => (current + direction + adventures.length) % adventures.length);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { visible.current = entry.isIntersecting; }, { threshold: 0.25 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || hovered || focused || dragging) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const timer = window.setInterval(() => {
      if (visible.current && !document.hidden && !motion.matches) {
        setIndex((current) => (current + 1) % adventures.length);
      }
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, focused, dragging]);

  return (
    <section ref={sectionRef} id="adventures" aria-labelledby="adventures-heading" aria-roledescription="carousel" className="relative scroll-mt-6 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 id="adventures-heading" className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight">Pick an <span className="font-serif italic">adventure</span></h2>
        <p className="mx-auto mt-2 max-w-md text-[12px] text-muted-ink">Each one leads somewhere small and useful.</p>
      </div>
      <div className="mx-auto mt-12 max-w-6xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }} onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          changeSlide(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
        <div className="touch-pan-y overflow-hidden" onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0 || (event.target as HTMLElement).closest("a, button")) return;
          swipe.current = { x: event.clientX, y: event.clientY, pointerId: event.pointerId };
          setDragging(true);
          event.currentTarget.setPointerCapture(event.pointerId);
        }} onPointerUp={(event) => {
          const start = swipe.current;
          swipe.current = null;
          setDragging(false);
          if (!start || start.pointerId !== event.pointerId) return;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy)) changeSlide(dx < 0 ? 1 : -1);
        }} onPointerCancel={() => { swipe.current = null; setDragging(false); }}>
          <div className="grid grid-flow-col auto-cols-[100%] items-start transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none" style={{ transform: `translateX(-${index * 100}%)` }}>
            {adventures.map((adventure, slideIndex) => (
              <div key={adventure.title} inert={slideIndex !== index} aria-hidden={slideIndex !== index} role="group" aria-roledescription="slide" aria-label={`${slideIndex + 1} of ${adventures.length}: ${adventure.title}`} className="min-w-0 px-3 py-3 md:px-4">
                <article className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:gap-14">
                  <div>
                    <div className="rotate-[-1.6deg] rounded-[30px] bg-card p-2.5 shadow-[0_10px_26px_-20px_rgba(17,17,17,0.25)] ring-1 ring-black/[0.06]">
                      <Image src={adventure.image} alt={adventure.alt} draggable={false} sizes="(min-width: 1280px) 500px, (min-width: 768px) 45vw, 100vw" className="aspect-[4/3] w-full rounded-[22px] object-cover" />
                    </div>
                    <div className="mt-6 text-right">
                      <h3 className="text-[20px] font-medium tracking-tight">{adventure.title}</h3>
                      <p className="mt-0.5 text-[13px] text-muted-ink">{adventure.subtitle}</p>
                    </div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/70"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" />{adventure.tag}</span>
                    <p className="mt-5 max-w-[46ch] text-[clamp(15px,1.7vw,20px)] leading-[1.6] tracking-tight">{adventure.body}</p>
                    <Link href={adventure.href} prefetch={false} className="mt-8 inline-flex w-fit items-center rounded-full bg-ink px-6 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-90">{adventure.cta}</Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-1">
          <button type="button" aria-label="Previous adventure" onClick={() => changeSlide(-1)} className="grid h-11 w-11 place-items-center rounded-full hover:bg-black/5"><Icon name="arrow-right" className="h-4 w-4 rotate-180" /></button>
          {adventures.map((adventure, slideIndex) => <button key={adventure.title} type="button" onClick={() => setIndex(slideIndex)} aria-label={`Show ${adventure.title}`} aria-current={slideIndex === index ? "true" : undefined} className="grid h-11 min-w-8 place-items-center rounded-full"><span className={`h-1.5 rounded-full transition-[width,background-color] motion-reduce:transition-none ${slideIndex === index ? "w-7 bg-ink" : "w-1.5 bg-ink/20"}`} /></button>)}
          <button type="button" aria-label="Next adventure" onClick={() => changeSlide(1)} className="grid h-11 w-11 place-items-center rounded-full hover:bg-black/5"><Icon name="arrow-right" className="h-4 w-4" /></button>
          <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Resume automatic slides" : "Pause automatic slides"} className="min-h-11 rounded-full px-3 text-[12px] text-ink/70 hover:bg-black/5">{paused ? "Play" : "Pause"}</button>
        </div>
        <p className="sr-only" aria-live={paused || focused || hovered || dragging ? "polite" : "off"} aria-atomic="true">{index + 1} of {adventures.length}: {adventures[index].title}</p>
      </div>
    </section>
  );
}
