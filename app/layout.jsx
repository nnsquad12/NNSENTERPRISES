import "./globals.css";
import { Archivo, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plexmono",
  display: "swap",
});

export const metadata = {
  title: "NNS Enterprises LLC — Modern Media. Strategic Growth. Premium Storytelling.",
  description:
    "NNS Enterprises LLC is a modern media, marketing, and production company built at the intersection of sports, entertainment, digital media, and audience growth.",
  icons: { icon: "/mark-black.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
