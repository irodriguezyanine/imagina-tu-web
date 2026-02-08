import type { Metadata } from "next";
import { PAGE_META, canonicalUrl } from "@/lib/seo";

const meta = PAGE_META["/portafolio"];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: { title: meta.title, description: meta.description },
  alternates: { canonical: canonicalUrl(meta.path ?? "/portafolio") },
};

export default function PortafolioLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
