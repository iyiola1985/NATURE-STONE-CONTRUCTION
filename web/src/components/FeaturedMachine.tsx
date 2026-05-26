"use client";

import { useState } from "react";
import { FactoryVideoPlayer } from "@/components/FactoryVideoPlayer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { FACTORY_VIDEO_SRC, FORKLIFT_VIDEO_SRC, MACHINE_FEATURES, MACHINE_OUTPUTS, SITE } from "@/lib/constants";
import { brochureRequestMessage, qt4QuotationMessage, whatsappPrefillUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/SectionHeading";

const QT4_VIDEO_HIGHLIGHTS = [
  "QT4-20 hydraulic molding",
  "Live production cycle",
  "Semi-automatic line",
];

const FORKLIFT_VIDEO_HIGHLIGHTS = [
  "On-site material handling",
  "Factory yard logistics",
  "Load & dispatch ready",
];

export function FeaturedMachine() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  function submitQuote(e: React.FormEvent) {
    e.preventDefault();
    const msg = qt4QuotationMessage(form);
    const url = whatsappPrefillUrl(msg, SITE.whatsappAlt);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
  }

  function submitQuoteEmail(e: React.MouseEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Quotation request – QT4-20\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nNotes: ${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("QT4-20 quotation request")}&body=${body}`;
  }

  return (
    <section id="machine" className="section-pad relative overflow-hidden bg-section-charcoal text-concrete">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.12),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-grid-fade bg-[length:56px_56px]" />

      <div className="section-wrap">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Featured platform"
            title="QT4-20 Hydraulic Semi-Automatic Block Machine"
            subtitle="Flagship hydraulic molding engineered for Nigerian aggregates—with PLC intelligence, rapid cycles, and outputs suited for estates, roads, and industrial yards."
          />

          <div className="grid min-w-0 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="min-w-0 space-y-6">
              <div className="grid min-w-0 gap-4 lg:grid-cols-2">
                <FactoryVideoPlayer
                  variant="dark"
                  badge="QT4-20 in production"
                  title="Hydraulic block machine — live molding cycle"
                  highlights={QT4_VIDEO_HIGHLIGHTS}
                  playLabel="Play machine footage"
                  ariaLabel="Play QT4-20 hydraulic block machine production video"
                  videoSrc={FACTORY_VIDEO_SRC}
                  posterSrc="/images/project-3.png"
                />
                <FactoryVideoPlayer
                  variant="dark"
                  badge="Yard operations"
                  title="Forklift at work — moving materials on site"
                  highlights={FORKLIFT_VIDEO_HIGHLIGHTS}
                  playLabel="Play forklift footage"
                  ariaLabel="Play forklift yard operations video"
                  videoSrc={FORKLIFT_VIDEO_SRC}
                  posterSrc="/images/project-2.png"
                />
              </div>
              <p className="type-body text-center text-sm text-stone-gray-muted">
                Side-by-side view: block production on the QT4-20 line and forklift logistics in the yard.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-6">
              <div>
                <p className="type-badge">Daily production</p>
                <p className="type-stat mt-2 text-white">12,000–13,000</p>
                <p className="text-sm text-stone-gray-muted">Hollow blocks per day under optimized factory conditions.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 md:mt-0">
                {MACHINE_OUTPUTS.map((item) => (
                  <span key={item} className="type-perk rounded-full border border-gold/15 bg-white/5 px-3 py-1 text-concrete-dim">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="min-w-0 space-y-6">
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
                  <h4 className="type-title text-white">{f.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-stone-gray-muted">{f.description}</p>
                </TiltCard>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl md:flex md:items-center md:justify-between md:gap-6">
              <div>
                <p className="type-badge">Brochure</p>
                <p className="mt-1 text-sm text-stone-gray-muted">Receive the QT4-20 technical datasheet and cycle diagrams.</p>
              </div>
              <a
                href={whatsappPrefillUrl(brochureRequestMessage(), SITE.whatsappAlt)}
                target="_blank"
                rel="noreferrer"
                className="type-cta cta-glow mt-4 inline-flex rounded-full border border-gold/50 bg-gold/10 px-5 py-2.5 text-gold transition hover:bg-gold hover:text-charcoal md:mt-0"
              >
                Request brochure (WhatsApp)
              </a>
            </div>

            <form onSubmit={submitQuote} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
              <p className="type-badge">Request quotation</p>
              <h4 className="type-title mt-2 text-white">QT4-20 configuration</h4>
              <p className="mt-2 text-xs text-stone-gray-muted">
                Quotes &amp; brochures route to{" "}
                <a href={`tel:${SITE.phoneAlt.replace(/\s/g, "")}`} className="text-gold hover:underline">
                  {SITE.phoneAlt}
                </a>
              </p>
              <div className="mt-4 grid min-w-0 gap-3 md:grid-cols-2">
                <input
                  required
                  placeholder="Full name"
                  className="min-w-0 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring-2"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="min-w-0 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring-2"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  placeholder="Phone / WhatsApp"
                  className="min-w-0 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring-2 md:col-span-2"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <textarea
                  placeholder="Project scope, timeline, delivery city"
                  rows={3}
                  className="min-w-0 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none ring-gold/40 focus:ring-2 md:col-span-2"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="submit"
                  className="type-cta cta-glow w-full rounded-full bg-[#25D366] px-6 py-3 text-white shadow-lg shadow-black/25 transition hover:brightness-110 sm:w-auto"
                >
                  Send quote via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={submitQuoteEmail}
                  className="type-cta w-full rounded-full border border-white/20 px-6 py-3 text-concrete transition hover:border-gold/50 hover:text-gold sm:w-auto"
                >
                  Email instead
                </button>
              </div>
              <p className="mt-3 text-xs text-stone-gray-muted">
                Opens WhatsApp with this quote request — confirm send on your device.
              </p>
            </form>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
