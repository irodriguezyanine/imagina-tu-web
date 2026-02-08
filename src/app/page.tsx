import { Hero } from "@/components/Hero";
import { LivePreviews } from "@/components/LivePreviews";
import { Services } from "@/components/Services";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LivePreviews />
      <Services />
      <Comparison />
      <Pricing />
      <Team />
      <Footer />
    </main>
  );
}
