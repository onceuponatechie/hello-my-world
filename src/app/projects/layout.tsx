import type { ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { MotionEffects } from "@/components/motion-effects";
import { HeroBackground } from "@/components/hero-background";

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return <div className="relative isolate mx-auto min-h-screen max-w-[1440px]">
    <HeroBackground />
    <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 rounded-full bg-card px-4 py-2 focus:not-sr-only focus:fixed">Skip to content</a>
    <SiteNav />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <SiteFooter />
    <MotionEffects />
  </div>;
}
