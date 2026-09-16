import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icon";
import { projectEntries } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projectEntries.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectEntries.find((entry) => entry.slug === slug);
  return { title: project ? `${project.name} — Essy Udeme` : "Project not found", description: project?.kicker };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const index = projectEntries.findIndex((entry) => entry.slug === slug);
  if (index < 0) notFound();
  const project = projectEntries[index];
  const next = projectEntries[(index + 1) % projectEntries.length];
  return <div className="px-4 pb-20 pt-16 sm:px-8 md:pt-24">
    <header className="mx-auto max-w-6xl">
      <Link href="/projects" className="inline-flex items-center gap-2 text-[12px] text-ink/60 hover:text-ink"><Icon name="arrow-right" className="h-3 w-3 rotate-180" />All projects</Link>
      <p data-reveal="" className="mt-12 text-[11px] uppercase tracking-[0.18em] text-ink/50">{project.category} / {project.year}</p>
      <h1 data-reveal="" data-delay="80" className="mt-4 max-w-[14ch] text-[clamp(46px,7.5vw,96px)] font-medium leading-[1.02] tracking-[-0.05em]">{project.name}</h1>
      <p data-reveal="" data-delay="150" className="mt-5 font-serif text-[clamp(28px,3.7vw,46px)] italic text-ink/65">{project.kicker}</p>
      <dl data-reveal="" className="mt-10 grid grid-cols-2 gap-5 border-y border-ink/15 py-6 text-[13px] sm:grid-cols-3"><div><dt className="mb-2 text-[10px] uppercase tracking-wider text-ink/40">Focus</dt><dd>{project.role}</dd></div><div><dt className="mb-2 text-[10px] uppercase tracking-wider text-ink/40">Year</dt><dd>{project.year}</dd></div><div><dt className="mb-2 text-[10px] uppercase tracking-wider text-ink/40">Status</dt><dd>Portfolio concept</dd></div></dl>
    </header>
    <figure data-reveal="" className={`mx-auto mt-10 max-w-6xl overflow-hidden rounded-[28px] p-3 sm:rounded-[40px] sm:p-6 ${project.tint}`}><Image src={project.image} alt={project.name} preload sizes="(min-width: 1280px) 1100px, 95vw" className="aspect-[4/3] w-full rounded-[20px] object-cover sm:aspect-[16/9] sm:rounded-[26px]" /></figure>
    <div className="mx-auto max-w-6xl py-16 md:py-24">
      <section className="grid gap-6 border-b border-ink/10 pb-14 md:grid-cols-[1fr_2fr] md:gap-16"><h2 data-reveal="left" className="text-[11px] uppercase tracking-[0.18em] text-ink/45">01 / The question</h2><p data-reveal="right" className="max-w-[38ch] text-[clamp(24px,3vw,38px)] leading-[1.3] tracking-tight">{project.challenge}</p></section>
      <section className="grid gap-6 py-14 md:grid-cols-[1fr_2fr] md:gap-16"><h2 data-reveal="left" className="text-[11px] uppercase tracking-[0.18em] text-ink/45">02 / The direction</h2><div><p data-reveal="right" className="max-w-[52ch] text-[18px] leading-relaxed text-ink/70">{project.idea}</p><ol className="mt-9">{project.decisions.map((decision,i) => <li key={decision} data-reveal="" data-delay={i*80} className="flex gap-5 border-t border-ink/10 py-5 text-[16px] leading-relaxed"><span className="font-serif text-[26px] italic text-ink/35">0{i+1}</span>{decision}</li>)}</ol></div></section>
      <section data-reveal="" className={`rounded-[28px] px-7 py-12 sm:p-14 ${project.tint}`}><p className="text-[10px] uppercase tracking-[0.2em] text-ink/50">The idea, in one line</p><h2 className="mt-5 max-w-[36ch] font-serif text-[clamp(30px,4vw,50px)] italic leading-[1.15]">{project.outcome}</h2></section>
      <p className="mt-6 text-[12px] leading-relaxed text-ink/45">A fictional portfolio concept. The story and imagery will be replaced with a completed project.</p>
    </div>
    <Link data-reveal="down" href={`/projects/${next.slug}`} className="group mx-auto flex max-w-6xl items-center justify-between gap-6 border-t border-ink/15 py-10"><div><p className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Next project</p><p className="mt-3 text-[clamp(27px,4vw,52px)] tracking-tight">{next.name}</p></div><span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-sage transition-transform group-hover:-rotate-45"><Icon name="arrow-up-right" className="h-6 w-6" /></span></Link>
  </div>;
}
