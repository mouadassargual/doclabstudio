import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ImpactSection from "@/components/ImpactSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
