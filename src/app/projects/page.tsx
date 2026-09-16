import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { projectEntries } from "@/data/projects";

export const metadata: Metadata = { title: "Selected projects — Essy Udeme", description: "An evolving collection of products, research, and stories by Essy Udeme." };

export default function ProjectsPage() {
  return <div className="px-4 pb-20 pt-20 sm:px-8 md:pt-28">
    <header className="mx-auto max-w-6xl pb-14 md:pb-20">
      <div data-reveal="" className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-ink/55"><span className="h-2 w-2 rounded-full bg-sage" />The work, so far <span className="ml-auto tracking-normal">01 — 06</span></div>
      <h1 data-reveal="" data-delay="90" className="mt-8 text-[clamp(56px,9vw,120px)] leading-[0.95] tracking-[-0.055em]">Ideas made<br /><span className="font-serif italic">tangible.</span></h1>
      <div data-reveal="" data-delay="180" className="mt-10 flex flex-col justify-between gap-6 border-t border-ink/15 pt-7 md:flex-row md:items-end">
        <p className="max-w-[42ch] text-[17px] leading-relaxed text-ink/60">Products, experiments, and stories. A collection of curious questions turned into things you can see, use, and feel.</p>
        <span className="text-[11px] uppercase tracking-[0.15em] text-ink/45">Research / Build / Tell</span>
      </div>
    </header>
    <section aria-label="All projects" className="mx-auto grid max-w-6xl gap-x-7 gap-y-12 md:grid-cols-2 md:gap-y-20">
      {projectEntries.map((project, index) => <article key={project.slug} data-reveal={index % 2 ? "right" : "left"} data-delay={index % 2 ? 100 : 0} className="min-w-0">
        <Link href={`/projects/${project.slug}`} className="group block" aria-label={`Explore ${project.name}`}>
          <div className={`relative overflow-hidden rounded-[28px] p-4 sm:rounded-[36px] sm:p-6 ${project.tint}`}>
            <div className="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-ink/55"><span>{String(index + 1).padStart(2, "0")} / {project.category}</span><span>{project.year}</span></div>
            <div className="overflow-hidden rounded-[20px]"><Image src={project.image} alt={project.name} sizes="(min-width: 1280px) 520px, (min-width: 768px) 45vw, 90vw" className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transform-none" /></div>
            <span aria-hidden="true" className="absolute bottom-8 right-8 grid h-12 w-12 place-items-center rounded-full bg-card text-ink transition-all duration-300 group-hover:-rotate-45 group-hover:bg-ink group-hover:text-white"><Icon name="arrow-up-right" className="h-5 w-5" /></span>
          </div>
          <div className="px-1 pt-5"><p className="text-[10px] uppercase tracking-[0.15em] text-ink/45">{project.role}</p><h2 className="mt-2 text-[clamp(25px,3vw,36px)] font-medium leading-tight tracking-tight">{project.name}</h2><p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-ink/60">{project.kicker}</p></div>
        </Link>
      </article>)}
    </section>
    <p className="mx-auto mt-16 max-w-6xl border-t border-ink/10 pt-6 text-[12px] text-ink/45">An evolving portfolio. These six concept stories are placeholders for the work to come.</p>
  </div>;
}
