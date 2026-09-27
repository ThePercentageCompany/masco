'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { AlertTriangle, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ProblemSolutionSection() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="section-padding">
      <div className="section-head">
        <p className="eyebrow">{t.problemSolution.tag}</p>
        <h2>{t.problemSolution.title}</h2>
        <p>{t.problemSolution.subtitle}</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {/* Left Column: Traditional Pitfalls */}
        <article className="feature-card" style={{ borderLeft: '4px solid var(--masco-red)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span className="step-n" style={{ color: 'var(--masco-red)', background: 'rgba(228, 24, 29, 0.08)' }}>
              01 • High Commercial Risk
            </span>
          </div>
          <h3>{t.problemSolution.problemHeader}</h3>
          <p style={{ marginBottom: '20px' }}>{t.problemSolution.problemSub}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {t.problemSolution.problems.map((prob, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px',
                  background: 'var(--bg-elev)',
                  borderRadius: '14px',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(228, 24, 29, 0.1)',
                    color: 'var(--masco-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  ✕
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)', margin: '0 0 4px' }}>
                    {prob.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.5 }}>
                    {prob.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Right Column: MASCO Solution */}
        <article className="feature-card" style={{ borderLeft: '4px solid var(--masco-blue)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span className="step-n" style={{ color: 'var(--masco-blue)', background: 'rgba(39, 43, 141, 0.08)' }}>
              02 • Protected Growth
            </span>
          </div>
          <h3>{t.problemSolution.solutionHeader}</h3>
          <p style={{ marginBottom: '20px' }}>{t.problemSolution.solutionSub}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {t.problemSolution.solutions.map((sol, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px',
                  background: 'var(--bg-elev)',
                  borderRadius: '14px',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(39, 43, 141, 0.12)',
                    color: 'var(--masco-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  ✓
                </div>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink)', margin: '0 0 4px' }}>
                    {sol.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--ink-soft)', margin: 0, lineHeight: 1.5 }}>
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--masco-blue)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} />
              <span>Sustainable profitability & cash liquidity</span>
            </span>
            <Link
              href="/market-entry"
              style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <span>{isRtl ? 'المزيد' : 'Explore'}</span>
              {isRtl ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
