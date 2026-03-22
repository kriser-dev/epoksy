import { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ProcessSection from '@/components/ProcessSection';
import OfferSection from '@/components/OfferSection';
import ProjectsSection from '@/components/ProjectsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import SeoSection from '@/components/SeoSection';
import BackToTop from '@/components/BackToTop';

import FooterArea from '@/components/FooterArea';

export const metadata: Metadata = {
  title: 'Epoksy | Posadzki Żywiczne i Przemysłowe',
  description: 'Profesjonalne posadzki żywiczne, epoksydowe i poliuretanowe. Trwałe rozwiązania dla przemysłu, magazynów i garaży.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-600 selection:text-white scroll-smooth relative">
      <StructuredData />
      <Navigation />
      
      <main>
        <Hero />
        <ProblemSection />
        <ProcessSection />
        <OfferSection />
        <ProjectsSection />
        <FaqSection />
        <ContactSection />
        <SeoSection />
      </main>

      <FooterArea />
      <BackToTop />
    </div>
  );
}