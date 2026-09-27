'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import CredibilityStrip from '@/components/CredibilityStrip';
import RegionalMarketMap from '@/components/RegionalMarketMap';
import FullWidthCtaBanner from '@/components/FullWidthCtaBanner';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import MobileFloatingCta from '@/components/MobileFloatingCta';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  const { t, isRtl } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const data = t.about;

  return (
    <div className="page" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Hero Header */}
      <section className="section-padding">
        <div className="section-head">
          <p className="eyebrow">{data.tag}</p>
          <h1>{data.title}</h1>
          <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--masco-blue)', margin: '16px 0 12px' }}>
            {data.introLead}
          </p>
          <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '24px' }}>
            {data.introBody}
          </p>
          <InteractiveHoverButton onClick={() => setIsConsultationOpen(true)}>
            {t.nav.requestConsultation}
          </InteractiveHoverButton>
        </div>

        <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '26px', overflow: 'hidden', border: '1px solid var(--line)', marginTop: '32px' }}>
          <Image
            src="/images/executive-advisory.jpg"
            alt="MASCO Executive FMCG Advisory Boardroom"
            fill
            className="object-cover"
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,16,51,0.88) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', color: '#ffffff' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--masco-red)' }}>
              Boardroom Advisory
            </span>
            <p style={{ fontSize: '16px', fontWeight: 700, margin: '4px 0 0' }}>
              Executive FMCG Strategy & Retail Telemetry
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <CredibilityStrip />

      {/* Three Foundational Pillars */}
      <section className="section-padding" id="pillars">
        <div className="section-head">
          <p className="eyebrow">Core Foundation</p>
          <h2>{data.threePillarsTitle}</h2>
        </div>

        <div className="pillars">
          {data.pillars.map((pillar, idx) => (
            <article key={idx} className="pillar">
              <span className="step-n">0{idx + 1}</span>
              <h3>{pillar.title}</h3>
              <p style={{ marginBottom: '16px' }}>{pillar.desc}</p>
              <div style={{ paddingTop: '12px', borderTop: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {pillar.highlights.map((h, hIdx) => (
                  <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--ink)' }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--masco-blue)', flexShrink: 0 }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Regional Footprint & Map */}
      <section className="section-padding" id="regional">
        <RegionalMarketMap />
      </section>

      {/* Governance & Factual Integrity */}
      <section className="feature-card" style={{ padding: '36px', textAlign: 'center', margin: '32px 0' }}>
        <p className="eyebrow" style={{ margin: '0 auto 12px' }}>Professional Governance</p>
        <h2 style={{ fontSize: '26px', marginBottom: '12px' }}>{data.governanceTitle}</h2>
        <p style={{ maxWidth: '780px', margin: '0 auto', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
          {data.governanceBody}
        </p>
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
