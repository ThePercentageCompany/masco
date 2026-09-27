'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Zap } from 'lucide-react';

export default function CashFlowComparison() {
  const { t } = useLanguage();
  const data = t.ecommercePage;

  return (
    <div className="feature-card" style={{ padding: '36px' }}>
      {/* Section Header */}
      <div className="section-head">
        <p className="eyebrow">Liquidity & Capital Acceleration</p>
        <h2>{data.cashFlowTitle}</h2>
        <p>{data.cashFlowExplanation}</p>
      </div>

      {/* Visual Timeline Comparison Graphic */}
      <div style={{ padding: '24px', borderRadius: '20px', background: 'var(--bg-elev)', border: '1px solid var(--line)', marginBottom: '28px' }}>
        <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '20px' }}>
          {data.cashFlowDaysLabel} (Visual Turnaround Timeline)
        </div>

        {/* Bar 1: Digital E-Commerce (14 Days) */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--green-deep)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green-deep)' }} />
              <span>{data.digitalCycleLabel}</span>
            </span>
            <span style={{ background: 'rgba(31, 138, 69, 0.1)', padding: '4px 10px', borderRadius: '8px', fontWeight: 800 }}>
              ~14 Days Payout
            </span>
          </div>
          <div style={{ width: '100%', height: '20px', borderRadius: '999px', background: 'var(--white)', border: '1px solid var(--line)', overflow: 'hidden', display: 'flex' }}>
            <div
              style={{ width: '15.5%', background: 'var(--green-deep)', height: '100%', borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '8px', fontSize: '11px', color: '#ffffff', fontWeight: 800 }}
            >
              14d
            </div>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--green-deep)', fontWeight: 600, marginTop: '6px' }}>
            Rapid cash reinvestment into inventory and marketing cycles.
          </p>
        </div>

        {/* Bar 2: Modern Hypermarkets (90 Days) */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '14px', fontWeight: 700, color: 'var(--masco-red)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--masco-red)' }} />
              <span>{data.hypermarketCycleLabel}</span>
            </span>
            <span style={{ background: 'rgba(228, 24, 29, 0.08)', padding: '4px 10px', borderRadius: '8px', fontWeight: 800 }}>
              ~90 Days Payout
            </span>
          </div>
          <div style={{ width: '100%', height: '20px', borderRadius: '999px', background: 'var(--white)', border: '1px solid var(--line)', overflow: 'hidden', display: 'flex' }}>
            <div
              style={{ width: '100%', background: 'var(--masco-red)', height: '100%', borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '12px', fontSize: '11px', color: '#ffffff', fontWeight: 800 }}
            >
              90d
            </div>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600, marginTop: '6px' }}>
            Requires dedicated working capital reserves to absorb inventory lead times.
          </p>
        </div>
      </div>

      {/* Channel Comparison Table */}
      <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
        <table style={{ width: '100%', textAlign: 'start', fontSize: '13.5px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--green-dark)', color: '#ffffff' }}>
              <th style={{ padding: '12px 16px', textAlign: 'start', borderRadius: '12px 0 0 0' }}>Channel</th>
              <th style={{ padding: '12px 16px', textAlign: 'start' }}>Turnaround</th>
              <th style={{ padding: '12px 16px', textAlign: 'start' }}>Cash Velocity</th>
              <th style={{ padding: '12px 16px', textAlign: 'start' }}>Inventory Risk</th>
              <th style={{ padding: '12px 16px', textAlign: 'start', borderRadius: '0 12px 0 0' }}>Payout Frequency</th>
            </tr>
          </thead>
          <tbody style={{ background: 'var(--white)' }}>
            {data.cashCycleComparison.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--line)' }}>
                <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>{row.channel}</td>
                <td style={{ padding: '14px 16px', fontWeight: 800, color: 'var(--green-deep)' }}>{row.turnaroundDays} Days</td>
                <td style={{ padding: '14px 16px', color: 'var(--ink-soft)' }}>{row.cashVelocity}</td>
                <td style={{ padding: '14px 16px', color: 'var(--ink-soft)' }}>{row.inventoryRisk}</td>
                <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>{row.payoutFrequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ padding: '14px 18px', borderRadius: '12px', background: 'var(--bg-elev)', border: '1px solid var(--line)', fontSize: '12.5px', color: 'var(--muted)' }}>
        {data.cashFlowDisclaimer}
      </div>
    </div>
  );
}
