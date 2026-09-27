'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2, ShieldCheck, Store, Building2 } from 'lucide-react';

export default function PhasedTimeline() {
  const { t } = useLanguage();
  const [activePhase, setActivePhase] = useState<number>(1);
  const phases = t.marketEntryPage.phases;

  return (
    <div className="feature-card" style={{ padding: '36px' }}>
      {/* Section Sub-Header */}
      <div className="section-head">
        <p className="eyebrow">{t.marketEntryPage.tag}</p>
        <h2>{t.marketEntryPage.phasedTitle}</h2>
        <p>{t.marketEntryPage.phasedSubtitle}</p>
      </div>

      {/* Interactive Phase Selector Tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '28px' }}>
        {phases.map((phase) => {
          const isActive = activePhase === phase.phaseNumber;
          return (
            <button
              key={phase.phaseNumber}
              onClick={() => setActivePhase(phase.phaseNumber)}
              style={{
                padding: '18px 20px',
                borderRadius: '18px',
                border: isActive ? '2px solid var(--masco-blue)' : '1px solid var(--line)',
                background: isActive ? 'linear-gradient(135deg, #0c1033 0%, #272B8D 100%)' : 'var(--bg-elev)',
                color: isActive ? '#ffffff' : 'var(--ink)',
                textAlign: 'start',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', color: isActive ? '#ff7b7f' : 'var(--masco-blue)' }}>
                  Phase 0{phase.phaseNumber}
                </span>
                <span style={{ fontSize: '12px', color: isActive ? '#d8e2f0' : 'var(--muted)', fontWeight: 600 }}>
                  {phase.timeline}
                </span>
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 700, margin: '0 0 4px', color: isActive ? '#ffffff' : 'var(--ink)' }}>
                {phase.phaseNumber === 1
                  ? 'Coops & National Markets'
                  : phase.phaseNumber === 2
                  ? 'Tier-2 Coops & Al Maya'
                  : 'Major Hypermarkets'}
              </h4>
              <div style={{ fontSize: '12px', fontWeight: 600, color: isActive ? '#ff7b7f' : 'var(--masco-red)' }}>
                {phase.riskLevel}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Detailed View */}
      {phases.map((phase) => {
        if (phase.phaseNumber !== activePhase) return null;

        return (
          <div
            key={phase.phaseNumber}
            style={{
              padding: '28px',
              borderRadius: '20px',
              background: 'var(--bg-elev)',
              border: '1px solid var(--line)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
              {/* Left Column */}
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--masco-blue)', display: 'block', marginBottom: '6px' }}>
                  Target Commercial Accounts
                </span>
                <h3 style={{ fontSize: '22px', margin: '0 0 16px', color: 'var(--ink)' }}>
                  {phase.phaseLabel}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {phase.targetAccounts.map((account, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '8px 14px',
                        background: 'var(--white)',
                        borderRadius: '12px',
                        border: '1px solid var(--line)',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Building2 size={14} style={{ color: 'var(--masco-blue)' }} />
                      <span>{account}</span>
                    </div>
                  ))}
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '6px' }}>
                    Strategic Rationale & Execution:
                  </span>
                  <p style={{ fontSize: '14px', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>
                    {phase.strategy}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div style={{ padding: '24px', background: 'var(--white)', borderRadius: '18px', border: '1px solid var(--line)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--masco-blue)', fontWeight: 700, fontSize: '12.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
                      <ShieldCheck size={16} />
                      <span>Risk Management Objective</span>
                    </div>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.5, marginBottom: '16px' }}>
                      {phase.purpose}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '14px', borderTop: '1px solid var(--line)', fontSize: '12.5px', color: 'var(--ink-soft)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--masco-blue)' }} />
                      <span>Validated inventory replenishment</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--masco-blue)' }} />
                      <span>Controlled working capital exposure</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={14} style={{ color: 'var(--masco-blue)' }} />
                      <span>Zero premature listing fee burn</span>
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
