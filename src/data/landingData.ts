export interface NavSubItem {
  label: string;
  nepaliLabel: string;
  href: string;
  description?: string;
  iconName?: string;
  isExternal?: boolean;
}

export interface NavItem {
  label: string;
  nepaliLabel?: string;
  href: string;
  isExternal?: boolean;
  isHighlight?: boolean;
  children?: NavSubItem[];
}

export interface SidebarSubItem {
  label: string;
  nepaliLabel: string;
  href: string;
  description?: string;
  iconName?: string;
  isExternal?: boolean;
}

export interface SidebarNavItem {
  id: string;
  label: string;
  nepaliLabel: string;
  href: string;
  iconName: string;
  badge?: string;
  isExternal?: boolean;
  children?: SidebarSubItem[];
}

export interface DealProduct {
  id: string;
  name: string;
  nepaliName: string;
  category: string;
  seller: string;
  unit: string;
  currentPriceNpr: number;
  originalPriceNpr: number;
  discountPercentage: number;
  inStock: boolean;
  imageUrl: string;
  badge?: string;
  href: string;
}

export interface Merchant {
  id: string;
  name: string;
  nepaliName: string;
  category: string;
  location: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  imageUrl: string;
  speciality: string;
  href: string;
}

export interface HighestSellerProduct {
  id: string;
  name: string;
  nepaliName: string;
  category: string;
  seller: string;
  priceNpr: number;
  salesVolume: string;
  demandIndicator: string;
  imageUrl: string;
  href: string;
}

export interface ContributorReward {
  id: string;
  title: string;
  nepaliTitle: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface ContributionData {
  badge: string;
  title: string;
  nepaliTitle: string;
  description: string;
  motives: {
    title: string;
    description: string;
    iconName: string;
  }[];
  rewards: ContributorReward[];
  ctaUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext?: string;
  iconName: string;
}

export interface FeaturePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  ctaText: string;
  ctaHref: string;
  accentColor: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface BazarCategory {
  id: string;
  name: string;
  nepaliName: string;
  iconName: string;
  description: string;
  href: string;
}

export interface BazarProduct {
  id: string;
  name: string;
  nepaliName: string;
  category: string;
  seller: string;
  currentPriceNpr: number;
  originalPriceNpr?: number;
  discountPercentage?: number;
  inStock: boolean;
  imageUrl: string;
  badge?: string;
  href: string;
}

export interface MarketplaceProduct {
  id: string;
  name: string;
  nepaliName: string;
  origin: string;
  category: "cash_crops" | "spices" | "beverages" | "organic";
  categoryLabel: string;
  description: string;
  verified: boolean;
  farmTraceable: boolean;
  imageUrl: string;
  unit: string;
  highlightTag: string;
}

export interface DigitalAgFeature {
  title: string;
  nepaliTitle: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface AppScreenshotSlide {
  id: string;
  title: string;
  nepaliTitle: string;
  category: string;
  description: string;
  imageUrl: string;
  badge: string;
  highlights: string[];
}

export interface FarmerTestimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  farmType: string;
  quote: string;
  impactMetric: string;
  impactLabel: string;
  initials: string;
}

export interface KnowledgeItem {
  id: string;
  category: string;
  nepaliCategory: string;
  title: string;
  nepaliTitle: string;
  description: string;
  readTime: string;
  iconName: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
}

// -------------------------------------------------------------
// SIDEBAR NAVIGATION ITEMS (HOME, FARMING KNOWLEDGE, INFORMATION, CONTRIBUTE)
// -------------------------------------------------------------
export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  {
    id: "home",
    label: "Home",
    nepaliLabel: "गृहपृष्ठ",
    href: "/",
    iconName: "Home",
  },
  {
    id: "farming-knowledge",
    label: "Farming Knowledge",
    nepaliLabel: "कृषि ज्ञान",
    href: "#knowledge",
    iconName: "BookOpen",
    children: [
      {
        label: "Crops Knowledge",
        nepaliLabel: "बाली ज्ञान",
        href: "https://connectkisan.com/knowledge-bank/crops-knowledge",
        description: "High-yield practices & crop guides",
        isExternal: true,
      },
      {
        label: "Livestock Management",
        nepaliLabel: "पशुपालन ज्ञान",
        href: "https://connectkisan.com/knowledge-bank/livestock-knowledge",
        description: "Dairy, goat & poultry nutrition",
        isExternal: true,
      },
      {
        label: "Rooftop & Terrace Farming",
        nepaliLabel: "कौसी तथा कान्ला खेती",
        href: "https://connectkisan.com/knowledge-bank/rooftop-gardening-farming",
        description: "Urban gardening & slope conservation",
        isExternal: true,
      },
      {
        label: "Pest & Disease Control",
        nepaliLabel: "रोग तथा किरा नियन्त्रण",
        href: "https://connectkisan.com/knowledge-bank/insects-pest-management",
        description: "Organic & biological solutions",
        isExternal: true,
      },
      {
        label: "Soil Health Advisory",
        nepaliLabel: "माटो सम्बन्धि ज्ञान",
        href: "https://connectkisan.com/knowledge-bank/soil-information",
        description: "pH balance & fertilizer dosage",
        isExternal: true,
      },
      {
        label: "Video Tutorials",
        nepaliLabel: "भिडियो ज्ञान",
        href: "https://connectkisan.com/knowledge-bank/video-knowledge",
        description: "Step-by-step farming tutorials",
        isExternal: true,
      },
    ],
  },
  {
    id: "information",
    label: "Information",
    nepaliLabel: "सूचना सेवा",
    href: "https://connectkisan.com/kalimati-market-price",
    iconName: "Info",
    isExternal: true,
    children: [
      {
        label: "Kalimati Market Price",
        nepaliLabel: "कालिमाटी बजार मूल्य",
        href: "https://connectkisan.com/kalimati-market-price",
        description: "Daily live wholesale price index",
        isExternal: true,
      },
      {
        label: "Regional Agri Markets",
        nepaliLabel: "अन्य कृषि बजार",
        href: "https://connectkisan.com/agricultural-markets-price",
        description: "Pokhara, Narayangarh, Birtamod rates",
        isExternal: true,
      },
      {
        label: "Kheti Calendar",
        nepaliLabel: "खेती क्यालेन्डर",
        href: "https://connectkisan.com/kheti-calendar",
        description: "Seasonal planting & harvesting schedules",
        isExternal: true,
      },
      {
        label: "Weather Forecast",
        nepaliLabel: "मौसम पूर्वानुमान",
        href: "https://connectkisan.com/weather",
        description: "Rain, frost & humidity alerts",
        isExternal: true,
      },
      {
        label: "Agricultural Directory",
        nepaliLabel: "कृषि डाइरेक्टरी",
        href: "https://connectkisan.com/directory",
        description: "Govt labs, experts & local depots",
        isExternal: true,
      },
    ],
  },
  {
    id: "contribute",
    label: "Contribute",
    nepaliLabel: "योगदान पोर्टल",
    href: "https://connectkisan.com/en/contribution",
    iconName: "Heart",
    badge: "Join Community",
    isExternal: true,
  },
];

// -------------------------------------------------------------
// NAVIGATION DATA (CLEAN HEADER LINKS)
// -------------------------------------------------------------
export const NAV_LINKS: NavItem[] = [
  {
    label: "Farming",
    nepaliLabel: "कृषि",
    href: "#farming",
    children: [
      {
        label: "Farming & Agriculture",
        nepaliLabel: "कृषि तथा बाली",
        href: "https://connectkisan.com/soil-test",
        description: "Crops, livestock and best practices",
        iconName: "Sprout",
        isExternal: true,
      },
      {
        label: "Agricultural Tools",
        nepaliLabel: "उपकरण तथा प्रविधि",
        href: "https://connectkisan.com/new-farming-technologies",
        description: "Tools, equipment and machinery",
        iconName: "Wrench",
        isExternal: true,
      },
      {
        label: "Information Services",
        nepaliLabel: "सूचना सेवा",
        href: "https://connectkisan.com/kalimati-market-price",
        description: "Market info, weather and more",
        iconName: "Info",
        isExternal: true,
      },
    ],
  },
  {
    label: "Bazar",
    nepaliLabel: "बजार",
    href: "https://connectkisan.com/bazar",
    isExternal: true,
  },
  {
    label: "Knowledge",
    nepaliLabel: "ज्ञान",
    href: "#knowledge",
  },
  {
    label: "About",
    nepaliLabel: "हाम्रोबारे",
    href: "#about",
  },
];

// -------------------------------------------------------------
// COMMUNITY CONTRIBUTION DATA (CONNECTKISAN.COM/EN/CONTRIBUTION)
// -------------------------------------------------------------
export const CONTRIBUTION_DATA: ContributionData = {
  badge: "Community Knowledge Platform / सामुदायिक ज्ञान",
  title: "Be Part of a Stronger Agricultural Community",
  nepaliTitle: "तपाईंको ज्ञानले हजारौं किसानलाई सहयोग पुग्छ।",
  description: "Share what you know about farming, crops, livestock, and rural innovation. Every useful tip can improve a farmer's harvest, reduce disease risk, and build resilient livelihoods across Nepal.",
  ctaUrl: "https://connectkisan.com/en/contribution",
  motives: [
    {
      title: "Help Real Farmers",
      description: "Your practical field guidance directly reaches grassroot farmers in all 7 provinces.",
      iconName: "Users",
    },
    {
      title: "Get Recognized",
      description: "Gain prominence on our national Contributor Hall of Fame and Top Contributors leaderboard.",
      iconName: "Award",
    },
    {
      title: "Earn Valuable Rewards",
      description: "Unlock paid agritech internship opportunities, tokens of love, and verified contribution certificates.",
      iconName: "Gift",
    },
  ],
  rewards: [
    {
      id: "internship",
      title: "Internship Opportunity",
      nepaliTitle: "इन्टर्नसिप अवसर",
      badge: "Career Growth",
      description: "Outstanding contributors are prioritized for agritech research, field agronomy, and digital development internships with Connect Kisan.",
      iconName: "GraduationCap",
    },
    {
      id: "token",
      title: "Token of Love",
      nepaliTitle: "मायाको चिनो",
      badge: "Community Gift",
      description: "Receive special physical tokens of appreciation from our leadership team recognizing your dedication to farmer empowerment.",
      iconName: "Heart",
    },
    {
      id: "certificate",
      title: "Certificate of Contribution",
      nepaliTitle: "योगदान प्रमाणपत्र",
      badge: "Official Credential",
      description: "Earn a verified digital and printed certificate honoring your agricultural knowledge contribution to Nepal's farming ecosystem.",
      iconName: "ShieldCheck",
    },
  ],
};

// -------------------------------------------------------------
// TRUST STATS DATA (EXACT FROM WIREFRAME: 50K+, 10K+, 500+, 98%)
// -------------------------------------------------------------
export const TRUST_STATS: StatItem[] = [
  {
    value: "50K+",
    label: "Active Farmers",
    subtext: "Connecting across Nepal",
    iconName: "Users",
  },
  {
    value: "10K+",
    label: "Products Listed",
    subtext: "Supplies, crops & equipment",
    iconName: "PackageCheck",
  },
  {
    value: "500+",
    label: "Trusted Merchants",
    subtext: "Verified agro-dealers & co-ops",
    iconName: "Store",
  },
  {
    value: "98%",
    label: "Satisfaction Rate",
    subtext: "Farmer & buyer trust rating",
    iconName: "Star",
  },
];

// -------------------------------------------------------------
// BAZAR CATEGORIES (5 HIGH-LEVEL CATEGORIES)
// -------------------------------------------------------------
export const BAZAR_CATEGORIES: BazarCategory[] = [
  {
    id: "cat-supplies",
    name: "Agricultural Supplies",
    nepaliName: "कृषि सामाग्रीहरू",
    iconName: "Sprout",
    description: "Certified seeds, nursery trays, growth promoters & bio-protection",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "cat-equipment",
    name: "Equipment",
    nepaliName: "कृषि उपकरण",
    iconName: "Tractor",
    description: "Battery knapsack sprayers, mini power tillers & irrigation pumps",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "cat-tools",
    name: "Tools",
    nepaliName: "औजारहरू",
    iconName: "Wrench",
    description: "Pruning shears, grafting knives, soil testing meters & shade nets",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "cat-fertilizers",
    name: "Fertilizers",
    nepaliName: "मल तथा पोषण",
    iconName: "Layers",
    description: "Organic vermicompost, bio-potash, neem cakes & micronutrient packs",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "cat-tea-coffee",
    name: "Tea & Coffee",
    nepaliName: "चिया र कफी",
    iconName: "Coffee",
    description: "Orthodox specialty loose tea, roasted beans & coffee machines",
    href: "https://connectkisan.com/bazar",
  },
];

// -------------------------------------------------------------
// SECTION 2: TODAY'S DEALS PRODUCTS (EXACT FROM WIREFRAME)
// -------------------------------------------------------------
export const TODAYS_DEALS_PRODUCTS: DealProduct[] = [
  {
    id: "deal-fresh-tomato",
    name: "Fresh Tomato",
    nepaliName: "ताजा गोलभेडा",
    category: "Fresh Produce",
    seller: "Kalimati Agro",
    unit: "1 kg",
    currentPriceNpr: 40,
    originalPriceNpr: 45,
    discountPercentage: 10,
    inStock: true,
    badge: "-10%",
    imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "deal-fresh-ginger",
    name: "Fresh Ginger",
    nepaliName: "अर्ग्यानिक अदुवा",
    category: "Spices",
    seller: "Palpa Farmers Co-op",
    unit: "1 kg",
    currentPriceNpr: 150,
    originalPriceNpr: 180,
    discountPercentage: 15,
    inStock: true,
    badge: "-15%",
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "deal-cardamom",
    name: "Cardamom",
    nepaliName: "ठूलो अलैंची",
    category: "Cash Crops",
    seller: "Ilam Estate",
    unit: "100 g",
    currentPriceNpr: 1050,
    originalPriceNpr: 1200,
    discountPercentage: 12,
    inStock: true,
    badge: "-12%",
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "deal-fresh-potato",
    name: "Fresh Potato",
    nepaliName: "स्थानीय आलु",
    category: "Fresh Produce",
    seller: "Nuwakot Farms",
    unit: "1 kg",
    currentPriceNpr: 55,
    originalPriceNpr: 60,
    discountPercentage: 8,
    inStock: true,
    badge: "-8%",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "deal-rice-premium",
    name: "Rice (Premium)",
    nepaliName: "मन्सुली चामल (प्रिमियम)",
    category: "Grains & Rice",
    seller: "Jhapa Rice Mills",
    unit: "25 kg",
    currentPriceNpr: 1350,
    originalPriceNpr: 1500,
    discountPercentage: 10,
    inStock: true,
    badge: "-10%",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
];

// -------------------------------------------------------------
// SECTION 3: TOP MERCHANTS (EXACT FROM WIREFRAME)
// -------------------------------------------------------------
export const TOP_MERCHANTS: Merchant[] = [
  {
    id: "merch-himalayan-agro",
    name: "Himalayan Agro",
    nepaliName: "हिमालयन एग्रो",
    category: "Agro Inputs",
    location: "Kathmandu & Lalitpur",
    rating: 4.8,
    reviewCount: 2100,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22521?auto=format&fit=crop&w=400&q=80",
    speciality: "Agro Inputs, bio-fertilizers & farm equipment.",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "merch-green-valley",
    name: "Green Valley Farms",
    nepaliName: "ग्रीन भ्याली फार्म्स",
    category: "Fresh Produce",
    location: "Chitwan & Makwanpur",
    rating: 4.7,
    reviewCount: 1800,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=400&q=80",
    speciality: "Direct farmer-to-consumer organic vegetables & fruits.",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "merch-kalimati-traders",
    name: "Kalimati Traders",
    nepaliName: "कालिमाटी ट्रेडर्स",
    category: "Market Goods",
    location: "Kalimati, Kathmandu",
    rating: 4.6,
    reviewCount: 1500,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80",
    speciality: "Wholesale market produce, grains & spices.",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "merch-everest-seeds",
    name: "Everest Seeds",
    nepaliName: "एभरेष्ट सिड्स",
    category: "Seeds & Saplings",
    location: "Nuwakot & Pokhara",
    rating: 4.8,
    reviewCount: 1200,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
    speciality: "Certified hybrid seeds, nursery saplings & tools.",
    href: "https://connectkisan.com/bazar",
  },
];

// -------------------------------------------------------------
// SECTION 4: HIGHEST SELLERS (EXACT FROM WIREFRAME)
// -------------------------------------------------------------
export const HIGHEST_SELLERS_PRODUCTS: HighestSellerProduct[] = [
  {
    id: "seller-tomato",
    name: "Tomato",
    nepaliName: "गोलभेडा",
    category: "Fresh Produce",
    seller: "Kalimati Agro",
    priceNpr: 40,
    salesVolume: "8.1k+ sold",
    demandIndicator: "High Demand",
    imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "seller-potato",
    name: "Potato",
    nepaliName: "आलु",
    category: "Fresh Produce",
    seller: "Nuwakot Farms",
    priceNpr: 55,
    salesVolume: "9k+ sold",
    demandIndicator: "Daily Essential",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "seller-rice",
    name: "Rice",
    nepaliName: "चामल",
    category: "Grains",
    seller: "Jhapa Rice Mills",
    priceNpr: 1350,
    salesVolume: "8.5k+ sold",
    demandIndicator: "Top Staple",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "seller-maize",
    name: "Maize Seeds",
    nepaliName: "मकैको बिउ",
    category: "Certified Seeds",
    seller: "Chitwan Seeds",
    priceNpr: 1200,
    salesVolume: "7.2k+ sold",
    demandIndicator: "Seasonal High",
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "seller-fertilizer",
    name: "Fertilizer",
    nepaliName: "अर्ग्यानिक मल",
    category: "Soil Health",
    seller: "Green Agri",
    priceNpr: 3850,
    salesVolume: "6k+ sold",
    demandIndicator: "Certified Organic",
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
];

// -------------------------------------------------------------
// BAZAR CURATED PRODUCTS (COMPATIBILITY FALLBACK)
// -------------------------------------------------------------
export const BAZAR_CURATED_PRODUCTS: BazarProduct[] = [
  {
    id: "bazar-fertilizer-1",
    name: "Organic Bio-Fertilizer Vermicompost (50kg)",
    nepaliName: "प्रांगारिक गड्यौला मल",
    category: "Fertilizer",
    seller: "Green Agri Bio-Nutrients",
    currentPriceNpr: 3851,
    originalPriceNpr: 4012,
    discountPercentage: 10,
    inStock: true,
    badge: "-10% OFF",
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "bazar-tiller-1",
    name: "Mini Power Tiller 7HP (Petrol Engine)",
    nepaliName: "मिनी पावर टिलर ७ एचपी",
    category: "Equipment",
    seller: "Chitwan Agri-Machinery Hub",
    currentPriceNpr: 25000,
    originalPriceNpr: 28500,
    discountPercentage: 12,
    inStock: true,
    badge: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22521?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "bazar-coffee-1",
    name: "Arabica High-Altitude Roasted Coffee Beans",
    nepaliName: "अरेबिका कफी गेडा",
    category: "Tea & Coffee",
    seller: "Helambu Organic Coffee",
    currentPriceNpr: 1250,
    originalPriceNpr: 1400,
    discountPercentage: 11,
    inStock: true,
    badge: "Single Origin",
    imageUrl: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "bazar-tea-1",
    name: "Orthodox First Flush Hand-Rolled Green Tea",
    nepaliName: "इलाम अर्थोडक्स ग्रीन टी",
    category: "Tea & Coffee",
    seller: "Ilam Organic Tea Cooperative",
    currentPriceNpr: 900,
    originalPriceNpr: 1050,
    discountPercentage: 14,
    inStock: true,
    badge: "Specialty Tea",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
];

// -------------------------------------------------------------
// APP SCREENSHOT SLIDES FOR ABOUT SECTION
// -------------------------------------------------------------
export const APP_SCREENSHOT_SLIDES: AppScreenshotSlide[] = [
  {
    id: "slide-market",
    title: "Kalimati & Regional Market Prices",
    nepaliTitle: "कालिमाटी र स्थानीय बजार मूल्य",
    category: "Market Intelligence",
    badge: "Live Daily Rates",
    description: "Real-time daily updates of wholesale and retail vegetable, fruit, and spice rates from Kalimati and major regional agriculture markets across Nepal.",
    imageUrl: "https://play-lh.googleusercontent.com/kQSwnWdtT8iCy4aVPEHFl08WA0r76iVNsPh7eSHMxD5G6orbgUPi9P8tQpKQXo9g-N2P-KZLhwF1rrxdZ4ACM_g=w1080-h1920",
    highlights: [
      "Daily wholesale & retail pricing indices",
      "Historical trend charts to time harvest sales",
      "Direct price alerts to your phone",
    ],
  },
  {
    id: "slide-bot",
    title: "Krishi Bot & Voice AI Advisory",
    nepaliTitle: "आवाज मार्फत बाली सल्लाह र रोग निदान",
    category: "AI Agronomy",
    badge: "24/7 Nepali Spoken Query",
    description: "Speak in local Nepali to ask questions, diagnose crop diseases via leaf photos, and receive immediate actionable recommendations without typing.",
    imageUrl: "https://play-lh.googleusercontent.com/EiLzGVjAZ5KokmGq1pRpj25w1iHj5NHXtB4vtNtqxSNqfGteaFwNj451L7kUtn6ae59Fnnw-GpLx3ls-lLMfeDc=w1080-h1920",
    highlights: [
      "Voice recognition in Nepali & English",
      "Instant visual pest & blight diagnosis",
      "Certified agronomist verified solutions",
    ],
  },
  {
    id: "slide-soil",
    title: "Soil Testing & Fertilizer Optimization",
    nepaliTitle: "माटो परिक्षण र रासायनिक/जैविक सिफारिस",
    category: "Precision Ag",
    badge: "Lab & Sensor Integrated",
    description: "Input soil test parameters or book mobile soil testing to calculate tailored organic inputs, NPK ratios, and micro-nutrient balance for higher yields.",
    imageUrl: "https://play-lh.googleusercontent.com/E7rSwd4pCOYqYW2onNmczIB4vKEQqterS5EruabS6uC3ji8ktvKOYnhJeFg7ROEhL12O_Joml3hCKv2XMnXcPw=w1080-h1920",
    highlights: [
      "Precise N-P-K nutrient dosage calculation",
      "Organic compost & bio-fertilizer planning",
      "Soil acidity (pH) correction guidelines",
    ],
  },
  {
    id: "slide-calendar",
    title: "Kheti Calendar & Seasonal Planning",
    nepaliTitle: "खेती क्यालेन्डर र मौसम कार्यतालिका",
    category: "Farm Management",
    badge: "Altitude & Region Tailored",
    description: "Step-by-step seasonal schedules tailored to your altitude and crop variety, sending automated reminders for irrigation, weeding, and pest protection.",
    imageUrl: "https://play-lh.googleusercontent.com/-rhWNIJ6jn91QQc2xVs-FI34rrd930uThcQHvpezHXonCQgNUftvA_Hw4BMmytkP_UH0z3P2ueiyto9Gd9VB8A=w1080-h1920",
    highlights: [
      "Altitude-specific crop timelines",
      "Rainfall and frost risk alerts",
      "Automated SMS & push notifications",
    ],
  },
  {
    id: "slide-bazar",
    title: "Digital Agri Bazar & Transparent Bidding",
    nepaliTitle: "डिजिटल बजार र कृषि सामग्री खरिद",
    category: "Marketplace & Inputs",
    badge: "Verified Suppliers & Buyers",
    description: "Source certified seeds, organic protection, and equipment directly from vetted distributors while listing your bulk harvest for transparent buyer bids.",
    imageUrl: "https://play-lh.googleusercontent.com/z_yuv45_DqR4dLH9uH66bGVFSVb1RxBmdmghdvgIoWLUyCnIJqZWmgshwm-BKEoFJIw87fxFX7_XPQdnCoDjWQ=w1080-h1920",
    highlights: [
      "Direct bidding matching without middlemen",
      "Certified germination quality seeds",
      "Secure digital payments & escrow",
    ],
  },
  {
    id: "slide-knowledge",
    title: "Knowledge Bank & Video Tutorials",
    nepaliTitle: "कृषि ज्ञान तथा भिडियो ट्युटोरियल",
    category: "Farmer Education",
    badge: "Practical Field Videos",
    description: "Browse curated practical farming guides, livestock health manuals, terrace soil conservation methods, and localized high-yield crop tutorials.",
    imageUrl: "https://play-lh.googleusercontent.com/do3cmOZHE5T55WDYjxARbLxo48HP1k6FI-KQTl8rgbSUyXnYiWB_xaYXQIyG-qPpySLJ8q-NA6TwnSZY0nYf6Fw=w1080-h1920",
    highlights: [
      "Step-by-step Nepali video guides",
      "Livestock, dairy & goat management",
      "Modern polyhouse & tunnel farming guides",
    ],
  },
];

// -------------------------------------------------------------
// 3 CORE FEATURE PILLARS
// -------------------------------------------------------------
export const FEATURE_PILLARS: FeaturePillar[] = [
  {
    id: "grow",
    title: "Grow",
    subtitle: "Smarter Agronomy & Advisory",
    description: "Equip your farm with real-time agronomic insights, climate-resilient practices, and digital planning.",
    iconName: "Sprout",
    accentColor: "emerald",
    ctaText: "Explore Growth Tools",
    ctaHref: "#digital-tools",
    capabilities: [
      {
        title: "Voice-Based AI Advisory",
        description: "Instant 24/7 crop diagnosis & actionable advice in Nepali and English via web or messaging.",
      },
      {
        title: "Knowledge Hub",
        description: "Practical cultivation guides, organic disease prevention, and climate-smart farming tutorials.",
      },
      {
        title: "Precision Farming & Soil Testing",
        description: "Geo-tools, drone analysis, and scientific soil testing for optimal nutrient and water application.",
      },
      {
        title: "Farm Planning & Finance Proposal",
        description: "Structured digital record keeping to unlock agricultural loans, subsidies, and insurance.",
      },
    ],
  },
  {
    id: "buy-sell",
    title: "Buy & Sell",
    subtitle: "Transparent Market Direct",
    description: "Cut out middlemen barriers with transparent digital bidding and verified agri-input supply chains.",
    iconName: "Store",
    accentColor: "green",
    ctaText: "View Bazar & Market",
    ctaHref: "#bazar",
    capabilities: [
      {
        title: "Digital Bidding System",
        description: "Fair price discovery matching harvest directly with verified domestic and export buyers.",
      },
      {
        title: "Connect Kisan Bazar",
        description: "Direct online store for authenticated seeds, tools, machinery, and organic fertilizers.",
      },
      {
        title: "Kalimati & Regional Price Index",
        description: "Live daily wholesale rates from major Nepalese agricultural markets for informed selling.",
      },
      {
        title: "Contract Farming Channels",
        description: "Guaranteed procurement agreements connecting institutional buyers with organized farmer clusters.",
      },
    ],
  },
  {
    id: "build-trust",
    title: "Build Trust",
    subtitle: "Traceability & Certification",
    description: "Provide complete provenance from soil to consumer, guaranteeing food safety and premium valuations.",
    iconName: "ShieldCheck",
    accentColor: "teal",
    ctaText: "Learn Traceability",
    ctaHref: "#about",
    capabilities: [
      {
        title: "Farm & Farmer Traceability",
        description: "Digital farm profile with GPS coordinates, farmer verification, and batch harvest records.",
      },
      {
        title: "Chemical-Free & Organic Verification",
        description: "Traceable pesticide and fertilizer tracking enabling premium organic certification.",
      },
      {
        title: "Quality Grading & Standards",
        description: "Transparent export-ready quality indicators ensuring trust for local and international markets.",
      },
      {
        title: "Verified Producer Profiles",
        description: "Direct visibility for cooperatives and individual growers to showcase heritage farming.",
      },
    ],
  },
];

// -------------------------------------------------------------
// HOW IT WORKS (4 STEPS)
// -------------------------------------------------------------
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: "01",
    title: "Know",
    subtitle: "Information & Market Rates",
    description: "Access live wholesale prices (Kalimati & regional), local weather forecasts, and crop-specific disease alerts.",
    iconName: "LineChart",
  },
  {
    stepNumber: "02",
    title: "Decide",
    subtitle: "Guidance & Planning",
    description: "Consult our AI advisory or agronomists, test your soil, and create financial plans for the upcoming season.",
    iconName: "Compass",
  },
  {
    stepNumber: "03",
    title: "Grow",
    subtitle: "Inputs & Field Monitoring",
    description: "Source certified seeds and bio-inputs directly from Bazar, monitoring crop health with precision IoT and field tools.",
    iconName: "Sprout",
  },
  {
    stepNumber: "04",
    title: "Sell",
    subtitle: "Transparent Market Access",
    description: "List verified produce on the digital bidding marketplace to connect directly with bulk buyers at fair prices.",
    iconName: "BadgeCheck",
  },
];

// -------------------------------------------------------------
// MARKETPLACE SHOWCASE DATA (PRODUCE FOR SALE BY FARMERS)
// -------------------------------------------------------------
export const MARKETPLACE_PRODUCTS: MarketplaceProduct[] = [
  {
    id: "prod-tea",
    name: "Orthodox Black Tea",
    nepaliName: "इलामको चिया",
    origin: "Ilam, Koshi Province",
    category: "beverages",
    categoryLabel: "Beverages",
    description: "Single-origin orthodox leaf grown in high-elevation misty hills, hand-plucked and processed with full traceability.",
    verified: true,
    farmTraceable: true,
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    unit: "Batch / 50kg Bags",
    highlightTag: "Geographical Origin",
  },
  {
    id: "prod-coffee",
    name: "Himalayan Arabica Coffee",
    nepaliName: "अरेबिका कफी",
    origin: "Nuwakot & Gulmi, Nepal",
    category: "beverages",
    categoryLabel: "Beverages",
    description: "Specialty shade-grown Arabica beans cultivated at 1,200m+ elevation. Wet-processed with sweet floral undertones.",
    verified: true,
    farmTraceable: true,
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    unit: "Parchment / Green Bean",
    highlightTag: "High Altitude",
  },
  {
    id: "prod-ginger",
    name: "Organic Fresh Ginger",
    nepaliName: "अर्ग्यानिक अदुवा",
    origin: "Palpa, Lumbini Province",
    category: "spices",
    categoryLabel: "Spices",
    description: "Aromatic rhizomes free from synthetic chemicals, harvested from terraced hill slopes with high gingerol content.",
    verified: true,
    farmTraceable: true,
    imageUrl: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    unit: "Quintal / Bulk Lots",
    highlightTag: "Chemical Free",
  },
  {
    id: "prod-turmeric",
    name: "High-Curcumin Turmeric",
    nepaliName: "सुर्खेतको बेसार",
    origin: "Surkhet, Karnali Province",
    category: "spices",
    categoryLabel: "Spices",
    description: "Naturally dried organic turmeric fingers and powder tested for 5%+ active curcumin concentration.",
    verified: true,
    farmTraceable: true,
    imageUrl: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80",
    unit: "Dry Fingers / Powder",
    highlightTag: "Lab Tested",
  },
  {
    id: "prod-timur",
    name: "Wild Himalayan Timur",
    nepaliName: "हिमाली टिमुर",
    origin: "Mustang & Salyan, Nepal",
    category: "spices",
    categoryLabel: "Spices",
    description: "Sustainably wild-harvested Sichuan pepper known for its distinct citrus aroma and numbing tongue tingling profile.",
    verified: true,
    farmTraceable: true,
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
    unit: "Kilograms / Bags",
    highlightTag: "Wild Harvested",
  },
  {
    id: "prod-cardamom",
    name: "Large Cardamom (Alainchi)",
    nepaliName: "ठूलो अलैंची",
    origin: "Taplejung & Sankhuwasabha",
    category: "cash_crops",
    categoryLabel: "Cash Crops",
    description: "Smoked and kiln-dried jumbo capsules, sorted for uniform bold size and rich resinous essential oils.",
    verified: true,
    farmTraceable: true,
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
    unit: "Mon (40kg Units)",
    highlightTag: "Export Grade",
  },
];

// -------------------------------------------------------------
// DIGITAL AGRICULTURE FEATURE HIGHLIGHTS
// -------------------------------------------------------------
export const DIGITAL_AG_FEATURES: DigitalAgFeature[] = [
  {
    title: "Voice-Based AI Advisory",
    nepaliTitle: "आवाज मार्फत कृषि सल्लाह",
    description: "Ask questions in spoken Nepali on your smartphone or messaging apps. Instant pest diagnosis and crop advisory without typing.",
    iconName: "Mic",
    badge: "24/7 Nepali & English",
  },
  {
    title: "Precision Farming & Field Monitoring",
    nepaliTitle: "आधुनिक खेत अनुगमन",
    description: "Real-time weather station integration, satellite NDVI vegetation indices, and localized frost/rain alerts.",
    iconName: "Activity",
    badge: "IoT & Satellite",
  },
  {
    title: "Farm Planning & Digital Records",
    nepaliTitle: "खेती योजना र वित्तीय व्यवस्था",
    description: "Generate structured farm proposals for agricultural bank loans, government grants, and crop insurance claims.",
    iconName: "FileSpreadsheet",
    badge: "Financial Inclusion",
  },
  {
    title: "Agri-Input Direct Supply",
    nepaliTitle: "गुणस्तरीय कृषि सामग्री",
    description: "Order verified certified seeds, soil amendments, and biological protection directly from Bazar to your cooperative depot.",
    iconName: "PackageCheck",
    badge: "Quality Guaranteed",
  },
];

// -------------------------------------------------------------
// FARMER TESTIMONIALS (AUTHENTIC STORIES)
// -------------------------------------------------------------
export const FARMER_STORIES: FarmerTestimonial[] = [
  {
    id: "story-1",
    name: "Dev Kumar Dahal",
    role: "Orthodox Tea Cultivator",
    location: "Ilam, Koshi Province",
    farmType: "Organic Tea Estate (12 Ropani)",
    quote: "Through Connect Kisan's digital traceability and advisory, I improved our leaf quality grading and directly connected with buyers in Kathmandu without having to sacrifice margin to local brokers.",
    impactMetric: "+28%",
    impactLabel: "Better price realization",
    initials: "DD",
  },
  {
    id: "story-2",
    name: "Pramila Sharma",
    role: "Commercial Organic Vegetable Farmer",
    location: "Nuwakot, Bagmati Province",
    farmType: "Polyhouse & Open Field Cultivation",
    quote: "The voice advisory helped diagnose a blight outbreak early on my tomato crops. Having real-time market prices from Kalimati on my phone lets our cooperative negotiate with confidence every morning.",
    impactMetric: "3 Hours",
    impactLabel: "Early pest intervention",
    initials: "PS",
  },
  {
    id: "story-3",
    name: "Ram Bahadur Thapa",
    role: "Ginger & Cash Crop Farmer",
    location: "Palpa, Lumbini Province",
    farmType: "Terrace Farming Cluster (25 Farmers)",
    quote: "Creating digital farm proposals through Connect Kisan allowed our farmers group to secure agricultural credit and bulk buy organic inputs directly from certified suppliers on Bazar.",
    impactMetric: "100%",
    impactLabel: "Transparent bidding access",
    initials: "RT",
  },
];

// -------------------------------------------------------------
// KNOWLEDGE SECTION ARTICLES
// -------------------------------------------------------------
export const KNOWLEDGE_ARTICLES: KnowledgeItem[] = [
  {
    id: "kb-crops",
    category: "Crop Knowledge",
    nepaliCategory: "बाली ज्ञान",
    title: "Best Practices for Highland Cash Crop Cultivation",
    nepaliTitle: "उच्च पहाडी नगदे बाली खेती प्रविधि",
    description: "Scientific nursery management, organic disease prevention, and post-harvest drying techniques for ginger, cardamom, and tea.",
    readTime: "5 min read",
    iconName: "Wheat",
    href: "#knowledge-crops",
  },
  {
    id: "kb-livestock",
    category: "Livestock Knowledge",
    nepaliCategory: "पशुपालन ज्ञान",
    title: "Modern Dairy & Goat Farming Management",
    nepaliTitle: "आधुनिक गाईभैंसी तथा बाख्रापालन व्यवस्थापन",
    description: "Nutrition guidelines, seasonal vaccination schedules, and housing design optimized for Nepal's hilly and terai topography.",
    readTime: "6 min read",
    iconName: "Beef",
    href: "#knowledge-livestock",
  },
  {
    id: "kb-terrace",
    category: "Terrace Farming",
    nepaliCategory: "कौसी तथा कान्ला खेती",
    title: "Soil Health & Slope Water Conservation",
    nepaliTitle: "माटो संरक्षण र भिरालो जग्गामा सिंचाइ",
    description: "Practical soil test interpretation, terrace wall reinforcement, and drip irrigation systems for sustainable hillside yields.",
    readTime: "4 min read",
    iconName: "Mountain",
    href: "#knowledge-terrace",
  },
];

// -------------------------------------------------------------
// FOOTER STRUCTURE
// -------------------------------------------------------------
export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Farming & Services",
    links: [
      { label: "Soil Test / माटो परिक्षण", href: "https://connectkisan.com/soil-test", isExternal: true },
      { label: "New Technologies / नवीनतम प्रविधि", href: "https://connectkisan.com/new-farming-technologies", isExternal: true },
      { label: "Training / तालिम", href: "https://connectkisan.com/training", isExternal: true },
      { label: "Agri Finance / फाइनान्स", href: "https://connectkisan.com/finance", isExternal: true },
      { label: "Crop Insurance / बिमा", href: "https://connectkisan.com/insurance", isExternal: true },
      { label: "Cold Centers / कोल्ड सेन्टर", href: "https://connectkisan.com/cold-center", isExternal: true },
    ],
  },
  {
    title: "Knowledge Bank",
    links: [
      { label: "Livestock / पशुपालन ज्ञान", href: "https://connectkisan.com/knowledge-bank/livestock-knowledge", isExternal: true },
      { label: "Crops Knowledge / बाली ज्ञान", href: "https://connectkisan.com/knowledge-bank/crops-knowledge", isExternal: true },
      { label: "Rooftop Farming / कौसी बगैचा", href: "https://connectkisan.com/knowledge-bank/rooftop-gardening-farming", isExternal: true },
      { label: "Pest Management / रोग तथा किरा", href: "https://connectkisan.com/knowledge-bank/insects-pest-management", isExternal: true },
      { label: "Soil Health / माटो सम्बन्धि ज्ञान", href: "https://connectkisan.com/knowledge-bank/soil-information", isExternal: true },
      { label: "Video Tutorials / भिडियो ज्ञान", href: "https://connectkisan.com/knowledge-bank/video-knowledge", isExternal: true },
    ],
  },
  {
    title: "Information & Market",
    links: [
      { label: "Connect Kisan Bazar (Shop)", href: "https://connectkisan.com/bazar", isExternal: true },
      { label: "Kalimati Market Price / कालिमाटी", href: "https://connectkisan.com/kalimati-market-price", isExternal: true },
      { label: "Agricultural Markets / अन्य बजार", href: "https://connectkisan.com/agricultural-markets-price", isExternal: true },
      { label: "Kheti Calendar / खेती क्यालेन्डर", href: "https://connectkisan.com/kheti-calendar", isExternal: true },
      { label: "Weather Forecast / मौसम", href: "https://connectkisan.com/weather", isExternal: true },
      { label: "Contribute / योगदान पोर्टल", href: "https://connectkisan.com/en/contribution", isExternal: true },
    ],
  },
];
