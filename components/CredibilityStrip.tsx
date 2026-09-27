'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Globe2, Layers, Compass } from 'lucide-react';

export default function CredibilityStrip() {
  const { t } = useLanguage();

  const items = [
    {
      icon: Globe2,
      tag: t.credibility.regionalPresence.title,
      value: t.credibility.regionalPresence.value,
      desc: t.credibility.regionalPresence.desc,
    },
    {
      icon: Layers,
      tag: t.credibility.coreFocus.title,
      value: t.credibility.coreFocus.value,
      desc: t.credibility.coreFocus.desc,
    },
    {
      icon: Compass,
      tag: t.credibility.approach.title,
      value: t.credibility.approach.value,
      desc: t.credibility.approach.desc,
    },
  ];

  return (
    <section className="pillars">
      {items.map((item, idx) => (
        <article key={idx} className="pillar">
          <span className="step-n">0{idx + 1} • {item.tag}</span>
          <h3>{item.value}</h3>
          <p>{item.desc}</p>
        </article>
      ))}
    </section>
  );
}
