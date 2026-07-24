"use client";

import { motion } from "framer-motion";
import { FactoryVideoPlayer } from "@/components/FactoryVideoPlayer";
import { ImageLightboxGallery } from "@/components/ImageLightboxGallery";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { HIRE_FORKLIFT_IMAGE, SITE, TRUCK_HIRE_VIDEO_SRC } from "@/lib/constants";
import { whatsappPrefillUrl } from "@/lib/whatsapp";

const FORKLIFT_GALLERY = [
  {
    src: HIRE_FORKLIFT_IMAGE,
    alt: "Yellow Lugong all-terrain forklift ready for hire at Nature Stone yard",
    className: "min-h-[200px] sm:min-h-[240px] md:min-h-[280px]",
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
            {/* Forklift — real photo, tap to enlarge */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-white/[0.08] to-transparent shadow-[0_0_0_1px_rgba(201,162,39,0.12),0_24px_80px_rgba(0,0,0,0.35)] sm:rounded-3xl"
            >
              <div className="relative p-2 sm:p-3">
                <span className="type-perk pointer-events-none absolute left-5 top-5 z-[3] max-w-[calc(100%-2.5rem)] truncate rounded-full border border-gold/40 bg-black/55 px-2.5 py-1 text-gold backdrop-blur-md sm:left-6 sm:top-6 sm:px-3 sm:py-1.5">
                  Lift it. Stack it. Done.
                </span>
                <ImageLightboxGallery
                  images={FORKLIFT_GALLERY}
                  gridClassName="grid grid-cols-1 overflow-hidden rounded-xl sm:rounded-2xl"
                />
              </div>

              <div className="relative space-y-3.5 px-4 pb-4 sm:space-y-4 sm:px-7 sm:pb-7">
                <h3 className="type-title text-lg text-white sm:text-xl">Forklift for hire</h3>
                <p className="type-body text-sm text-zinc-300 sm:text-base">
                  Need heavy loads moved without the drama? Our forklift is ready for your yard, warehouse, or site. Tap
                  the photo for a closer look.
                </p>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["On-site loading & stacking", "Factory & warehouse jobs", "Short or daily hire"].map((perk) => (
                    <li
                      key={perk}
                      className="type-perk rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-concrete-dim sm:px-3 sm:py-1"
                    >
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappPrefillUrl(
                    `Hello ${SITE.name}, I want to hire a forklift. Please share availability and rates.`,
                    SITE.whatsapp
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-cta cta-glow inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3.5 text-center text-white shadow-lg shadow-black/30 transition hover:brightness-110"
                >
                  Book forklift on WhatsApp
                </a>
              </div>
            </motion.article>

            {/* Truck — clickable video */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-gold/25 bg-gradient-to-br from-white/[0.08] to-transparent shadow-[0_0_0_1px_rgba(201,162,39,0.12),0_24px_80px_rgba(0,0,0,0.35)] sm:rounded-3xl"
            >
              <div className="p-2 sm:p-3">
                <FactoryVideoPlayer
                  variant="dark"
                  badge="Haul it. Deliver it. Arrive."
                  title="Truck for hire — watch it on the road"
                  highlights={["Blocks & pavers", "Site materials", "Flexible hire"]}
                  playLabel="Play truck footage"
                  ariaLabel="Play truck for hire video"
                  videoSrc={TRUCK_HIRE_VIDEO_SRC}
                  posterSrc="/images/project-3.png"
                />
              </div>

              <div className="relative space-y-3.5 px-4 pb-4 sm:space-y-4 sm:px-7 sm:pb-7">
                <h3 className="type-title text-lg text-white sm:text-xl">Truck for hire</h3>
                <p className="type-body text-sm text-zinc-300 sm:text-base">
                  Blocks, pavers, kerbs, or site materials — our truck gets them where they need to go, on time. Tap the
                  video to play full screen.
                </p>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                  {["Nationwide-ready logistics", "Pallets & bulk loads", "Flexible hire windows"].map((perk) => (
                    <li
                      key={perk}
                      className="type-perk rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-concrete-dim sm:px-3 sm:py-1"
                    >
                      {perk}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappPrefillUrl(
                    `Hello ${SITE.name}, I want to hire a truck. Please share availability and rates.`,
                    SITE.whatsapp
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-cta cta-glow inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-5 py-3.5 text-center text-white shadow-lg shadow-black/30 transition hover:brightness-110"
                >
                  Book truck on WhatsApp
                </a>
              </div>
            </motion.article>
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
