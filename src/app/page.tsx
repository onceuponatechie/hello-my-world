import { Hero } from "@/components/hero";
import { SiteNav } from "@/components/site-nav";
import { Resources } from "@/components/resources";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Adventures } from "@/components/adventures";
import { Newsletter } from "@/components/newsletter";
import { SiteFooter } from "@/components/site-footer";
import { MotionEffects } from "@/components/motion-effects";
import { HeroBackground } from "@/components/hero-background";

export default function HomePage() {
  return (
    <div className="relative isolate mx-auto min-h-screen w-full max-w-[1440px] bg-backdrop">
      <HeroBackground />
      <MotionEffects />
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 rounded-full bg-card px-4 py-2 focus:not-sr-only focus:fixed">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Resources />
        <About />
        <Projects />
        <Adventures />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}
