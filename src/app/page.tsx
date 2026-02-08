import { Hero } from "@/components/Hero";
import { LivePreviews } from "@/components/LivePreviews";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LivePreviews />
      <Footer />
    </main>
  );
}
