"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FAQ_ITEMS, SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";

const MAP_EMBED =
  "https://maps.google.com/maps?q=Lagos,+Nigeria&hl=en&z=11&output=embed";

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Contact form\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Nature Stone — new inquiry")}&body=${body}`;
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-zinc-100 py-24 dark:bg-charcoal">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.08),_transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="Engineering consultations & nationwide logistics"
          subtitle="Share drawings, BOQs, or delivery windows—our technical desk responds with mold guidance, production schedules, and transparent quotations."
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <form onSubmit={submit} className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Full name</label>
                  <input
                    required
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-2 dark:border-white/10 dark:bg-white/5"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-2 dark:border-white/10 dark:bg-white/5"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Phone</label>
                  <input
                    required
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-2 dark:border-white/10 dark:bg-white/5"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Company / project</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-2 dark:border-white/10 dark:bg-white/5"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-zinc-500">How can we engineer this with you?</label>
                  <textarea
                    required
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none ring-gold/30 focus:ring-2 dark:border-white/10 dark:bg-white/5"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-charcoal py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-zinc-800 dark:bg-gold dark:text-charcoal dark:hover:bg-gold-bright md:w-auto md:px-10"
              >
                Submit inquiry
              </button>
            </form>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-xl backdrop-blur-xl transition hover:border-gold/40 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-xs uppercase tracking-wide text-gold">Phone</p>
                <p className="mt-2 font-heading text-lg font-semibold text-zinc-900 dark:text-white">{SITE.phone}</p>
              </a>
              <a href={`mailto:${SITE.email}`} className="rounded-2xl border border-black/10 bg-white/70 p-5 shadow-xl backdrop-blur-xl transition hover:border-gold/40 dark:border-white/10 dark:bg-white/5">
                <p className="text-xs uppercase tracking-wide text-gold">Email</p>
                <p className="mt-2 font-heading text-lg font-semibold text-zinc-900 dark:text-white">{SITE.email}</p>
              </a>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-wide text-gold">Business hours</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Monday – Friday · 8:00 – 18:00 WAT
                <br />
                Saturday · 9:00 – 14:00 WAT
                <br />
                Emergency technical line available for active installations.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-black/10 shadow-xl dark:border-white/10">
              <iframe
                title="Nature Stone Construction location"
                src={MAP_EMBED}
                className="aspect-[4/3] h-[320px] w-full border-0 md:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-3xl border border-black/10 bg-gradient-to-br from-charcoal to-zinc-900 p-8 text-white dark:border-white/10">
              <p className="text-xs uppercase tracking-[0.35em] text-gold">Ready when you are</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold">Book a technical walkthrough</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                From QT4-20 throughput to custom molds and curb profiles—we align production with your schedule.
              </p>
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-wide text-charcoal transition hover:bg-gold-bright"
              >
                WhatsApp concierge
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">FAQ</p>
              {FAQ_ITEMS.map((item, i) => (
                <div key={item.q} className="overflow-hidden rounded-2xl border border-black/10 bg-white dark:border-white/10 dark:bg-white/5">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-white"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {item.q}
                    <span className="text-gold">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-black/5 px-5 dark:border-white/10"
                      >
                        <p className="py-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
