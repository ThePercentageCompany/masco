'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

const serviceImages: Record<string, string> = {
  'modern-trade': '/images/retail-shelf.jpg',
  'reverse-pricing': '/images/executive-advisory.jpg',
  'key-accounts': '/images/executive-advisory.jpg',
  'trade-marketing': '/images/petrol-impulse.jpg',
  'ecommerce': '/images/retail-shelf.jpg',
  'petrol-stations': '/images/petrol-impulse.jpg',
  'market-entry': '/images/executive-advisory.jpg',
  'field-merchandising': '/images/retail-shelf.jpg',
};

export default function ServicesSection({ onOpenConsultation }: ServicesSectionProps) {
  const { t, isRtl } = useLanguage();

  return (
    <section className="audiences" id="services">
      <div className="section-head">
        <p className="eyebrow">{t.servicesOverview.tag}</p>
        <h2>{t.servicesOverview.title}</h2>
        <p>{t.servicesOverview.subtitle}</p>
      </div>

      <div className="audience-grid">
        {t.servicesOverview.items.map((service, index) => {
          const imgSrc = serviceImages[service.id] || '/images/retail-shelf.jpg';

          return (
            <article key={service.id} className="audience-card">
              <div className="audience-art">
                <Image
                  src={imgSrc}
                  alt={service.title}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 25vw"
                  className="audience-img"
                />
              </div>

              <span className="step-n" style={{ margin: '0 20px 10px', width: 'fit-content' }}>
                0{index + 1}
              </span>
              <h3>{service.title}</h3>
              <p style={{ fontWeight: 600, color: 'var(--green-deep)', marginBottom: '8px' }}>
                {service.tagline}
              </p>
              <p>{service.desc}</p>

              <div style={{ padding: '16px 20px 0', marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                  {service.deliverables.slice(0, 2).map((deliv, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--ink-soft)' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--green-deep)', flexShrink: 0 }} />
                      <span style={{ fontWeight: 500 }}>{deliv}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                  <Link
                    href={`/services#${service.id}`}
                    style={{ fontSize: '13px', fontWeight: 700, color: 'var(--green-deep)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  >
                    <span>{isRtl ? 'استكشف المزيد' : 'Learn more'}</span>
                    {isRtl ? <ArrowLeft size={13} /> : <ArrowRight size={13} />}
                  </Link>

                  {onOpenConsultation && (
                    <button
                      onClick={() => onOpenConsultation(service.title)}
                      style={{ background: 'none', border: 'none', fontSize: '12px', fontWeight: 600, color: 'var(--muted)', cursor: 'pointer' }}
                    >
                      {isRtl ? 'استفسار' : 'Inquire'}
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
