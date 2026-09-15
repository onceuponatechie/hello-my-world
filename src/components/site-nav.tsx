import Link from "next/link";
import { Icon } from "@/components/icon";

const resources = [
  { label: "Tools & Templates", href: "/tools-and-templates" },
  { label: "The Product Lab", href: "/product-lab" },
  { label: "Courses & Certifications", href: "/courses" },
];

function ResourceLinks() {
  return resources.map(({ label, href }) => (
    <Link key={href} href={href} prefetch={false} className="rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-ink/80 transition-colors hover:bg-black/5 hover:text-ink">
      {label}
    </Link>
  ));
}

export function SiteNav() {
  return (
    <header id="top" className="relative z-40 px-5 pt-6 sm:px-10 sm:pt-8">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" aria-label="Essy — home" className="font-serif text-[20px] italic tracking-tight text-ink">Essy</Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <Link href="/blog" prefetch={false} className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink">Stories</Link>
          <details className="group relative">
            <summary className="flex items-center gap-1 text-[13px] font-medium text-ink/70 hover:text-ink">
              Resources <Icon name="chevron-down" className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
              <div className="grid min-w-[210px] gap-1 rounded-2xl border border-ink/10 bg-card p-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
                <ResourceLinks />
              </div>
            </div>
          </details>
          <Link href="/#projects" className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink">Projects</Link>
          <Link href="/#about" className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink">About</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#contact" className="rounded-full bg-ink px-6 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-90">Say hi</Link>
          <details className="group/mobile md:hidden">
            <summary aria-label="Toggle navigation" className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-card">
              <Icon name="menu" className="h-4 w-4 group-open/mobile:hidden" />
              <Icon name="close" className="hidden h-4 w-4 group-open/mobile:block" />
            </summary>
            <nav aria-label="Mobile navigation" className="absolute left-5 right-5 top-full mt-4 grid gap-1 rounded-3xl border border-ink/10 bg-card p-3 shadow-lg sm:left-10 sm:right-10">
              <Link href="/blog" prefetch={false} className="rounded-2xl px-4 py-2.5 text-[13px] font-medium hover:bg-black/5">Stories</Link>
              <details className="group/resources">
                <summary className="flex items-center justify-between rounded-2xl px-4 py-2.5 text-[13px] font-medium hover:bg-black/5">
                  Resources <Icon name="chevron-down" className="h-3.5 w-3.5 group-open/resources:rotate-180" />
                </summary>
                <div className="grid pl-4"><ResourceLinks /></div>
              </details>
              <Link href="/#projects" className="rounded-2xl px-4 py-2.5 text-[13px] font-medium hover:bg-black/5">Projects</Link>
              <Link href="/#about" className="rounded-2xl px-4 py-2.5 text-[13px] font-medium hover:bg-black/5">About</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
