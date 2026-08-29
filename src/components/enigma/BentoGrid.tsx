import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import reading from "@/assets/essy-reading.jpg";
import laptopDash from "@/assets/essy-laptop-dash.jpg";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";
import notes from "@/assets/essy-notes.jpg";
import productLabIcon from "@/assets/product-lab-icon.png";

export function BentoGrid() {
  return (
    <section id="resources" className="px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-3 sm:gap-4 md:grid-cols-3">
        {/* ---------- column 1 ---------- */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <article className="flex flex-1 flex-col justify-between overflow-hidden rounded-[28px] bg-ink p-5 text-white">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[11px]">
                  ◐
                </span>
                <span className="text-[13px] font-medium">The Rabbit Hole</span>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-white/60">
                Curious by nature. Obsessed with what&apos;s under the surface — deep dives into
                products, people, ideas, and the random rabbit holes in between.
              </p>
              <button className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white">
                Explore <ArrowUpRight size={11} />
              </button>
            </div>
            <Image
              src={laptopDash}
              alt="Notes and experiments from the rabbit hole"
              sizes="(max-width: 768px) 100vw, 380px"
              className="mt-5 h-40 w-full rounded-2xl object-cover"
            />
            <div className="mt-3 text-[10px] tracking-wide text-white/40">MAY 6, THOUGHTS</div>
          </article>

          <article className="rounded-[28px] bg-sage-soft p-5">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium text-ink">
              ✦ Kind words
            </span>
            <p className="mt-3 text-[12px] italic leading-relaxed text-ink/80">
              &ldquo;Every launch with Essy leaves me smarter. She sees the seams other people
              miss.&rdquo;
            </p>
            <div className="mt-3 text-[10px] font-medium tracking-wide text-muted-ink">
              — MAYA O., PM AT NORTHWIND
            </div>
          </article>
        </div>

        {/* ---------- column 2 ---------- */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <article className="group flex flex-1 cursor-pointer flex-col rounded-[28px] bg-[#f1f1ef] p-5 ring-1 ring-black/5">
            <h3 className="text-[26px] font-medium leading-[1.1] tracking-tight text-ink transition-colors duration-500 group-hover:text-[#6b7d3a]">
              Tools &amp;
              <br />
              Templates{" "}
              <ArrowRight
                size={22}
                className="inline-block align-middle transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </h3>

            <p className="mt-3 text-[12px] leading-relaxed text-muted-ink">
              Systems, files and starter kits I actually use — free to steal and make yours.
            </p>

            {/* expanding thumbnail stack */}
            <div className="mt-4 flex items-end">
              {[phone, slide, notes].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden
                  sizes="68px"
                  style={{ transitionDelay: `${i * 60}ms`, zIndex: 3 - i }}
                  className={[
                    "relative h-[68px] w-[68px] rounded-[16px] object-cover shadow-[0_10px_24px_-14px_rgba(0,0,0,0.45)] ring-2 ring-[#f1f1ef]",
                    "transition-all duration-500 [transition-timing-function:cubic-bezier(0.7,0,0.2,1)]",
                    i === 0
                      ? ""
                      : i === 1
                        ? "-ml-[52px] rotate-[4deg] group-hover:ml-1.5 group-hover:rotate-0"
                        : "-ml-[52px] rotate-[8deg] group-hover:ml-1.5 group-hover:rotate-0",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-medium text-ink/60">
              <span className="rounded-full bg-black/5 px-2.5 py-1">✦ Notion</span>
              <span className="rounded-full bg-black/5 px-2.5 py-1">◐ Figma</span>
              <span className="rounded-full bg-black/5 px-2.5 py-1">20+ kits</span>
            </div>

            <button className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white">
              Browse the kits
              <ArrowRight
                size={16}
                className="text-butter-deep transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </article>

          <article className="flex flex-col items-center justify-center rounded-[28px] bg-sage-soft px-6 py-10 text-center">
            <h3 className="font-serif text-[38px] italic leading-none tracking-tight text-ink sm:text-[46px]">
              resources
            </h3>
            <p className="mt-3 max-w-[26ch] text-[11px] leading-relaxed text-ink/70">
              The stack, the file, and the reads I&apos;d hand a younger me.
            </p>
          </article>
        </div>

        {/* ---------- column 3 ---------- */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <article className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-[28px] bg-[#f1f1ef] p-5 ring-1 ring-black/5">
            <Image
              src={productLabIcon}
              alt=""
              aria-hidden
              sizes="(max-width: 640px) 144px, 176px"
              className="pointer-events-none absolute bottom-3 right-2 h-36 w-36 object-contain sm:h-44 sm:w-44"
            />
            <div className="relative max-w-[60%]">
              <h3 className="text-[28px] font-medium leading-[1.05] tracking-tight text-ink sm:text-[32px]">
                The Product Lab
              </h3>
              <p className="mt-3 text-[12px] leading-relaxed text-muted-ink">
                Teardowns, case studies, and behind-the-scenes breakdowns of products worth
                studying.
              </p>
            </div>
            <button className="relative mt-10 inline-flex w-fit items-center gap-6 rounded-full bg-ink px-5 py-3 text-[13px] font-medium text-white">
              Enter the Lab
              <ArrowRight
                size={16}
                className="text-butter-deep transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </article>

          <div className="overflow-hidden rounded-[28px]">
            <Image
              src={reading}
              alt="Essy reading"
              sizes="(max-width: 768px) 100vw, 380px"
              className="h-56 w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* closing line */}
      <div className="mx-auto mt-14 max-w-3xl text-center">
        <p className="text-[clamp(20px,3vw,34px)] font-normal leading-snug tracking-tight text-ink">
          Making{" "}
          <span className="inline-block h-8 w-12 overflow-hidden rounded-xl align-middle">
            <Image src={reading} alt="" aria-hidden sizes="48px" className="h-full w-full object-cover" />
          </span>{" "}
          <span className="inline-block h-8 w-12 overflow-hidden rounded-xl align-middle">
            <Image src={slide} alt="" aria-hidden sizes="48px" className="h-full w-full object-cover" />
          </span>{" "}
          things is how I make
          <br className="hidden sm:block" /> sense of the world
        </p>
      </div>
    </section>
  );
}
