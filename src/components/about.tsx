export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-6 px-4 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl lg:max-w-[1180px]">
        <h2 id="about-heading" className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-muted-ink">
          What I Do
        </h2>
        <div className="rounded-[28px] border border-black/10 bg-transparent px-6 py-12 sm:px-14 sm:py-16">
          <p className="mx-auto max-w-[24ch] text-center text-[clamp(18px,2.4vw,28px)] leading-[1.45] tracking-tight text-ink/70 sm:max-w-none">
            I follow curiosity down rabbit holes — into products, people, and the technology
            shaping both. Then I turn what I find into experiments, tools, and stories you can
            actually use.{" "}
            <span className="font-serif italic">Research, build, tell</span> — that
            loop is how I make sense of the world, and how I&apos;m building my way into the answer.
          </p>
        </div>
      </div>
    </section>
  );
}
