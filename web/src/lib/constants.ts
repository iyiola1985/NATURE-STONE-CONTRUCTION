export const SITE = {
  name: "Nature Stone Construction",
  legalName: "Nature Stone Construction & Properties",
  tagline: "Building Nigeria's Future With Precision Block Technology",
  phone: "+234 906 596 7485",
  email: "naturestoneconstruction@gmail.com",
  whatsapp: "2349065967485", // Digits only for wa.me (09065967485 → +234 906 596 7485)
  address: "Industrial Zone, Lagos, Nigeria",
  mapQuery: "Lagos+Nigeria",
};

/** Hosted factory reel (machine operation & logistics) */
export const FACTORY_VIDEO_SRC = "/videos/machine-operations.mp4";

/** Projects reel — collection through completed paving handover */
export const PROJECTS_VIDEO_SRC = "/videos/projects-completed.mp4";

export const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#machine", label: "QT4-20" },
  { href: "#products", label: "Products" },
  { href: "#portfolio", label: "Projects" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const HERO_STATS = [
  { label: "Daily production", value: "12–13k", unit: "blocks" },
  { label: "Vibration force", value: "80", unit: "kN" },
  { label: "Molding cycle", value: "15–25", unit: "sec" },
  { label: "Drive system", value: "Hydraulic", unit: "pressure" },
] as const;

export const MACHINE_FEATURES = [
  {
    title: "Hydraulic pressure molding",
    description: "Consistent compaction for dense, uniform blocks across every cycle.",
  },
  {
    title: "80 kN vibration compaction",
    description: "Industrial-grade vibration platform engineered for structural integrity.",
  },
  {
    title: "PLC intelligent control",
    description: "Repeatable cycles, diagnostics, and precision timing from a single interface.",
  },
  {
    title: "Automatic material feeding",
    description: "Streamlined feeding reduces downtime and keeps output predictable.",
  },
  {
    title: "Mold customization",
    description: "Interlock, paving, curb, hollow, and solid configurations on demand.",
  },
  {
    title: "15–25 second molding cycle",
    description: "Balanced speed and quality for high-volume Nigeria-wide operations.",
  },
  {
    title: "High-density block production",
    description: "Optimized mix compaction for roads, estates, and industrial yards.",
  },
  {
    title: "Energy-efficient operation",
    description: "Engineered hydraulics tuned for sustained factory throughput.",
  },
] as const;

export const MACHINE_OUTPUTS = [
  "Hollow blocks",
  "Solid bricks",
  "Paving stones",
  "Interlock pavers",
  "Curb stones",
] as const;

export const PRODUCT_CARDS = [
  {
    title: "Hollow Blocks",
    description: "Structural shells engineered for load-bearing walls and rapid assembly.",
    image: "/images/product-i-type.png",
  },
  {
    title: "Paving Stones",
    description: "Precision surfaces for roads, carparks, and premium landscapes.",
    image: "/images/product-v-type.png",
  },
  {
    title: "Interlock Pavers",
    description: "Bone and pattern-ready pavers with striking geometric layouts.",
    image: "/images/product-bone.png",
  },
  {
    title: "Solid Bricks",
    description: "Dense masonry units for cores, partitions, and heavy-duty builds.",
    image: "/images/project-1.png",
  },
  {
    title: "Curb Stones",
    description: "Road and garden kerbs aligned to expressway and residential specs.",
    image: "/images/product-road-kerb.png",
  },
] as const;

export const PORTFOLIO_FILTERS = [
  "All",
  "Road paving",
  "Residential projects",
  "Commercial construction",
  "Industrial paving",
  "Factory projects",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_FILTERS)[number];

export const PORTFOLIO_ITEMS = [
  {
    title: "Expressway shoulder paving",
    category: "Road paving" as const,
    image: "/images/project-3.png",
    caption: "Large-format herringbone paving with precision concrete curbs.",
  },
  {
    title: "Residential driveway installation",
    category: "Residential projects" as const,
    image: "/images/project-1.png",
    caption: "Multi-tone interlock layout with premium residential finishing.",
  },
  {
    title: "Commercial perimeter paving",
    category: "Commercial construction" as const,
    image: "/images/hero-1.png",
    caption: "High-traffic paving aligned to modern commercial architecture.",
  },
  {
    title: "Industrial yard surfacing",
    category: "Industrial paving" as const,
    image: "/images/project-2.png",
    caption: "Heavy-duty pallet-ready paving for logistics and factory yards.",
  },
  {
    title: "Factory logistics apron",
    category: "Factory projects" as const,
    image: "/images/project-3.png",
    caption: "Wide-span paving engineered for continuous industrial movement.",
  },
  {
    title: "Premium residential estate",
    category: "Residential projects" as const,
    image: "/images/hero-1.png",
    caption: "Luxury paving rhythm with charcoal accents and crisp joints.",
  },
] as const;

export const WHY_FEATURES = [
  { title: "High durability", icon: "shield" },
  { title: "Cost-effective solutions", icon: "chart" },
  { title: "Advanced hydraulic technology", icon: "hydraulic" },
  { title: "Precision manufacturing", icon: "precision" },
  { title: "Fast production", icon: "bolt" },
  { title: "Reliable support", icon: "support" },
  { title: "Nationwide delivery", icon: "truck" },
  { title: "Custom mold solutions", icon: "mold" },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: "Consultation", detail: "Scope, soil context, and volume planning." },
  { step: 2, title: "Design & customization", detail: "Molds, finishes, and logistics aligned." },
  { step: 3, title: "Manufacturing", detail: "Hydraulic cycles monitored for density." },
  { step: 4, title: "Delivery", detail: "Nationwide scheduling with protected loads." },
  { step: 5, title: "Installation", detail: "Site crews aligned to engineering specs." },
  { step: 6, title: "Support", detail: "Aftercare, spares, and production guidance." },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Nature Stone delivered paving that survived heavy logistics traffic without joint drift. Professional crew and precise QC.",
    name: "Engineering Lead",
    role: "Industrial developer · Lagos",
  },
  {
    quote:
      "Their hydraulic line outputs stable hollow blocks for our estates. Scheduling and communication were enterprise-grade.",
    name: "Project Director",
    role: "Residential consortium · Abuja",
  },
  {
    quote:
      "From mold customization to curb alignment, the team matched international specs while staying agile on site.",
    name: "Infrastructure Manager",
    role: "Road contractor · PH",
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "What daily output can we expect from QT4-20?",
    a: "Configured for hollow blocks, production typically reaches 12,000–13,000 units per day depending on mix and curing setup.",
  },
  {
    q: "Do you customize molds for interlock and curbs?",
    a: "Yes. We engineer molds for interlock, paving, curb, hollow, and solid profiles to match your drawings.",
  },
  {
    q: "Do you ship nationwide?",
    a: "We coordinate deliveries across Nigeria with protected packing and scheduled site arrivals.",
  },
  {
    q: "How quickly can we get technical support?",
    a: "Our team provides remote PLC guidance and on-site assistance for installations and maintenance windows.",
  },
] as const;
