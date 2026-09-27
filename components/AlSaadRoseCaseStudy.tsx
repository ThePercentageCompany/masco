'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import AlSaadRoseLogo from './AlSaadRoseLogo';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { CheckCircle2, Lock, Unlock } from 'lucide-react';

export default function AlSaadRoseCaseStudy() {
  const { t, isRtl } = useLanguage();
  const data = t.caseStudyPage;
  const [isProtectedViewUnlocked, setIsProtectedViewUnlocked] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {/* 1. Case Study Hero Banner in .cta-band */}
      <div className="cta-band" style={{ margin: 0 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <span style={{ background: 'rgba(124, 255, 107, 0.15)', color: 'var(--green)', padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 800 }}>
              {data.tag} • {data.period}
            </span>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <AlSaadRoseLogo variant="white" size="lg" />
          </div>

          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)', color: '#ffffff', fontWeight: 800, marginBottom: '12px' }}>
            {data.title}
          </h1>
          <p style={{ fontSize: '16px', color: '#c5d8cc', lineHeight: 1.6, marginBottom: '20px' }}>
            {data.subtitle}
          </p>

          <div style={{ padding: '14px 18px', borderRadius: '14px', background: 'rgba(255,255,255,0.08)', fontSize: '13px', color: '#ffffff', fontWeight: 500 }}>
            {data.contextBody}
          </div>
        </div>
      </div>

      {/* 2. Proposed Brand Architecture: AROVIA & ZENVAYA */}
      <div className="feature-card" style={{ padding: '36px' }}>
        <div className="section-head">
          <p className="eyebrow">{data.brandConceptsTitle}</p>
          <h2>{data.brandConceptsSubtitle}</h2>
          <p>{data.brandConceptsNote}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {data.brandConcepts.map((concept, idx) => (
            <div
              key={idx}
              style={{
                padding: '28px',
                background: 'var(--bg-elev)',
                borderRadius: '20px',
                border: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '24px', margin: 0, fontWeight: 900 }}>{concept.name}</h3>
                  <span className="step-n" style={{ margin: 0 }}>Proposed Concept</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', display: 'block' }}>
                      Brand Positioning
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--green-deep)' }}>
                      {concept.positioning}
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', display: 'block' }}>
                      Target Retail Channels
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--ink)' }}>
                      {concept.channelFocus}
                    </span>
                  </div>

                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', display: 'block' }}>
                      Visual Identity & Packaging
                    </span>
                    <span style={{ fontSize: '13px', color: 'var(--ink-soft)' }}>
                      {concept.aesthetic}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '14px', borderTop: '1px solid var(--line)', fontSize: '12px', fontWeight: 700, color: 'var(--green-deep)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} />
                <span>Isolates modern retail price points from discount trade.</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Phase 1 Hero SKUs Showcase in audience-grid style */}
      <div className="feature-card" style={{ padding: '36px' }}>
        <div className="section-head">
          <p className="eyebrow">High-Velocity Portfolio</p>
          <h2>{data.heroSkusTitle}</h2>
          <p>{data.heroSkusSubtitle}</p>
        </div>

        {/* Visual Showcase */}
        <div style={{ position: 'relative', width: '100%', height: '280px', borderRadius: '22px', overflow: 'hidden', border: '1px solid var(--line)', marginBottom: '28px' }}>
          <Image
            src="/images/hero-soaps.jpg"
            alt="Hero SKUs Botanical Soaps"
            fill
            className="object-cover"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,42,31,0.85) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', color: '#ffffff' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--green)', display: 'block' }}>
              Al Saad Rose Phase 1 Selection
            </span>
            <p style={{ margin: '4px 0 0', fontSize: '16px', fontWeight: 800 }}>
              110 GM Luxury Artisanal Soaps (Rose • Amber Oud • Camel Milk • Hammam)
            </p>
          </div>
        </div>

        {/* 4 Hero SKU Product Cards */}
        <div className="audience-grid">
          {data.heroSkus.map((sku, idx) => (
            <article key={idx} className="audience-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span className="step-n" style={{ margin: 0 }}>
                  {sku.skuCode}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--muted)' }}>
                  {sku.weight}
                </span>
              </div>

              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{sku.name}</h3>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--green-deep)', display: 'block', marginBottom: '10px' }}>
                {sku.category}
              </span>
              <p style={{ fontSize: '13px', marginBottom: '16px' }}>{sku.keyAttributes}</p>

              <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--line)', fontSize: '12px', color: 'var(--ink-soft)' }}>
                <strong style={{ color: 'var(--ink)', display: 'block' }}>Velocity Driver:</strong>
                {sku.velocityRationale}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* 4. Commercial Partnership & Compensation Model */}
      <div className="feature-card" style={{ padding: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
          <div>
            <p className="eyebrow">{data.commercialModelTitle}</p>
            <h2 style={{ fontSize: '26px', margin: '4px 0 8px' }}>{data.commercialModelSubtitle}</h2>
            <p style={{ fontSize: '14px', color: 'var(--ink-soft)', margin: 0 }}>{data.commercialModelNote}</p>
          </div>

          <button
            onClick={() => setIsProtectedViewUnlocked(!isProtectedViewUnlocked)}
            className="btn btn-outline"
            style={{ fontSize: '13px', padding: '8px 18px' }}
          >
            {isProtectedViewUnlocked ? (
              <>
                <Unlock size={14} style={{ color: 'var(--green-deep)' }} />
                <span>Proposal View (Active)</span>
              </>
            ) : (
              <>
                <Lock size={14} style={{ color: 'var(--masco-red)' }} />
                <span>Protected Commercial View</span>
              </>
            )}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {data.commercialModelItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px',
                background: 'var(--bg-elev)',
                borderRadius: '18px',
                border: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>
                  {item.timing}
                </span>
                <h3 style={{ fontSize: '15px', color: 'var(--ink)', margin: '0 0 8px' }}>
                  {item.label}
                </h3>
                <div style={{ fontSize: '24px', fontWeight: 900, color: 'var(--green-deep)', marginBottom: '10px' }}>
                  {item.value}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '0 0 16px', lineHeight: 1.5 }}>
                  {item.detail}
                </p>
              </div>

              <div style={{ paddingTop: '10px', borderTop: '1px solid var(--line)', fontSize: '12px', fontWeight: 600, color: 'var(--green-deep)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={14} />
                <span>{item.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Execution Next Steps */}
      <div className="cta-band" style={{ margin: 0 }}>
        <div>
          <span style={{ background: 'rgba(124, 255, 107, 0.15)', color: 'var(--green)', padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', display: 'inline-block', marginBottom: '12px' }}>
            Next Implementation Milestones
          </span>
          <h2>{data.nextStepsTitle}</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '24px 0 28px' }}>
            {data.nextSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                }}
              >
                <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--green)', color: 'var(--green-dark)', fontWeight: 900, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {step.step}
                </span>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#ffffff', margin: '0 0 4px', fontWeight: 700 }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: '#c5d8cc', margin: 0, lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <InteractiveHoverButton href="/contact">
            Request Proposal Consultation
          </InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
}
