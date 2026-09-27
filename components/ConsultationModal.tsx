'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { X, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  prefilledService,
}: ConsultationModalProps) {
  const { t, isRtl } = useLanguage();
  const contactData = t.contactPage;
  const fields = contactData.fields;

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    workEmail: '',
    phone: '',
    country: 'UAE',
    primaryChallenge: prefilledService || 'pricing_conflict',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, primaryChallenge: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setIsSubmitting(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(12, 16, 51, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        direction: isRtl ? 'rtl' : 'ltr',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: 'var(--white)',
          borderRadius: '26px',
          border: '1px solid var(--line)',
          boxShadow: 'var(--shadow-hover)',
          overflow: 'hidden',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{ padding: '20px 24px', background: 'var(--bg-elev)', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span className="step-n" style={{ margin: 0, fontSize: '11px' }}>FMCG Advisory</span>
            <h3 style={{ fontSize: '18px', margin: '4px 0 0', fontWeight: 800 }}>{contactData.formTitle}</h3>
          </div>
          <button
            onClick={onClose}
            style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--line)', background: 'var(--white)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', overflowY: 'auto' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(39, 43, 141, 0.12)', color: 'var(--masco-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>
                {isRtl ? 'تم استلام طلبك بنجاح!' : 'Strategic Brief Received'}
              </h3>
              <p style={{ color: 'var(--ink-soft)', fontSize: '14px', marginBottom: '24px' }}>
                {isRtl
                  ? 'سيتواصل معك مستشارنا التجاري في غضون 24 ساعة لبدء التشخيص.'
                  : 'An executive partner will review your brand telemetry and contact you within 24 hours.'}
              </p>
              <button onClick={onClose} className="btn btn-primary">
                {isRtl ? 'إغلاق' : 'Close Window'}
              </button>
            </div>
          ) : (
            <form className="contact-form" style={{ padding: 0, border: 'none', boxShadow: 'none' }} onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <label>
                  {fields.fullName}
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Al-Hashimi"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </label>
                <label>
                  {fields.company}
                  <input
                    type="text"
                    placeholder="e.g. Brand FMCG"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <label>
                  {fields.workEmail}
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  />
                </label>
                <label>
                  {fields.phone}
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <label>
                  {fields.country}
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  >
                    {contactData.countryOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>

                <label>
                  {fields.primaryChallenge}
                  <select
                    value={formData.primaryChallenge}
                    onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                  >
                    {contactData.challengeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                {fields.message}
                <textarea
                  rows={3}
                  placeholder="Share details on your SKUs or target retail chains..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </label>

              <button
                className="btn btn-primary"
                type="submit"
                disabled={isSubmitting}
                style={{ width: '100%', marginTop: '8px' }}
              >
                {isSubmitting ? '...' : contactData.submitButton}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
