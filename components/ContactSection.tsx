'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation?: () => void;
}

export default function ContactSection({ onOpenConsultation }: ContactSectionProps) {
  const { t, isRtl } = useLanguage();
  const data = t.contactPage;
  const fields = data.fields;

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    workEmail: '',
    phone: '',
    country: 'UAE',
    salesChannels: 'wholesale',
    primaryChallenge: 'pricing_conflict',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ message: string; color: string }>({
    message: '',
    color: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.workEmail.trim() || !formData.phone.trim()) {
      setFormStatus({
        message: isRtl ? 'يرجى إكمال جميع الحقول الإلزامية.' : 'Please complete all required fields.',
        color: 'var(--masco-red)',
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ message: '', color: '' });

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus({
        message: isRtl
          ? 'تم استلام طلبك بنجاح! سيتواصل معك مستشارنا التجاري خلال 24 ساعة.'
          : 'Thank you! Your strategic consultation brief has been submitted. Our FMCG partner will contact you within 24 hours.',
        color: 'var(--green-deep)',
      });
      setFormData({
        fullName: '',
        company: '',
        workEmail: '',
        phone: '',
        country: 'UAE',
        salesChannels: 'wholesale',
        primaryChallenge: 'pricing_conflict',
        message: '',
      });
    }, 800);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">{data.tag}</p>
        <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '8px 0 16px' }}>
          {data.title}
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
          {data.subtitle}
        </p>

        <ul className="contact-points">
          <li>{isRtl ? 'تشخيص تجاري شامل لحسابات التجزئة والتسعير العكسي' : 'Comprehensive modern trade entry & reverse pricing diagnostic'}</li>
          <li>{isRtl ? 'حماية رأس المال العامل ودورات تدفق نقدي سريعة خلال 14 يوماً' : 'Working capital protection with rapid 14-day cash flow cycles'}</li>
          <li>{isRtl ? 'شبكة علاقات مباشرة مع كبار مسؤولي المشتريات في الخليج ومصر' : 'Direct key buyer networks across UAE, Saudi Arabia, and Egypt'}</li>
          <li>{isRtl ? 'اتفاقيات سرية تامة ومراجعة دقيقة لسلامة هوامش الربح' : 'Full commercial confidentiality & margin integrity review'}</li>
        </ul>

        {/* Direct Contact Points Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '28px' }}>
          <div style={{ padding: '16px', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(31, 138, 69, 0.1)', color: 'var(--green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Mail size={18} />
            </div>
            <div>
              <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>Email</span>
              <a href="mailto:info@mascoconsulting.com" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>
                info@mascoconsulting.com
              </a>
            </div>
          </div>

          <div style={{ padding: '16px', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(31, 138, 69, 0.1)', color: 'var(--green-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Phone size={18} />
            </div>
            <div>
              <span style={{ fontSize: '11px', color: 'var(--muted)', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>Phone</span>
              <a href="tel:+971501234567" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>
                +971 50 123 4567
              </a>
            </div>
          </div>
        </div>
      </div>

      <form className="contact-form" id="contactForm" onSubmit={handleSubmit} noValidate>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <label>
            {fields.fullName}
            <input
              type="text"
              name="fullName"
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
              name="company"
              placeholder="e.g. Al Saad Rose FMCG"
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
              name="workEmail"
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
              name="phone"
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
              name="country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            >
              {data.countryOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>

          <label>
            {fields.primaryChallenge}
            <select
              name="primaryChallenge"
              value={formData.primaryChallenge}
              onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
            >
              {data.challengeOptions.map((opt) => (
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
            name="message"
            rows={4}
            placeholder="Share details on your SKUs, target retailers, or commercial objectives..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </label>

        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
          style={isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : undefined}
        >
          {isSubmitting ? '...' : data.submitButton}
        </button>

        {formStatus.message && (
          <p className="form-status" role="status" style={{ color: formStatus.color }}>
            {formStatus.message}
          </p>
        )}
      </form>
    </section>
  );
}
