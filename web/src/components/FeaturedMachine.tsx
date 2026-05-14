"use client";

import Image from "next/image";
import { useState } from "react";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { MACHINE_FEATURES, MACHINE_OUTPUTS, SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

const gallery = [
  { src: "/images/hero-1.png", alt: "Hydraulic paving production environment" },
  { src: "/images/project-1.png", alt: "Precision paver installation on site" },
  { src: "/images/project-2.png", alt: "Industrial logistics and material staging" },
  { src: "/images/project-3.png", alt: "Large-format civic paving scope" },
];

export function FeaturedMachine() {
  const [active, setActive] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function submitQuote(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Quotation request – QT4-20\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nNotes: ${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("QT4-20 quotation request")}&body=${body}`;
  }

  return (
    <section id="machine" className="relative overflow-hidden bg-section-charcoal py-24 md:py-28 text-concrete">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.12),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-grid-fade bg-[length:56px_56px]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Featured platform"
            title="QT4-20 Hydraulic Semi-Automatic Block Machine"
            subtitle="Flagship hydraulic molding engineered for Nigerian aggregates—with PLC intelligence, rapid cycles, and outputs suited for estates, roads, and industrial yards."
          />

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <ParallaxLayer className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-white/10 shadow-2xl" range={12}>
                <div data-parallax-target className="absolute inset-0 h-[118%] w-full -top-[9%]">
                  <Image
                    src={gallery[active].src}
                    alt={gallery[active].alt}
                    fill
                    className="object-cover transition duration-700"
                    sizes="(max-width:1024px) 100vw, 55vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 z-[1] flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-gold">Gallery</p>
                      <p className="mt-2 font-heading text-2xl">Hydraulic production ecosystem</p>
                    </div>
                    <div className="rounded-full border border-gold/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-concrete-dim backdrop-blur-md">
                      Hover-ready · PLC controlled
                    </div>
                  </div>
                </div>
              </ParallaxLayer>

            <div className="grid grid-cols-4 gap-3">
              {gallery.map((g, idx) => (
                <button
                  key={g.src}
                  type="button"
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                  className={`relative aspect-video overflow-hidden rounded-xl border transition ${
                    active === idx ? "border-gold ring-2 ring-gold/40" : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="120px" />
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gold">Daily production</p>
                <p className="mt-2 font-heading text-3xl font-semibold">12,000–13,000</p>
                <p className="text-sm text-stone-gray-muted">Hollow blocks per day under optimized factory conditions.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 md:mt-0">
                {MACHINE_OUTPUTS.map((item) => (
                  <span key={item} className="rounded-full border border-gold/15 bg-white/5 px-3 py-1 text-xs text-concrete-dim">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {MACHINE_FEATURES.map((f, i) => (
                <TiltCard
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-glass backdrop-blur-xl transition hover:border-gold/35 hover:shadow-glow"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold/25 to-transparent text-gold">
                    <span className="text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h4 className="font-heading text-lg font-semibold">{f.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-stone-gray-muted">{f.description}</p>
                </TiltCard>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-gold">Brochure</p>
                <p className="mt-1 text-sm text-stone-gray-muted">Receive the QT4-20 technical datasheet and cycle diagrams.</p>
              </div>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent("QT4-20 brochure request")}`}
                className="cta-glow mt-4 inline-flex rounded-full border border-gold/50 bg-gold/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-gold transition hover:bg-gold hover:text-charcoal md:mt-0"
              >
                Download brochure
              </a>
            </div>

            <form onSubmit={submitQuote} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Request quotation</p>
              <h4 className="mt-2 font-heading text-xl font-semibold">QT4-20 configuration</h4>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <input
                  required
                  placeholder="Full name"
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring-2"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring-2"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  placeholder="Phone / WhatsApp"
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring-2 md:col-span-2"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <textarea
                  placeholder="Project scope, timeline, delivery city"
                  rows={3}
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring-2 md:col-span-2"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="cta-glow rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-wide text-charcoal transition hover:bg-gold-bright"
                >
                  Email quotation
                </button>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("QT4-20 quotation — please assist.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gold/20 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-concrete transition hover:border-gold/50 hover:text-gold hover:shadow-[0_0_24px_rgba(201,162,39,0.2)]"
                >
                  WhatsApp sales
                </a>
              </div>
            </form>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
