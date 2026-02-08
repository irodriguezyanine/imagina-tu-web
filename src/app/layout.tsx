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
    "Diseña invitaciones, web profesionales, o lo que quieras.",
  openGraph: {
    title: "IMAGINATUWEB.CL | Tu sitio web profesional en tiempo récord",
    description:
      "Diseña invitaciones, web profesionales, o lo que quieras.",
    url: "https://www.imaginatuweb.cl",
  },
  keywords: [
    "diseño web",
    "sitio web Chile",
    "landing page",
    "pago único",
    "desarrollo web",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/cumpleanos-bg.png" as="image" />
        <link rel="preload" href="/despedida-fiesta-bg.png" as="image" />
        <link rel="preload" href="/matrimonios-bg.png" as="image" />
        <link rel="preload" href="/eventos-bg.png" as="image" />
        <link rel="preload" href="/web-profesional-bg.png" as="image" />
        <link rel="preload" href="/web-empresas-bg.png" as="image" />
      </head>
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
