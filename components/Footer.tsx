'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import MascoLogo from './MascoLogo';

interface FooterProps {
  onOpenConsultation?: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <MascoLogo size="md" />
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--muted)', maxWidth: '420px' }}>
            {t.footer.tagline}
          </p>
        </div>

        <div className="footer-links">
          <Link href="/services">{t.nav.services}</Link>
          <Link href="/market-entry">{t.nav.marketEntry}</Link>
          <Link href="/ecommerce">{t.nav.ecommerce}</Link>
          <Link href="/partners">{t.nav.partners}</Link>
          <Link href="/case-study">{t.nav.caseStudy}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px', margin: '32px 0 24px', paddingTop: '24px', borderTop: '1px solid var(--line)', fontSize: '13.5px' }}>
        <div>
          <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--masco-blue)', marginBottom: '12px' }}>
            {t.footer.colCompany}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--ink-soft)' }}>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/about#pillars">{t.about.threePillarsTitle}</Link>
            <Link href="/partners">{t.nav.partners}</Link>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--masco-blue)', marginBottom: '12px' }}>
            {t.footer.colCapabilities}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--ink-soft)' }}>
            <Link href="/services#modern-trade-entry">Modern Retail Entry</Link>
            <Link href="/market-entry#reverse-calculator">Reverse Pricing Model</Link>
            <Link href="/services#key-accounts-trade-marketing">Key Accounts & Trade Mktg</Link>
            <Link href="/ecommerce">E-Commerce & Quick Commerce</Link>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--masco-blue)', marginBottom: '12px' }}>
            {t.footer.colMarkets}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--ink-soft)' }}>
            <Link href="/partners">UAE Cooperatives & Hypermarkets</Link>
            <Link href="/market-entry">Petrol Station Convenience</Link>
            <Link href="/partners">Saudi Arabia (KSA) Retail</Link>
            <Link href="/partners">Egypt Consumer Market</Link>
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--masco-blue)', marginBottom: '12px' }}>
            {t.footer.colCaseStudy}
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--ink-soft)' }}>
            <Link href="/case-study">Al Saad Rose Q4 2026–2027</Link>
            <Link href="/case-study">Phase 1 Hero Soaps</Link>
            <Link href="/case-study">Commercial Retainer & Bonus</Link>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
        <p className="copyright" style={{ margin: 0 }}>
          © <span id="year">{new Date().getFullYear()}</span> MASCO Business Consulting. {t.footer.rights || 'All rights reserved.'}
        </p>
        <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--muted)' }}>
          UAE • Saudi Arabia • Egypt • FMCG Strategic Advisory
        </p>
      </div>
    </footer>
  );
}
