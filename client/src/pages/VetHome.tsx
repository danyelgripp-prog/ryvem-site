import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import MethodologySection from "@/components/MethodologySection";
import ResultsSection from "@/components/ResultsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function VetHome() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MethodologySection />
      <ResultsSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <CTASection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
