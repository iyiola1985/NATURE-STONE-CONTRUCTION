import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matte: "#030304",
        charcoal: "#0a0a0b",
        "deep-charcoal": "#0e1116",
        concrete: {
          DEFAULT: "#e8e6e1",
          dim: "#dddad4",
          muted: "#d3d0c9",
        },
        "stone-gray": {
          muted: "#8b9099",
          DEFAULT: "#6b7078",
          deep: "#4a4e55",
        },
        slate: {
          950: "#0f1114",
          900: "#15181d",
          850: "#1a1e24",
          800: "#222830",
        },
        gold: {
          DEFAULT: "#c9a227",
          dim: "#a68416",
          bright: "#e4c04a",
          metallic: "#d4af37",
        },
        industrial: {
          DEFAULT: "#e85d04",
          muted: "#c44e03",
          glow: "rgba(232, 93, 4, 0.35)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "grid-fade-light":
          "linear-gradient(to right, rgba(10,10,11,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,11,0.06) 1px, transparent 1px)",
        "gold-shine":
          "linear-gradient(105deg, transparent 40%, rgba(201,162,39,0.15) 50%, transparent 60%)",
        "section-concrete":
          "linear-gradient(168deg, #f0eeea 0%, #e4e2dd 38%, #dcd9d2 72%, #e6e4df 100%)",
        "section-matte":
          "linear-gradient(180deg, #0e1116 0%, #0a0c0f 42%, #050608 100%)",
        "section-charcoal":
          "radial-gradient(ellipse 100% 60% at 50% -15%, rgba(201,162,39,0.07) 0%, transparent 52%), linear-gradient(180deg, #12151c 0%, #0c0e12 55%, #08090b 100%)",
        "section-industrial":
          "radial-gradient(ellipse 80% 50% at 85% 0%, rgba(232,93,4,0.06) 0%, transparent 45%), linear-gradient(180deg, #0e1014 0%, #08090b 100%)",
        "glass-light":
          "linear-gradient(145deg, rgba(255,255,255,0.55) 0%, rgba(232,230,225,0.35) 100%)",
        "glass-dark":
          "linear-gradient(155deg, rgba(255,255,255,0.08) 0%, rgba(12,14,18,0.65) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.65" },
        },
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glass-soft": "0 12px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.45)",
        "glass-dark": "0 16px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
        glow: "0 0 40px rgba(201,162,39,0.12)",
        "glow-border": "0 0 0 1px rgba(201,162,39,0.18), 0 8px 32px rgba(0,0,0,0.12), 0 0 48px rgba(201,162,39,0.06)",
        "glow-border-dark": "0 0 0 1px rgba(201,162,39,0.22), 0 12px 40px rgba(0,0,0,0.35), 0 0 60px rgba(201,162,39,0.05)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
