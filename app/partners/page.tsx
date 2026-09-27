'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PartnerEcosystem from '@/components/PartnerEcosystem';
import FullWidthCtaBanner from '@/components/FullWidthCtaBanner';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import MobileFloatingCta from '@/components/MobileFloatingCta';
import { useLanguage } from '@/context/LanguageContext';

export default function PartnersPage() {
  const { t, isRtl } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const data = t.partnersPage;

  return (
    <div className="page" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Hero Header */}
      <section className="section-padding text-center">
        <p className="eyebrow" style={{ margin: '0 auto 16px' }}>{data.tag}</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', maxWidth: '860px', margin: '0 auto 16px' }}>
          {data.title}
        </h1>
        <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '17px', color: 'var(--ink-soft)' }}>
          {data.subtitle}
        </p>
      </section>

      {/* Ecosystem & Categories */}
      <section className="section-padding">
        <div className="section-head">
          <p className="eyebrow">{data.partnerEcosystemTitle}</p>
          <h2>{data.partnerEcosystemSubtitle}</h2>
        </div>

        <PartnerEcosystem />
      </section>

      <FullWidthCtaBanner onOpenConsultation={() => setIsConsultationOpen(true)} />
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
      <MobileFloatingCta onOpenConsultation={() => setIsConsultationOpen(true)} />
    </div>
  );
}
