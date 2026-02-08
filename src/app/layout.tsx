import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMAGINATUWEB.CL | Tu sitio web profesional en tiempo récord",
  description:
    "Diseño web humano, pago único, sin cuotas mensuales. Evita Wix y Squarespace. Un desarrollador real te asesora y construye tu sitio a medida.",
  keywords: [
    "diseño web",
    "sitio web Chile",
    "landing page",
    "pago único",
    "desarrollo web",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
