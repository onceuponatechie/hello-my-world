import { Nav } from "@/components/enigma/Nav";
import { Hero } from "@/components/enigma/Hero";
import { BentoGrid } from "@/components/enigma/BentoGrid";
import { PromiseSection } from "@/components/enigma/PromiseSection";
import { CasesSection } from "@/components/enigma/CasesSection";
import { TouchBand, Footer } from "@/components/enigma/TouchBand";
import Image from "next/image";
import heroCover from "@/assets/hero-cover.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-backdrop">
      {/* Preloader lands here in step 9 */}

      <main className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-backdrop">
        {/* Hero band — cover photo, fade, then content on top */}
        <div className="relative overflow-hidden">
          <Image
            src={heroCover}
            alt=""
            aria-hidden
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="pointer-events-none object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-backdrop" />

          <div className="relative">
            <Nav />
            <Hero />
          </div>
        </div>

        <BentoGrid />
        <PromiseSection />
        <CasesSection />
        <TouchBand />
        <Footer />
      </main>
    </div>
  );
}

function Slot({ name, height }: { name: string; height: string }) {
  return (
    <section
      className={`${height} grid place-items-center border border-dashed border-ink/15`}
    >
      <span className="text-[12px] uppercase tracking-widest text-muted-ink">
        {name}
      </span>
    </section>
  );
}