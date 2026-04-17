import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsBanner from "@/components/ClientsBanner";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ImpactSection from "@/components/ImpactSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ClientsBanner />
      <ProblemSection />
      <SolutionSection />
      <BeforeAfterSection />
      <ImpactSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactForm />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
