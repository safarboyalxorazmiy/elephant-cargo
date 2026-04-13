import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elephantcargollc.com"),
  title: {
    default: "Elephant Cargo LLC | Premium Freight Brokerage",
    template: "%s | Elephant Cargo LLC",
  },
  description:
    "Licensed and bonded freight brokerage connecting shippers with trusted carriers across all 48 continental states. Reliable capacity. Competitive rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body style={{ fontFamily: "var(--font-body), sans-serif" }}>
        <CustomCursor />
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
