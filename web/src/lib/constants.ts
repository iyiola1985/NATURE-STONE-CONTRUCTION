export const SITE = {
  name: "Nature Stone Construction",
  legalName: "Nature Stone Construction & Properties",
  tagline: "Building Nigeria's Future With Precision Block Technology",
  /** Primary line — contact section, footer, main WhatsApp (09065967485) */
  phone: "+234 906 596 7485",
  whatsapp: "2349065967485",
  /** Secondary line — QT4-20 / machine quotation form (08062653666) */
  phoneAlt: "+234 806 265 3666",
  whatsappAlt: "2348062653666",
  email: "naturestoneconstruction@gmail.com",
  address: "Industrial Zone, Lagos, Nigeria",
  mapQuery: "Lagos+Nigeria",
};

/** Hosted factory reel (machine operation & logistics) */
export const FACTORY_VIDEO_SRC = "/videos/machine-operations.mp4";

/** Forklift yard operations beside the molding line */
export const FORKLIFT_VIDEO_SRC = "/videos/forklift-operations.mp4";

/** Truck for hire — delivery / haulage reel */
export const TRUCK_HIRE_VIDEO_SRC = "/videos/truck-hire.mp4";

/** Hire section forklift photo */
export const HIRE_FORKLIFT_IMAGE = "/images/hire-forklift.png";

/** Projects reel — collection through completed paving handover (web-compressed for deploy) */
export const PROJECTS_VIDEO_SRC = "/videos/projects-completed-web.mp4";

export const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#machine", label: "QT4-20" },
  { href: "#products", label: "Products" },
  { href: "#portfolio", label: "Projects" },
  { href: "#properties", label: "Properties" },
  { href: "#hire", label: "Hire" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
] as const;

export const PROPERTY_SERVICES = [
  "Land sales",
  "Residential & commercial",
  "Property development",
  "Documentation support",
] as const;

export type PropertyType = "Land" | "Residential" | "Commercial";
export type PropertyStatus = "For Sale" | "Coming Soon" | "Sold";

export type PropertyListing = {
  title: string;
  location: string;
  type: PropertyType;
  status: PropertyStatus;
  highlights: readonly string[];
  image?: string;
};

export const PROPERTIES: readonly PropertyListing[] = [
  {
    title: "Serviced residential plot",
    location: "Lekki corridor, Lagos",
    type: "Land",
    status: "For Sale",
    highlights: ["Surveyed plot", "Ready for build"],
  },
  {
    title: "Estate residential unit",
    location: "Abuja metropolitan area",
    type: "Residential",
    status: "Coming Soon",
    highlights: ["Gated community", "Title support"],
  },
  {
    title: "Commercial frontage plot",
    location: "Ikeja industrial belt",
    type: "Commercial",
    status: "For Sale",
    highlights: ["High visibility", "Flexible use"],
  },
];

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
    title: "I-Type Pavers",
    description:
      "Rectangular herringbone-ready pavers—red, grey, and black—for roads, estates, and commercial yards.",
    image: "/images/product-i-type.png",
    specs: "L200 × W100 × H80/60 mm · 50 pcs/m²",
  },
  {
    title: "V-Type Pavers",
    description: "V-profile paving stones for durable surfaces and premium landscape finishes.",
    image: "/images/product-v-type.png",
  },
  {
    title: "Interlock Pavers",
    description: "Bone and pattern-ready interlock units with striking geometric layouts.",
    image: "/images/product-bone.png",
  },
  {
    title: "Road Kerb Stones",
    description: "Carriage and expressway kerbs engineered for civil road specifications.",
    image: "/images/product-road-kerb.png",
  },
  {
    title: "Garden Kerb Stones",
    description: "Landscape edging kerbs for gardens, walkways, and residential perimeters.",
    image: "/images/product-garden-kerb.png",
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
  { step: 1, title: "Design & customization", detail: "Molds, finishes, and logistics aligned to your scope." },
  { step: 2, title: "Manufacturing", detail: "Hydraulic cycles monitored for density and finish." },
  { step: 3, title: "Delivery", detail: "Nationwide scheduling with protected loads." },
  { step: 4, title: "Installation", detail: "Site crews aligned to engineering specs." },
  { step: 5, title: "Support", detail: "Aftercare, spares, and production guidance." },
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
