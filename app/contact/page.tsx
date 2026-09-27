'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import MobileFloatingCta from '@/components/MobileFloatingCta';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { isRtl } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="page" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <ContactSection onOpenConsultation={() => setIsConsultationOpen(true)} />

      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
      <MobileFloatingCta onOpenConsultation={() => setIsConsultationOpen(true)} />
    </div>
  );
}
