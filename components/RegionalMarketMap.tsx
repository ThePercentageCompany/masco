'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function RegionalMarketMap() {
  const { t } = useLanguage();
  const markets = t.about.markets;
  const [activeMarketIndex, setActiveMarketIndex] = useState<number>(0);

  return (
    <div className="feature-card" style={{ padding: '36px' }}>
      {/* Section Sub-Header */}
      <div className="section-head">
        <p className="eyebrow">{t.about.regionalTitle}</p>
        <h2>{t.about.regionalSubtitle}</h2>
      </div>

      {/* Market Selector Tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        {markets.map((m, idx) => {
          const isActive = idx === activeMarketIndex;
          return (
            <button
              key={m.code}
              onClick={() => setActiveMarketIndex(idx)}
              style={{
                padding: '18px 20px',
                borderRadius: '18px',
                border: isActive ? '2px solid var(--green-deep)' : '1px solid var(--line)',
                background: isActive ? 'var(--green-dark)' : 'var(--bg-elev)',
                color: isActive ? '#ffffff' : 'var(--ink)',
                textAlign: 'start',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: isActive ? 'var(--green)' : 'var(--green-deep)' }}>
                  {m.code}
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: isActive ? '#c5d8cc' : 'var(--green-deep)' }}>
                  {m.status}
                </span>
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: 800, margin: 0, color: isActive ? '#ffffff' : 'var(--ink)' }}>
                {m.country}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Selected Market Deep Dive */}
      {markets.map((m, idx) => {
        if (idx !== activeMarketIndex) return null;
        return (
          <div
            key={m.code}
            style={{
              padding: '28px',
              borderRadius: '20px',
              background: 'var(--bg-elev)',
              border: '1px solid var(--line)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--green-deep)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  <MapPin size={15} />
                  <span>Market Footprint & Active Retail Channels</span>
                </div>
                <h3 style={{ fontSize: '22px', margin: '0 0 16px', color: 'var(--ink)' }}>
                  {m.country}
                </h3>

                <div style={{ padding: '16px', background: 'var(--white)', borderRadius: '14px', border: '1px solid var(--line)', marginBottom: '16px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '4px' }}>
                    Channel Coverage:
                  </span>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
                    {m.channels}
                  </p>
                </div>

                <div style={{ fontSize: '13.5px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '4px' }}>Commercial Strategy Focus:</strong>
                  <p style={{ margin: 0 }}>{m.focus}</p>
                </div>
              </div>

              <div>
                <div style={{ padding: '24px', background: 'var(--white)', borderRadius: '18px', border: '1px solid var(--line)', height: '100%' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--green-deep)', marginBottom: '14px' }}>
                    Regulatory & Commercial Readiness
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--ink-soft)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--green-deep)', flexShrink: 0 }} />
                      <span>Direct category buyer relationship networks</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--green-deep)', flexShrink: 0 }} />
                      <span>Reverse pricing tailored to local currency & VAT</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--green-deep)', flexShrink: 0 }} />
                      <span>Distributor agreement & rebate governance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
