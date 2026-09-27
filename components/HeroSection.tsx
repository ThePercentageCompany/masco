'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { TextAnimate } from './ui/text-animate';
import { Particles } from './ui/particles';
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from './ui/scroll-based-velocity';

const RETAIL_PARTNERS_EN = [
  'Carrefour UAE',
  'LuLu Hypermarket',
  'Spinneys',
  'Waitrose UAE',
  'Union Coop',
  'Sharjah Cooperative',
  'Ajman Markets Coop',
  'ADNOC Oasis',
  'ENOC Zoom',
  'Emarat Plus',
  'Amazon.ae',
  'Noon',
  'Talabat Mart',
  'Careem Quik',
  'Grandiose Supermarket',
  'Choithrams',
  'Al Maya Supermarkets',
  'Nesto Hypermarket',
];

const RETAIL_PARTNERS_AR = [
  'كارفور الإمارات',
  'لولو هايبر ماركت',
  'سبينس',
  'ويتفروس',
  'تعاونية الاتحاد',
  'جمعية الشارقة التعاونية',
  'أسواق عجمان التعاونية',
  'واحة أدنوك',
  'إينوك زووم',
  'إمارات بلس',
  'أمازون الإمارات',
  'نون',
  'طلبات مارت',
  'كريم كويك',
  'جرانديوس سوبرماركت',
  'شويترامس',
  'سوبرماركت المايا',
  'نستو هايبر ماركت',
];

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const { language, t, isRtl } = useLanguage();
  const partners = isRtl ? RETAIL_PARTNERS_AR : RETAIL_PARTNERS_EN;

  return (
    <section className="hero">
      <Particles
        className="hero-particles"
        quantity={110}
        ease={80}
        color="#0e2a1f"
        refresh
      />

      <div className="hero-content">
        <p className="eyebrow">
          <span>{t.hero.eyebrow}</span>
        </p>

        <h1>
          {t.hero.headline}{' '}
          <span style={{ color: 'var(--green-deep)' }}>
            {t.hero.headlineHighlight}
          </span>
        </h1>

        <TextAnimate
          key={language}
          animation="blurInUp"
          by="character"
          className="hero-lead"
          once
        >
          {t.hero.subheadline}
        </TextAnimate>

        <div className="hero-cta">
          {onOpenConsultation ? (
            <InteractiveHoverButton
              onClick={(e) => {
                e.preventDefault();
                onOpenConsultation();
              }}
              href="#contact"
            >
              {t.hero.primaryCta}
            </InteractiveHoverButton>
          ) : (
            <InteractiveHoverButton href="/contact">
              {t.hero.primaryCta}
            </InteractiveHoverButton>
          )}

          <Link className="btn btn-ghost" href="/market-entry">
            {t.hero.secondaryCta}
          </Link>
        </div>
      </div>

      {/* Infinite High-Velocity Retail & Strategic Partners Marquee */}
      <div className="logo-strip-velocity-wrapper" aria-label="Retail partners and key accounts">
        <ScrollVelocityContainer className="logo-strip-velocity">
          <ScrollVelocityRow baseVelocity={2.5} direction={isRtl ? -1 : 1} numCopies={2}>
            {partners.map((partner, idx) => (
              <React.Fragment key={idx}>
                <span className="strip-item">{partner}</span>
                <span className="velocity-dot">•</span>
              </React.Fragment>
            ))}
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        <div className="velocity-fade velocity-fade-left" />
        <div className="velocity-fade velocity-fade-right" />
      </div>
    </section>
  );
}
