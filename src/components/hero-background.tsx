import Image from "next/image";
import heroCover from "@/assets/images/hero-cover.webp";

export function HeroBackground({ footer = false }: { footer?: boolean }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden ${footer ? "h-full" : "h-[800px] md:h-[850px]"}`}>
    <Image src={heroCover} alt="" fill preload={!footer} sizes="(min-width: 1440px) 1440px, 100vw" className={`object-cover object-top ${footer ? "rotate-180" : ""}`} />
    <div className={`absolute inset-0 ${footer ? "bg-gradient-to-b" : "bg-gradient-to-t"} from-backdrop via-backdrop/10 to-transparent`} />
  </div>;
}
