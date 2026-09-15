import Image, { type StaticImageData } from "next/image";
import reading from "@/assets/images/essy-reading.jpg";
import notes from "@/assets/images/essy-notes.jpg";
import { Icon } from "@/components/icon";

function MediaChip({ image }: { image: StaticImageData }) {
  return (
    <span className="relative mx-[6px] inline-block h-[41px] w-[68px] overflow-hidden rounded-2xl border border-white/20 bg-ink align-middle shadow-[0_20px_40px_-18px_rgba(0,0,0,0.45)] md:h-11 md:w-[72px]">
      <Image src={image} alt="" fill sizes="(min-width: 768px) 72px, 68px" className="object-cover" />
    </span>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden px-4 py-16 md:pb-36 md:pt-6">
      <div className="relative mx-auto max-w-5xl text-center">
        <div aria-hidden="true" className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-[#FDFBE6]">
          <svg viewBox="0 0 44 44" className="h-6 w-6">
            <circle cx="16" cy="18" r="2.4" fill="#1a1a1a" />
            <circle cx="28" cy="18" r="2.4" fill="#1a1a1a" />
            <path d="M14 26c2.6 3.6 13.4 3.6 16 0" stroke="#1a1a1a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div className="mt-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-card px-4 py-2 text-[12px] font-medium text-ink/70 shadow-sm">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-sage" />
            Open to Collaborations
          </span>
        </div>
        <h1 id="hero-heading" aria-label="Products, people, and the stories worth building." className="mt-8 text-[clamp(32px,6vw,68px)] font-normal leading-[1.12] tracking-tight text-ink md:tracking-[-2.5px]">
          <span className="mb-[0.14em] inline-block md:mb-0">Products, people,</span>
          <br className="md:hidden" />{" "}and the
          <br className="hidden md:block" />
          <MediaChip image={reading} />stories
          <br className="md:hidden" />{" "}worth
          <br className="hidden md:block" />
          <MediaChip image={notes} />
          <br className="md:hidden" />building.
        </h1>
        <p className="mt-7 text-[16px] text-ink/70">
          Researcher<span className="mx-2 opacity-50">·</span>Builder<span className="mx-2 opacity-50">·</span>Storyteller
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
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
