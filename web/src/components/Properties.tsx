"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconBuilding, IconMapPin } from "@/components/icons/IndustrialIcons";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PROPERTIES, PROPERTY_SERVICES, SITE, type PropertyStatus } from "@/lib/constants";
import { whatsappPrefillUrl } from "@/lib/whatsapp";

function statusClass(status: PropertyStatus) {
  switch (status) {
    case "For Sale":
      return "border-gold/45 bg-gold/15 text-gold";
    case "Coming Soon":
      return "border-white/20 bg-white/10 text-zinc-300 dark:border-white/20 dark:text-zinc-300";
    case "Sold":
      return "border-matte/20 bg-matte/10 text-stone-gray dark:border-white/10 dark:text-zinc-500";
    default: {
      const _exhaustive: never = status;
      return _exhaustive;
    }
  }
}

function PropertyVisual({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  if (image) {
    return (
      <div className="relative h-[7.5rem] overflow-hidden sm:h-[9rem]">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" />
      </div>
    );
  }

  return (
    <div className="relative flex h-[7.5rem] items-center justify-center overflow-hidden bg-gradient-to-br from-matte via-charcoal to-industrial/40 sm:h-[9rem] dark:from-charcoal dark:via-matte dark:to-gold/25">
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-grid-fade bg-[length:28px_28px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(201,162,39,0.25),transparent_55%)]" />
      <IconBuilding className="relative h-10 w-10 text-gold/90 sm:h-11 sm:w-11" />
    </div>
  );
}

export function Properties() {
  return (
    <section id="properties" className="relative overflow-hidden bg-section-concrete py-10 sm:py-12 md:py-14 dark:bg-section-charcoal">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(201,162,39,0.1),transparent_40%),radial-gradient(circle_at_100%_40%,rgba(232,93,4,0.08),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grid-fade bg-[length:48px_48px] dark:opacity-[0.08]" />

      <div className="section-wrap">
        <ScrollReveal>
          <div className="mx-auto mb-5 max-w-2xl text-center sm:mb-6">
            <p className="type-badge">Properties</p>
            <h2 className="type-title mt-2 text-matte dark:text-concrete">Land &amp; property, verified</h2>
            <p className="type-subtitle mt-2 text-sm text-stone-gray dark:text-stone-gray-muted sm:text-base">
              Documented land and property opportunities backed by Nature Stone Construction &amp; Properties.
            </p>
            <ul className="mt-3 flex flex-wrap items-center justify-center gap-1.5 sm:mt-4 sm:gap-2">
              {PROPERTY_SERVICES.map((service) => (
                <li
                  key={service}
                  className="type-perk rounded-full border border-matte/15 bg-white/60 px-2.5 py-0.5 text-stone-gray-deep dark:border-gold/25 dark:bg-white/5 dark:text-concrete-dim"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid min-w-0 gap-3 sm:gap-4 md:grid-cols-3">
            {PROPERTIES.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="group min-w-0 overflow-hidden rounded-2xl border border-matte/10 bg-white/70 shadow-sm backdrop-blur-md dark:border-gold/20 dark:bg-white/[0.06]"
              >
                <div className="relative">
                  <PropertyVisual title={item.title} image={item.image} />
                  <span
                    className={`type-perk absolute left-3 top-3 rounded-full border px-2 py-0.5 backdrop-blur-md ${statusClass(item.status)}`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="space-y-2.5 p-4 sm:p-5">
                  <div>
                    <p className="type-perk text-industrial dark:text-gold">{item.type}</p>
                    <h3 className="type-title mt-0.5 text-base text-matte dark:text-concrete sm:text-lg">{item.title}</h3>
                    <p className="mt-1.5 flex min-w-0 items-start gap-1.5 text-xs text-stone-gray dark:text-stone-gray-muted sm:text-sm">
                      <IconMapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                      <span className="min-w-0 leading-snug">{item.location}</span>
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-1.5">
                    {item.highlights.map((chip) => (
                      <li
                        key={chip}
                        className="type-perk rounded-full border border-matte/10 bg-matte/[0.04] px-2 py-0.5 text-stone-gray-deep dark:border-white/15 dark:bg-white/5 dark:text-concrete-dim"
                      >
                        {chip}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappPrefillUrl(
                      `Hello ${SITE.name}, I want details on "${item.title}" (${item.location}). Please share availability and next steps.`,
                      SITE.whatsapp
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-cta inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-4 py-2.5 text-center text-white transition hover:brightness-110"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-4 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-stone-gray dark:text-zinc-500 sm:mt-5 sm:text-xs">
            Verified titles · Genuine documentation · Site inspection available
          </p>

          <div className="mt-4 flex min-w-0 flex-col gap-3 overflow-hidden rounded-2xl border border-industrial/35 bg-gradient-to-r from-industrial/20 via-gold/10 to-transparent p-3.5 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4">
            <div className="min-w-0">
              <p className="type-title text-sm text-matte dark:text-white sm:text-base">
                Looking for land or property? Tell us your budget and location.
              </p>
            </div>
            <a
              href={whatsappPrefillUrl(
                `Hello ${SITE.name}, I am looking for land or property. My preferred location and budget are: `,
                SITE.whatsapp
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="type-cta inline-flex w-full shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold px-5 py-2.5 text-charcoal transition hover:bg-gold-bright sm:w-auto"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
