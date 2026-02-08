import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { JsonLd } from "@/components/JsonLd";
import { SITE, KEYWORDS_STRING, PAGE_META } from "@/lib/seo";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const defaultMeta = PAGE_META["/"];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultMeta.title,
    template: "%s",
  },
  description: defaultMeta.description,
  keywords: KEYWORDS_STRING,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { email: true, telephone: true },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE.url,
    siteName: SITE.name,
    title: defaultMeta.title,
    description: defaultMeta.description,
    images: [
      {
        url: "/logo.png",
        width: 660,
        height: 144,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "192a8e16308794bb",
  },
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: SITE.url,
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
        <JsonLd />
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
