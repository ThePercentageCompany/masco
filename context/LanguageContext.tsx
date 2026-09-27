'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationContent, translations } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  t: TranslationContent;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  isRtl: boolean;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage or browser preference if available
    try {
      const savedLang = localStorage.getItem('masco_language') as Language;
      if (savedLang === 'en' || savedLang === 'ar') {
        setLanguageState(savedLang);
      }
    } catch {
      // localStorage may fail in SSR or restricted environments
    }
  }, []);

  useEffect(() => {
    const isRtl = language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    if (isRtl) {
      document.documentElement.classList.add('rtl');
      document.documentElement.classList.remove('ltr');
    } else {
      document.documentElement.classList.add('ltr');
      document.documentElement.classList.remove('rtl');
    }

    try {
      localStorage.setItem('masco_language', language);
    } catch {
      // Ignore
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const isRtl = language === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';
  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        t,
        setLanguage,
        toggleLanguage,
        isRtl,
        dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
