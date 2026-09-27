export type Language = 'en' | 'ar';

export interface TranslationContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    services: string;
    marketEntry: string;
    ecommerce: string;
    partners: string;
    caseStudy: string;
    contact: string;
    requestConsultation: string;
    switchLanguage: string;
    currentLang: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    badge1: string;
    badge2: string;
    badge3: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  credibility: {
    title: string;
    regionalPresence: {
      title: string;
      value: string;
      desc: string;
    };
    coreFocus: {
      title: string;
      value: string;
      desc: string;
    };
    approach: {
      title: string;
      value: string;
      desc: string;
    };
  };
  servicesOverview: {
    tag: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      tagline: string;
      desc: string;
      deliverables: string[];
      icon: string;
    }[];
    viewAllCta: string;
  };
  problemSolution: {
    tag: string;
    title: string;
    subtitle: string;
    problemHeader: string;
    problemSub: string;
    problems: {
      title: string;
      desc: string;
    }[];
    solutionHeader: string;
    solutionSub: string;
    solutions: {
      title: string;
      desc: string;
    }[];
  };
  roadmap: {
    tag: string;
    title: string;
    subtitle: string;
    steps: {
      num: string;
      title: string;
      desc: string;
      keyOutcome: string;
    }[];
  };
  caseStudyHighlight: {
    tag: string;
    title: string;
    subtitle: string;
    badge: string;
    client: string;
    period: string;
    summary: string;
    bullets: string[];
    cta: string;
  };
  ctaBanner: {
    title: string;
    body: string;
    button: string;
    secondaryButton: string;
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    introLead: string;
    introBody: string;
    threePillarsTitle: string;
    pillars: {
      title: string;
      desc: string;
      highlights: string[];
    }[];
    regionalTitle: string;
    regionalSubtitle: string;
    markets: {
      country: string;
      code: string;
      channels: string;
      status: string;
      focus: string;
    }[];
    governanceTitle: string;
    governanceBody: string;
  };
  servicesPage: {
    tag: string;
    title: string;
    subtitle: string;
    serviceList: {
      id: string;
      category: string;
      title: string;
      summary: string;
      whyCrucial: string;
      deliverables: string[];
      methodology: string;
      metricsFocus: string;
    }[];
  };
  marketEntryPage: {
    tag: string;
    title: string;
    subtitle: string;
    warningTitle: string;
    warningSubtitle: string;
    warningPoints: {
      title: string;
      desc: string;
    }[];
    calculatorTitle: string;
    calculatorSubtitle: string;
    calculatorLabels: {
      shelfPrice: string;
      retailMargin: string;
      promoAllowance: string;
      commercialCosts: string;
      cogsCost: string;
      wholesalePrice: string;
      brandGrossProfit: string;
      grossMarginPercent: string;
      shelfPriceBreakdown: string;
      retailerCut: string;
      promoReserve: string;
      otherFees: string;
      brandNetWholesale: string;
      cogsSlice: string;
      brandNetProfit: string;
      resetDefaults: string;
      hypermarketPreset: string;
      coopPreset: string;
      petrolPreset: string;
      note: string;
    };
    phasedTitle: string;
    phasedSubtitle: string;
    phases: {
      phaseNumber: number;
      phaseLabel: string;
      targetAccounts: string[];
      strategy: string;
      riskLevel: string;
      timeline: string;
      purpose: string;
    }[];
    petrolTitle: string;
    petrolSubtitle: string;
    petrolConcept: string;
    petrolBody: string;
    petrolCategories: {
      title: string;
      specs: string;
      impulseFactor: string;
    }[];
  };
  ecommercePage: {
    tag: string;
    title: string;
    subtitle: string;
    platformsTitle: string;
    platformsSubtitle: string;
    platforms: {
      name: string;
      model: string;
      benefit: string;
      strategy: string;
    }[];
    cashFlowTitle: string;
    cashFlowSubtitle: string;
    cashFlowExplanation: string;
    cashFlowDisclaimer: string;
    cashFlowDaysLabel: string;
    digitalCycleLabel: string;
    hypermarketCycleLabel: string;
    cashCycleComparison: {
      channel: string;
      turnaroundDays: number;
      cashVelocity: string;
      inventoryRisk: string;
      payoutFrequency: string;
    }[];
    quickCommerceTitle: string;
    quickCommerceSubtitle: string;
    quickCommerceBody: string;
    quickCommercePlatforms: {
      name: string;
      service: string;
      focus: string;
    }[];
  };
  partnersPage: {
    tag: string;
    title: string;
    subtitle: string;
    regionalPresenceTitle: string;
    partnerEcosystemTitle: string;
    partnerEcosystemSubtitle: string;
    categories: {
      categoryName: string;
      description: string;
      channels: string[];
    }[];
    philosophyTitle: string;
    philosophyBody: string;
    disclaimer: string;
  };
  caseStudyPage: {
    tag: string;
    title: string;
    subtitle: string;
    clientName: string;
    period: string;
    status: string;
    contextTitle: string;
    contextBody: string;
    brandConceptsTitle: string;
    brandConceptsSubtitle: string;
    brandConceptsNote: string;
    brandConcepts: {
      name: string;
      positioning: string;
      channelFocus: string;
      aesthetic: string;
    }[];
    heroSkusTitle: string;
    heroSkusSubtitle: string;
    heroSkusRationale: string;
    heroSkus: {
      skuCode: string;
      name: string;
      weight: string;
      category: string;
      keyAttributes: string;
      velocityRationale: string;
    }[];
    commercialModelTitle: string;
    commercialModelSubtitle: string;
    commercialModelNote: string;
    commercialModelItems: {
      label: string;
      value: string;
      timing: string;
      detail: string;
      benefit: string;
    }[];
    nextStepsTitle: string;
    nextSteps: {
      step: number;
      title: string;
      desc: string;
    }[];
  };
  contactPage: {
    tag: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    fields: {
      fullName: string;
      company: string;
      workEmail: string;
      phone: string;
      country: string;
      salesChannels: string;
      targetMarket: string;
      skuCount: string;
      primaryChallenge: string;
      message: string;
      consent: string;
    };
    countryOptions: { label: string; value: string }[];
    channelOptions: { label: string; value: string }[];
    targetMarketOptions: { label: string; value: string }[];
    challengeOptions: { label: string; value: string }[];
    submitButton: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    downloadBrief: string;
    bookAnother: string;
    officeDetailsTitle: string;
    placeholders: {
      emailLabel: string;
      emailValue: string;
      phoneLabel: string;
      phoneValue: string;
      whatsappLabel: string;
      whatsappValue: string;
      addressLabel: string;
      addressValue: string;
      linkedinLabel: string;
      linkedinValue: string;
    };
    whatsappCta: string;
  };
  footer: {
    tagline: string;
    disclaimer: string;
    colCompany: string;
    colCapabilities: string;
    colMarkets: string;
    colCaseStudy: string;
    colContact: string;
    rights: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  modal: {
    step1Title: string;
    step2Title: string;
    step3Title: string;
    close: string;
    back: string;
    next: string;
    submit: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    meta: {
      title: 'MASCO Business Consulting | FMCG Market Entry & Growth Strategy',
      description:
        'Executive FMCG consulting for modern retail, reverse pricing, key accounts, trade marketing, e-commerce and regional market-entry strategy across the UAE, Saudi Arabia and Egypt.',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      marketEntry: 'Market Entry',
      ecommerce: 'E-Commerce',
      partners: 'Partners',
      caseStudy: 'Case Study',
      contact: 'Contact',
      requestConsultation: 'Request Consultation',
      switchLanguage: 'العربية',
      currentLang: 'EN',
    },
    hero: {
      eyebrow: 'BUSINESS CONSULTING • FMCG • MODERN TRADE',
      headline: 'Build a Profitable Route Into',
      headlineHighlight: 'Modern Retail.',
      subheadline:
        'MASCO designs and executes B2B pricing, market-entry, key-account and commercial strategies that protect profitability while creating a scalable, resilient route to modern trade.',
      primaryCta: 'Request a Consultation',
      secondaryCta: 'Explore Strategy Model',
      badge1: 'Reverse Pricing Architecture',
      badge2: 'Phased Retail Expansion',
      badge3: 'Digital Cash Flow Acceleration',
      stat1Value: 'UAE • KSA • EGY',
      stat1Label: 'Regional Footprint',
      stat2Value: 'FMCG & B2B',
      stat2Label: 'Dedicated Focus',
      stat3Value: '100% Practical',
      stat3Label: 'Strategy + Execution',
    },
    credibility: {
      title: 'Strategic FMCG Advisory Built on Commercial Reality',
      regionalPresence: {
        title: 'Regional Footprint',
        value: 'UAE • Saudi Arabia • Egypt',
        desc: 'Deep local knowledge of retail dynamics, consumer behaviors, and distributor frameworks across GCC & North Africa.',
      },
      coreFocus: {
        title: 'Core Practice Focus',
        value: 'FMCG / B2B Commercial Strategy',
        desc: 'Specialized in personal care, food & non-food consumer goods entering hypermarkets, cooperatives & petrol stations.',
      },
      approach: {
        title: 'Consulting Methodology',
        value: 'Strategy + End-to-End Execution',
        desc: 'From financial diagnosis and reverse pricing models to direct key account negotiations and inventory velocity.',
      },
    },
    servicesOverview: {
      tag: 'CORE CAPABILITIES',
      title: 'Strategy Built Around Commercial Reality',
      subtitle:
        'We bridge the critical gap between brand aspirations and the stringent commercial requirements of major retail chains.',
      items: [
        {
          id: 'modern-trade-entry',
          title: 'Modern Retail Entry Strategy',
          tagline: 'Structured roadmaps to enter hypermarkets and cooperatives without capital strain.',
          desc: 'Comprehensive retail feasibility audit, account prioritization, and listing fee negotiations tailored to your brand’s working capital.',
          deliverables: ['Retail Entry Feasibility Audit', 'Priority Account Sequencing', 'Commercial Terms Negotiation', 'Listing Fee Optimization'],
          icon: 'Store',
        },
        {
          id: 'reverse-pricing',
          title: 'B2B Pricing & Reverse Pricing',
          tagline: 'Engineering wholesale margins backwards from consumer shelf expectations.',
          desc: 'Calculate exact wholesale pricing by factoring in retailer margins, promo reserves, listing fees, and trade discounts beforehand.',
          deliverables: ['Reverse Shelf Price Modeling', 'Retailer Margin Allowance Setup', 'Promotional Reserve Budgeting', 'Wholesale Price Protection'],
          icon: 'Calculator',
        },
        {
          id: 'key-accounts',
          title: 'Key Account Management',
          tagline: 'Securing prime shelf presence and sustainable buyer relationships.',
          desc: 'Direct representation and commercial account management for Union Coop, Sharjah Coop, Lulu, Carrefour, and regional chains.',
          deliverables: ['Account Tiering Strategy', 'Promotional Calendar Design', 'Gondola & Display Agreements', 'Rebate Structure Governance'],
          icon: 'Users',
        },
        {
          id: 'trade-marketing',
          title: 'Trade Marketing & In-Store Activation',
          tagline: 'Driving off-shelf sell-through and high product velocity.',
          desc: 'Targeted shopper marketing, eye-level shelf positioning, POS display design, and promotional bundle strategies.',
          deliverables: ['Shopper Marketing Plans', 'POS & Gondola Activation', 'Cross-Merchandising Design', 'Category Management Support'],
          icon: 'ShoppingBag',
        },
        {
          id: 'sales-financial-analysis',
          title: 'Sales & Financial Analysis',
          tagline: 'Real-time telemetry on SKU velocity, collection cycles, and margin leakage.',
          desc: 'Continuous monitoring of sell-out rates, return rates, inventory turns, and payment collection cycles across every retail channel.',
          deliverables: ['SKU Movement & Velocity Audits', 'Payment Cycle Risk Tracking', 'Fast vs Slow Mover Classification', 'Cash-Flow Exposure Modeling'],
          icon: 'TrendingUp',
        },
        {
          id: 'ecommerce-quick-commerce',
          title: 'E-Commerce & Quick Commerce',
          tagline: 'High-velocity digital channels to support immediate brand cash flow.',
          desc: 'Optimized listings on Amazon (FBA), Noon (FBN), and quick-commerce dark stores (Talabat Mart, Careem Quik, InstaShop).',
          deliverables: ['Amazon FBA / Noon FBN Setup', 'Quick Commerce Dark Store Placement', '14-Day Digital Cash Cycle Integration', 'Digital Hero SKU Strategy'],
          icon: 'Zap',
        },
        {
          id: 'hero-sku-selection',
          title: 'Hero SKU Prioritization',
          tagline: 'Focusing resources on high-turnover products to guarantee replenishment.',
          desc: 'Identify and prioritize 3–4 hero products that drive 80% of retail velocity, minimizing inventory stagnation and listing costs.',
          deliverables: ['Category Velocity Analysis', 'Hero SKU Shortlisting', 'Packaging & Format Optimization', 'Rapid Replenishment Playbook'],
          icon: 'Target',
        },
        {
          id: 'cash-flow-protection',
          title: 'Cash-Flow & Margin Protection',
          tagline: 'Shielding working capital against extended 90-day payment cycles.',
          desc: 'Balancing long-term hypermarket exposure with fast-turnover digital channels to ensure healthy, uninterrupted liquidity.',
          deliverables: ['Working Capital Risk Assessment', 'Cash Cycle Balancing Model', 'Receivables Collection Tracking', 'Discount Market Price Firewalls'],
          icon: 'ShieldCheck',
        },
      ],
      viewAllCta: 'Explore Detailed Services & Methodologies',
    },
    problemSolution: {
      tag: 'MARKET REALITY',
      title: 'The Cost of Entering Modern Trade With the Wrong Pricing Logic',
      subtitle:
        'Many FMCG brands enter hypermarkets using traditional wholesale or discount-market pricing, only to suffer crippling margin erosion and cash freezes.',
      problemHeader: 'The Traditional Pitfall (Discount-Market Pricing)',
      problemSub: 'Entering modern trade without reverse pricing & channel segmentation creates severe structural failure:',
      problems: [
        {
          title: 'Pricing Conflict with Retail Giants',
          desc: 'Hypermarkets detect cheaper retail prices in discount channels and demand punitive margin compensations or refuse listing.',
        },
        {
          title: 'Margin Erosion from Hidden Fees',
          desc: 'Listing fees, gondola rentals, annual rebates, and promotion allowances consume up to 45–55% of the gross product value.',
        },
        {
          title: 'Working Capital Locked in Slow SKUs',
          desc: 'Listing a full 20-SKU catalogue freezes capital in slow-moving variants that fail to achieve required monthly turnover.',
        },
        {
          title: 'Extended 90-Day Payment Terms',
          desc: 'Waiting 90+ days for hypermarket receivables while paying manufacturing costs upfront creates acute cash flow deficits.',
        },
      ],
      solutionHeader: 'The MASCO Strategic Framework',
      solutionSub: 'A disciplined, phased methodology engineered to secure profitability and cash liquidity:',
      solutions: [
        {
          title: 'Dedicated Modern-Trade Brand Architecture',
          desc: 'Launch a tailored brand (or segregated line) designed specifically for modern trade, isolating hypermarket pricing from discount trade.',
        },
        {
          title: 'Reverse Pricing from Shelf Backward',
          desc: 'Calculate wholesale price strictly backward from the consumer shelf price, locking in retailer margin and marketing reserves.',
        },
        {
          title: 'Phased Account Rollout',
          desc: 'Enter low-barrier, high-turnover cooperatives in Phase 1 before expanding to Tier-2 coops and Tier-3 hypermarket conglomerates.',
        },
        {
          title: 'Hero SKU Prioritization (Top 4 Fast Movers)',
          desc: 'Launch only proven, fast-moving SKUs to guarantee continuous on-shelf velocity and trigger prompt automated replenishment.',
        },
        {
          title: 'Digital Cash Flow Bridge (14-Day Cycle)',
          desc: 'Leverage Amazon, Noon, and Quick Commerce to generate rapid 14-day cash inflows that fund retail inventory expansion.',
        },
      ],
    },
    roadmap: {
      tag: 'EXECUTION BLUEPRINT',
      title: 'From Diagnosis to Scale',
      subtitle: 'A disciplined 6-stage roadmap designed to take FMCG brands from market entry assessment to regional market dominance.',
      steps: [
        {
          num: '01',
          title: 'Diagnose Current Pricing & Sales',
          desc: 'Forensic review of current product costs, sales channels, distributor terms, and pricing conflicts across discount and wholesale markets.',
          keyOutcome: 'Baseline Pricing & Risk Diagnostic Audit',
        },
        {
          num: '02',
          title: 'Design Brand & Price Architecture',
          desc: 'Establish reverse pricing structure from consumer shelf target backward, and evaluate dedicated modern-trade brand positioning.',
          keyOutcome: 'Reverse Pricing Matrix & Brand Architecture',
        },
        {
          num: '03',
          title: 'Select Fast-Moving Hero SKUs',
          desc: 'Identify top 3–4 high-velocity items with proven consumer demand, packaging suitability, and optimal margin profile.',
          keyOutcome: 'Phase 1 Hero SKU Commercial Portfolio',
        },
        {
          num: '04',
          title: 'Enter Priority Phase 1 Accounts',
          desc: 'Initiate commercial negotiations and listings with low-barrier cooperatives (Ajman Coop, Sharjah Coop, National Markets).',
          keyOutcome: 'First-Wave Listing & In-Store Placement',
        },
        {
          num: '05',
          title: 'Expand to Tier-2 & Tier-3 Chains',
          desc: 'Scale into Emirates Coop, Union Coop, Abu Dhabi associations, Al Maya, and subsequently Lulu, Carrefour & Spinneys.',
          keyOutcome: 'Pan-Emirates Modern Trade Distribution',
        },
        {
          num: '06',
          title: 'Scale E-Commerce & Quick Commerce',
          desc: 'Integrate Amazon FBA, Noon FBN, Talabat Mart, and Careem Quik to capture high-margin impulse sales and 14-day cash turns.',
          keyOutcome: 'Omnichannel Cash Flow & Brand Dominance',
        },
      ],
    },
    caseStudyHighlight: {
      tag: 'FEATURED STRATEGY CASE STUDY',
      title: 'Al Saad Rose: Modern Retail & Petrol Station Strategy',
      subtitle: 'Business Plan Q4 2026 – 2027: A comprehensive market entry and cash-flow protection blueprint.',
      badge: 'Real-World Strategy Case Study',
      client: 'Al Saad Rose',
      period: 'Q4 2026 – 2027 Implementation',
      summary:
        'A comprehensive commercial roadmap engineered to transition premium botanical soaps and personal care into UAE modern trade, petrol station convenience stores, and e-commerce platforms.',
      bullets: [
        'Dedicated modern-trade brand concepts: AROVIA & ZENVAYA',
        'Phase 1 Hero SKUs: Soap T. Rose, Amber Oud, Camel Milk, Turkish Hammam (110 GM)',
        '3-Phase retail expansion: Cooperatives first, followed by Tier-2 Coops, then Tier-3 Hypermarkets',
        'Impulse channel penetration: Car fresheners & 50ml perfumes across petrol station networks',
        'Commercial Model: Trial month, AED 5,000 monthly retainer, 5% collection commission, 2% target bonus',
      ],
      cta: 'View Full Case Study & Strategy Model',
    },
    ctaBanner: {
      title: 'Planning to Enter Modern Retail?',
      body: 'Let us build the pricing, SKU, account sequencing, and cash-flow model before you commit capital to costly listing fees.',
      button: 'Request Strategic Consultation',
      secondaryButton: 'Test Reverse Pricing Calculator',
    },
    about: {
      tag: 'ABOUT MASCO',
      title: 'Executive Experience. Commercial Discipline.',
      subtitle: 'We are a specialized FMCG business consulting practice delivering boardroom strategy and hands-on commercial execution.',
      introLead:
        'MASCO is a dedicated team of FMCG commercial executives that designs and executes integrated B2B pricing, retail entry, and trade marketing strategies.',
      introBody:
        'Unlike theoretical consultancies, MASCO operates directly in the commercial trenches of the GCC retail market. We understand that winning in modern trade requires more than great products—it demands rigorous margin math, protective brand architecture, phased capital deployment, and active key account advocacy.',
      threePillarsTitle: 'Our Three Foundational Pillars',
      pillars: [
        {
          title: 'Leadership & FMCG Experience',
          desc: 'Executive commercial expertise specializing in integrated B2B pricing strategy, channel economics, and retailer margin structures.',
          highlights: ['Decades of collective GCC retail experience', 'Proven reverse-pricing methodologies', 'Executive C-suite and board advisory'],
        },
        {
          title: 'Integrated Commercial Team',
          desc: 'Comprehensive execution capabilities spanning key-account management, trade marketing, and forensic sales financial analysis.',
          highlights: ['Key account listing and negotiation specialists', 'Trade marketing and shelf visualizers', 'Financial sales and cash-flow analysts'],
        },
        {
          title: 'Regional FMCG Footprint',
          desc: 'Strategic track record and operational familiarity across the United Arab Emirates, Kingdom of Saudi Arabia, and Egypt.',
          highlights: ['United Arab Emirates (UAE)', 'Kingdom of Saudi Arabia (KSA)', 'Arab Republic of Egypt (EGY)'],
        },
      ],
      regionalTitle: 'Regional Footprint & Market Focus',
      regionalSubtitle: 'MASCO provides strategic FMCG consulting across three high-growth Middle Eastern economies.',
      markets: [
        {
          country: 'United Arab Emirates (UAE)',
          code: 'UAE',
          channels: 'Cooperatives (Union, Sharjah, Ajman, Abu Dhabi), Hypermarkets (Lulu, Carrefour, Spinneys), Petrol Stations (ADNOC, ENOC/EPPCO, Emarat), Amazon & Noon.',
          status: 'Primary Hub',
          focus: 'High-margin modern trade, convenience impulse buying, quick-commerce dark stores.',
        },
        {
          country: 'Saudi Arabia (KSA)',
          code: 'KSA',
          channels: 'Panda, Othaim, BinDawood, Danube, Lulu KSA, Tamimi, Sasco petrol networks, Amazon.sa, Noon KSA.',
          status: 'Expansion Market',
          focus: 'Mass-volume retail scale, regional distributor alignment, modern pharmacy chains.',
        },
        {
          country: 'Egypt',
          code: 'EGY',
          channels: 'Carrefour Egypt, Spinneys Egypt, HyperOne, Metro, Seoudi, local supermarket chains, Amazon.eg, Noon Egypt.',
          status: 'Strategic Market',
          focus: 'Cost-effective manufacturing supply base, volume distribution, localized value packaging.',
        },
      ],
      governanceTitle: 'Commercial Discipline & Factual Integrity',
      governanceBody:
        'At MASCO, we base our recommendations strictly on verifiable commercial numbers, distributor feasibility, and real-world buyer criteria. We do not make unfounded revenue claims or guarantee listings—we engineer the commercial structures that make listings commercially viable and sustainable.',
    },
    servicesPage: {
      tag: 'OUR CAPABILITIES',
      title: 'End-to-End FMCG Consulting Services',
      subtitle: 'Explore our 5 core consulting practices designed to protect margins and accelerate profitable retail expansion.',
      serviceList: [
        {
          id: 'modern-trade-entry',
          category: 'Market Expansion',
          title: 'Modern Trade Market Entry',
          summary: 'A disciplined, phased roadmap to enter hypermarkets and cooperatives without capital strain.',
          whyCrucial: 'Entering modern trade unprepared often results in heavy listing fees, unsellable inventory, and brand damage.',
          deliverables: [
            'Retail feasibility and category gap audit',
            'Priority-account sequencing (Phase 1, 2, and 3)',
            'Listing fee and slotting allowance negotiation support',
            'Commercial terms and payment cycle contract structuring',
            'Phased inventory rollout and replenishment roadmap',
          ],
          methodology: 'We evaluate your brand against category benchmarks, structure commercial terms, and negotiate account by account.',
          metricsFocus: 'Listing Acceptance Rate • Slotting Fee Savings • Initial Order Velocity',
        },
        {
          id: 'pricing-margin-architecture',
          category: 'Financial Strategy',
          title: 'Pricing & Margin Architecture (Reverse Pricing)',
          summary: 'Mathematical modeling that engineers wholesale prices backward from target consumer shelf prices.',
          whyCrucial: 'Traditional cost-plus pricing fails in modern trade because it ignores retail margins, promo allowances, and distributor cuts.',
          deliverables: [
            'Target consumer shelf price benchmarks',
            'Retailer margin allowance modeling (35%–45%)',
            'Promotional discount reserve budgeting (10%–15%)',
            'Gondola and listing fee amortization models',
            'Protected brand target wholesale price calculation',
          ],
          methodology: 'We start at the consumer shelf price and deduct all retailer margins and allowances to find the sustainable wholesale price.',
          metricsFocus: 'Gross Margin Protection • Retailer Price Compliance • Promo Contribution',
        },
        {
          id: 'key-accounts-trade-marketing',
          category: 'Commercial Execution',
          title: 'Key Accounts & Trade Marketing',
          summary: 'Direct account representation, buyer alignment, and high-impact in-store visual merchandising.',
          whyCrucial: 'Securing a listing is only 20% of the battle; continuous off-shelf velocity and buyer relationship management are the rest.',
          deliverables: [
            'Major account growth strategy (Union Coop, Sharjah Coop, Lulu, Carrefour)',
            'Annual promotional calendar design and margin planning',
            'Gondola end-cap and eye-level shelf positioning agreements',
            'Rebate and target bonus compliance governance',
            'Point-of-Sale (POS) visual merchandising and display guidelines',
          ],
          methodology: 'We interface directly with category buyers, plan high-converting promotions, and ensure premium shelf visibility.',
          metricsFocus: 'On-Shelf Availability • Sell-Out Rate Lift • Promotion ROI',
        },
        {
          id: 'sales-financial-analysis',
          category: 'Data & Telemetry',
          title: 'Sales & Financial Analysis',
          summary: 'Forensic monitoring of SKU velocity, payment cycle aging, and working capital risk.',
          whyCrucial: 'Cash flow crises in FMCG happen when slow-moving inventory absorbs working capital while receivables lag behind.',
          deliverables: [
            'SKU movement and velocity classification (Fast vs Slow Movers)',
            'Cash-flow exposure and working capital lockup diagnostics',
            'Payment cycle aging analysis (14-day digital vs 90-day retail)',
            'Return on Investment (ROI) per retail chain and promotion',
            'Proactive inventory replenishment and stockout prevention models',
          ],
          methodology: 'We analyze daily sell-out data, inventory turn rates, and payment receipts to identify margin leakage before it impacts cash flow.',
          metricsFocus: 'Inventory Turnover Days • Days Sales Outstanding (DSO) • SKU Profitability',
        },
        {
          id: 'ecommerce-quick-commerce',
          category: 'Digital Channels',
          title: 'E-Commerce & Quick Commerce',
          summary: 'Leveraging high-turnover digital marketplaces and dark stores to accelerate brand discovery and cash liquidity.',
          whyCrucial: 'Digital channels offer rapid 14-day payment cycles, higher control over pricing, and instant consumer feedback.',
          deliverables: [
            'Amazon FBA and Noon FBN store setup and optimization',
            'Quick-commerce integration (InstaShop, Careem Quik, Talabat Mart)',
            'Dedicated digital Hero SKU bundling and positioning',
            'Fast-cycle digital cash flow modeling to fund retail inventory',
            'Digital consumer review and brand momentum acceleration',
          ],
          methodology: 'We deploy inventory to Amazon FBA and quick-commerce dark stores, capturing high-margin impulse buyers with 14-day cash turns.',
          metricsFocus: 'Digital Buy-Box Share • Weekly Cash Flow Inflow • Dark Store Velocity',
        },
      ],
    },
    marketEntryPage: {
      tag: 'METHODOLOGY',
      title: 'Modern Retail Entry & Pricing Strategy',
      subtitle: 'How MASCO safeguards FMCG profitability through reverse pricing, phased retail rollout, and impulse petrol station channels.',
      warningTitle: 'Why Discount-Market Pricing Fails in Modern Hypermarkets',
      warningSubtitle: 'A critical warning for FMCG brand owners planning modern trade expansion.',
      warningPoints: [
        {
          title: 'Retailer Price Conflict & Rejections',
          desc: 'Major hypermarkets actively audit discount markets. If they see your product sold for AED 12 in wholesale markets, they will refuse your AED 25 hypermarket price.',
        },
        {
          title: 'Devastating Hidden Retail Fees',
          desc: 'Listing fees per SKU, slotting allowances, annual rebates, and gondola charges can easily consume 40%–50% of your expected revenue if not modeled upfront.',
        },
        {
          title: 'Capital Freezes in Slow-Moving SKUs',
          desc: 'Listing an entire 20-SKU line leads to slow movers sitting on shelves. Retailers fine brands for poor turnover and deduct unsold stock from payments.',
        },
        {
          title: 'Severe Cash Strain from 90-Day Payment Terms',
          desc: 'Supplying hypermarkets requires upfront manufacturing costs, while payments are delayed by 60 to 90+ days, leading to serious liquidity crunches.',
        },
      ],
      calculatorTitle: 'Interactive Reverse Pricing Calculator',
      calculatorSubtitle: 'Experience the exact mathematical framework MASCO uses to calculate target wholesale prices from consumer shelf price backward.',
      calculatorLabels: {
        shelfPrice: 'Target Consumer Shelf Price (AED)',
        retailMargin: 'Retailer Margin Allowance (%)',
        promoAllowance: 'Promotion & Marketing Reserve (%)',
        commercialCosts: 'Other Commercial Costs / Listing Amortization (%)',
        cogsCost: 'Unit Manufacturing / Product Cost (AED)',
        wholesalePrice: 'Calculated Target Wholesale Price',
        brandGrossProfit: 'Net Brand Profit per Unit',
        grossMarginPercent: 'Brand Gross Margin (%)',
        shelfPriceBreakdown: 'Shelf Price Dirham Waterfall Breakdown',
        retailerCut: 'Retailer Margin Share',
        promoReserve: 'Promotional Reserve',
        otherFees: 'Commercial / Listing Reserve',
        brandNetWholesale: 'Brand Net Wholesale Realization',
        cogsSlice: 'Unit Product Cost (COGS)',
        brandNetProfit: 'Brand Net Margin Realization',
        resetDefaults: 'Reset to Business Plan Defaults (AED 25.00 / 40% Retailer)',
        hypermarketPreset: 'Preset: Hypermarket Standard (40% Margin)',
        coopPreset: 'Preset: Cooperative (35% Margin)',
        petrolPreset: 'Preset: Petrol Station Convenience (45% Margin)',
        note: 'Default values based on the Q4 2026–2027 business plan model: AED 25 target shelf price and ~40% retailer margin allowance.',
      },
      phasedTitle: 'Phased Market Entry Strategy',
      phasedSubtitle: 'We sequence retail accounts in 3 distinct phases to test product velocity, protect cash flow, and avoid upfront listing fee overload.',
      phases: [
        {
          phaseNumber: 1,
          phaseLabel: 'Phase 1: Regional Cooperatives & National Markets',
          targetAccounts: ['Ajman Cooperative', 'Sharjah Cooperative', 'National Markets'],
          strategy: 'Low financial barrier, lower listing fees, localized consumer testing, and immediate velocity verification.',
          riskLevel: 'Low Financial Risk',
          timeline: 'Q4 2026 Initial Entry',
          purpose: 'Reduce upfront financial burden, test commercial sell-through velocity, and generate replenishment proof without heavy listing costs.',
        },
        {
          phaseNumber: 2,
          phaseLabel: 'Phase 2: Tier-2 Cooperatives & Association Chains',
          targetAccounts: ['Emirates Cooperative', 'Union Coop', 'Abu Dhabi Cooperative / Association', 'Al Maya'],
          strategy: 'Mid-scale expansion across major residential hubs, utilizing Phase 1 sales velocity data to negotiate favorable terms.',
          riskLevel: 'Moderate Measured Expansion',
          timeline: 'Q1 – Q2 2027 Rollout',
          purpose: 'Expand market penetration across high-density consumer zones after proving fast turnover and steady replenishment in Phase 1.',
        },
        {
          phaseNumber: 3,
          phaseLabel: 'Phase 3: Tier-3 Major Hypermarket Conglomerates',
          targetAccounts: ['Lulu Hypermarket', 'Carrefour (Majid Al Futtaim)', 'Spinneys / Waitrose'],
          strategy: 'High-volume flagship listings negotiated only after cash flow stability, robust working capital, and undeniable consumer pull.',
          riskLevel: 'Strategic Scale',
          timeline: 'Q3 – Q4 2027 Scale',
          purpose: 'Enter regional hypermarket giants only after securing cash-flow stability, strong brand recognition, and sufficient working capital.',
        },
      ],
      petrolTitle: 'Petrol-Station Convenience Channel Strategy',
      petrolSubtitle: 'Capitalizing on high-margin impulse buying in high-footfall petrol station convenience stores across the UAE.',
      petrolConcept: 'The Psychology of the Quick-Stop Impulse Purchase',
      petrolBody:
        'Petrol station convenience stores (ADNOC Oasis, ENOC Zoom, Emarat Plus) represent prime retail real estate for high-margin, compact FMCG products. Shoppers make split-second purchasing decisions at the checkout counter without price sensitivity.',
      petrolCategories: [
        {
          title: 'Premium Car Fresheners',
          specs: 'Compact luxury air fresheners, oud/amber/cardamom scents, hanging & vent formats.',
          impulseFactor: 'High Immediate Relevance: Drivers frequently upgrade car fragrance while fueling.',
        },
        {
          title: '50 ml Pocket Perfumes & Travel Sprays',
          specs: 'Accessible price points (AED 25 – AED 45), travel-friendly 50ml bottles, luxury look.',
          impulseFactor: 'Impulse Gifting & Daily Refreshment: High turnover counter display placement.',
        },
      ],
    },
    ecommercePage: {
      tag: 'DIGITAL ACCELERATION',
      title: 'E-Commerce & Digital Cash Cycles',
      subtitle: 'How Amazon, Noon, and Quick Commerce dark stores provide fast 14-day cash turns to fund modern retail expansion.',
      platformsTitle: 'Primary Digital Marketplaces',
      platformsSubtitle: 'Utilizing fulfillment infrastructure to guarantee delivery reliability and prime consumer trust.',
      platforms: [
        {
          name: 'Amazon UAE & KSA',
          model: 'Fulfillment by Amazon (FBA)',
          benefit: 'Prime delivery badge, algorithmic buy-box priority, trusted review ecosystem.',
          strategy: 'Deploy Hero SKUs into FBA fulfillment centers to capture organic search and recurring subscriptions.',
        },
        {
          name: 'Noon.com (UAE & KSA)',
          model: 'Fulfilled by Noon (FBN)',
          benefit: 'Noon Express badge, heavy regional marketing campaigns, strong Gulf consumer loyalty.',
          strategy: 'Leverage Yellow Friday and mega-promotional events to drive high-volume digital turnover.',
        },
      ],
      cashFlowTitle: 'Faster Digital Cash Cycles: 14 Days vs 90 Days',
      cashFlowSubtitle: 'Balancing digital weekly cash disbursements against extended hypermarket payment terms.',
      cashFlowExplanation:
        'In our commercial model, e-commerce and quick-commerce channels disburse collected revenues on an estimated 14-day cycle, providing immediate liquidity that buffers the 60 to 90-day payment lag common in traditional hypermarkets.',
      cashFlowDisclaimer:
        '*Note: Payment cycle figures represent business plan proposal assumptions and illustrative channel benchmarks, not universal statutory terms.',
      cashFlowDaysLabel: 'Payment Collection Cycle (Days)',
      digitalCycleLabel: 'E-Commerce / Q-Commerce (~14 Days)',
      hypermarketCycleLabel: 'Modern Hypermarkets (~90 Days)',
      cashCycleComparison: [
        {
          channel: 'Amazon FBA / Noon FBN',
          turnaroundDays: 14,
          cashVelocity: 'Very Fast (Bi-weekly payouts)',
          inventoryRisk: 'Low (Controlled safety stock)',
          payoutFrequency: 'Every 7 – 14 Days',
        },
        {
          channel: 'Quick Commerce (Talabat / Careem)',
          turnaroundDays: 14,
          cashVelocity: 'Very Fast (Weekly/Bi-weekly settlement)',
          inventoryRisk: 'Very Low (Dark-store batch orders)',
          payoutFrequency: 'Every 14 Days',
        },
        {
          channel: 'Tier-1 Cooperatives',
          turnaroundDays: 45,
          cashVelocity: 'Moderate (Standard coop credit terms)',
          inventoryRisk: 'Moderate (Consignment or 30-day PO)',
          payoutFrequency: 'Monthly Statement',
        },
        {
          channel: 'Major Hypermarkets (Lulu / Carrefour)',
          turnaroundDays: 90,
          cashVelocity: 'Slow (Extended corporate credit terms)',
          inventoryRisk: 'High (Listing & return exposures)',
          payoutFrequency: '60 – 90 Days Post-Invoice',
        },
      ],
      quickCommerceTitle: 'Quick-Commerce & Dark-Store Strategy',
      quickCommerceSubtitle: 'Delivering Hero SKUs to consumers in under 20 minutes across urban hubs.',
      quickCommerceBody:
        'Quick commerce platforms maintain localized micro-fulfillment centers (dark stores) in high-density neighborhoods. Listing Hero SKUs here guarantees instant availability for urgent consumer needs.',
      quickCommercePlatforms: [
        {
          name: 'InstaShop',
          service: 'On-Demand Supermarket Delivery',
          focus: 'Connecting local supermarket inventory with affluent residential shoppers.',
        },
        {
          name: 'Careem Quik',
          service: '15-Minute Grocery & Essentials',
          focus: 'Dark-store impulse personal care and emergency hygiene replenishment.',
        },
        {
          name: 'Talabat Mart',
          service: '24/7 Dark-Store Network',
          focus: 'High-frequency household orders with wide geographical coverage across all 7 Emirates.',
        },
      ],
    },
    partnersPage: {
      tag: 'REGIONAL NETWORK',
      title: 'Our Channel Ecosystem & Regional Presence',
      subtitle: 'Strategic retail relationships across the United Arab Emirates, Saudi Arabia, and Egypt.',
      regionalPresenceTitle: 'Three Key Growth Markets',
      partnerEcosystemTitle: 'Target Retail & Distribution Ecosystem',
      partnerEcosystemSubtitle: 'The retail channels, cooperatives, hypermarkets, and digital platforms we engage for our FMCG clients.',
      categories: [
        {
          categoryName: 'UAE Cooperatives & Association Chains',
          description: 'Established community retailers with high local customer loyalty and lower barrier entry.',
          channels: ['Union Coop', 'Sharjah Cooperative Society', 'Ajman Markets Cooperative', 'Emirates Cooperative Society', 'Abu Dhabi Co-op / Association', 'Al Maya Group'],
        },
        {
          categoryName: 'Major Pan-Regional Hypermarket Chains',
          description: 'High-volume regional retail powerhouses with extensive store networks across the GCC.',
          channels: ['Lulu Hypermarket', 'Carrefour (Majid Al Futtaim)', 'Spinneys', 'Waitrose', 'Panda (KSA)', 'Othaim Markets (KSA)', 'HyperOne (Egypt)'],
        },
        {
          categoryName: 'Petrol Station Convenience Networks',
          description: 'High-margin impulse purchasing points located at high-traffic mobility hubs.',
          channels: ['ADNOC Oasis (UAE)', 'ENOC / EPPCO Zoom (UAE)', 'Emarat Plus (UAE)', 'SASCO Palm (KSA)'],
        },
        {
          categoryName: 'Digital & Quick-Commerce Marketplaces',
          description: 'High-velocity digital channels with rapid 14-day cash flow turnaround.',
          channels: ['Amazon.ae & Amazon.sa', 'Noon.com (UAE & KSA)', 'Talabat Mart', 'Careem Quik', 'InstaShop'],
        },
      ],
      philosophyTitle: 'Our Commercial Partnership Philosophy',
      philosophyBody:
        'MASCO acts as an objective, executive strategic partner. We work directly with FMCG brand principals, manufacturers, and distributors to establish fair, profitable, and durable commercial relationships with retail category managers.',
      disclaimer:
        'Note: Retailer and platform names reflect the target commercial ecosystem outlined in the Q4 2026–2027 business plan. Official logos and trademarks belong to their respective corporate entities.',
    },
    caseStudyPage: {
      tag: 'FEATURED CASE STUDY',
      title: 'Al Saad Rose: Modern Retail & Petrol Station Strategy',
      subtitle: 'Business Plan Q4 2026 – 2027: An executive case study in reverse pricing, dedicated brand architecture, and phased modern trade rollout.',
      clientName: 'Al Saad Rose',
      period: 'Q4 2026 – 2027 Strategy Plan',
      status: 'Strategic Proposal & Execution Blueprint',
      contextTitle: 'Executive Context & Strategic Challenge',
      contextBody:
        'Al Saad Rose, a recognized manufacturer of premium botanical soaps and personal care products, sought to expand beyond traditional wholesale and discount markets into UAE modern trade (hypermarkets, cooperatives, and petrol stations). The central challenge: entering modern retail without triggering pricing conflicts with existing discount channels or eroding profitability through listing fees and extended payment terms.',
      brandConceptsTitle: 'Proposed Dedicated Brand Concepts',
      brandConceptsSubtitle: 'Creating channel separation between discount wholesale and modern retail.',
      brandConceptsNote:
        '*Important: AROVIA and ZENVAYA are illustrative brand concepts proposed in the business plan to demonstrate channel segregation, not finalized trademarks.',
      brandConcepts: [
        {
          name: 'AROVIA',
          positioning: 'Botanical Elegance & Daily Luxury',
          channelFocus: 'Modern Trade Cooperatives & Hypermarkets',
          aesthetic: 'Clean European luxury packaging, gold foil typography, natural botanical illustrations.',
        },
        {
          name: 'ZENVAYA',
          positioning: 'Holistic Wellness & Pure Aromatherapy',
          channelFocus: 'Convenience Stores, E-Commerce & Pharmacy Chains',
          aesthetic: 'Minimalist organic aesthetics, calming pastel tones, premium textured paper packaging.',
        },
      ],
      heroSkusTitle: 'Phase 1 Hero SKUs (Fast-Moving Soap Selection)',
      heroSkusSubtitle: 'Prioritizing 4 high-turnover products to drive rapid replenishment and avoid frozen working capital.',
      heroSkusRationale:
        'Rather than listing an extensive 20-product catalogue, MASCO identified 4 Hero SKUs that represent 80% of consumer appeal in the personal care segment. Focusing on these 4 items minimizes listing fees and ensures immediate on-shelf turnover.',
      heroSkus: [
        {
          skuCode: 'SKU-01',
          name: 'SOAP T. ROSE',
          weight: '110 GM',
          category: 'Botanical Personal Care',
          keyAttributes: 'Natural Damascus rose extracts, gentle moisturization, floral luxury fragrance.',
          velocityRationale: 'Proven universal consumer favorite with high daily household consumption rate.',
        },
        {
          skuCode: 'SKU-02',
          name: 'SOAP AMBER OUD',
          weight: '110 GM',
          category: 'Oriental Luxury Care',
          keyAttributes: 'Rich amber resin, aged agarwood notes, deeply nourishing formula.',
          velocityRationale: 'Strong cultural affinity across Gulf consumers, high gifting appeal.',
        },
        {
          skuCode: 'SKU-03',
          name: 'SOAP CAMEL MILK',
          weight: '110 GM',
          category: 'Heritage Premium Care',
          keyAttributes: 'Authentic camel milk vitamins, immune-boosting minerals, ultra-nourishing.',
          velocityRationale: 'High tourist & local premium demand, unique regional heritage USP.',
        },
        {
          skuCode: 'SKU-04',
          name: 'SOAP T. HAMMAM',
          weight: '110 GM',
          category: 'Spa & Wellness Care',
          keyAttributes: 'Traditional Turkish bath recipe, eucalyptus aroma, exfoliating natural clay.',
          velocityRationale: 'Growing home spa and wellness trend, excellent basket-builder item.',
        },
      ],
      commercialModelTitle: 'Commercial Partnership & Compensation Model',
      commercialModelSubtitle: 'Aligned incentives with shared commercial success and zero upfront risk during the trial phase.',
      commercialModelNote:
        'This commercial structure from the business plan aligns consulting incentives with actual cash collected from the retail market.',
      commercialModelItems: [
        {
          label: 'Joint Trial Period',
          value: 'September 2026',
          timing: 'Month 1 Evaluation',
          detail: 'Evaluation and preliminary trial work conducted without financial compensation.',
          benefit: 'Zero financial risk for the brand during initial strategy formulation and diagnostic audit.',
        },
        {
          label: 'Monthly Retainer',
          value: 'AED 5,000 / Month',
          timing: 'Effective from 1 October',
          detail: 'Paid in advance to cover ongoing operational execution, key account management, and buyer liaison.',
          benefit: 'Dedicated executive consulting team actively managing day-to-day retail negotiations.',
        },
        {
          label: 'Collection Commission',
          value: '5% Actual Collection',
          timing: 'Monthly Settlement',
          detail: 'Applied strictly to amounts actually collected from defined retail and digital markets.',
          benefit: 'Commission is tied to real cash received in the bank, not theoretical invoiced sales.',
        },
        {
          label: 'Annual Target Performance Bonus',
          value: '2% Annual Bonus',
          timing: 'Annual Target Milestone',
          detail: 'Applied to total annual collection when mutually agreed commercial targets are achieved.',
          benefit: 'Incentivizes long-term brand equity, sustained replenishment velocity, and scale.',
        },
      ],
      nextStepsTitle: 'Execution Roadmap & Strategic Next Steps',
      nextSteps: [
        {
          step: 1,
          title: 'Commercial & Financial Structure Approval',
          desc: 'Formally approve the reverse pricing model, retail margin allowances, and Hero SKU selection.',
        },
        {
          step: 2,
          title: 'Partnership Agreement & Brand Identity Design',
          desc: 'Sign the commercial partnership agreement and immediately commence visual identity design for the dedicated modern trade brand.',
        },
        {
          step: 3,
          title: 'Phase 1 Commercial Negotiations Launch',
          desc: 'Initiate listing meetings and commercial negotiations with Phase 1 accounts (Ajman Coop, Sharjah Coop, National Markets).',
        },
      ],
    },
    contactPage: {
      tag: 'GET IN TOUCH',
      title: 'Request an Executive Consultation',
      subtitle: 'Discuss your modern retail entry, reverse pricing, or FMCG commercial expansion with our senior consulting team.',
      formTitle: 'Commercial Consultation Brief',
      formSubtitle: 'Fill out this confidential brief to receive a customized market-entry diagnostic.',
      fields: {
        fullName: 'Full Name *',
        company: 'Company / Brand Name *',
        workEmail: 'Work Email Address *',
        phone: 'Phone / WhatsApp Number *',
        country: 'Headquarters Country *',
        salesChannels: 'Current Primary Sales Channels *',
        targetMarket: 'Target Expansion Market *',
        skuCount: 'Estimated Number of Active SKUs *',
        primaryChallenge: 'Primary Commercial Challenge *',
        message: 'Project Details / Specific Goals',
        consent: 'I agree to the processing of business information for commercial evaluation.',
      },
      countryOptions: [
        { label: 'United Arab Emirates (UAE)', value: 'UAE' },
        { label: 'Saudi Arabia (KSA)', value: 'KSA' },
        { label: 'Egypt', value: 'Egypt' },
        { label: 'Other GCC / Regional', value: 'Other' },
      ],
      channelOptions: [
        { label: 'Wholesale & Traditional Trade Only', value: 'wholesale' },
        { label: 'Discount Markets & Traders', value: 'discount' },
        { label: 'E-Commerce Only (Amazon/Noon/Direct)', value: 'online' },
        { label: 'Existing Retail & Seeking Optimization', value: 'retail' },
        { label: 'New Brand Pre-Launch', value: 'prelaunch' },
      ],
      targetMarketOptions: [
        { label: 'UAE Modern Trade & Cooperatives', value: 'uae_modern_trade' },
        { label: 'UAE Petrol Station Convenience', value: 'uae_petrol' },
        { label: 'Saudi Arabia Retail Scale', value: 'ksa_retail' },
        { label: 'Egypt Consumer Market', value: 'egypt_market' },
        { label: 'Omnichannel Digital + Modern Trade', value: 'omnichannel' },
      ],
      challengeOptions: [
        { label: 'Pricing Conflict with Discount Markets', value: 'pricing_conflict' },
        { label: 'High Listing Fees & Margin Erosion', value: 'listing_fees' },
        { label: 'Extended 90-Day Payment Cycles & Cash Strain', value: 'cash_flow' },
        { label: 'Key Account Buyer Access & Negotiations', value: 'buyer_access' },
        { label: 'Hero SKU Selection & Packaging Optimization', value: 'sku_strategy' },
      ],
      submitButton: 'Submit Consultation Request',
      submitting: 'Processing Brief...',
      successTitle: 'Consultation Brief Received',
      successBody:
        'Thank you. Our FMCG commercial strategy practice has received your brief. A senior consultant will review your parameters and contact you within 24 business hours.',
      downloadBrief: 'Download Strategy Brief Summary',
      bookAnother: 'Submit Another Brief',
      officeDetailsTitle: 'Direct Executive Contact',
      placeholders: {
        emailLabel: 'Official Email',
        emailValue: '[ADD_OFFICIAL_EMAIL]',
        phoneLabel: 'Direct Phone',
        phoneValue: '[ADD_PHONE]',
        whatsappLabel: 'WhatsApp Commercial Hotline',
        whatsappValue: '[ADD_WHATSAPP]',
        addressLabel: 'Regional Office Address',
        addressValue: '[ADD_OFFICE_ADDRESS]',
        linkedinLabel: 'LinkedIn Profile',
        linkedinValue: '[ADD_LINKEDIN]',
      },
      whatsappCta: 'Chat Directly on WhatsApp',
    },
    footer: {
      tagline: 'Executive FMCG Business Consulting & Modern Retail Strategy across the UAE, Saudi Arabia & Egypt.',
      disclaimer:
        'Disclaimer: MASCO Business Consulting operates as an independent strategic advisory firm. Recommendations and financial projections are tailored to specific market parameters and client working capital.',
      colCompany: 'Company',
      colCapabilities: 'Capabilities',
      colMarkets: 'Target Markets',
      colCaseStudy: 'Case Studies',
      colContact: 'Contact & Advisory',
      rights: 'All rights reserved. MASCO Business Consulting.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Engagement',
    },
    modal: {
      step1Title: '1. Brand & Organization',
      step2Title: '2. Commercial Focus & Challenges',
      step3Title: '3. Schedule & Contact',
      close: 'Close',
      back: 'Previous Step',
      next: 'Next Step',
      submit: 'Confirm Consultation Request',
    },
  },
  ar: {
    meta: {
      title: 'MASCO للاستشارات الإدارية والتجارية | استراتيجيات دخول وتطوير تجارة التجزئة للسلع الاستهلاكية',
      description:
        'استشارات تنفيذية متخصصة في السلع الاستهلاكية (FMCG)، التسعير العكسي، إدارة الحسابات الكبرى، التسويق التجاري، والتجارة الإلكترونية في الإمارات، السعودية، ومصر.',
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      marketEntry: 'دخول الأسواق',
      ecommerce: 'التجارة الإلكترونية',
      partners: 'شركاؤنا',
      caseStudy: 'دراسة حالة',
      contact: 'تواصل معنا',
      requestConsultation: 'اطلب استشارة',
      switchLanguage: 'English',
      currentLang: 'AR',
    },
    hero: {
      eyebrow: 'استشارات أعمال • السلع الاستهلاكية • قطاع التجزئة الحديث',
      headline: 'نبني لك مساراً مربحاً لدخول',
      headlineHighlight: 'قطاع التجزئة الحديث.',
      subheadline:
        'نصمم وننفذ استراتيجيات تسعير B2B، دخول الأسواق، إدارة الحسابات الكبرى، والتوسع التجاري لمساعدة العلامات على حماية الربحية وبناء نمو مستدام وقابل للتوسع.',
      primaryCta: 'اطلب استشارة تجارية',
      secondaryCta: 'اكتشف منهجية العمل',
      badge1: 'هيكلة التسعير العكسي',
      badge2: 'توسع مرحلي مدروس',
      badge3: 'تسريع التدفق النقدي الرقمي',
      stat1Value: 'الإمارات • السعودية • مصر',
      stat1Label: 'بصمة إقليمية',
      stat2Value: 'FMCG / B2B',
      stat2Label: 'تخصص دقيق',
      stat3Value: '100% تطبيقي',
      stat3Label: 'استراتيجية + تنفيذ',
    },
    credibility: {
      title: 'استشارات تجارية تنفيذية مبنية على واقع السوق الحقيقي',
      regionalPresence: {
        title: 'الخبرة الإقليمية',
        value: 'الإمارات • السعودية • مصر',
        desc: 'فهم عميق لديناميكيات أسواق التجزئة وسلوكيات المستهلكين وشبكات التوزيع في الخليج وشمال أفريقيا.',
      },
      coreFocus: {
        title: 'مجال التركيز الأساسي',
        value: 'استراتيجيات B2B للسلع الاستهلاكية',
        desc: 'تخصص دقيق في العناية الشخصية والأغذية والسلع الاستهلاكية لدخول الهايبرماركت والجمعيات ومحطات البترول.',
      },
      approach: {
        title: 'منهجية الاستشارة',
        value: 'استراتيجية + تنفيذ ميداني متكامل',
        desc: 'من التشخيص المالي والتسعير العكسي إلى المفاوضات المباشرة مع مديري الفئات وتدوير المخزون.',
      },
    },
    servicesOverview: {
      tag: 'قدراتنا وخدماتنا',
      title: 'استراتيجية مبنية على واقع السوق التجاري',
      subtitle: 'نسد الفجوة بين طموحات العلامات التجارية والشروط التجارية الصارمة لكبرى سلاسل التجزئة.',
      items: [
        {
          id: 'modern-trade-entry',
          title: 'استراتيجية دخول التجزئة الحديثة',
          tagline: 'خطط عمل متسلسلة لدخول الجمعيات والهايبرماركت دون استنزاف رأس المال.',
          desc: 'دراسة جدوى دخول الأسواق، ترتيب أولويات الحسابات، ودعم مفاوضات رسوم الإدراج (Listing Fees).',
          deliverables: ['دراسة جدوى دخول التجزئة', 'ترتيب أولوية الحسابات', 'هيكلة الشروط التجارية', 'تحسين رسوم الإدراج'],
          icon: 'Store',
        },
        {
          id: 'reverse-pricing',
          title: 'التسعير B2B والتسعير العكسي',
          tagline: 'حساب أسعار الجملة بالرجوع إلى الخلف من سعر المستهلك على الرف.',
          desc: 'تحديد سعر الجملة الدقيق مع خصم هوامش التجزئة وبدلات الترويج ورسوم الإدراج مسبقاً لضمان ربحية العلامة.',
          deliverables: ['نمذجة السعر العكسي على الرف', 'تحديد هوامش التجزئة المستهدفة', 'ميزانية الاحتياطي الترويجي', 'حماية ربحية الجملة'],
          icon: 'Calculator',
        },
        {
          id: 'key-accounts',
          title: 'إدارة الحسابات الكبرى (Key Accounts)',
          tagline: 'تأمين أفضل مواقع العرض وبناء علاقات متينة ومستدامة مع المشترين.',
          desc: 'تمثيل تجاري وإدارة حسابات جمعية الاتحاد، جمعية الشارقة، اللولو، كارفور، والسلاسل الإقليمية.',
          deliverables: ['استراتيجية تصنيف الحسابات', 'تصميم التقويم الترويجي السنوي', 'اتفاقيات مواقع الجندولا والواجهات', 'حوكمة الحوافز والخصومات (Rebates)'],
          icon: 'Users',
        },
        {
          id: 'trade-marketing',
          title: 'التسويق التجاري والتنشيط داخل المتاجر',
          tagline: 'تحفيز سرعة سحب المنتجات من الرفوف وتحقيق معدل دوران مرتفع.',
          desc: 'خطط تسويق المتسوقين، العرض في مستوى العين، تصميم منصات البيع (POS)، وحزم العروض الترويجية.',
          deliverables: ['خطط تسويق المتسوقين', 'تنشيط منصات ونهايات الممرات', 'تصميم العرض المتقاطع', 'إدارة الفئات ومواقع العرض'],
          icon: 'ShoppingBag',
        },
        {
          id: 'sales-financial-analysis',
          title: 'التحليل المالي والمبيعات',
          tagline: 'متابعة حية لمعدلات حركة المنتجات ودورات التحصيل ومخاطر السيولة.',
          desc: 'رصد مستمر لمعدلات البيع الفعلي (Sell-Out)، المرتجعات، وسرعة التحصيل في كل قناة بيعية.',
          deliverables: ['تدقيق حركة ودوران المنتجات', 'متابعة دورات الدفع والائتمان', 'تصنيف المنتجات السريعة والبطيئة', 'نمذجة التعرض للتدفق النقدي'],
          icon: 'TrendingUp',
        },
        {
          id: 'ecommerce-quick-commerce',
          title: 'التجارة الإلكترونية والتوصيل السريع',
          tagline: 'قنوات رقمية سريعة الحركة لدعم السيولة النقدية الفورية للعلامة.',
          desc: 'إدراج احترافي على أمازون (FBA) ونون (FBN) ومتاجر التوصيل المظلمة (طلبات، كريم، إنستاشوب).',
          deliverables: ['تأسيس أمازون FBA ونون FBN', 'الإدراج في المتاجر المظلمة السريعة', 'دمج دورة التدفق النقدي 14 يوماً', 'استراتيجية منتجات البطل الرقمية'],
          icon: 'Zap',
        },
        {
          id: 'hero-sku-selection',
          title: 'اختيار منتجات البطل (Hero SKUs)',
          tagline: 'تركيز الموارد على المنتجات سريعة الحركة لضمان استمرار إعادة الطلب.',
          desc: 'تحديد 3–4 منتجات رائدة تحقق 80% من سرعة الدوران وتفادي تجميد السيولة في منتجات بطيئة.',
          deliverables: ['تحليل سرعة الفئات الاستهلاكية', 'قائمة منتجات البطل المختارة', 'تحسين أحجام وتصاميم التعبئة', 'دليل إعادة الطلب السريع'],
          icon: 'Target',
        },
        {
          id: 'cash-flow-protection',
          title: 'حماية التدفق النقدي والهوامش',
          tagline: 'حماية رأس المال العامل من ضغوط آجال السداد الطويلة (90 يوماً).',
          desc: 'تحقيق التوازن بين مبيعات الهايبرماركت الآجلة وقنوات البيع الرقمية سريعة التحصيل لضمان سيولة صحية.',
          deliverables: ['تقييم مخاطر رأس المال العامل', 'نموذج موازنة دورة التحصيل', 'متابعة تحصيلات الذمم المدينة', 'جدران حماية ضد أسعار التخفيضات'],
          icon: 'ShieldCheck',
        },
      ],
      viewAllCta: 'استكشف كافة الخدمات والمنهجيات بالتفصيل',
    },
    problemSolution: {
      tag: 'واقع السوق',
      title: 'تكلفة دخول قطاع التجزئة الحديث بهيكل تسعير غير مناسب',
      subtitle: 'تدخل العديد من العلامات إلى الهايبرماركت بهياكل تسعير أسواق الجملة والتخفيضات، لتواجه تآكلاً حاداً في الأرباح وتجميداً للسيولة.',
      problemHeader: 'المأزق التقليدي (تسعير أسواق التخفيضات)',
      problemSub: 'دخول التجزئة الحديثة دون تسعير عكسي وفصل قنوات يؤدي إلى فشل تجاري مؤلم:',
      problems: [
        {
          title: 'تعارض الأسعار مع عمالقة التجزئة',
          desc: 'ترصد سلاسل الهايبرماركت الأسعار الرخيصة في أسواق التخفيضات وتطالب بتعويضات سعرية باهظة أو ترفض الإدراج.',
        },
        {
          title: 'تآكل الهوامش بفعل الرسوم الخفية',
          desc: 'رسوم إدراج المنتجات، إيجارات الجندولا، الخصومات السنوية (Rebates)، وبدلات العروض تلتهم 45% إلى 55% من قيمة المنتج.',
        },
        {
          title: 'تجميد رأس المال في منتجات بطيئة الحركة',
          desc: 'إدراج تشكيلة كاملة من 20 صنفاً يجمد السيولة في أصناف راكدة تفشل في تحقيق معدل الدوران الشهري المطلوب.',
        },
        {
          title: 'آجال سداد ممتدة تصل إلى 90 يوماً',
          desc: 'الانتظار لأكثر من 90 يوماً لتحصيل مستحقات الهايبرماركت مع دفع تكاليف التصنيع مقدماً يخلق عجزاً نقدياً حاداً.',
        },
      ],
      solutionHeader: 'منهجية MASCO الاستراتيجية',
      solutionSub: 'منهجية مرحلية منضبطة مصممة لحماية الربحية وتأمين السيولة النقدية المستمرة:',
      solutions: [
        {
          title: 'بناء هوية تجارية مخصصة للتجزئة الحديثة',
          desc: 'إطلاق علامة مخصصة (أو خط إنتاج مستقل) لقطاع التجزئة الحديث لعزل أسعار الهايبرماركت عن أسواق التخفيضات.',
        },
        {
          title: 'تطبيق التسعير العكسي من سعر الرف إلى الخلف',
          desc: 'حساب سعر الجملة بالرجوع إلى الخلف من سعر المستهلك النهائي مع خصم هوامش التاجر واحتياطي التسويق مسبقاً.',
        },
        {
          title: 'التوسع المرحلي المتدرج للحسابات',
          desc: 'دخول الجمعيات التعاونية ذات الشروط الميسرة في المرحلة الأولى قبل التوسع نحو الجمعيات الكبرى والهايبرماركت.',
        },
        {
          title: 'التركيز على منتجات البطل (Hero SKUs)',
          desc: 'طرح أفضل 4 منتجات سريعة الحركة فقط لضمان سرعة السحب وتفعيل إعادة الطلب التلقائي الفوري.',
        },
        {
          title: 'جسر السيولة الرقمية (دورة 14 يوماً)',
          desc: 'استثمار أمازون ونون والتوصيل السريع لتوليد تدفقات نقدية كل 14 يوماً تمول توسع المخزون في التجزئة.',
        },
      ],
    },
    roadmap: {
      tag: 'خريطة التنفيذ',
      title: 'من التشخيص إلى التوسع الإقليمي',
      subtitle: 'مسار عمل منضبط من 6 مراحل لنقل علامات السلع الاستهلاكية من التشخيص الأولي إلى الانتشار والربحية المستدامة.',
      steps: [
        {
          num: '01',
          title: 'تشخيص التسعير والمبيعات الحالية',
          desc: 'فحص مالي شامل لتكاليف المنتجات، قنوات البيع الحالية، شروط الموزعين، وتعارضات الأسعار في أسواق الجملة والتخفيضات.',
          keyOutcome: 'تقرير التدقيق المالي ومصفوفة المخاطر',
        },
        {
          num: '02',
          title: 'تصميم هيكل العلامة والتسعير',
          desc: 'بناء هيكل التسعير العكسي انطلاقاً من السعر المستهدف على الرف، وتقييم إطلاق علامة مخصصة لقطاع التجزئة.',
          keyOutcome: 'مصفوفة التسعير العكسي ومعمارية العلامة',
        },
        {
          num: '03',
          title: 'اختيار منتجات البطل سريعة الحركة',
          desc: 'تحديد أفضل 3 إلى 4 منتجات ذات إقبال استهلاكي مثبت، ملاءمة للتعبئة، وهوامش ربحية صحية.',
          keyOutcome: 'محفظة منتجات البطل للمرحلة الأولى',
        },
        {
          num: '04',
          title: 'دخول حسابات المرحلة الأولى ذات الأولوية',
          desc: 'بدء المفاوضات التجارية والإدراج في الجمعيات الميسرة (جمعية عجمان، جمعية الشارقة، الأسواق الوطنية).',
          keyOutcome: 'الإدراج التجاري الأولي والعرض على الرفوف',
        },
        {
          num: '05',
          title: 'التوسع نحو سلاسل المستوى الثاني والثالث',
          desc: 'التوسع في جمعية الإمارات، جمعية الاتحاد، جمعيات أبوظبي، المايا، ثم لاحقاً اللولو وكارفور وسبينس.',
          keyOutcome: 'توزيع شامل في التجزئة الحديثة على مستوى الإمارات',
        },
        {
          num: '06',
          title: 'توسيع التجارة الإلكترونية والتوصيل السريع',
          desc: 'دمج أمازون FBA، نون FBN، طلبات مارت، وكريم كويك للاستفادة من دورات التحصيل السريعة خلال 14 يوماً.',
          keyOutcome: 'تكامل القنوات وتدفق نقدي قوي ومستدام',
        },
      ],
    },
    caseStudyHighlight: {
      tag: 'دراسة حالة استراتيجية مميزة',
      title: 'السعد روز: استراتيجية دخول التجزئة الحديثة ومحطات البترول',
      subtitle: 'خطة عمل الربع الرابع 2026 – 2027: نموذج عمل متكامل لحماية الهوامش والتدفق النقدي.',
      badge: 'دراسة حالة استراتيجية واقعية',
      client: 'السعد روز (Al Saad Rose)',
      period: 'تنفيذ الربع الرابع 2026 – 2027',
      summary:
        'خريطة طريق تجارية متكاملة صممت لنقل الصابون الطبيعي ومنتجات العناية الشخصية إلى قطاع التجزئة الحديث في الإمارات، ومتاجر محطات الوقود، والمنصات الرقمية.',
      bullets: [
        'مفاهيم علامات مخصصة للتجزئة الحديثة: AROVIA و ZENVAYA',
        'منتجات البطل للمرحلة الأولى: صابون الورد، صابون العنبر والعود، صابون حليب الإبل، وصابون الحمام التركي (110 جم)',
        'توسع تجزئة على 3 مراحل: الجمعيات الميسرة أولاً، ثم الجمعيات الكبرى، ثم الهايبرماركت',
        'اختراق قنوات الشراء اللحظي: معطرات السيارات وعطور 50 مل في محطات الوقود',
        'نموذج التعاقد التجاري: شهر تجربة، أتعاب 5,000 درهم شهرياً، 5% عمولة تحصيل، و2% مكافأة أهداف',
      ],
      cta: 'عرض دراسة الحالة ونموذج الاستراتيجية كاملاً',
    },
    ctaBanner: {
      title: 'هل تخطط لدخول قطاع التجزئة الحديث؟',
      body: 'دعنا نبني لك نموذج التسعير العكسي، محفظة المنتجات، ترتيب الحسابات، ودورة التدفق النقدي قبل الالتزام برأس المال في رسوم الإدراج.',
      button: 'اطلب استشارة استراتيجية',
      secondaryButton: 'جرّب حاسبة التسعير العكسي',
    },
    about: {
      tag: 'عن MASCO',
      title: 'خبرة تنفيذية. انضباط تجاري.',
      subtitle: 'بيت استشارات متخصص في السلع الاستهلاكية (FMCG) يجمع بين التخطيط الاستراتيجي الرفيع والتنفيذ التجاري الميداني.',
      introLead:
        'تقدم MASCO نفسها كفريق من الخبراء والمديرين التنفيذيين في قطاع السلع الاستهلاكية، يصمم وينفذ استراتيجيات تسعير B2B متكاملة لحماية أرباح الشركاء.',
      introBody:
        'على عكس الاستشارات النظرية، تنطلق MASCO من واقع سوق التجزئة في الخليج. ندرك أن النجاح في التجزئة الحديثة لا يتطلب منتجاً ممتازاً فحسب، بل يتطلب حسابات رياضية دقيقة للهوامش، معمارية علامة واقية، تدفقاً نقدياً مرحلياً، ومفاوضات احترافية مع مديري الفئات.',
      threePillarsTitle: 'ركائزنا الاستراتيجية الثلاث',
      pillars: [
        {
          title: 'القيادة والخبرة في السلع الاستهلاكية',
          desc: 'خبرة تجارية تنفيذية متقدمة في تصميم استراتيجيات تسعير B2B المتكاملة واقتصاديات قنوات التوزيع وهياكل هوامش التجزئة.',
          highlights: ['عقود من الخبرة التراكمية في أسواق الخليج', 'منهجيات تسعير عكسي دقيقة ومثبتة', 'استشارات تنفيذية لمجالس الإدارة'],
        },
        {
          title: 'فريق عمل تجاري متكامل',
          desc: 'قدرات تنفيذية متكاملة تشمل إدارة الحسابات الكبرى، التسويق التجاري داخل المتاجر، والتحليل المالي الدقيق للمبيعات.',
          highlights: ['أخصائيو إدراج ومفاوضات الحسابات الكبرى', 'مصممو التسويق التجاري ومواقع العرض', 'محللو السيولة النقدية والمبيعات'],
        },
        {
          title: 'بصمة إقليمية وشبكة علاقات',
          desc: 'سجل استراتيجي ومعرفة تشغيلية واسعة في أسواق الإمارات العربية المتحدة، المملكة العربية السعودية، وجمهورية مصر العربية.',
          highlights: ['الإمارات العربية المتحدة (UAE)', 'المملكة العربية السعودية (KSA)', 'جمهورية مصر العربية (EGY)'],
        },
      ],
      regionalTitle: 'البصمة الإقليمية والأسواق المستهدفة',
      regionalSubtitle: 'تقدم MASCO استشاراتها الاستراتيجية عبر ثلاثة من أهم الأسواق الاستهلاكية في المنطقة.',
      markets: [
        {
          country: 'الإمارات العربية المتحدة',
          code: 'UAE',
          channels: 'الجمعيات التعاونية (الاتحاد، الشارقة، عجمان، أبوظبي)، الهايبرماركت (اللولو، كارفور، سبينس)، محطات البترول (أدنوك، إينوك، إمارات)، وأمازون ونون.',
          status: 'المركز الرئيسي',
          focus: 'تجزئة حديثة عالية الهوامش، شراء لحظي في محطات الوقود، والمتاجر المظلمة السريعة.',
        },
        {
          country: 'المملكة العربية السعودية',
          code: 'KSA',
          channels: 'بنده، العثيم، بن داود، الدانوب، اللولو السعودية، التميمي، محطات ساسكو، أمازون ونون السعودية.',
          status: 'سوق التوسع',
          focus: 'حجم مبيعات استهلاكي ضخم، مواءمة الموزعين الإقليميين، وشبكات الصيدليات الحديثة.',
        },
        {
          country: 'جمهورية مصر العربية',
          code: 'EGY',
          channels: 'كارفور مصر، سبينس مصر، هايبر وان، مترو، سعودي، السلاسل المحلية، وأمازون ونون مصر.',
          status: 'سوق استراتيجي',
          focus: 'قاعدة تصنيع وسلاسل إمداد تنافسية التكلفة، توزيع واسع، وتعبئة اقتصادية القيمة.',
        },
      ],
      governanceTitle: 'الانضباط التجاري والمصداقية الواقعية',
      governanceBody:
        'في MASCO، نستند دائماً إلى أرقام السوق القابلة للتحقق، وجدوى قنوات التوزيع، ومعايير المشترين الواقعية. لا نقدم وعوداً مبالغاً فيها بمبيعات مضمونة، بل نبني الهياكل التجارية المنضبطة التي تجعل إدراج المنتجات مجدياً ومربحاً ومستداماً.',
    },
    servicesPage: {
      tag: 'مجالات الخبرة',
      title: 'خدمات استشارية متكاملة لقطاع السلع الاستهلاكية',
      subtitle: 'استكشف ممارساتنا الاستشارية الخمس المصممة لحماية الهوامش وتسريع التوسع التجاري المربح.',
      serviceList: [
        {
          id: 'modern-trade-entry',
          category: 'التوسع التجاري',
          title: 'دخول قطاع التجزئة الحديث',
          summary: 'خطة عمل متسلسلة ومرحلية لدخول الهايبرماركت والجمعيات دون ضغوط مالية.',
          whyCrucial: 'دخول التجزئة الحديثة دون جاهزية يتسبب في رسوم إدراج مهدرة ومخزون راكد وأضرار بسمعة العلامة.',
          deliverables: [
            'دراسة جدوى دخول التجزئة وفجوات الفئات',
            'ترتيب أولوية الحسابات (المرحلة 1 و 2 و 3)',
            'دعم مفاوضات رسوم الإدراج (Listing Fees)',
            'هيكلة الشروط التجارية وعقود دورات السداد',
            'خطة التوريد المرحلي وتدفقات إعادة الطلب',
          ],
          methodology: 'نقيم العلامة مقارنة بالمنافسين، نهيكل الشروط التجارية، ونقود المفاوضات حساباً بحساب.',
          metricsFocus: 'نسبة قبول الإدراج • خفض رسوم الإدراج • سرعة الطلب الأولي',
        },
        {
          id: 'pricing-margin-architecture',
          category: 'الاستراتيجية المالية',
          title: 'هيكلة التسعير والهوامش (التسعير العكسي)',
          summary: 'نمذجة رياضية تحسب سعر الجملة بالرجوع إلى الخلف من سعر الرف المستهدف للمستهلك.',
          whyCrucial: 'يفشل التسعير التقليدي القائم على التكلفة في التجزئة الحديثة لتجاهله هوامش المتاجر وبدلات الترويج.',
          deliverables: [
            'تحديد السعر المستهدف للمستهلك على الرف',
            'نمذجة هوامش التجزئة المستهدفة (35% إلى 45%)',
            'تخصيص احتياطي الخصومات الترويجية (10% إلى 15%)',
            'نمذجة إهلاك رسوم الجندولا والإدراج',
            'حساب سعر الجملة المحمي للعلامة التجارية',
          ],
          methodology: 'نبدأ من سعر الرف النهائي ونخصم كافة اقتطاعات المتاجر وهوامشها للوصول لسعر الجملة المستدام.',
          metricsFocus: 'حماية الهامش الإجمالي • التزام السعر على الرف • مساهمة العروض',
        },
        {
          id: 'key-accounts-trade-marketing',
          category: 'التنفيذ التجاري',
          title: 'إدارة الحسابات الكبرى والتسويق التجاري',
          summary: 'تمثيل تجاري مباشر، توافق مع مديري الفئات، وعرض بصري عالي التأثير على الرفوف.',
          whyCrucial: 'الإدراج على الرف يمثل 20% فقط من المعركة؛ استمرار دوران المنتج وإدارة العلاقات تمثل النسبة الباقية.',
          deliverables: [
            'استراتيجية نمو الحسابات الكبرى (جمعية الاتحاد، الشارقة، اللولو، كارفور)',
            'تصميم التقويم الترويجي السنوي وإدارة الهوامش',
            'اتفاقيات مواقع الجندولا والعرض في مستوى العين',
            'حوكمة الخصومات السنوية (Rebates) ومكافآت الأهداف',
            'إرشادات العرض البصري ومواد نقطة البيع (POS)',
          ],
          methodology: 'نتواصل مباشرة مع مسؤولي المشتريات، نخطط لعروض عالية التحويل، ونضمن مواقع عرض مميزة.',
          metricsFocus: 'التوفر على الرف • رفع معدل البيع الفعلي • عائد الاستثمار الترويجي',
        },
        {
          id: 'sales-financial-analysis',
          category: 'البيانات والتحليل',
          title: 'التحليل المالي والمبيعات',
          summary: 'متابعة دقيقة لمعدلات دوران المنتجات، أعمار الذمم المدينة، ومخاطر رأس المال العامل.',
          whyCrucial: 'تحدث أزمات السيولة عندما يجمد المخزون الراكد رأس المال بينما تتأخر تحصيلات المبيعات.',
          deliverables: [
            'تصنيف حركة ودوران المنتجات (سريعة مقابل بطيئة)',
            'تشخيص تجميد رأس المال ومخاطر التدفق النقدي',
            'تحليل أعمار دورات السداد (14 يوماً رقمي مقابل 90 يوماً تجزئة)',
            'حساب العائد على الاستثمار (ROI) لكل سلسلة وعرض ترويجي',
            'نماذج التنبؤ بإعادة الطلب وتفادي نفاد المخزون',
          ],
          methodology: 'نحلل بيانات البيع الفعلي اليومي ودوران المخزون وسندات التحصيل لرصد أي تآكل في الهوامش فوراً.',
          metricsFocus: 'أيام دوران المخزون • متوسط فترة التحصيل (DSO) • ربحية الصنف',
        },
        {
          id: 'ecommerce-quick-commerce',
          category: 'القنوات الرقمية',
          title: 'التجارة الإلكترونية والتوصيل السريع',
          summary: 'استثمار المنصات الرقمية والمتاجر المظلمة سريعة الدوران لتسريع حركة العلامة وتأمين سيولة سريعة.',
          whyCrucial: 'توفر القنوات الرقمية دورات تحصيل سريعة خلال 14 يوماً، تحكماً أفضل في الأسعار، وآراء فورية للعملاء.',
          deliverables: [
            'تأسيس وتحسين متاجر أمازون FBA ونون FBN',
            'التكامل مع منصات التوصيل السريع (إنستاشوب، كريم كويك، طلبات مارت)',
            'تحديد باقات منتجات البطل الرقمية المخصصة',
            'نمذجة التدفق النقدي الرقمي السريع لتمويل مخزون التجزئة',
            'تسريع تقييمات العملاء وبناء الزخم الرقمي للعلامة',
          ],
          methodology: 'نوزع المخزون في مستودعات أمازون FBA ومتاجر التوصيل السريع لجذب المشترين اللحظيين بدورة تحصيل أسبوعية.',
          metricsFocus: 'حصة صندوق الشراء الرقمي • التدفق النقدي الأسبوعي • سرعة المتاجر المظلمة',
        },
      ],
    },
    marketEntryPage: {
      tag: 'المنهجية العلمية',
      title: 'استراتيجية دخول قطاع التجزئة والتسعير',
      subtitle: 'كيف تحمي MASCO ربحية العلامات عبر التسعير العكسي، التوسع المرحلي، وقنوات الشراء اللحظي في محطات الوقود.',
      warningTitle: 'لماذا يفشل تسعير أسواق التخفيضات في سلاسل الهايبرماركت؟',
      warningSubtitle: 'تحذير استراتيجي هام لأصحاب العلامات التجارية قبل التوسع في التجزئة الحديثة.',
      warningPoints: [
        {
          title: 'تعارض الأسعار ورفض المشترين',
          desc: 'تدقق كبرى سلاسل الهايبرماركت أسواق التخفيضات باستمرار. وإذا رصدت بيع منتجك بـ 12 درهماً في سوق الجملة، سترفض تسعيرك المقترح بـ 25 درهماً على رفوفها.',
        },
        {
          title: 'استنزاف الهوامش بالرسوم غير المحسوبة',
          desc: 'رسوم إدراج كل صنف، بدل المساحات الإضافية، الخصومات السنوية (Rebates)، وبدلات الجندولا قد تلتهم 40% إلى 50% من إيراداتك إذا لم تُحسب مسبقاً.',
        },
        {
          title: 'تجميد رأس المال في أصناف راكدة',
          desc: 'إدراج 20 صنفاً دفعة واحدة يؤدي لركود الأصناف البطيئة على الرف. تفرض المتاجر غرامات على ضعف الدوران وتخصم قيمة البضاعة المرتجعة من مستحقاتك.',
        },
        {
          title: 'ضغوط سيولة حادة بفعل سداد 90 يوماً',
          desc: 'تتطلب التجزئة الحديثة تكاليف تصنيع مدفوعة مقدماً، بينما تتأخر التحصيلات من 60 إلى 90+ يوماً، مما يسبب أزمات سيولة خانقة.',
        },
      ],
      calculatorTitle: 'حاسبة التسعير العكسي التفاعلية',
      calculatorSubtitle: 'جرب بنفسك النموذج الرياضي الذي تعتمده MASCO لحساب سعر الجملة المستدام انطلاقاً من سعر الرف للمستهلك.',
      calculatorLabels: {
        shelfPrice: 'سعر الرف المستهدف للمستهلك (درهم)',
        retailMargin: 'هامش ربح متجر التجزئة (%)',
        promoAllowance: 'ميزانية العروض والتسويق التجاري (%)',
        commercialCosts: 'رسوم تجارية أخرى وإهلاك الإدراج (%)',
        cogsCost: 'تكلفة تصنيع / إنتاج الوحدة (درهم)',
        wholesalePrice: 'سعر الجملة المحسوب المستهدف للعلامة',
        brandGrossProfit: 'صافي ربح العلامة للوحدة',
        grossMarginPercent: 'نسبة هامش ربح العلامة (%)',
        shelfPriceBreakdown: 'توزيع شلال درهم سعر الرف',
        retailerCut: 'حصة هامش متجر التجزئة',
        promoReserve: 'احتياطي الخصومات الترويجية',
        otherFees: 'احتياطي الرسوم التجارية والإدراج',
        brandNetWholesale: 'صافي إيراد الجملة للعلامة',
        cogsSlice: 'تكلفة إنتاج الوحدة (COGS)',
        brandNetProfit: 'صافي أرباح العلامة المتبقية',
        resetDefaults: 'استعادة القيم الافتراضية لخطة العمل (25 درهماً / 40% هامش تجزئة)',
        hypermarketPreset: 'نموذج: هايبرماركت قياسي (هامش 40%)',
        coopPreset: 'نموذج: جمعية تعاونية (هامش 35%)',
        petrolPreset: 'نموذج: محطة بترول (هامش 45%)',
        note: 'القيم الافتراضية مبنية على خطة عمل الربع الرابع 2026–2027: سعر رف مستهدف 25 درهماً وهامش تجزئة تقريبي 40%.',
      },
      phasedTitle: 'استراتيجية التوسع المرحلي',
      phasedSubtitle: 'نرتب الحسابات على 3 مراحل لاختبار سرعة دوران المنتجات، حماية السيولة، وتفادي أعباء رسوم الإدراج المبكرة.',
      phases: [
        {
          phaseNumber: 1,
          phaseLabel: 'المرحلة 1: الجمعيات التعاونية والأسواق الوطنية',
          targetAccounts: ['جمعية عجمان التعاونية', 'جمعية الشارقة التعاونية', 'الأسواق الوطنية'],
          strategy: 'أعباء مالية منخفضة، رسوم إدراج ميسرة، اختبار محلي لسرعة السحب، وتأكيد فوري لحجم المبيعات.',
          riskLevel: 'مخاطر مالية منخفضة جداً',
          timeline: 'دخول أولي في الربع الرابع 2026',
          purpose: 'تقليل العبء المالي المسبق، اختبار سرعة البيع الفعلي، وتوليد إثبات دوران المخزون دون تكاليف إدراج باهظة.',
        },
        {
          phaseNumber: 2,
          phaseLabel: 'المرحلة 2: الجمعيات الكبرى والمجموعات الاستهلاكية',
          targetAccounts: ['جمعية الإمارات التعاونية', 'جمعية الاتحاد التعاونية', 'جمعيات أبوظبي التعاونية', 'مجموعة المايا'],
          strategy: 'توسع مدروس في المناطق السكانية الكبرى بالاستناد إلى بيانات سرعة البيع في المرحلة الأولى للتفاوض بشروط أفضل.',
          riskLevel: 'توسع مدروس متوسط الحجم',
          timeline: 'تنفيذ خلال الربع الأول – الثاني 2027',
          purpose: 'توسيع الانتشار في التجمعات السكانية الكبرى بعد إثبات سرعة الدوران وطلب التوريد المستمر في المرحلة الأولى.',
        },
        {
          phaseNumber: 3,
          phaseLabel: 'المرحلة 3: عمالقة الهايبرماركت الإقليميون',
          targetAccounts: ['هايبرماركت اللولو', 'كارفور (ماجد الفطيم)', 'سبينس / ويتروز'],
          strategy: 'إدراج واسع النطاق يُفاوض عليه فقط بعد استقرار التدفق النقدي، قوة رأس المال العامل، وإثبات جاذبية المنتج.',
          riskLevel: 'توسع استراتيجي شامل',
          timeline: 'توسع في الربع الثالث – الرابع 2027',
          purpose: 'دخول كبرى مجموعات الهايبرماركت فقط بعد ضمان استقرار السيولة النقدية، رسوخ العلامة، وتوفر رأس مال عامل كافٍ.',
        },
      ],
      petrolTitle: 'استراتيجية متاجر محطات الوقود (الشراء اللحظي)',
      petrolSubtitle: 'الاستفادة من هوامش الشراء اللحظي المرتفعة في متاجر محطات الوقود ذات الكثافة العالية في الإمارات.',
      petrolConcept: 'سيكولوجية الشراء اللحظي السريع',
      petrolBody:
        'تمثل متاجر محطات الوقود (أدنوك واحة، إينوك زووم، إمارات بلس) موقعاً تجارياً ذهبياً لمنتجات السلع الاستهلاكية المدمجة وعالية الهوامش. يتخذ المتسوقون قرارات شراء لحظية عند كاونتر الدفع دون حساسية مفرطة للسعر.',
      petrolCategories: [
        {
          title: 'معطرات السيارات الفاخرة',
          specs: 'معطرات جو مدمجة راقية، روائح عود وعنبر وهيل، عبوات تعليق وتثبيت على فتحات التكييف.',
          impulseFactor: 'ارتباط فوري مباشر: يفضل السائقون تجديد رائحة سياراتهم أثناء التزود بالوقود.',
        },
        {
          title: 'عطور الجيب وسفرات 50 مل',
          specs: 'نقاط سعر جذابة وميسرة (25 – 45 درهماً)، زجاجات 50 مل مريحة للتنقل بتشطيبات فاخرة.',
          impulseFactor: 'شراء لحظي للهدايا والانتعاش السريع: تواجد دائم على كاونترات الدفع.',
        },
      ],
    },
    ecommercePage: {
      tag: 'التسارع الرقمي',
      title: 'التجارة الإلكترونية ودورات التدفق النقدي',
      subtitle: 'كيف توفر أمازون ونون والمتاجر المظلمة دورة تحصيل سريعة كل 14 يوماً لتمويل توسع التجزئة الحديثة.',
      platformsTitle: 'المنصات الرقمية الأساسية',
      platformsSubtitle: 'الاستفادة من البنية التحتية اللوجستية لضمان سرعة التوصيل وموثوقية ثقة العملاء.',
      platforms: [
        {
          name: 'أمازون الإمارات والسعودية',
          model: 'الشحن بواسطة أمازون (Amazon FBA)',
          benefit: 'شارة التوصيل Prime، أولوية صندوق الشراء (Buy-Box)، ونظام تقييمات موثوق.',
          strategy: 'توزيع منتجات البطل في مستودعات أمازون FBA لجذب عمليات البحث المباشرة والاشتراكات المتكررة.',
        },
        {
          name: 'نون دوت كوم (الإمارات والسعودية)',
          model: 'التوصيل بواسطة نون (Noon FBN)',
          benefit: 'شارة Noon Express، حملات تسويقية إقليمية ضخمة، وولاء واسع لدى المتسوقين في الخليج.',
          strategy: 'استثمار عروض الجمعة الصفراء والمواسم الترويجية الكبرى لتحقيق دوران بيعي سريع.',
        },
      ],
      cashFlowTitle: 'دورات نقدية رقمية سريعة: 14 يوماً مقابل 90 يوماً',
      cashFlowSubtitle: 'موازنة التحصيلات الرقمية نصف الشهرية مع آجال السداد الطويلة لقطاع التجزئة.',
      cashFlowExplanation:
        'وفق نموذجنا التجاري، تقوم قنوات التجارة الإلكترونية والتوصيل السريع بصرف عوائد المبيعات خلال دورة تقارب 14 يوماً، مما يولد سيولة نقدية فورية تمتص فجوة السداد التي تمتد من 60 إلى 90 يوماً في الهايبرماركت.',
      cashFlowDisclaimer:
        '*ملاحظة: تمثل أرقام دورات الدفع افتراضات مقترحة في خطة العمل ومؤشرات استرشادية للقنوات، وليست شروطاً قانونية موحدة.',
      cashFlowDaysLabel: 'دورة تحصيل المبيعات (بالأيام)',
      digitalCycleLabel: 'التجارة الرقمية والتوصيل السريع (~14 يوماً)',
      hypermarketCycleLabel: 'الهايبرماركت الكبرى (~90 يوماً)',
      cashCycleComparison: [
        {
          channel: 'أمازون FBA / نون FBN',
          turnaroundDays: 14,
          cashVelocity: 'سريعة جداً (تحصيل نصف شهري)',
          inventoryRisk: 'منخفضة (مخزون أمان محكم)',
          payoutFrequency: 'كل 7 – 14 يوماً',
        },
        {
          channel: 'التوصيل السريع (طلبات / كريم)',
          turnaroundDays: 14,
          cashVelocity: 'سريعة جداً (تسوية أسبوعية/نصف شهرية)',
          inventoryRisk: 'منخفضة جداً (طلبيات مجدولة للمتاجر المظلمة)',
          payoutFrequency: 'كل 14 يوماً',
        },
        {
          channel: 'الجمعيات التعاونية (المستوى 1)',
          turnaroundDays: 45,
          cashVelocity: 'متوسطة (شروط ائتمان جمعيات قياسية)',
          inventoryRisk: 'متوسطة (أوامر توريد ائتمانية)',
          payoutFrequency: 'كشف حساب شهري',
        },
        {
          channel: 'الهايبرماركت الكبرى (اللولو / كارفور)',
          turnaroundDays: 90,
          cashVelocity: 'بطيئة (شروط دفع مؤسسية ممتدة)',
          inventoryRisk: 'عالية (مخاطر إدراج ومردودات)',
          payoutFrequency: '60 – 90 يوماً بعد الفاتورة',
        },
      ],
      quickCommerceTitle: 'استراتيجية التجارة السريعة والمتاجر المظلمة',
      quickCommerceSubtitle: 'إيصال منتجات البطل للمستهلك في أقل من 20 دقيقة عبر المدن الرئيسية.',
      quickCommerceBody:
        'تدير منصات التوصيل السريع شبكة مراكز توزيع مصغرة (Dark Stores) داخل الأحياء الحيوية. إدراج منتجات البطل في هذه المراكز يضمن توفرها الفوري لطلبات المستهلكين العاجلة.',
      quickCommercePlatforms: [
        {
          name: 'إنستاشوب (InstaShop)',
          service: 'توصيل فوري من محلات السوبرماركت',
          focus: 'ربط مخزون المتاجر المحلية بالمتسوقين في المجمعات السكنية الراقية.',
        },
        {
          name: 'كريم كويك (Careem Quik)',
          service: 'بقالة ومستلزمات في 15 دقيقة',
          focus: 'منتجات العناية الشخصية اللحظية ومستلزمات النظافة من المتاجر المظلمة.',
        },
        {
          name: 'طلبات مارت (Talabat Mart)',
          service: 'شبكة متاجر مظلمة على مدار الساعة',
          focus: 'تلبية الطلبات المنزلية اليومية بتغطية جغرافية شاملة لكافة إمارات الدولة.',
        },
      ],
    },
    partnersPage: {
      tag: 'شبكتنا الإقليمية',
      title: 'منظومة قنوات التوزيع وحضورنا الإقليمي',
      subtitle: 'علاقات تجارية استراتيجية في أسواق الإمارات العربية المتحدة، المملكة العربية السعودية، وجمهورية مصر العربية.',
      regionalPresenceTitle: 'ثلاثة أسواق رئيسية للنمو',
      partnerEcosystemTitle: 'منظومة قنوات التجزئة والتوزيع المستهدفة',
      partnerEcosystemSubtitle: 'قنوات التجزئة، الجمعيات التعاونية، الهايبرماركت، والمنصات الرقمية التي نتعامل معها لصالح عملائنا.',
      categories: [
        {
          categoryName: 'الجمعيات التعاونية في الإمارات',
          description: 'مؤسسات تجزئة مجتمعية عريقة تتمتع بولاء محلي مرتفع وشروط دخول ميسرة.',
          channels: ['جمعية الاتحاد التعاونية', 'جمعية الشارقة التعاونية', 'جمعية أسواق عجمان التعاونية', 'جمعية الإمارات التعاونية', 'جمعية أبوظبي التعاونية', 'مجموعة المايا'],
        },
        {
          categoryName: 'سلاسل الهايبرماركت الإقليمية الكبرى',
          description: 'عمالقة التجزئة ذوو الحجم البيعي الضخم وشبكات الفروع المنتشرة في الخليج.',
          channels: ['هايبرماركت اللولو', 'كارفور (ماجد الفطيم)', 'سبينس', 'ويتروز', 'بنده (السعودية)', 'أسواق العثيم (السعودية)', 'هايبر وان (مصر)'],
        },
        {
          categoryName: 'شبكات متاجر محطات الوقود',
          description: 'نقاط بيع لحظية عالية الهوامش موزعة على مسارات التنقل الحيوية.',
          channels: ['أدنوك واحة (الإمارات)', 'إينوك / إيبكو زووم (الإمارات)', 'إمارات بلس (الإمارات)', 'ساسكو نخلة (السعودية)'],
        },
        {
          categoryName: 'منصات التجارة الرقمية والتوصيل السريع',
          description: 'قنوات بيع رقمية عالية السرعة تحقق دورات تحصيل سريعة كل 14 يوماً.',
          channels: ['أمازون الإمارات والسعودية', 'نون دوت كوم (الإمارات والسعودية)', 'طلبات مارت', 'كريم كويك', 'إنستاشوب'],
        },
      ],
      philosophyTitle: 'فلسفتنا في الشراكة التجارية',
      philosophyBody:
        'تعمل MASCO كشريك استراتيجي تنفيذي محايد. نتعاون مباشرة مع أصحاب العلامات التجارية والمصنعين والموزعين لبناء علاقات تجارية عادلة ومربحة ومستدامة مع مديري فئات التجزئة.',
      disclaimer:
        'ملاحظة: تعكس أسماء المتاجر والمنصات المنظومة التجارية المستهدفة الموضحة في خطة عمل الربع الرابع 2026–2027. جميع الشعارات والعلامات التجارية ملك لأصحابها الرسميين.',
    },
    caseStudyPage: {
      tag: 'دراسة حالة مميزة',
      title: 'السعد روز: استراتيجية دخول التجزئة الحديثة ومحطات الوقود',
      subtitle: 'خطة عمل الربع الرابع 2026 – 2027: دراسة حالة تنفيذية في التسعير العكسي، معمارية العلامة المخصصة، والتوسع المرحلي في التجزئة.',
      clientName: 'السعد روز (Al Saad Rose)',
      period: 'خطة استراتيجية للربع الرابع 2026 – 2027',
      status: 'مقترح استراتيجي ومخطط تنفيذي معتمد',
      contextTitle: 'السياق التنفيذي والتحدي التجاري',
      contextBody:
        'سعت شركة السعد روز، المتخصصة في تصنيع الصابون الطبيعي الفاخر ومنتجات العناية، إلى التوسع خارج أسواق الجملة والتخفيضات التقليدية نحو قطاع التجزئة الحديث في الإمارات (الهايبرماركت، الجمعيات، ومحطات الوقود). التحدي الأساسي: دخول التجزئة الحديثة دون إشعال تعارضات سعرية مع أسواق التخفيضات ودون استنزاف الأرباح في رسوم الإدراج وآجال السداد الممتدة.',
      brandConceptsTitle: 'مفاهيم العلامات المخصصة المقترحة',
      brandConceptsSubtitle: 'فصل قنوات البيع بين أسواق التخفيضات وقطاع التجزئة الحديث.',
      brandConceptsNote:
        '*تنبيه هام: تعد أسماء AROVIA و ZENVAYA مفاهيم مقترحة في خطة العمل لتوضيح فكرة فصل القنوات، وليست علامات تجارية نهائية مسجلة.',
      brandConcepts: [
        {
          name: 'AROVIA',
          positioning: 'أناقة نباتية وفخامة يومية',
          channelFocus: 'الجمعيات التعاونية والهايبرماركت الحديث',
          aesthetic: 'تغليف فاخر بطابع أوروبي أنيق، طباعة ذهبية بارزة، ورسومات نباتية طبيعية.',
        },
        {
          name: 'ZENVAYA',
          positioning: 'عناية شمولية وعلاج عطري نقي',
          channelFocus: 'متاجر محطات الوقود، التجارة الإلكترونية، والصيدليات',
          aesthetic: 'تصميم عضوي بسيط (Minimalist)، ألوان هادئة، وأغلفة ورقية فاخرة الملمس.',
        },
      ],
      heroSkusTitle: 'منتجات البطل للمرحلة الأولى (أصناف الصابون سريعة الحركة)',
      heroSkusSubtitle: 'التركيز على 4 أصناف عالية الدوران لضمان استمرار إعادة التوريد وتفادي تجميد السيولة.',
      heroSkusRationale:
        'بدلاً من إدراج قائمة عريضة تضم 20 صنفاً، حددت MASCO أربعة منتجات بطل تمثل 80% من جاذبية المتسوقين في فئة العناية الشخصية. يقلل هذا التركيز من تكاليف رسوم الإدراج ويضمن سرعة السحب الفوري من الرف.',
      heroSkus: [
        {
          skuCode: 'الصنف 01',
          name: 'صابون الورد (SOAP T. ROSE)',
          weight: '110 جم',
          category: 'عناية نباتية فاخرة',
          keyAttributes: 'خلاصات الورد الجوري الطبيعي، ترطيب فائق، وعطر زهري منعش.',
          velocityRationale: 'منتج واسع الانتشار والإقبال اليومي في الاستهلاك المنزلي المتكرر.',
        },
        {
          skuCode: 'الصنف 02',
          name: 'صابون العنبر والعود (SOAP AMBER OUD)',
          weight: '110 جم',
          category: 'عناية شرقية راقية',
          keyAttributes: 'راتنج العنبر الدافئ، نفحات العود المعتق، وتركيبة غنية ومغذية للبشرة.',
          velocityRationale: 'إقبال ثقافي وثيق لدى المستهلك الخليجي وجاذبية عالية للشراء كإهداء.',
        },
        {
          skuCode: 'الصنف 03',
          name: 'صابون حليب الإبل (SOAP CAMEL MILK)',
          weight: '110 جم',
          category: 'عناية تراثية أصيلة',
          keyAttributes: 'فيتامينات حليب الإبل الطبيعي، معادن مغذية، وترطيب عميق للبشرة الحساسة.',
          velocityRationale: 'طلب سياحي ومحلي مرتفع كمنتج تراثي خليجي فريد القيمة.',
        },
        {
          skuCode: 'الصنف 04',
          name: 'صابون الحمام التركي (SOAP T. HAMMAM)',
          weight: '110 جم',
          category: 'عناية واستجمام (Spa)',
          keyAttributes: 'وصفة الحمام التركي التقليدية، زيت الأوكالبتوس المنعش، وطين طبيعي منقٍ.',
          velocityRationale: 'نمو متسارع في ثقافة الاستجمام المنزلي ومنتج مثالي لزيادة قيمة سلة المشتريات.',
        },
      ],
      commercialModelTitle: 'نموذج التعاقد والشراكة التجارية',
      commercialModelSubtitle: 'مواءمة الحوافز الاستشارية مع النجاح التجاري الفعلي وتحصيل السيولة دون مخاطر مسبقة.',
      commercialModelNote:
        'يربط هذا الهيكل التعاقدي المعتمد في خطة العمل بين أتعاب الاستشارة وحجم التحصيلات النقدية الفعلية من السوق.',
      commercialModelItems: [
        {
          label: 'فترة التجربة المشتركة',
          value: 'سبتمبر 2026',
          timing: 'الشهر الأول للتقييم',
          detail: 'أعمال التقييم والتشخيص والتجربة الأولية دون أي مقابل مالي.',
          benefit: 'صفر مخاطر مالية على العلامة أثناء صياغة الاستراتيجية الأولية وتدقيق الجدوى.',
        },
        {
          label: 'الأتعاب الشهرية الثابتة',
          value: '5,000 درهم / شهرياً',
          timing: 'يبدأ من 1 أكتوبر',
          detail: 'تُدفع مقدماً لتغطية التكاليف التشغيلية ومتابعة الحسابات والتفاوض مع المشتريات.',
          benefit: 'فريق استشاري تنفيذي مخصص يدير المفاوضات التجارية اليومية مع المتاجر.',
        },
        {
          label: 'عمولة التحصيل الفعلي',
          value: '5% من التحصيل الفعلي',
          timing: 'تسوية شهرية مستمرة',
          detail: 'تُطبق حصراً على المبالغ النقدية المحصلة فعلياً من أسواق التجزئة والقنوات الرقمية.',
          benefit: 'ترتبط العمولة بالأموال المودعة في الحساب البنكي وليس بالمبيعات النظرية في الفواتير.',
        },
        {
          label: 'مكافأة تحقيق الأهداف السنوية',
          value: '2% مكافأة سنوية',
          timing: 'عند إنجاز الهدف السنوي',
          detail: 'تُطبق على إجمالي التحصيل السنوي عند تحقيق المستهدفات التجارية المتفق عليها.',
          benefit: 'حافز استراتيجي لبناء قيمة العلامة وضمان وتيرة التوريد المستمر على المدى الطويل.',
        },
      ],
      nextStepsTitle: 'خريطة الخطوات التنفيذية القادمة',
      nextSteps: [
        {
          step: 1,
          title: 'اعتماد الهيكل التجاري والمالي',
          desc: 'الموافقة الرسمية على نموذج التسعير العكسي، هوامش التجزئة المعتمدة، وقائمة منتجات البطل.',
        },
        {
          step: 2,
          title: 'توقيع اتفاقية الشراكة وتصميم الهوية',
          desc: 'توقيع عقد الشراكة التجارية والبدء الفوري في تصميم الهوية البصرية للعلامة المخصصة للتجزئة الحديثة.',
        },
        {
          step: 3,
          title: 'إطلاق مفاوضات المرحلة الأولى',
          desc: 'بدء اجتماعات الإدراج والمفاوضات التجارية مع حسابات المرحلة الأولى (جمعية عجمان، الشارقة، والأسواق الوطنية).',
        },
      ],
    },
    contactPage: {
      tag: 'تواصل معنا',
      title: 'طلب استشارة تجارية تنفيذية',
      subtitle: 'ناقش استراتيجية دخول التجزئة الحديثة، التسعير العكسي، أو توسع سلعك الاستهلاكية مع فريقنا الاستشاري.',
      formTitle: 'ملخص طلب الاستشارة التجارية',
      formSubtitle: 'املأ هذا النموذج السري للحصول على تقييم أولي لمسار دخول وتطوير منتجاتك في السوق.',
      fields: {
        fullName: 'الاسم الكامل *',
        company: 'اسم الشركة / العلامة التجارية *',
        workEmail: 'البريد الإلكتروني للعمل *',
        phone: 'رقم الهاتف / الواتساب *',
        country: 'بلد المقر الرئيسي *',
        salesChannels: 'قنوات البيع الحالية للعلامة *',
        targetMarket: 'السوق المستهدف للتوسع *',
        skuCount: 'العدد التقديري للأصناف النشطة (SKUs) *',
        primaryChallenge: 'التحدي التجاري الأساسي *',
        message: 'تفاصيل المشروع / الأهداف المحددة',
        consent: 'أوافق على معالجة البيانات للأغراض الاستشارية والتقييم التجاري السري.',
      },
      countryOptions: [
        { label: 'الإمارات العربية المتحدة', value: 'UAE' },
        { label: 'المملكة العربية السعودية', value: 'KSA' },
        { label: 'جمهورية مصر العربية', value: 'Egypt' },
        { label: 'دول مجلس التعاون / أخرى', value: 'Other' },
      ],
      channelOptions: [
        { label: 'تجارة الجملة والأسواق التقليدية فقط', value: 'wholesale' },
        { label: 'أسواق التخفيضات والتجار', value: 'discount' },
        { label: 'التجارة الإلكترونية فقط (أمازون/نون/موقع خاص)', value: 'online' },
        { label: 'متواجد في التجزئة ونسعى لتحسين الهوامش', value: 'retail' },
        { label: 'علامة تجارية جديدة قيد الإطلاق', value: 'prelaunch' },
      ],
      targetMarketOptions: [
        { label: 'التجزئة الحديثة والجمعيات في الإمارات', value: 'uae_modern_trade' },
        { label: 'متاجر محطات الوقود في الإمارات', value: 'uae_petrol' },
        { label: 'سلاسل التجزئة في السعودية', value: 'ksa_retail' },
        { label: 'السوق الاستهلاكي في مصر', value: 'egypt_market' },
        { label: 'توسع متكامل (رقمي + تجزئة حديثة)', value: 'omnichannel' },
      ],
      challengeOptions: [
        { label: 'تعارض الأسعار مع أسواق التخفيضات', value: 'pricing_conflict' },
        { label: 'ارتفاع رسوم الإدراج وتآكل الهوامش', value: 'listing_fees' },
        { label: 'آجال سداد 90 يوماً وضغوط التدفق النقدي', value: 'cash_flow' },
        { label: 'صعوبة الوصول والتفاوض مع مسؤولي المشتريات', value: 'buyer_access' },
        { label: 'تحديد منتجات البطل وتحسين التعبئة', value: 'sku_strategy' },
      ],
      submitButton: 'إرسال طلب الاستشارة',
      submitting: 'جاري معالجة الطلب...',
      successTitle: 'تم استلام طلب الاستشارة بنجاح',
      successBody:
        'شكراً لك. استلم فريق الاستشارات التجارية في MASCO بيانات مشروعك. سيقوم مستشار تنفيذي بمراجعة المعطيات والتواصل معك خلال 24 ساعة عمل.',
      downloadBrief: 'تحميل ملخص الاستراتيجية المبدئي',
      bookAnother: 'إرسال طلب استشارة آخر',
      officeDetailsTitle: 'بيانات التواصل المباشر',
      placeholders: {
        emailLabel: 'البريد الرسمي',
        emailValue: '[ADD_OFFICIAL_EMAIL]',
        phoneLabel: 'الهاتف المباشر',
        phoneValue: '[ADD_PHONE]',
        whatsappLabel: 'الخط التجاري عبر الواتساب',
        whatsappValue: '[ADD_WHATSAPP]',
        addressLabel: 'عنوان المقر الإقليمي',
        addressValue: '[ADD_OFFICE_ADDRESS]',
        linkedinLabel: 'الملف الشخصي على لينكد إن',
        linkedinValue: '[ADD_LINKEDIN]',
      },
      whatsappCta: 'محادثة فورية عبر الواتساب',
    },
    footer: {
      tagline: 'استشارات تنفيذية متخصصة في السلع الاستهلاكية واستراتيجيات التجزئة الحديثة في الإمارات والسعودية ومصر.',
      disclaimer:
        'إخلاء مسؤولية: تعمل MASCO Business Consulting كجهة استشارية استراتيجية مستقلة. تصمم التوصيات والتحليلات المالية وفق المعطيات الخاصة بكل مشروع ورأس المال العامل للعميل.',
      colCompany: 'الشركة',
      colCapabilities: 'القدرات والخدمات',
      colMarkets: 'الأسواق المستهدفة',
      colCaseStudy: 'دراسات الحالة',
      colContact: 'التواصل والاستشارة',
      rights: 'جميع الحقوق محفوظة. MASCO للاستشارات التجارية.',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'شروط التعاقد',
    },
    modal: {
      step1Title: '1. بيانات العلامة والشركة',
      step2Title: '2. التحديات والأهداف التجارية',
      step3Title: '3. حجز الموعد والتواصل',
      close: 'إغلاق',
      back: 'الخطوة السابقة',
      next: 'الخطوة التالية',
      submit: 'تأكيد طلب الاستشارة',
    },
  },
};
