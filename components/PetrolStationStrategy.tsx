'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Fuel, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export default function PetrolStationStrategy() {
  const { t } = useLanguage();
  const data = t.marketEntryPage;

  return (
    <div className="feature-card" style={{ padding: '36px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'center' }}>
        {/* Left Column: Visual Display */}
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: '22px', overflow: 'hidden', border: '1px solid var(--line)' }}>
          <Image
            src="/images/petrol-impulse.jpg"
            alt="Petrol Station Convenience Store Impulse Display"
            fill
            className="object-cover"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,42,31,0.85) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: '18px', left: '18px', right: '18px', color: '#ffffff' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--green)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <Fuel size={14} />
              <span>ADNOC Oasis • ENOC Zoom • Emarat Plus</span>
            </span>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>
              High-Margin Impulse Purchasing at Checkout
            </p>
          </div>
        </div>

        {/* Right Column: Copy & Category Breakdown */}
        <div>
          <p className="eyebrow" style={{ margin: '0 0 12px' }}>High-Velocity Channel</p>
          <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px' }}>
            {data.petrolTitle}
          </h3>
          <p style={{ fontSize: '15px', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: '20px' }}>
            {data.petrolBody}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
            {data.petrolCategories.map((cat, idx) => (
              <div
                key={idx}
                style={{
                  padding: '18px',
                  background: 'var(--bg-elev)',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--ink)', fontWeight: 700, fontSize: '14.5px' }}>
                  <Sparkles size={16} style={{ color: 'var(--green-deep)' }} />
                  <span>{cat.title}</span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: '0 0 10px', lineHeight: 1.5 }}>
                  {cat.specs}
                </p>
                <div style={{ paddingTop: '8px', borderTop: '1px solid var(--line)', fontSize: '12px', fontWeight: 700, color: 'var(--green-deep)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} />
                  <span>{cat.impulseFactor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
