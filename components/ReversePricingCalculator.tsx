'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Calculator, RotateCcw, ShieldCheck, TrendingUp } from 'lucide-react';

export default function ReversePricingCalculator() {
  const { t } = useLanguage();
  const labels = t.marketEntryPage.calculatorLabels;

  // State with Business Plan Defaults
  const [shelfPrice, setShelfPrice] = useState<number>(25.0);
  const [retailMarginPercent, setRetailMarginPercent] = useState<number>(40.0);
  const [promoPercent, setPromoPercent] = useState<number>(10.0);
  const [commercialCostsPercent, setCommercialCostsPercent] = useState<number>(5.0);
  const [cogs, setCogs] = useState<number>(6.5);

  // Calculations
  const retailerShare = (shelfPrice * retailMarginPercent) / 100;
  const promoShare = (shelfPrice * promoPercent) / 100;
  const commercialShare = (shelfPrice * commercialCostsPercent) / 100;
  const totalDeductions = retailerShare + promoShare + commercialShare;

  const targetWholesalePrice = Math.max(0, shelfPrice - totalDeductions);
  const brandGrossProfit = Math.max(0, targetWholesalePrice - cogs);
  const brandGrossMarginPercent = targetWholesalePrice > 0 ? (brandGrossProfit / targetWholesalePrice) * 100 : 0;

  const retailerSlicePercent = Math.min(100, (retailerShare / shelfPrice) * 100);
  const promoSlicePercent = Math.min(100, (promoShare / shelfPrice) * 100);
  const commSlicePercent = Math.min(100, (commercialShare / shelfPrice) * 100);
  const cogsSlicePercent = Math.min(100, (cogs / shelfPrice) * 100);
  const profitSlicePercent = Math.max(0, 100 - (retailerSlicePercent + promoSlicePercent + commSlicePercent + cogsSlicePercent));

  const applyPreset = (preset: 'hypermarket' | 'coop' | 'petrol') => {
    if (preset === 'hypermarket') {
      setShelfPrice(25.0);
      setRetailMarginPercent(40.0);
      setPromoPercent(10.0);
      setCommercialCostsPercent(5.0);
      setCogs(6.5);
    } else if (preset === 'coop') {
      setShelfPrice(25.0);
      setRetailMarginPercent(35.0);
      setPromoPercent(8.0);
      setCommercialCostsPercent(3.0);
      setCogs(6.5);
    } else if (preset === 'petrol') {
      setShelfPrice(35.0);
      setRetailMarginPercent(45.0);
      setPromoPercent(5.0);
      setCommercialCostsPercent(4.0);
      setCogs(8.0);
    }
  };

  const handleReset = () => {
    setShelfPrice(25.0);
    setRetailMarginPercent(40.0);
    setPromoPercent(10.0);
    setCommercialCostsPercent(5.0);
    setCogs(6.5);
  };

  return (
    <div className="calc-card" id="reverse-calculator">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid var(--line)' }}>
        <div>
          <span className="step-n" style={{ marginBottom: '8px' }}>
            Interactive Financial Model
          </span>
          <h3 style={{ fontSize: '24px', margin: '4px 0 6px' }}>{t.marketEntryPage.calculatorTitle}</h3>
          <p style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>{labels.note}</p>
        </div>

        {/* Presets */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            onClick={() => applyPreset('hypermarket')}
            className="btn btn-outline"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            Hypermarket (40%)
          </button>
          <button
            onClick={() => applyPreset('coop')}
            className="btn btn-outline"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            Cooperative (35%)
          </button>
          <button
            onClick={() => applyPreset('petrol')}
            className="btn btn-outline"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            Petrol Station (45%)
          </button>
          <button
            onClick={handleReset}
            className="btn btn-ghost"
            style={{ padding: '8px 12px' }}
            title={labels.resetDefaults}
            aria-label="Reset Calculator"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {/* Left Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Shelf Price */}
          <div className="calc-input-group">
            <label>
              <span>{labels.shelfPrice}</span>
              <span style={{ fontWeight: 800, color: 'var(--masco-blue)', background: 'var(--bg)', padding: '4px 10px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                AED {shelfPrice.toFixed(2)}
              </span>
            </label>
            <input
              type="range"
              min="10"
              max="150"
              step="1"
              value={shelfPrice}
              onChange={(e) => setShelfPrice(parseFloat(e.target.value))}
              className="calc-range"
            />
          </div>

          {/* Retail Margin */}
          <div className="calc-input-group">
            <label>
              <span>{labels.retailMargin}</span>
              <span style={{ fontWeight: 800, color: 'var(--ink)', background: 'var(--bg)', padding: '4px 10px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                {retailMarginPercent.toFixed(1)}%
              </span>
            </label>
            <input
              type="range"
              min="20"
              max="60"
              step="0.5"
              value={retailMarginPercent}
              onChange={(e) => setRetailMarginPercent(parseFloat(e.target.value))}
              className="calc-range"
            />
          </div>

          {/* Promo */}
          <div className="calc-input-group">
            <label>
              <span>{labels.promoAllowance}</span>
              <span style={{ fontWeight: 800, color: 'var(--masco-red)', background: 'var(--bg)', padding: '4px 10px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                {promoPercent.toFixed(1)}%
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="25"
              step="0.5"
              value={promoPercent}
              onChange={(e) => setPromoPercent(parseFloat(e.target.value))}
              className="calc-range"
            />
          </div>

          {/* Commercial Costs */}
          <div className="calc-input-group">
            <label>
              <span>{labels.commercialCosts}</span>
              <span style={{ fontWeight: 800, color: 'var(--masco-gold)', background: 'var(--bg)', padding: '4px 10px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                {commercialCostsPercent.toFixed(1)}%
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="15"
              step="0.5"
              value={commercialCostsPercent}
              onChange={(e) => setCommercialCostsPercent(parseFloat(e.target.value))}
              className="calc-range"
            />
          </div>

          {/* COGS */}
          <div className="calc-input-group">
            <label>
              <span>{labels.cogsCost}</span>
              <span style={{ fontWeight: 800, color: 'var(--ink)', background: 'var(--bg)', padding: '4px 10px', borderRadius: '8px', border: '1px solid var(--line)' }}>
                AED {cogs.toFixed(2)}
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="0.5"
              value={cogs}
              onChange={(e) => setCogs(parseFloat(e.target.value))}
              className="calc-range"
            />
          </div>
        </div>

        {/* Right Outputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Main Wholesale Result Card */}
          <div style={{ background: 'linear-gradient(135deg, #0c1033 0%, #161c52 50%, #272B8D 100%)', color: '#ffffff', padding: '24px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 12px 30px rgba(12, 16, 51, 0.25)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#ff7b7f' }}>
                Calculated Strategic Output
              </span>
              <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.15)', padding: '3px 8px', borderRadius: '999px', fontWeight: 600 }}>
                Reverse Pricing
              </span>
            </div>

            <div>
              <div style={{ fontSize: '13px', color: '#c9d6ea' }}>{labels.wholesalePrice}</div>
              <div style={{ fontSize: '38px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.03em', margin: '4px 0' }}>
                AED {targetWholesalePrice.toFixed(2)}
              </div>
              <div style={{ fontSize: '13px', color: '#c9d6ea' }}>
                Derived from AED {shelfPrice.toFixed(2)} consumer shelf price
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ background: 'rgba(255,255,255,0.08)', padding: '12px', borderRadius: '12px' }}>
                <div style={{ fontSize: '11px', color: '#c9d6ea' }}>{labels.brandGrossProfit}</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff' }}>AED {brandGrossProfit.toFixed(2)}</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.08)', padding: '12px', borderRadius: '12px' }}>
                <div style={{ fontSize: '11px', color: '#c9d6ea' }}>{labels.grossMarginPercent}</div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#ff7b7f' }}>{brandGrossMarginPercent.toFixed(1)}%</div>
              </div>
            </div>
          </div>

          {/* Breakdown Waterfall */}
          <div style={{ padding: '20px', background: 'var(--bg-elev)', borderRadius: '18px', border: '1px solid var(--line)' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '12px' }}>
              {labels.shelfPriceBreakdown} (100% = AED {shelfPrice.toFixed(2)})
            </h4>

            {/* Stacked Bar */}
            <div style={{ width: '100%', height: '24px', borderRadius: '10px', overflow: 'hidden', display: 'flex', marginBottom: '16px', border: '1px solid var(--line)' }}>
              <div style={{ width: `${retailerSlicePercent}%`, background: 'var(--ink)', height: '100%' }} title={`Retailer: AED ${retailerShare.toFixed(2)}`} />
              <div style={{ width: `${promoSlicePercent}%`, background: 'var(--masco-red)', height: '100%' }} title={`Promo: AED ${promoShare.toFixed(2)}`} />
              <div style={{ width: `${commSlicePercent}%`, background: 'var(--masco-gold)', height: '100%' }} title={`Commercial: AED ${commercialShare.toFixed(2)}`} />
              <div style={{ width: `${cogsSlicePercent}%`, background: 'var(--muted)', height: '100%' }} title={`COGS: AED ${cogs.toFixed(2)}`} />
              <div style={{ width: `${profitSlicePercent}%`, background: 'var(--masco-blue)', height: '100%' }} title={`Net Profit: AED ${brandGrossProfit.toFixed(2)}`} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid var(--line)' }}>
                <span style={{ color: 'var(--ink-soft)' }}>{labels.retailerCut}</span>
                <span style={{ fontWeight: 700 }}>AED {retailerShare.toFixed(2)} ({retailMarginPercent}%)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid var(--line)' }}>
                <span style={{ color: 'var(--ink-soft)' }}>{labels.promoReserve}</span>
                <span style={{ fontWeight: 700, color: 'var(--masco-red)' }}>AED {promoShare.toFixed(2)} ({promoPercent}%)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid var(--line)' }}>
                <span style={{ color: 'var(--ink-soft)' }}>{labels.otherFees}</span>
                <span style={{ fontWeight: 700, color: 'var(--masco-gold)' }}>AED {commercialShare.toFixed(2)} ({commercialCostsPercent}%)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px', borderBottom: '1px solid var(--line)' }}>
                <span style={{ color: 'var(--ink-soft)' }}>{labels.cogsSlice}</span>
                <span style={{ fontWeight: 700 }}>AED {cogs.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '4px', fontWeight: 800, color: 'var(--masco-blue)', fontSize: '14px' }}>
                <span>{labels.brandNetProfit}</span>
                <span>AED {brandGrossProfit.toFixed(2)} ({brandGrossMarginPercent.toFixed(1)}%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
