type IconName = "arrow-right" | "arrow-up-right" | "layers" | "chevron-down" | "menu" | "close";

const paths: Record<IconName, string> = {
  "arrow-right": "M5 12h14m-7-7 7 7-7 7",
  "arrow-up-right": "M7 17 17 7M7 7h10v10",
  layers: "m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5",
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
