import React from 'react';

interface AlSaadRoseLogoProps {
  variant?: 'dark' | 'white' | 'gold';
  size?: 'sm' | 'md' | 'lg';
}

export default function AlSaadRoseLogo({
  variant = 'dark',
  size = 'md',
}: AlSaadRoseLogoProps) {
  const isWhite = variant === 'white';
  const isGold = variant === 'gold';
  const textColor = isWhite ? '#FFFFFF' : isGold ? '#C8A66A' : '#1A1A1A';
  const roseColor = isWhite ? '#E5D1AA' : '#C8A66A';

  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.25 : 1.0;

  return (
    <div className="inline-flex items-center gap-3 select-none" style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      {/* Elegant Rose Floral Icon */}
      <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke={roseColor} strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
        <circle cx="50" cy="50" r="38" fill={isWhite ? 'rgba(255,255,255,0.1)' : 'rgba(200,166,106,0.12)'} />
        {/* Stylized Rose Petals */}
        <path d="M50 28C42 28 36 34 36 42C36 54 50 68 50 68C50 68 64 54 64 42C64 34 58 28 50 28Z" stroke={roseColor} strokeWidth="3" fill="none" />
        <path d="M50 36C46 36 43 39 43 43C43 48 50 56 50 56C50 56 57 48 57 43C57 39 54 36 50 36Z" fill={roseColor} />
        <path d="M38 66C44 68 56 68 62 66" stroke={roseColor} strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="flex flex-col">
        <span
          style={{
            color: textColor,
            fontSize: '1.25rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            lineHeight: 1.1,
            textTransform: 'uppercase',
            fontFamily: 'serif',
          }}
        >
          Al Saad Rose
        </span>
        <span
          style={{
            color: isWhite ? 'rgba(255,255,255,0.7)' : '#667085',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          Botanical Soaps & Care
        </span>
      </div>
    </div>
  );
}
