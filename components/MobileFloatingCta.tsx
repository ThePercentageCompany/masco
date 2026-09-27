'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { MessageSquare, Calendar, Globe } from 'lucide-react';

interface MobileFloatingCtaProps {
  onOpenConsultation?: () => void;
}

export default function MobileFloatingCta({ onOpenConsultation }: MobileFloatingCtaProps) {
  const { t, toggleLanguage, isRtl } = useLanguage();

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        padding: '12px 16px',
        background: 'color-mix(in srgb, var(--bg) 92%, transparent)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--line)',
        boxShadow: 'var(--shadow-hover)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        direction: isRtl ? 'rtl' : 'ltr',
      }}
      className="lg:hidden"
    >
      {/* WhatsApp Link */}
      <a
        href="https://wa.me/971501234567"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          background: 'var(--white)',
          border: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--green-deep)',
          boxShadow: 'var(--shadow)',
        }}
        aria-label="WhatsApp"
      >
        <MessageSquare size={18} />
      </a>

      {/* Main CTA */}
      {onOpenConsultation ? (
        <button
          onClick={onOpenConsultation}
          className="btn btn-primary"
          style={{ flex: 1, height: '42px', fontSize: '13.5px' }}
        >
          <Calendar size={16} />
          <span>{t.nav.requestConsultation || 'Consultation'}</span>
        </button>
      ) : (
        <Link
          href="/contact"
          className="btn btn-primary"
          style={{ flex: 1, height: '42px', fontSize: '13.5px' }}
        >
          <Calendar size={16} />
          <span>{t.nav.requestConsultation || 'Consultation'}</span>
        </Link>
      )}

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          background: 'var(--white)',
          border: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--ink)',
          fontSize: '12px',
          fontWeight: 700,
          cursor: 'pointer',
        }}
        aria-label="Toggle Language"
      >
        <Globe size={18} />
      </button>
    </div>
  );
}
