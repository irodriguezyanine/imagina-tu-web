import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
