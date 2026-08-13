import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono-meta",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niido — qué hacer en Guatemala esta semana",
  description:
    "Convertimos el «no hay nada que hacer» en un «¿qué hacemos hoy?». Una membresía, un catálogo de clases, talleres y planes de gente que hace cosas en Guatemala.",
  openGraph: {
    title: "Niido — qué hacer en Guatemala esta semana",
    description:
      "Convertimos el «no hay nada que hacer» en un «¿qué hacemos hoy?».",
    locale: "es_GT",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf6ef",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-GT">
      <body
        className={`${bricolage.variable} ${instrument.variable} ${dmMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
