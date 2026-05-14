"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { whatsappPrefillUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const href = whatsappPrefillUrl(
    `Hello ${SITE.name}, I would like to discuss a project or quotation.`
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.47 0 .12 5.35.12 11.94c0 2.1.55 4.14 1.6 5.95L0 24l6.22-1.63a11.8 11.8 0 005.84 1.57h.01c6.59 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.49-8.52zM12.06 21.6h-.01a9.4 9.4 0 01-4.8-1.31l-.34-.2-3.98 1.04 1.06-3.87-.22-.36a9.43 9.43 0 01-1.44-5.01c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.76a9.37 9.37 0 012.76 6.67c0 5.2-4.23 9.44-9.43 9.44zm5.17-7.03c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.18.18-.31.28-.51.1-.2.05-.38-.02-.53-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47l-.52-.01c-.18 0-.47.07-.72.34-.25.28-.94.92-.94 2.24 0 1.32.96 2.6 1.1 2.78.14.18 1.9 2.9 4.6 4.07.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.2-.53-.34z" />
      </svg>
    </motion.a>
  );
}
