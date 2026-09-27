'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ReversePricingCalculator from '@/components/ReversePricingCalculator';
import PhasedTimeline from '@/components/PhasedTimeline';
import PetrolStationStrategy from '@/components/PetrolStationStrategy';
import FullWidthCtaBanner from '@/components/FullWidthCtaBanner';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import MobileFloatingCta from '@/components/MobileFloatingCta';
import { useLanguage } from '@/context/LanguageContext';
import { AlertTriangle } from 'lucide-react';

export default function MarketEntryPage() {
  const { t, isRtl } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const data = t.marketEntryPage;

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

      {/* Warning: Why Discount Pricing Fails in Hypermarkets */}
      <section className="feature-card" style={{ padding: '36px', borderLeft: '4px solid var(--masco-red)', marginBottom: '36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <span className="step-n" style={{ color: 'var(--masco-red)', background: 'rgba(228, 24, 29, 0.08)' }}>
            Commercial Risk Advisory
          </span>
          <h2 style={{ fontSize: '24px', margin: 0, color: 'var(--ink)' }}>
            {data.warningTitle}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {data.warningPoints.map((point, idx) => (
            <div
              key={idx}
              style={{
                padding: '18px',
                background: 'var(--bg-elev)',
                borderRadius: '16px',
                border: '1px solid var(--line)',
              }}
            >
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--masco-red)' }} />
                <span>{point.title}</span>
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--ink-soft)', lineHeight: 1.5, margin: 0 }}>
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reverse Pricing Calculator Section */}
      <section className="section-padding" id="reverse-calculator">
        <ReversePricingCalculator />
      </section>

      {/* Phased Market Entry Timeline */}
      <section className="section-padding">
        <PhasedTimeline />
      </section>

      {/* Petrol Station Strategy */}
      <section className="section-padding">
        <PetrolStationStrategy />
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
