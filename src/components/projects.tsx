import Image from "next/image";
import { Icon } from "@/components/icon";
import { ProjectStack } from "@/components/project-stack";
import laptopDash from "@/assets/images/essy-laptop-dash.jpg";
import insight from "@/assets/images/essy-insight.jpg";
import phone from "@/assets/images/essy-phone.jpg";
import slide from "@/assets/images/essy-slide.jpg";

const projects = [
  {
    name: "Streamline Dashboard",
    year: "2026",
    role: "Product design",
    body: "A single canvas for revenue ops. Cut daily reporting from 2 hours to 6 minutes without adding a single new tool.",
    image: laptopDash,
    stat: "38%",
    statLabel: "faster decision loop",
    tint: "bg-butter-soft",
  },
  {
    name: "Insight Studio",
    year: "2025",
    role: "Web · Analytics",
    body: "A calmer analytics home for a research team who lived in eight tabs at once, rebuilt around one question at a time.",
    image: insight,
    stat: "4×",
    statLabel: "less tab switching",
    tint: "bg-sage-soft",
  },
  {
    name: "Pocket Coach",
    year: "2025",
    role: "iOS · Wellness",
    body: "A pocket-sized nudge app that helps founders keep one promise a day, with streaks that forgive a missed morning.",
    image: phone,
    stat: "4.8★",
    statLabel: "App Store rating",
    tint: "bg-lavender-soft",
  },
  {
    name: "Sage Deck",
    year: "2024",
    role: "Brand · Deck system",
    body: "A deck kit that reads like a magazine and closes like a founder brief — built once, reused across every raise.",
    image: slide,
    stat: "3 May",
    statLabel: "launch day",
    tint: "bg-[#f6f6f6]",
  },
];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative scroll-mt-6 px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 id="projects-heading" className="font-serif text-[clamp(28px,3.6vw,44px)] italic leading-none tracking-tight">projects</h2>
        <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-muted-ink">
          A handful of the things I&apos;ve made lately — for people I like, on ideas I couldn&apos;t stop thinking about.
        </p>
      </div>

      <ProjectStack>
        {projects.map((project, index) => {
          const dark = index % 2 === 0;
          const titleId = `project-${index + 1}-title`;
          return (
            <div key={project.name} className="project-stack-card relative mt-4 first:mt-0 md:mt-6" style={{ zIndex: index + 1 }}>
              <article aria-labelledby={titleId} className={`group relative mx-auto max-w-6xl overflow-hidden rounded-[32px] p-4 ring-1 ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_24px_44px_-32px_rgba(0,0,0,0.14)] md:rounded-[44px] md:p-5 ${project.tint}`}>
                <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                  <div className="relative order-1 aspect-[16/10] overflow-hidden rounded-[20px] md:order-2 md:aspect-auto md:min-h-[320px] md:rounded-[30px]">
                    <Image src={project.image} alt={project.name} fill sizes="(min-width: 1280px) 546px, (min-width: 768px) 48vw, 100vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none" />
                    <div className={`absolute left-4 top-4 flex max-w-[80%] items-end gap-3 rounded-2xl px-3 py-2 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.35)] md:left-6 md:top-6 md:max-w-[60%] ${dark ? "-rotate-3 bg-ink text-white" : "rotate-2 bg-card text-ink"}`}>
                      <div className="min-w-0">
                        <div className="text-[20px] font-semibold leading-none tracking-tight md:text-[24px]">{project.stat}</div>
                        <div className="mt-1 max-w-[14ch] text-[10px] leading-snug opacity-60 md:text-[11px]">{project.statLabel}</div>
                      </div>
                      <div aria-hidden="true" className="flex shrink-0 items-end gap-1 pb-1 opacity-50">
                        {[5, 9, 13, 17].map((height) => <span key={height} className="w-1 rounded-full bg-current" style={{ height }} />)}
                      </div>
                    </div>
                    <div aria-hidden="true" className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-2">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-card/85 text-ink opacity-80 backdrop-blur"><Icon name="arrow-up-right" className="h-3.5 w-3.5" /></span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-[11px] font-medium text-white">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>

                  <div className="order-2 flex flex-col justify-center gap-4 p-3 pb-0 pt-1 md:order-1 md:gap-5 md:p-7">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-[12px] text-ink/70">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-sage" /> Case study
                    </span>
                    <h3 id={titleId} className="text-[clamp(1.7rem,3vw,2.6rem)] font-medium leading-[1.1] tracking-tight">{project.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-ink/45">
                      {project.year}<span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink/30" />{project.role}
                    </div>
                    <p className="max-w-[44ch] text-[14px] leading-[1.6] text-ink/65 md:text-[15px]">{project.body}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-4">
                      <button type="button" disabled title="Case study coming soon" className="inline-flex cursor-not-allowed items-center rounded-full bg-ink px-6 py-2.5 text-[12px] font-medium text-white">View Case Study</button>
                      <button type="button" disabled title="Live site link coming soon" className="inline-flex cursor-not-allowed items-center gap-1 text-[12px] font-medium text-ink">Go live <Icon name="arrow-up-right" className="h-[13px] w-[13px]" /></button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </ProjectStack>

      <div className="mx-auto mt-10 flex max-w-6xl justify-center">
        <a href="#projects" className="inline-flex items-center rounded-full border border-ink/15 px-5 py-2.5 text-[13px] font-medium transition-colors hover:bg-ink hover:text-white">Back to projects</a>
      </div>
    </section>
  );
}
