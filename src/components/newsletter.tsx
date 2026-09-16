import { Icon } from "@/components/icon";

export function Newsletter() {
  return (
    <section id="newsletter" aria-labelledby="newsletter-heading" className="scroll-mt-10 px-4 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-ink p-6 text-white sm:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div data-reveal="left" className="min-w-0">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-wider">✦ THE LETTER</span>
            <h2 id="newsletter-heading" className="mt-5 text-[clamp(28px,3.4vw,44px)] font-medium leading-tight tracking-tight">Good things, straight<br /><span className="font-serif italic">to your inbox</span></h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/70">One idea, one artifact, every Tuesday. No filler, no funnels. Unsubscribe with one gentle click.</p>
            <div className="mt-6 flex flex-wrap items-center gap-1"><span aria-label="Five stars" className="text-butter">★★★★★</span><span className="ml-2 text-[11px] text-white/60">Loved by 3,400+ readers</span></div>
          </div>
          <div data-reveal="right" data-delay="120" className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <label htmlFor="newsletter-email" className="text-[10px] font-semibold uppercase tracking-wider text-white/70">Your email</label>
            <input id="newsletter-email" type="email" disabled aria-describedby="newsletter-status" placeholder="you@somewhere.good" className="mt-2 w-full rounded-full bg-white/10 px-4 py-3 text-[13px] text-white placeholder:text-white/50" />
            <button type="button" disabled aria-describedby="newsletter-status" className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-full bg-[#c9e5b8] px-4 py-3 text-[13px] font-medium text-ink">Send it my way <Icon name="arrow-up-right" className="h-3.5 w-3.5" /></button>
            <p id="newsletter-status" className="mt-3 text-center text-[11px] text-white/70">Newsletter signup is opening soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
