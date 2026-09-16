"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

const text = "I follow curiosity down rabbit holes — into products, people, and the technology shaping both. Then I turn what I find into experiments, tools, and stories you can actually use. Research, build, tell — that loop is how I make sense of the world, and how I'm building my way into the answer.";
const words = text.split(" ");

function Word({ word, index, progress }: { word: string; index: number; progress: MotionValue<number> }) {
  const reduced = useReducedMotion();
  const opacity = useTransform(progress, [index / words.length, (index + 1) / words.length], [0.2, 1]);
  return <motion.span aria-hidden="true" className={`inline-block ${["Research,", "build,", "tell"].includes(word) ? "font-serif italic" : ""}`} style={{ opacity: reduced ? 1 : opacity }}>{word}</motion.span>;
}

export function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.88", "end 0.55"] });
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-6 px-4 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl lg:max-w-[1180px]">
        <h2 data-reveal="" id="about-heading" className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-muted-ink">What I Do</h2>
        <div className="rounded-[28px] border border-black/10 bg-transparent px-6 py-12 sm:px-14 sm:py-16">
          <p ref={ref} aria-label={text} className="scroll-words mx-auto max-w-[24ch] text-center text-[clamp(18px,2.4vw,28px)] leading-[1.45] tracking-tight text-ink/80 sm:max-w-none">
            {words.map((word, index) => <span key={index}><Word word={word} index={index} progress={scrollYProgress} />{" "}</span>)}
          </p>
        </div>
      </div>
    </section>
  );
}
