"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import laptopDash from "@/assets/essy-laptop-dash.jpg";
import insight from "@/assets/essy-insight.jpg";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    name: "Streamline Dashboard",
    tag: "Case study",
    year: "2026",
    role: "Product design",
    body: "A single canvas for revenue ops. Cut daily reporting from 2 hours to 6 minutes without adding a single new tool.",
    img: laptopDash,
    stat: "38%",
    statLabel: "faster decision loop",
  },
  {
    name: "Insight Studio",
    tag: "Case study",
    year: "2025",
    role: "Web · Analytics",
    body: "A calmer analytics home for a research team who lived in eight tabs at once, rebuilt around one question at a time.",
    img: insight,
    stat: "4×",
    statLabel: "less tab switching",
  },
  {
    name: "Pocket Coach",
    tag: "Case study",
    year: "2025",
    role: "iOS · Wellness",
    body: "A pocket-sized nudge app that helps founders keep one promise a day, with streaks that forgive a missed morning.",
    img: phone,
    stat: "4.8★",
    statLabel: "App Store rating",
  },
  {
    name: "Sage Deck",
    tag: "Case study",
    year: "2024",
    role: "Brand · Deck system",
    body: "A deck kit that reads like a magazine and closes like a founder brief — built once, reused across every raise.",
    img: slide,
    stat: "3 May",
    statLabel: "launch day",
  },
];

const tints = ["bg-butter-soft", "bg-sage-soft", "bg-lavender-soft", "bg-[#f6f6f6]"];

export function PromiseSection() {
  return (
    <section id="projects" className="relative px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-serif text-[clamp(44px,7vw,88px)] italic leading-none tracking-tight text-ink">
          projects
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-muted-ink">
          A handful of the things I&apos;ve made lately — for people I like, on ideas I
          couldn&apos;t stop thinking about.
        </p>
      </div>

      <div className="relative mt-14">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} index={i} total={projects.length} {...p} />
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projects)[number] & { index: number; total: number };

function ProjectCard({
  name,
  tag,
  year,
  role,
  body,
  img,
  stat,
  statLabel,
  index,
  total,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const isLast = index === total - 1;
  const dark = index % 2 === 0;

  return (
    <div ref={ref} className="sticky top-16 h-[100svh] md:top-20" style={{ zIndex: index + 1 }}>
      <motion.article
        style={{
          scale: isLast ? 1 : scale,
          y: isLast ? 0 : y,
          transformOrigin: "top center",
        }}
        className={`group relative mx-auto max-w-6xl overflow-hidden rounded-[32px] ring-1 ring-black/5 md:h-[calc(100svh-7rem)] md:rounded-[44px] ${tints[index % tints.length]} shadow-[0_1px_2px_rgba(0,0,0,0.03),0_24px_44px_-32px_rgba(0,0,0,0.14)]`}
      >
        <a href="#projects" aria-label={name} className="absolute inset-0 z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch">
          {/* image */}
          <div className="order-1 p-3 md:order-2 md:p-4">
            <div className="relative aspect-[16/10] h-full w-full overflow-hidden rounded-3xl md:aspect-auto md:rounded-[32px]">
              <Image
                src={img}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 576px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04] group-active:scale-[1.04]"
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              />

              {/* floating stat chip */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.75, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: dark ? -3 : 2 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.25 }}
                className={`absolute left-4 top-4 z-20 flex max-w-[60%] items-end gap-3 rounded-2xl px-3 py-2 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] md:left-6 md:top-6 ${
                  dark ? "bg-ink text-white" : "bg-card text-ink"
                }`}
              >
                <div className="min-w-0">
                  <div className="text-[20px] font-semibold leading-none tracking-tight md:text-[24px]">
                    {stat}
                  </div>
                  <div className="mt-1 max-w-[14ch] text-[10px] leading-snug opacity-60 md:text-[11px]">
                    {statLabel}
                  </div>
                </div>
                <div className="flex shrink-0 items-end gap-1 pb-1 opacity-50">
                  {[5, 9, 13, 17].map((h) => (
                    <span
                      key={h}
                      className="w-1 rounded-full bg-current"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* corner marks */}
              <div className="pointer-events-none absolute bottom-4 right-4 z-20 flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-card/85 text-ink opacity-80 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={14} />
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-[11px] font-medium text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* text */}
          <div className="order-2 flex flex-col justify-center gap-4 p-6 md:order-1 md:gap-5 md:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-[12px] text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" /> {tag}
            </span>
            <h3 className="text-[clamp(1.7rem,3vw,2.6rem)] font-medium leading-[1.1] tracking-tight text-ink">
              {name}
            </h3>
            <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink/45">
              {year}
              <span className="h-1 w-1 rounded-full bg-ink/30" />
              {role}
            </div>
            <p className="line-clamp-3 max-w-[44ch] text-[14px] leading-[1.6] text-ink/65 md:line-clamp-none md:text-[15px]">
              {body}
            </p>
            <div className="relative z-20 mt-1 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-[12px] font-medium text-white transition-colors hover:bg-ink"
              >
                View Case Study
                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                />
              </a>
              <a
                href="#projects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[12px] font-medium text-ink hover:underline"
              >
                Go live <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </motion.article>

      {isLast && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mt-9 flex max-w-6xl items-center justify-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-[13px] font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Explore all projects
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      )}
    </div>
  );
}
