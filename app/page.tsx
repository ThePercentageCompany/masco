'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CredibilityStrip from '@/components/CredibilityStrip';
import ServicesSection from '@/components/ServicesSection';
import ProblemSolutionSection from '@/components/ProblemSolutionSection';
import RoadmapSection from '@/components/RoadmapSection';
import ReversePricingCalculator from '@/components/ReversePricingCalculator';
import CaseStudyTeaser from '@/components/CaseStudyTeaser';
import FullWidthCtaBanner from '@/components/FullWidthCtaBanner';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import MobileFloatingCta from '@/components/MobileFloatingCta';
import { useLanguage } from '@/context/LanguageContext';

export default function HomePage() {
  const { isRtl } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (serviceName?: string) => {
    setPrefilledService(serviceName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="page" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* 1. Top Fixed Bilingual Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* 2. Hero Section with Particles, Animated Lead, and Velocity Ticker */}
      <HeroSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* 3. Credibility & Foundational Pillars */}
      <CredibilityStrip />

      {/* 4. What We Do - 8 FMCG Core Strategy Cards */}
      <ServicesSection onOpenConsultation={handleOpenConsultation} />

      {/* 5. Problem vs Solution Comparison Section */}
      <ProblemSolutionSection />

      {/* 6. Execution Roadmap (From Diagnosis to Scale) */}
      <RoadmapSection />

      {/* 7. Interactive Reverse Pricing Calculator Preview */}
      <section className="section-padding" id="calculator">
        <ReversePricingCalculator />
      </section>

      {/* 8. Featured Strategy Case Study (Al Saad Rose Q4 2026-2027) */}
      <CaseStudyTeaser />

      {/* 9. Direct Consultation Brief & Contact Form */}
      <ContactSection onOpenConsultation={() => handleOpenConsultation()} />

      {/* 10. Global Footer */}
      <Footer onOpenConsultation={() => handleOpenConsultation()} />

      {/* 11. Multi-Step Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledService={prefilledService}
      />

      {/* 12. Mobile Floating Action Bar */}
      <MobileFloatingCta onOpenConsultation={() => handleOpenConsultation()} />
    </div>
  );
}
