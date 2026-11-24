import type { Metadata } from "next";
import { Archivo, DM_Sans, Playfair_Display, Inter, Geist, Instrument_Sans, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/common/ScrollReveal";
import PublicOnly from "@/components/layout/PublicOnly";
import { getFooterProducts, getNav } from "@/lib/nav";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// Figma uses Geist for the office names and Instrument Sans for the office addresses (Our Presence / locations lists).
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

// Figma sets the values in the blog specification table in Roboto.
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400"],
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ksquare Energy - Solar Solutions",
  description: "Globally recognized leading solar energy solutions provider.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Header menu and footer: the product categories come from the admin panel.
  const [nav, productSections] = await Promise.all([getNav(), getFooterProducts()]);
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${archivo.variable} ${dmSans.variable} ${playfair.variable} ${inter.variable} ${geist.variable} ${instrumentSans.variable} ${roboto.variable} antialiased font-sans`}
      >
        <noscript>
          {/* Scroll-reveal animations start hidden; without JS they would never show. */}
          <style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <PublicOnly><Header nav={nav} /></PublicOnly>
        {children}
        <PublicOnly><Footer productSections={productSections} /></PublicOnly>
        <PublicOnly><ScrollReveal /></PublicOnly>
      </body>
    </html>
  );
}
