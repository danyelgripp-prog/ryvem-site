import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FrustracoesSection from "@/components/FrustracoesSection";
import ProblemSection from "@/components/ProblemSection";
import DiagnosticSection from "@/components/DiagnosticSection";
import SolutionSection from "@/components/SolutionSection";
import MethodologySection from "@/components/MethodologySection";
import ResultsSection from "@/components/ResultsSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import QuemESection from "@/components/QuemESection";
import EscassezSection from "@/components/EscassezSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function VetHome() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FrustracoesSection />
      <ProblemSection />
      <DiagnosticSection />
      <SolutionSection />
      <MethodologySection />
      <ResultsSection />
      <ComparisonSection />
      <PricingSection />
      <GuaranteeSection />
      <QuemESection />
      <EscassezSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
