import { Hero } from "@/components/hero";
import { SiteNav } from "@/components/site-nav";
import { Resources } from "@/components/resources";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1440px] bg-backdrop">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 rounded-full bg-card px-4 py-2 focus:not-sr-only focus:fixed">
        Skip to content
      </a>
      <SiteNav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Resources />
        <About />
        <Projects />
      </main>
    </div>
  );
}
