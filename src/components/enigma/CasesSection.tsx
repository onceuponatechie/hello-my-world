import Image from "next/image";
import books from "@/assets/essy-books.jpg";
import mouse from "@/assets/essy-mouse.jpg";
import waves from "@/assets/essy-waves.jpg";
import notes from "@/assets/essy-notes.jpg";
import heart from "@/assets/emoji-heart.png";

const adventures = [
  { tag: "READ", title: "Founder 95", body: "The 95 lessons I keep re-learning while shipping.", img: books },
  { tag: "SHOP", title: "Overflow — a script", body: "A tiny Mac utility that clears your desktop.", img: mouse },
  { tag: "WATCH", title: "Design as gentleness", body: "A talk on why soft edges win.", img: waves },
  { tag: "SUBSCRIBE", title: "New Tuesdays newsletter", body: "One idea, one artifact, every week.", img: notes },
];

export function CasesSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mx-auto max-w-xl text-[clamp(20px,2.6vw,32px)] font-medium leading-snug tracking-tight text-ink">
          I build in the open — so the lessons{" "}
          <span className="inline-flex h-[0.9em] w-[0.9em] translate-y-1 items-center justify-center align-middle">
            <Image src={heart} alt="" sizes="32px" className="h-full w-full object-contain" />
          </span>{" "}
          I learn are <span className="italic">yours</span> to <span className="italic">keep.</span>
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-5xl text-center">
        <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight">
          choose your <span className="font-serif italic">adventure</span>
        </h2>
        <p className="mx-auto mt-2 max-w-md text-[12px] text-muted-ink">
          Pick a rabbit hole. Each one leads somewhere small and useful.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
        {adventures.map((a) => (
          <article key={a.title} className="rounded-2xl bg-white p-3 ring-1 ring-black/5">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src={a.img}
                alt={a.title}
                sizes="(max-width: 768px) 50vw, 280px"
                className="h-32 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-40"
              />
              <span className="absolute left-2 top-2 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-ink">
                {a.tag}
              </span>
            </div>
            <h3 className="mt-3 text-[14px] font-medium leading-tight tracking-tight">{a.title}</h3>
            <p className="mt-1 text-[11px] leading-relaxed text-muted-ink">{a.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
