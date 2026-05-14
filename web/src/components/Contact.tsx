"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FAQ_ITEMS, SITE } from "@/lib/constants";
import { contactInquiryMessage, whatsappPrefillUrl } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

const MAP_EMBED =
  "https://maps.google.com/maps?q=Lagos,+Nigeria&hl=en&z=11&output=embed";

export function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = contactInquiryMessage(form);
    const url = whatsappPrefillUrl(msg);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
  }

  function submitEmail(e: React.MouseEvent) {
    e.preventDefault();
    const body = encodeURIComponent(
      `Contact form\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Nature Stone — new inquiry")}&body=${body}`;
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-section-concrete py-24 md:py-28 dark:bg-section-matte">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,93,4,0.06),_transparent_50%),radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Engineering consultations & nationwide logistics"
            subtitle="Share drawings, BOQs, or delivery windows—our technical desk responds with mold guidance, production schedules, and transparent quotations."
          />

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <form onSubmit={submit} className="panel-glass p-8 shadow-glow-border dark:shadow-glow-border-dark">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone-gray">Full name</label>
                  <input
                    required
                    className="mt-2 w-full rounded-xl border border-matte/12 bg-concrete/70 px-4 py-3 text-sm text-matte outline-none ring-gold/25 transition focus:border-gold/40 focus:ring-2 dark:border-gold/15 dark:bg-deep-charcoal/60 dark:text-concrete"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone-gray">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border border-matte/12 bg-concrete/70 px-4 py-3 text-sm text-matte outline-none ring-gold/25 transition focus:border-gold/40 focus:ring-2 dark:border-gold/15 dark:bg-deep-charcoal/60 dark:text-concrete"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone-gray">Phone</label>
                  <input
                    required
                    className="mt-2 w-full rounded-xl border border-matte/12 bg-concrete/70 px-4 py-3 text-sm text-matte outline-none ring-gold/25 transition focus:border-gold/40 focus:ring-2 dark:border-gold/15 dark:bg-deep-charcoal/60 dark:text-concrete"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone-gray">Company / project</label>
                  <input
                    className="mt-2 w-full rounded-xl border border-matte/12 bg-concrete/70 px-4 py-3 text-sm text-matte outline-none ring-gold/25 transition focus:border-gold/40 focus:ring-2 dark:border-gold/15 dark:bg-deep-charcoal/60 dark:text-concrete"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-stone-gray">How can we engineer this with you?</label>
                  <textarea
                    required
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-matte/12 bg-concrete/70 px-4 py-3 text-sm text-matte outline-none ring-gold/25 transition focus:border-gold/40 focus:ring-2 dark:border-gold/15 dark:bg-deep-charcoal/60 dark:text-concrete"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="submit"
                  className="cta-glow rounded-full bg-[#25D366] py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/20 transition hover:brightness-110 sm:px-10"
                >
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={submitEmail}
                  className="rounded-full border border-matte/20 py-3 text-sm font-semibold uppercase tracking-wide text-matte transition hover:border-gold/40 hover:text-gold dark:border-gold/20 dark:text-concrete dark:hover:text-gold sm:px-8"
                >
                  Email instead
                </button>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-stone-gray dark:text-stone-gray-muted">
                WhatsApp opens with your details filled in — tap send on your phone to deliver it to our team.
              </p>
            </form>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="panel-glass-subtle rounded-2xl p-5 transition"
              >
                <p className="text-xs uppercase tracking-wide text-gold">Phone</p>
                <p className="mt-2 font-heading text-lg font-semibold text-matte dark:text-concrete">{SITE.phone}</p>
              </a>
              <a href={`mailto:${SITE.email}`} className="panel-glass-subtle rounded-2xl p-5 transition">
                <p className="text-xs uppercase tracking-wide text-gold">Email</p>
                <p className="mt-2 font-heading text-lg font-semibold text-matte dark:text-concrete">{SITE.email}</p>
              </a>
            </div>

            <div className="panel-glass-subtle rounded-2xl p-6">
              <p className="text-xs uppercase tracking-wide text-gold">Business hours</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-gray dark:text-stone-gray-muted">
                Monday – Friday · 8:00 – 18:00 WAT
                <br />
                Saturday · 9:00 – 14:00 WAT
                <br />
                Emergency technical line available for active installations.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-matte/10 shadow-glow-border dark:border-gold/12 dark:shadow-glow-border-dark">
              <iframe
                title="Nature Stone Construction location"
                src={MAP_EMBED}
                className="aspect-[4/3] h-[320px] w-full border-0 md:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-3xl border border-gold/20 bg-gradient-to-br from-deep-charcoal via-matte to-charcoal p-8 text-concrete shadow-glow-border-dark">
              <p className="text-xs uppercase tracking-[0.35em] text-gold">Ready when you are</p>
              <h3 className="mt-3 font-heading text-2xl font-semibold text-concrete">Book a technical walkthrough</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-gray-muted">
                From QT4-20 throughput to custom molds and curb profiles—we align production with your schedule.
              </p>
              <a
                href={whatsappPrefillUrl(`Hello ${SITE.name}, I'd like to speak with your technical concierge.`)}
                target="_blank"
                rel="noreferrer"
                className="cta-glow mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-wide text-charcoal transition hover:bg-gold-bright"
              >
                WhatsApp concierge
              </a>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">FAQ</p>
              {FAQ_ITEMS.map((item, i) => (
                <div key={item.q} className="panel-glass-subtle overflow-hidden rounded-2xl">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-matte dark:text-concrete"
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
                        className="border-t border-matte/10 px-5 dark:border-gold/10"
                      >
                        <p className="py-4 text-sm leading-relaxed text-stone-gray dark:text-stone-gray-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
