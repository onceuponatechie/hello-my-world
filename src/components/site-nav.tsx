"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icon";

const resources = [
  { label: "Tools & Templates", href: "/tools-and-templates" },
  { label: "The Product Lab", href: "/product-lab" },
  { label: "Courses & Certifications", href: "/courses" },
];

function ResourceLinks({ onSelect }: { onSelect: () => void }) {
  return resources.map(({ label, href }) => (
    <Link key={href} href={href} onClick={onSelect} prefetch={false} className="rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-ink/80 transition-colors hover:bg-black/5 hover:text-ink">
      {label}
    </Link>
  ));
}

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopResourcesOpen, setDesktopResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const homeRef = useRef<HTMLAnchorElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const desktopResourcesRef = useRef<HTMLButtonElement>(null);
  const mobileResourcesRef = useRef<HTMLButtonElement>(null);

  function closeMenus() {
    setMobileOpen(false);
    setDesktopResourcesOpen(false);
    setMobileResourcesOpen(false);
  }

  useEffect(() => {
    function handleOutsidePointer(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        closeMenus();
      }
    }

    // Match Tailwind's md breakpoint so a hidden menu never stays open.
    const desktop = window.matchMedia("(min-width: 768px)");
    function handleBreakpointChange() {
      if (headerRef.current?.contains(document.activeElement)) {
        homeRef.current?.focus();
      }
      closeMenus();
    }

    document.addEventListener("pointerdown", handleOutsidePointer);
    desktop.addEventListener("change", handleBreakpointChange);
    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      desktop.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      id="top"
      className="relative z-40 px-5 pt-6 sm:px-10 sm:pt-8"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeMenus();
      }}
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (mobileResourcesOpen) {
          setMobileResourcesOpen(false);
          mobileResourcesRef.current?.focus();
        } else if (mobileOpen) {
          setMobileOpen(false);
          mobileToggleRef.current?.focus();
        } else if (desktopResourcesOpen) {
          setDesktopResourcesOpen(false);
          desktopResourcesRef.current?.focus();
        } else {
          return;
        }
        event.preventDefault();
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <Link ref={homeRef} href="/" onClick={closeMenus} aria-label="Essy — home" className="font-serif text-[20px] italic tracking-tight text-ink">Essy</Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <Link href="/blog" prefetch={false} className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink">Stories</Link>
          <div
            className="relative"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setDesktopResourcesOpen(true);
            }}
            onPointerLeave={(event) => {
              if (!event.currentTarget.contains(document.activeElement)) setDesktopResourcesOpen(false);
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setDesktopResourcesOpen(false);
            }}
          >
            <button ref={desktopResourcesRef} type="button" aria-expanded={desktopResourcesOpen} aria-controls="desktop-resources" onClick={() => setDesktopResourcesOpen(!desktopResourcesOpen)} className="flex items-center gap-1 text-[13px] font-medium text-ink/70 hover:text-ink">
              Resources <Icon name="chevron-down" className={`h-3.5 w-3.5 transition-transform ${desktopResourcesOpen ? "rotate-180" : ""}`} />
            </button>
            <div id="desktop-resources" hidden={!desktopResourcesOpen} className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
              <div className="grid min-w-[210px] gap-1 rounded-2xl border border-ink/10 bg-card p-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
                <ResourceLinks onSelect={closeMenus} />
              </div>
            </div>
          </div>
          <Link href="/#projects" className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink">Projects</Link>
          <Link href="/#about" className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink">About</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#contact" onClick={closeMenus} className="rounded-full bg-ink px-6 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-90">Say hi</Link>
          <button ref={mobileToggleRef} type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => {
            setMobileOpen(!mobileOpen);
            setMobileResourcesOpen(false);
          }} className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-card md:hidden">
            <Icon name={mobileOpen ? "close" : "menu"} className="h-4 w-4" />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" hidden={!mobileOpen} aria-label="Mobile navigation" className="absolute left-5 right-5 top-full mt-4 grid max-h-[calc(100dvh-6rem)] gap-1 overflow-y-auto rounded-3xl border border-ink/10 bg-card p-3 shadow-lg sm:left-10 sm:right-10 md:hidden">
        <Link href="/blog" onClick={closeMenus} prefetch={false} className="rounded-2xl px-4 py-2.5 text-[13px] font-medium hover:bg-black/5">Stories</Link>
        <div>
          <button ref={mobileResourcesRef} type="button" aria-expanded={mobileResourcesOpen} aria-controls="mobile-resources" onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} className="flex w-full items-center justify-between rounded-2xl px-4 py-2.5 text-[13px] font-medium hover:bg-black/5">
            Resources <Icon name="chevron-down" className={`h-3.5 w-3.5 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} />
          </button>
          <div id="mobile-resources" hidden={!mobileResourcesOpen} className="grid pl-4"><ResourceLinks onSelect={closeMenus} /></div>
        </div>
        <Link href="/#projects" onClick={closeMenus} className="rounded-2xl px-4 py-2.5 text-[13px] font-medium hover:bg-black/5">Projects</Link>
        <Link href="/#about" onClick={closeMenus} className="rounded-2xl px-4 py-2.5 text-[13px] font-medium hover:bg-black/5">About</Link>
      </nav>
    </header>
  );
}
