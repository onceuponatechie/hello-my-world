type IconName = "arrow-right" | "chevron-down" | "menu" | "close";

const paths: Record<IconName, string> = {
  "arrow-right": "M5 12h14m-7-7 7 7-7 7",
  "chevron-down": "m6 9 6 6 6-6",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "m18 6-12 12M6 6l12 12",
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d={paths[name]} />
    </svg>
  );
}
