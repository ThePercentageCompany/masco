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

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const { language, t, isRtl } = useLanguage();

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
          <ScrollVelocityRow baseVelocity={2.8} direction={1}>
            <span className="strip-item">Carrefour UAE</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">Lulu Hypermarket</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">Spinneys & Waitrose</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">Union Coop</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">ADNOC Oasis</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">ENOC Zoom</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">Emarat Plus</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">Amazon.ae</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">Noon Grocery</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">Talabat Mart</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">Grandiose</span>
            <span className="velocity-dot">•</span>
            <span className="strip-item">Al Maya Supermarkets</span>
            <span className="velocity-dot">•</span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        <div className="velocity-fade velocity-fade-left" />
        <div className="velocity-fade velocity-fade-right" />
      </div>
    </section>
  );
}
