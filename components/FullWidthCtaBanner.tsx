'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

interface FullWidthCtaBannerProps {
  onOpenConsultation?: () => void;
}

export default function FullWidthCtaBanner({ onOpenConsultation }: FullWidthCtaBannerProps) {
  const { t } = useLanguage();

  return (
    <section className="cta-band" id="cta-banner">
      <div>
        <p className="eyebrow" style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--green)', margin: '0 0 12px' }}>
          FMCG Commercial Strategy Practice
        </p>
        <h2>{t.ctaBanner.title}</h2>
        <p>{t.ctaBanner.body}</p>
      </div>

      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        {onOpenConsultation ? (
          <InteractiveHoverButton
            onClick={(e) => {
              e.preventDefault();
              onOpenConsultation();
            }}
            href="#contact"
          >
            {t.ctaBanner.button}
          </InteractiveHoverButton>
        ) : (
          <InteractiveHoverButton href="/contact">
            {t.ctaBanner.button}
          </InteractiveHoverButton>
        )}

        <Link
          href="/market-entry#reverse-calculator"
          className="btn btn-outline"
          style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
        >
          {t.ctaBanner.secondaryButton}
        </Link>
      </div>
    </section>
  );
}
