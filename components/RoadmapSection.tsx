'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

export default function RoadmapSection() {
  const { t } = useLanguage();

  return (
    <section className="simplify" id="roadmap">
      <div className="section-head">
        <p className="eyebrow">{t.roadmap.tag}</p>
        <h2>{t.roadmap.title}</h2>
        <p>{t.roadmap.subtitle}</p>
      </div>

      <div className="steps" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {t.roadmap.steps.map((step, idx) => (
          <article key={idx}>
            <span className="step-n">0{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: 'var(--green-deep)', fontWeight: 600 }}>
              <CheckCircle2 size={14} style={{ flexShrink: 0 }} />
              <span>{step.keyOutcome}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
