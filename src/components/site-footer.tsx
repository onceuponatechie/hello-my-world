import Link from "next/link";
import { HeroBackground } from "@/components/hero-background";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Why Not Build?", href: "/blog" },
  { label: "Tools & Templates", href: "/tools-and-templates" },
  { label: "The Product Lab", href: "/product-lab" },
  { label: "Courses", href: "/courses" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
];

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden px-4 pb-10 pt-6 sm:px-8">
      <HeroBackground footer />
      <div className="relative mx-auto max-w-5xl">
        <section id="contact" aria-labelledby="contact-heading" className="relative scroll-mt-10 overflow-hidden rounded-[24px] bg-card p-8 text-center ring-1 ring-black/5 sm:p-12">
          <h2 data-reveal="down" id="contact-heading" className="mx-auto max-w-[20ch] text-[clamp(22px,2.4vw,30px)] font-medium leading-tight tracking-tight">Let&apos;s build something people <span className="font-serif italic">remember</span>.</h2>
          <p data-reveal="down" data-delay="120" className="mx-auto mt-3 max-w-[38ch] text-[13px] leading-relaxed text-muted-ink">Research, product, or a story that needs telling — the door is open.</p>
          <a data-reveal="" data-delay="200" href="mailto:hi@essyudeme.com?subject=Let%27s%20book%20a%20coffee" className="mt-6 inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-90">Book a coffee</a>
          <nav data-reveal="" data-delay="250" aria-label="Footer navigation" className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12.5px] font-medium text-ink/75">
            {footerLinks.map(({ label, href }) => <Link key={href} href={href} prefetch={false} className="transition-colors hover:text-ink">{label}</Link>)}
          </nav>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-muted-ink">
            {["Twitter / X", "LinkedIn", "Instagram"].map((label) => <span key={label} title="Profile link coming soon">{label}</span>)}
            <a href="mailto:hi@essyudeme.com" className="break-all transition-colors hover:text-ink">hi@essyudeme.com</a>
          </div>
          <div className="mt-9 border-t border-black/5 pt-5 text-[11px] text-muted-ink">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"><span title="Privacy information coming soon">Privacy</span><span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink/15" /><span title="Colophon coming soon">Colophon</span><span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink/15" /><span>Lagos → Everywhere</span></div>
            <p className="mt-3">© 2026 Essy Udeme — made with care.</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
