import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'MASCO Business Consulting | FMCG Market Entry & Growth Strategy',
  description:
    'Executive FMCG consulting for modern retail, reverse pricing, key accounts, trade marketing, e-commerce and regional market-entry strategy across the UAE, Saudi Arabia and Egypt.',
  keywords: [
    'MASCO Business Consulting',
    'FMCG business consulting UAE',
    'modern trade consulting UAE',
    'retail market entry strategy UAE',
    'FMCG pricing strategy',
    'reverse pricing FMCG',
    'trade marketing consultant UAE',
    'key account management FMCG',
    'Amazon Noon strategy UAE',
    'quick commerce FMCG UAE',
    'Al Saad Rose strategy',
  ],
  authors: [{ name: 'MASCO Business Consulting' }],
  openGraph: {
    title: 'MASCO Business Consulting | FMCG Market Entry & Growth Strategy',
    description:
      'Executive FMCG business consulting practice specializing in modern retail entry, reverse pricing, phased account rollout, and cash-flow protection across the UAE, Saudi Arabia, and Egypt.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_AE',
    siteName: 'MASCO Business Consulting',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#252D78',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MASCO Business Consulting',
    image: 'https://mascoconsulting.com/images/retail-shelf.jpg',
    description:
      'Executive FMCG business consulting specializing in modern retail entry, B2B reverse pricing, key account management, trade marketing, and digital cash-flow acceleration.',
    areaServed: ['United Arab Emirates', 'Saudi Arabia', 'Egypt'],
    knowsAbout: [
      'FMCG Market Entry',
      'Reverse Pricing Architecture',
      'Key Account Management',
      'Trade Marketing',
      'E-Commerce & Quick Commerce',
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <div className="site-wrapper">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}
