'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FullWidthCtaBanner from '@/components/FullWidthCtaBanner';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import MobileFloatingCta from '@/components/MobileFloatingCta';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { useLanguage } from '@/context/LanguageContext';
import {
  Store,
  Calculator,
  Users,
  TrendingUp,
  Zap,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  'modern-trade-entry': Store,
  'pricing-margin-architecture': Calculator,
  'key-accounts-trade-marketing': Users,
  'sales-financial-analysis': TrendingUp,
  'ecommerce-quick-commerce': Zap,
};

export default function ServicesPage() {
  const { t, isRtl } = useLanguage();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);
  const data = t.servicesPage;

  const handleInquire = (serviceName: string) => {
    setPrefilledService(serviceName);
    setIsConsultationOpen(true);
  };

  return (
    <div className="page" dir={isRtl ? 'rtl' : 'ltr'}>
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Header Banner */}
      <section className="section-padding text-center">
        <p className="eyebrow" style={{ margin: '0 auto 16px' }}>{data.tag}</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 60px)', maxWidth: '860px', margin: '0 auto 16px' }}>
          {data.title}
        </h1>
        <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '17px', color: 'var(--ink-soft)' }}>
          {data.subtitle}
        </p>
      </section>

      {/* 5 Deep-Dive Services */}
      <section className="section-padding">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {data.serviceList.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Store;

            return (
              <article
                key={service.id}
                id={service.id}
                className="feature-card"
                style={{ padding: '36px', scrollMarginTop: '100px' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                  {/* Left Column: Title & Overview */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span className="step-n" style={{ margin: 0 }}>
                        0{idx + 1} • {service.category}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
                      {service.title}
                    </h2>

                    <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--green-deep)', marginBottom: '16px' }}>
                      {service.summary}
                    </p>

                    <div style={{ padding: '16px', background: 'var(--bg-elev)', borderRadius: '16px', border: '1px solid var(--line)', marginBottom: '16px', fontSize: '13px', color: 'var(--ink-soft)' }}>
                      <strong style={{ color: 'var(--masco-red)', display: 'block', marginBottom: '4px' }}>
                        Why Crucial in Modern Trade:
                      </strong>
                      {service.whyCrucial}
                    </div>

                    <p style={{ fontSize: '13.5px', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '20px' }}>
                      <strong>Executive Methodology: </strong>{service.methodology}
                    </p>

                    <button
                      onClick={() => handleInquire(service.title)}
                      className="btn btn-primary"
                      style={{ fontSize: '13.5px' }}
                    >
                      <span>Inquire About {service.title}</span>
                      {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
                    </button>
                  </div>

                  {/* Right Column: Deliverables & Metrics */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ padding: '24px', background: 'var(--bg-elev)', borderRadius: '20px', border: '1px solid var(--line)' }}>
                      <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--green-deep)', marginBottom: '14px' }}>
                        Strategic Deliverables
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {service.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: 'var(--ink)' }}>
                            <CheckCircle2 size={16} style={{ color: 'var(--green-deep)', flexShrink: 0, marginTop: '2px' }} />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ padding: '20px 24px', background: 'var(--green-dark)', borderRadius: '20px', color: '#ffffff' }}>
                      <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        Measurable Impact KPI
                      </span>
                      <p style={{ margin: 0, fontSize: '14px', color: '#c5d8cc', fontWeight: 600 }}>
                        {service.metricsFocus}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <FullWidthCtaBanner onOpenConsultation={() => setIsConsultationOpen(true)} />
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledService={prefilledService}
      />
      <MobileFloatingCta onOpenConsultation={() => setIsConsultationOpen(true)} />
    </div>
  );
}
