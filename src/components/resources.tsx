import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import reading from "@/assets/images/essy-reading.jpg";
import phone from "@/assets/images/essy-phone.jpg";
import slide from "@/assets/images/essy-slide.jpg";
import notes from "@/assets/images/essy-notes.jpg";
import rabbitHole from "@/assets/images/rabbit-hole-3d.png";
import productLab from "@/assets/images/product-lab-icon-new.png";

const cardBase =
  "group relative flex flex-col overflow-hidden rounded-[28px] transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(17,17,17,0.25)] motion-reduce:transform-none motion-reduce:transition-none";

const pillClass =
  "mt-6 inline-flex w-fit items-center rounded-full border border-ink/25 px-5 py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white";

function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${className}`}>{children}</span>;
}

function CornerArrow({ tone }: { tone: "dark" | "glass" }) {
  const colors = tone === "dark"
    ? "bg-white/10 text-white group-hover:bg-butter group-hover:text-ink"
    : "bg-white/90 text-ink backdrop-blur group-hover:bg-ink group-hover:text-white";

  return (
    <span aria-hidden="true" className={`absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full transition-colors duration-300 ${colors}`}>
      <Icon name="arrow-up-right" className="h-[15px] w-[15px] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none" />
    </span>
  );
}

function TemplateFan() {
  const photos = [
    { image: phone, left: "0%", top: "4.8%", rotate: -9 },
    { image: slide, left: "26.5%", top: "0%", rotate: -1 },
    { image: notes, left: "53%", top: "6.2%", rotate: 8 },
  ];

  return (
    <div aria-hidden="true" className="flex w-[55%] max-w-[200px] shrink-0 items-center min-[420px]:w-[40%] md:w-[55%] lg:w-[40%]">
      <div className="relative aspect-[196/145] w-full">
        {photos.map(({ image, left, top, rotate }, index) => (
          <div key={image.src} data-reveal="fan" data-index={index} data-delay={350 + index * 120} style={{ left, top, transform: `rotate(${rotate}deg)`, zIndex: 3 - index }} className="absolute h-[94%] w-[47%] overflow-hidden rounded-[14px] shadow-[0_16px_34px_-18px_rgba(0,0,0,0.45)] ring-1 ring-black/[0.06]">
            <Image src={image} alt="" fill sizes="(min-width: 768px) 80px, 100px" className="object-cover" />
          </div>
        ))}
        <span data-reveal="badge" data-delay="800" className="absolute bottom-[8%] left-[36%] z-10 grid aspect-square w-[24%] place-items-center rounded-full bg-card shadow-[0_10px_24px_-10px_rgba(0,0,0,0.4)] ring-1 ring-black/[0.06]">
          <span className="grid aspect-square w-[58%] place-items-center rounded-full bg-sage-soft text-ink">
            <Icon name="layers" className="h-3 w-3" />
          </span>
        </span>
      </div>
    </div>
  );
}

export function Resources() {
  return (
    <section id="resources" aria-labelledby="resources-heading" className="scroll-mt-6 px-4 pb-14 sm:px-8 sm:pb-20">
      <h2 id="resources-heading" className="sr-only">Explore stories and resources</h2>
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[minmax(290px,auto)_minmax(290px,auto)]">
        <Link data-reveal="" data-delay="50" href="/blog" prefetch={false} aria-labelledby="publication-title" className={`${cardBase} bg-ink p-7 text-white lg:col-span-4 lg:row-span-2`}>
          <CornerArrow tone="dark" />
          <Kicker className="pr-10 text-white/40">The Publication</Kicker>
          <h3 id="publication-title" className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.8px]">Why Not Build?</h3>
          <p className="mt-2.5 max-w-[28ch] text-[13px] leading-relaxed text-white/60">
            Turning curiosity into action — deep dives into products, people, careers, and the ideas worth building.
          </p>
          <div className="relative mt-6 flex flex-1 items-end justify-center">
            <Image src={rabbitHole} alt="A laptop glowing with a spiral tunnel, surrounded by floating idea cards" sizes="(min-width: 1280px) 330px, (min-width: 768px) 30vw, 340px" className="h-auto w-[80%] max-w-[340px] translate-y-4 select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none md:w-[105%] md:max-w-none" />
          </div>
        </Link>

        <Link data-reveal="" data-delay="140" href="/tools-and-templates" prefetch={false} aria-labelledby="templates-title" className={`${cardBase} bg-stone p-7 ring-1 ring-black/5 lg:col-span-5`}>
          <div className="flex flex-1 flex-col items-center gap-4 min-[420px]:flex-row md:flex-col lg:flex-row">
            <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch">
              <div>
                <Kicker className="text-muted-ink">Free kits & files</Kicker>
                <h3 id="templates-title" className="mt-3 text-[24px] font-medium leading-tight tracking-[-0.8px] lg:text-[26px]">Tools & Templates</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-muted-ink">
                  The systems, files, and checklists I actually use — packaged up and free to take.
                </p>
              </div>
              <span className={pillClass}>Browse the kits</span>
            </div>
            <TemplateFan />
          </div>
        </Link>

        <Link data-reveal="" data-delay="230" href="/product-lab" prefetch={false} aria-labelledby="lab-title" className={`${cardBase} min-h-[300px] bg-stone p-7 ring-1 ring-black/5 lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:min-h-0`}>
          <div className="relative z-10 min-[420px]:max-w-[62%] md:max-w-full lg:max-w-[62%]">
            <Kicker className="text-ink/45">Teardowns & case studies</Kicker>
            <h3 id="lab-title" className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.8px]">The Product Lab</h3>
            <p className="mt-2.5 text-[13px] leading-relaxed text-ink/60">
              Breakdowns of products worth studying — what shipped, what stuck, and why.
            </p>
          </div>
          <div className="min-h-6 flex-1" />
          <span className={`${pillClass} relative z-10 mt-0`}>Enter the Lab</span>
          <Image src={productLab} alt="" sizes="(min-width: 1280px) 190px, (min-width: 768px) 16vw, 39vw" className="pointer-events-none absolute -bottom-6 -right-4 h-auto w-[39%] max-w-[210px] select-none drop-shadow-[0_24px_44px_rgba(17,17,17,0.18)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:rotate-2 motion-reduce:transform-none motion-reduce:transition-none" />
        </Link>

        <Link data-reveal="" data-delay="320" href="/courses" prefetch={false} aria-labelledby="courses-title" className={`${cardBase} justify-between bg-sage-soft p-7 lg:col-span-3 lg:col-start-5 lg:row-start-2`}>
          <div>
            <Kicker className="text-ink/45">Courses & certifications</Kicker>
            <h3 id="courses-title" className="mt-3 font-serif text-[34px] italic leading-none tracking-tight">the classroom</h3>
            <p className="mt-3 text-[13px] leading-relaxed text-ink/70 md:max-w-[26ch]">
              Courses I&apos;m building, the ones I&apos;ve curated, and the certifications earned along the way.
            </p>
          </div>
          <span className={pillClass}>Enter the classroom</span>
        </Link>

        <a data-reveal="" data-delay="410" href="#about" aria-labelledby="meet-essy-title" className={`${cardBase} min-h-64 ring-1 ring-black/5 lg:col-span-3 lg:col-start-10 lg:row-start-1`}>
          <CornerArrow tone="glass" />
          <Image src={reading} alt="Essy reading a book on a sunlit sofa" fill sizes="(min-width: 1280px) 276px, (min-width: 768px) 25vw, 100vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-6 pb-5 pt-14">
            <Kicker className="text-white/60">The human behind it</Kicker>
            <h3 id="meet-essy-title" className="mt-1 text-[17px] font-medium tracking-tight text-white">Meet Essy</h3>
          </div>
        </a>
      </div>
    </section>
  );
}
