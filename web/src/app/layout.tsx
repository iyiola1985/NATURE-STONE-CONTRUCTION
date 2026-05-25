import type { Metadata } from "next";
import { Barlow, Oswald } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE } from "@/lib/constants";

/** Section headers, badges, subtitles, perks (Oswald) */
const display = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

/** Body copy, forms, paragraphs (Barlow) */
const body = Barlow({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naturestoneconstruction.ng"),
  title: {
    default: `${SITE.name} | Hydraulic Block Machines & Premium Pavers`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Nature Stone Construction engineers hydraulic block machines—including the QT4-20 semi-automatic line—plus hollow blocks, paving stones, interlock pavers, curb stones, and nationwide infrastructure solutions across Nigeria.",
  keywords: [
    "Nature Stone Construction",
    "QT4-20 block machine",
    "hydraulic block machine Nigeria",
    "interlock pavers",
    "paving stones",
    "hollow blocks",
    "curb stones",
    "concrete machinery Lagos",
    "infrastructure Nigeria",
  ],
  authors: [{ name: SITE.legalName }],
  openGraph: {
    title: `${SITE.name} | Precision Block Technology`,
    description:
      "Luxury industrial manufacturer of hydraulic block machines and premium paving systems engineered for durability across Nigeria.",
    url: "https://naturestoneconstruction.ng",
    siteName: SITE.name,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Nature Stone Construction industrial paving and infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Hydraulic Block Machinery`,
    description: "Precision hydraulic molding, interlock pavers, and infrastructure surfacing at international standards.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.legalName,
  alternateName: SITE.name,
  description:
    "Hydraulic block machinery, QT4-20 production lines, hollow blocks, pavers, interlock, curb stones, and nationwide infrastructure surfacing in Nigeria.",
  url: "https://naturestoneconstruction.ng",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: "NG",
  knowsAbout: [
    "Hydraulic block machines",
    "Interlock pavers",
    "Road paving",
    "Concrete curb stones",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NG" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} min-w-0 overflow-x-clip font-sans antialiased`}>
        <GoogleAnalytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
