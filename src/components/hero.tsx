import { Icon } from "@/components/icon";
import { HeroMedia, SmileyReel } from "@/components/hero-motion";

function HeroWords({ text }: { text: string }) {
  return <span aria-hidden="true">{text.split(" ").map((word, index) => <span key={index} className="inline-block whitespace-nowrap">{Array.from(word).map((letter, i) => <span key={i} className="hero-letter inline-block">{letter}</span>)}{index < text.split(" ").length - 1 ? "\u00a0" : ""}</span>)}</span>;
}

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden px-4 py-16 md:pb-36 md:pt-6">
      <div className="relative mx-auto max-w-5xl text-center">
        <div data-hero="0.2"><SmileyReel /></div>
        <div data-hero="0.35" className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-card px-4 py-2 text-[12px] font-medium text-ink/70 shadow-sm">
            <span aria-hidden="true" className="relative h-2 w-2"><span className="absolute inset-0 animate-ping rounded-full bg-sage opacity-75 motion-reduce:animate-none" /><span className="absolute inset-0 rounded-full bg-sage" /></span>
            Open to Collaborations
          </span>
        </div>
        <h1 id="hero-heading" aria-label="Products, people, and the stories worth building." className="mt-8 text-[clamp(32px,6vw,68px)] font-normal leading-[1.12] tracking-tight text-ink md:tracking-[-2.5px]">
          <span className="mb-[0.14em] inline-block md:mb-0"><HeroWords text="Products, people," /></span>
          <br className="md:hidden" />{" "}<HeroWords text="and the" />
          <br className="hidden md:block" />
          <HeroMedia offset={0} /><HeroWords text="stories" />
          <br className="md:hidden" />{" "}<HeroWords text="worth" />
          <br className="hidden md:block" />
          <HeroMedia offset={2} />
          <br className="md:hidden" /><HeroWords text="building." />
        </h1>
        <p data-hero="1.9" className="mt-7 text-[16px] text-ink/70">
          Researcher<span className="mx-2 opacity-50">·</span>Builder<span className="mx-2 opacity-50">·</span>Storyteller
        </p>
        <div data-hero="2.1" className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-[13px] font-medium text-ink transition-colors hover:bg-ink hover:text-white">
            Start here <Icon name="arrow-right" className="h-[15px] w-[15px] transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#resources" className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-[13px] font-medium text-ink transition-colors hover:bg-ink hover:text-white">
            Grab a freebie <Icon name="arrow-right" className="h-[15px] w-[15px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
