'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CashFlowComparison from '@/components/CashFlowComparison';
import QuickCommerceSection from '@/components/QuickCommerceSection';
import FullWidthCtaBanner from '@/components/FullWidthCtaBanner';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import MobileFloatingCta from '@/components/MobileFloatingCta';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export default function EcommercePage() {
  const { t, isRtl } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const data = t.ecommercePage;

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

      {/* Primary Marketplaces: Amazon FBA & Noon FBN */}
      <section className="section-padding">
        <div className="section-head">
          <p className="eyebrow">{data.platformsTitle}</p>
          <h2>{data.platformsSubtitle}</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {data.platforms.map((plat, idx) => (
            <article
              key={idx}
              className="feature-card"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '24px', margin: 0 }}>{plat.name}</h3>
                  <span className="step-n" style={{ margin: 0 }}>
                    {plat.model}
                  </span>
                </div>

                <div style={{ padding: '16px', borderRadius: '14px', background: 'var(--bg-elev)', border: '1px solid var(--line)', marginBottom: '16px', fontSize: '13px', color: 'var(--ink)' }}>
                  <strong style={{ color: 'var(--green-deep)', display: 'block', marginBottom: '4px' }}>Key Strategic Advantage:</strong>
                  {plat.benefit}
                </div>

                <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {plat.strategy}
                </p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--line)', fontSize: '12.5px', fontWeight: 600, color: 'var(--green-deep)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} />
                <span>14-day automated disbursement into operating capital.</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cash Flow Comparison (14-day vs 90-day cycles) */}
      <section className="section-padding">
        <CashFlowComparison />
      </section>

      {/* Quick Commerce & Dark Stores */}
      <section className="section-padding">
        <QuickCommerceSection />
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
