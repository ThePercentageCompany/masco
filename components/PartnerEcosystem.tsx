'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Building2, Store, Fuel, Globe2 } from 'lucide-react';

const categoryIcons: Record<number, React.ElementType> = {
  0: Building2,
  1: Store,
  2: Fuel,
  3: Globe2,
};

export default function PartnerEcosystem() {
  const { t } = useLanguage();
  const data = t.partnersPage;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      {/* 4 Retail Channel Categories in .client-grid */}
      <div className="client-grid">
        {data.categories.map((cat, idx) => {
          const Icon = categoryIcons[idx] || Store;
          return (
            <div key={idx} className="client-card">
              <div className="client-card-top">
                <span className="client-tag">Channel 0{idx + 1}</span>
                <span className="client-ext-icon" aria-hidden="true">↗</span>
              </div>
              <h3>{cat.categoryName}</h3>
              <p style={{ marginBottom: '16px' }}>{cat.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--line)' }}>
                {cat.channels.map((ch, chIdx) => (
                  <span
                    key={chIdx}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '999px',
                      background: 'var(--bg)',
                      border: '1px solid var(--line)',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--ink)',
                    }}
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Commercial Partnership Philosophy Card */}
      <div className="cta-band" style={{ margin: 0 }}>
        <div>
          <span style={{ background: 'rgba(228, 24, 29, 0.18)', color: '#ff7b7f', padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', display: 'inline-block', marginBottom: '12px' }}>
            Commercial Integrity
          </span>
          <h2>{data.philosophyTitle}</h2>
          <p style={{ marginBottom: '20px' }}>{data.philosophyBody}</p>
          <div style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.08)', fontSize: '12.5px', color: '#d8e2f0' }}>
            {data.disclaimer}
          </div>
        </div>
      </div>
    </div>
  );
}
