'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import AlSaadRoseLogo from './AlSaadRoseLogo';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CaseStudyTeaser() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="cta-band" id="case-study-teaser">
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ background: 'rgba(228, 24, 29, 0.18)', color: '#ff7b7f', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 700 }}>
            {t.caseStudyHighlight.badge} • {t.caseStudyHighlight.period}
          </span>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <AlSaadRoseLogo variant="white" size="md" />
        </div>

        <h2>{t.caseStudyHighlight.title}</h2>
        <p style={{ marginBottom: '24px' }}>{t.caseStudyHighlight.summary}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
          {t.caseStudyHighlight.bullets.map((bullet, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#d8e2f0' }}>
              <CheckCircle2 size={16} style={{ color: '#ff7b7f', flexShrink: 0 }} />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        <InteractiveHoverButton href="/case-study">
          {t.caseStudyHighlight.cta}
        </InteractiveHoverButton>
      </div>

      <div style={{ width: '100%', maxWidth: '420px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)', position: 'relative' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
          <Image
            src="/images/hero-soaps.jpg"
            alt="Al Saad Rose Hero SKUs"
            fill
            className="object-cover"
          />
        </div>
        <div style={{ padding: '14px 18px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#ff7b7f', fontWeight: 700, textTransform: 'uppercase', display: 'block' }}>
              Phase 1 Hero SKUs
            </span>
            <span style={{ fontSize: '12.5px', color: '#ffffff', fontWeight: 600 }}>
              Rose • Amber Oud • Camel Milk • Hammam
            </span>
          </div>
          <span style={{ background: 'var(--masco-red)', color: '#ffffff', padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 800 }}>
            Q4 2026
          </span>
        </div>
      </div>
    </section>
  );
}
