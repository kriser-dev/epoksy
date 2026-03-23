import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StructuredData from '@/components/StructuredData';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ProcessSection from '@/components/ProcessSection';
import OfferSection from '@/components/OfferSection';
import SeoSection from '@/components/SeoSection';

const ProjectsSection = dynamic(() => import('@/components/ProjectsSection'), { 
  ssr: true,
  loading: () => <div className="h-screen bg-white animate-pulse" />
});
const FaqSection = dynamic(() => import('@/components/FaqSection'), { ssr: true });
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: true });
const FooterArea = dynamic(() => import('@/components/FooterArea'), { 
  ssr: true,
  loading: () => <div className="h-64 bg-slate-950 animate-pulse" /> 
});
const BackToTop = dynamic(() => import('@/components/BackToTop'));

export const metadata: Metadata = {
  title: 'Posadzki Żywiczne Przemysłowe - Epoksydowe i Poliuretanowe | EPOKSY',
  description: 'Profesjonalne posadzki żywiczne dla hal przemysłowych, magazynów i garaży. Systemy epoksydowe i poliuretanowe odporne na chemię. ✓ 5 lat gwarancji ✓ Darmowa wycena',
  keywords: 'posadzki żywiczne, posadzki epoksydowe, posadzki przemysłowe, posadzki poliuretanowe, posadzki garażowe',
  openGraph: {
    title: 'EPOKSY - Profesjonalne Posadzki Żywiczne',
    description: 'Specjalistyczne systemy żywiczne dla najbardziej wymagających środowisk przemysłowych',
    type: 'website',
    locale: 'pl_PL',
    url: 'https://epoksy.pl',
    siteName: 'EPOKSY',
    images: [{
      url: 'https://epoksy.pl/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'EPOKSY - Posadzki Żywiczne'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPOKSY - Profesjonalne Posadzki Żywiczne',
    description: 'Specjalistyczne systemy żywiczne dla przemysłu'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: {
    canonical: 'https://epoksy.pl'
  }
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