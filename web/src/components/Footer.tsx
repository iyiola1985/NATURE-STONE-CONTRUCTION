"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { newsletterSignupMessage, whatsappPrefillUrl } from "@/lib/whatsapp";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="border-t border-gold/15 bg-section-matte text-stone-gray-muted">
      <div className="section-wrap py-12 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative h-16 w-48">
              <Image src="/images/logo.png" alt={SITE.legalName} fill className="object-contain brightness-110" />
            </div>
            <p className="mt-6 text-sm leading-relaxed text-stone-gray-muted">
              Hydraulic block machinery, premium pavers, land &amp; property sales, and infrastructure surfacing engineered for Nigeria&apos;s growth.
            </p>
          </div>

          <div>
            <p className="type-badge">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-concrete">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="type-badge">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>{SITE.address}</li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-concrete">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-concrete">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-gold/20 p-2 transition hover:border-gold/50 hover:text-gold">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.8 2.7 4.8 6.2V24h-4v-6.8c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.8-2.6 3.6V24h-4V8z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full border border-gold/20 p-2 transition hover:border-gold/50 hover:text-gold">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 17a5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM18 6.5a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full border border-gold/20 p-2 transition hover:border-gold/50 hover:text-gold">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.05H7V12h3.5V9.5c0-3.5 2-5.5 5.3-5.5 1.5 0 3.2.3 3.2.3v3.5h-1.8c-1.8 0-2.4 1.1-2.4 2.2V12h4.1l-.7 2.9h-3.4V22A10 10 0 0022 12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="type-badge">Insights</p>
            <p className="mt-4 text-sm text-stone-gray-muted">Quarterly notes on hydraulic throughput, mold design, and Nigerian infrastructure trends.</p>
            <form
              className="mt-4 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                const url = whatsappPrefillUrl(newsletterSignupMessage(email));
                const opened = window.open(url, "_blank", "noopener,noreferrer");
                if (!opened) window.location.href = url;
              }}
            >
              <input
                type="email"
                required
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-gold/20 bg-deep-charcoal/40 px-4 py-2.5 text-sm text-concrete outline-none ring-gold/25 backdrop-blur-sm focus:ring-2"
              />
              <button type="submit" className="type-cta cta-glow rounded-full bg-[#25D366] px-4 py-2.5 text-white transition hover:brightness-110">
                Join via WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/10 pt-8 pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-10 md:pb-0">
          <div className="flex flex-col gap-3 text-center text-xs sm:text-left md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-6">
            <p className="text-concrete/90">
              © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            </p>
            <p className="hidden text-stone-gray-muted sm:block md:max-w-xs md:flex-1 md:text-right lg:max-w-md">
              Precision industrial systems · Built in Nigeria · Trusted nationwide
            </p>
            <p className="relative z-[1] shrink-0 text-sm text-concrete sm:text-xs md:order-none">
              Powered by{" "}
              <a
                href="https://sholatech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold underline decoration-gold/50 underline-offset-2 transition hover:text-gold-bright"
              >
                sholatech.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
