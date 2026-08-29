"use client";

import { ArrowUpRight } from "lucide-react";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
    >
      <label
        htmlFor="newsletter-email"
        className="text-[10px] font-semibold uppercase tracking-wider text-white/50"
      >
        Your email
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="you@somewhere.good"
        className="mt-2 w-full rounded-full bg-white/10 px-4 py-3 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-butter"
      />
      <button className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-full bg-[#c9e5b8] px-4 py-3 text-[13px] font-medium text-ink transition hover:opacity-90">
        Send it my way <ArrowUpRight size={14} />
      </button>
      <p className="mt-3 text-center text-[10px] text-white/40">
        No spam. No hand-wringing. Just Tuesdays.
      </p>
    </form>
  );
}
