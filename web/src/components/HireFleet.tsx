"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SITE } from "@/lib/constants";
import { whatsappPrefillUrl } from "@/lib/whatsapp";

const HIRE_CARDS = [
  {
    kind: "forklift" as const,
    eyebrow: "Lift it. Stack it. Done.",
    title: "Forklift for hire",
    punch: "Need heavy loads moved without the drama? Our forklift is ready for your yard, warehouse, or site.",
    perks: ["On-site loading & stacking", "Factory & warehouse jobs", "Short or daily hire"],
    image: "/images/project-2.png",
    message: `Hello ${SITE.name}, I want to hire a forklift. Please share availability and rates.`,
  },
  {
    kind: "truck" as const,
    eyebrow: "Haul it. Deliver it. Arrive.",
    title: "Truck for hire",
    punch: "Blocks, pavers, kerbs, or site materials — our truck gets them where they need to go, on time.",
    perks: ["Nationwide-ready logistics", "Pallets & bulk loads", "Flexible hire windows"],
    image: "/images/project-3.png",
    message: `Hello ${SITE.name}, I want to hire a truck. Please share availability and rates.`,
  },
];

export function HireFleet() {
  return (
    <section id="hire" className="section-pad relative overflow-hidden bg-section-charcoal text-concrete">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(201,162,39,0.22),transparent_42%),radial-gradient(circle_at_90%_30%,rgba(232,93,4,0.16),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-grid-fade bg-[length:48px_48px]" />

      <div className="section-wrap">
        <ScrollReveal>
          <div className="mx-auto mb-8 max-w-3xl px-0.5 text-center sm:mb-14">
            <p className="type-badge inline-flex max-w-full items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-2.5 py-1.5 sm:px-3">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="truncate">Available now · Hire our fleet</span>
            </p>
            <h2 className="type-hero-title mt-4 text-balance text-white sm:mt-5">
              Forklift &amp; truck{" "}
              <span className="bg-gradient-to-r from-gold via-gold-bright to-industrial bg-clip-text text-transparent">
                for hire
              </span>
            </h2>
            <p className="type-subtitle mt-3 text-zinc-300 sm:mt-4">
              Same tough gear that keeps our plant moving — now ready for your job. Book the lift, the haul, or both.
            </p>
          </div>

          <div className="grid min-w-0 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
            {HIRE_CARDS.map((card, i) => (
              <motion.article
                key={card.kind}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-white/[0.08] to-transparent shadow-[0_0_0_1px_rgba(201,162,39,0.12),0_24px_80px_rgba(0,0,0,0.35)] sm:rounded-3xl"
              >
                <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[16/9]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />
                  <span className="type-perk absolute left-3 top-3 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-gold/40 bg-black/55 px-2.5 py-1 text-gold backdrop-blur-md sm:left-4 sm:top-4 sm:max-w-none sm:px-3 sm:py-1.5">
                    {card.eyebrow}
                  </span>
                </div>

                <div className="relative space-y-3.5 p-4 sm:space-y-4 sm:p-7">
                  <h3 className="type-title text-lg text-white sm:text-xl">{card.title}</h3>
                  <p className="type-body text-sm text-zinc-300 sm:text-base">{card.punch}</p>
                  <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                    {card.perks.map((perk) => (
                      <li
                        key={perk}
                        className="type-perk rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-concrete-dim sm:px-3 sm:py-1"
                      >
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappPrefillUrl(card.message, SITE.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-cta cta-glow inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3.5 text-center text-white shadow-lg shadow-black/30 transition hover:brightness-110"
                  >
                    Book {card.kind === "forklift" ? "forklift" : "truck"} on WhatsApp
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-6 flex min-w-0 flex-col gap-4 overflow-hidden rounded-2xl border border-industrial/40 bg-gradient-to-br from-industrial/25 via-gold/15 to-transparent p-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:bg-gradient-to-r sm:p-6">
            <div className="min-w-0">
              <p className="type-badge text-gold-bright">Need both?</p>
              <p className="type-title mt-2 text-white">Forklift + truck package — ask for a combo rate</p>
              <p className="type-body mt-2 text-sm text-zinc-300">
                One message. Fast reply. We&apos;ll match your site schedule.
              </p>
            </div>
            <a
              href={whatsappPrefillUrl(
                `Hello ${SITE.name}, I want to hire both forklift and truck. Please share package rates and availability.`,
                SITE.whatsapp
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="type-cta inline-flex w-full shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold px-6 py-3.5 text-charcoal transition hover:bg-gold-bright sm:w-auto sm:py-3"
            >
              Hire the fleet
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
