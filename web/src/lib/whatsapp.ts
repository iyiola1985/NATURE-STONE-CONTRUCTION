import { SITE } from "@/lib/constants";

/** Digits only, country code without + (e.g. 2348012345678). Set in `SITE.whatsapp`. */
export function whatsappDigits(phone: string = SITE.whatsapp): string {
  return phone.replace(/\D/g, "");
}

/** WhatsApp web/app URL with prefilled message. Safe length for URL limits. */
export function whatsappPrefillUrl(message: string, phone: string = SITE.whatsapp): string {
  const max = 1500;
  const body = message.length > max ? `${message.slice(0, max - 24)}\n…(message trimmed)` : message;
  const digits = whatsappDigits(phone);
  if (!digits) {
    return `https://wa.me/?text=${encodeURIComponent(body)}`;
  }
  return `https://wa.me/${digits}?text=${encodeURIComponent(body)}`;
}

export function contactInquiryMessage(fields: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}): string {
  return [
    `*New website inquiry — ${SITE.name}*`,
    "",
    `*Name:* ${fields.name}`,
    `*Company / project:* ${fields.company.trim() || "—"}`,
    `*Email:* ${fields.email}`,
    `*Phone:* ${fields.phone}`,
    "",
    `*Message:*`,
    fields.message.trim(),
    "",
    `_Sent from ${SITE.name} contact form_`,
  ].join("\n");
}

export function qt4QuotationMessage(fields: { name: string; email: string; phone: string; message: string }): string {
  return [
    `*QT4-20 quotation request — ${SITE.name}*`,
    "",
    `*Name:* ${fields.name}`,
    `*Email:* ${fields.email}`,
    `*Phone / WhatsApp:* ${fields.phone.trim() || "—"}`,
    "",
    `*Project scope & notes:*`,
    fields.message.trim() || "—",
    "",
    `_Sent from ${SITE.name} (Featured machine form)_`,
  ].join("\n");
}

export function newsletterSignupMessage(email: string): string {
  return [
    `*Insights list signup — ${SITE.name}*`,
    "",
    `Please add this email to your quarterly updates:`,
    email.trim(),
    "",
    `_Sent from website footer_`,
  ].join("\n");
}

export function brochureRequestMessage(): string {
  return [
    `*QT4-20 brochure request — ${SITE.name}*`,
    "",
    "Please send the QT4-20 technical datasheet and cycle diagrams.",
    "",
    `_Sent from ${SITE.name} website_`,
  ].join("\n");
}
