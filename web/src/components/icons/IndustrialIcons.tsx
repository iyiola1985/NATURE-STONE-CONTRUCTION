export function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChart({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3v18h18" strokeLinecap="round" />
      <path d="M7 14l4-4 4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHydraulic({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 14h16v4H4z" strokeLinejoin="round" />
      <path d="M8 14V10l4-4 4 4v4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6V4" strokeLinecap="round" />
    </svg>
  );
}

export function IconPrecision({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}

export function IconBolt({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );
}

export function IconSupport({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 10a6 6 0 10-12 0v4l-2 2h16l-2-2v-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20h4" strokeLinecap="round" />
    </svg>
  );
}

export function IconTruck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12h12v8H1z" />
      <path d="M13 16h4l4-4V8h-8" strokeLinejoin="round" />
      <circle cx="5.5" cy="20.5" r="1.5" />
      <circle cx="18.5" cy="20.5" r="1.5" />
    </svg>
  );
}

export function IconMold({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="18" height="10" rx="2" />
      <path d="M7 8V6a2 2 0 012-2h6a2 2 0 012 2v2" />
      <path d="M9 14h6" strokeLinecap="round" />
    </svg>
  );
}

export const WHY_ICON_MAP = {
  shield: IconShield,
  chart: IconChart,
  hydraulic: IconHydraulic,
  precision: IconPrecision,
  bolt: IconBolt,
  support: IconSupport,
  truck: IconTruck,
  mold: IconMold,
} as const;

export function WhyIcon({ name, className }: { name: keyof typeof WHY_ICON_MAP; className?: string }) {
  const Cmp = WHY_ICON_MAP[name] ?? IconBolt;
  return <Cmp className={className} />;
}
