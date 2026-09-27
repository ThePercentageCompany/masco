'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import MascoLogo from './MascoLogo';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { Globe, ArrowRight, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const { language, setLanguage, t, isRtl } = useLanguage();
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.services, href: '/services' },
    { label: t.nav.marketEntry, href: '/market-entry' },
    { label: t.nav.ecommerce, href: '/ecommerce' },
    { label: t.nav.partners, href: '/partners' },
    { label: t.nav.caseStudy, href: '/case-study' },
    { label: t.nav.contact, href: '/contact' },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'ar');
  };

  return (
    <header className="nav">
      <MascoLogo size="sm" />

      <nav className={`nav-links ${navOpen ? 'open' : ''}`} id="navLinks">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? 'active' : ''}
              onClick={() => setNavOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="nav-actions">
        {/* Multi-Language Dropdown in The Percentage Creative pill style */}
        <div className="lang-switcher" aria-label="Language Selector">
          <select
            className="lang-select"
            value={language}
            onChange={handleLanguageChange}
            aria-label="Select Language"
          >
            <option value="en">🇬🇧 English</option>
            <option value="ar">🇦🇪 العربية</option>
          </select>
        </div>

        <Link className="btn btn-ghost" href="/contact">
          {isRtl ? 'تواصل معنا' : 'Talk to us'}
        </Link>

        {onOpenConsultation ? (
          <InteractiveHoverButton
            onClick={(e) => {
              e.preventDefault();
              onOpenConsultation();
            }}
            href="#contact"
            className="nav-hover-btn"
          >
            {t.nav.requestConsultation}
          </InteractiveHoverButton>
        ) : (
          <InteractiveHoverButton href="/contact" className="nav-hover-btn">
            {t.nav.requestConsultation}
          </InteractiveHoverButton>
        )}

        <button
          className="menu-btn"
          id="menuBtn"
          aria-label="Open menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
