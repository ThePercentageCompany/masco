import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MascoLogoProps {
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function MascoLogo({
  variant = 'dark',
  size = 'md',
}: MascoLogoProps) {
  const isWhite = variant === 'white';

  // Height and width mappings based on 2172x724 aspect ratio (~3:1)
  const dimensions = {
    sm: { height: 38, width: 114 },
    md: { height: 48, width: 144 },
    lg: { height: 60, width: 180 },
  }[size];

  return (
    <Link
      href="/"
      className="inline-flex items-center no-underline group select-none transition-transform duration-200 hover:opacity-95"
      aria-label="MASCO Business Consulting Home"
    >
      {isWhite ? (
        /* White/Dark Background Treatment: Clean crisp card badge ensuring exact logo fidelity */
        <div className="bg-white px-3 py-1.5 rounded-xl shadow-md border border-white/20 flex items-center justify-center">
          <Image
            src="/images/MASCO_Business_Consulting_Sharp.svg"
            alt="MASCO Business Consulting Logo"
            width={dimensions.width}
            height={dimensions.height}
            className="h-auto w-auto max-h-[36px] sm:max-h-[44px] object-contain"
            priority
          />
        </div>
      ) : (
        /* Light/Standard Background Treatment: Direct official SVG vector render */
        <div className="flex items-center py-1">
          <Image
            src="/images/MASCO_Business_Consulting_Sharp.svg"
            alt="MASCO Business Consulting Logo"
            width={dimensions.width}
            height={dimensions.height}
            className="h-auto w-auto max-h-[38px] sm:max-h-[46px] object-contain"
            priority
          />
        </div>
      )}
    </Link>
  );
}
