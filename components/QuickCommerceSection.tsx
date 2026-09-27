'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShoppingBag } from 'lucide-react';

export default function QuickCommerceSection() {
  const { t } = useLanguage();
  const data = t.ecommercePage;

  return (
    <div className="feature-card" style={{ padding: '36px' }}>
      {/* Section Sub-Header */}
      <div className="section-head">
        <p className="eyebrow">Under 20-Minute Delivery</p>
        <h2>{data.quickCommerceTitle}</h2>
        <p>{data.quickCommerceBody}</p>
      </div>

      {/* Dark Store Platform Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {data.quickCommercePlatforms.map((platform, idx) => (
          <div
            key={idx}
            style={{
              padding: '24px',
              background: 'var(--bg-elev)',
              borderRadius: '20px',
              border: '1px solid var(--line)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span className="step-n" style={{ margin: 0 }}>
                {platform.name}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', padding: '3px 8px', borderRadius: '6px', background: 'rgba(39, 43, 141, 0.1)', color: 'var(--masco-blue)' }}>
                Q-Commerce
              </span>
            </div>

            <div style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--masco-blue)', marginBottom: '8px' }}>
              {platform.service}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.5 }}>
              {platform.focus}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
