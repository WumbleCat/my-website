import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

/* Cormorant Garamond for headings over Lora for body — the classical
   pairing. Only the two weights the system uses are loaded: normal for
   display sizes, semibold for interface headings. Bold is deliberately
   absent; weight and italics carry emphasis instead. */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://andersnovak.com"),
  title: {
    default: "Kometh Tauch",
    template: "%s — Kometh Tauch",
  },
  description:
    "Kometh Tauch — BSc Data Science with Industrial Placement, University of Bristol.",
  alternates: {
    types: { "application/rss+xml": "/rss.xml" },
  },
  openGraph: {
    type: "website",
    siteName: "Kometh Tauch",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${lora.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
