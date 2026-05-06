import { ApproachSection } from "@/components/landing/ApproachSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { SelectedWork } from "@/components/landing/SelectedWork";

export default function Home() {
  return (
    <main id="top" className="page-shell pb-4 sm:pb-6">
      <Navbar />
      <Hero />
      <SelectedWork />
      <ApproachSection />
      <CTASection />
      <Footer />
    </main>
  );
}
