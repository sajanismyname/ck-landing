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
// TRUST STATS DATA
// -------------------------------------------------------------
export const TRUST_STATS: StatItem[] = [
  {
    value: "20,000+",
    label: "Farmers",
    subtext: "Actively connecting across Nepal",
    iconName: "Users",
  },
  {
    value: "5,000+",
    label: "Farms",
    subtext: "Registered productive farmlands",
    iconName: "Tractor",
  },
  {
    value: "30+",
    label: "Team Members",
    subtext: "Agronomists & digital engineers",
    iconName: "Award",
  },
  {
    value: "Nepal-wide",
    label: "Agriculture Network",
    subtext: "Spanning 7 provinces & rural hubs",
    iconName: "MapPin",
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
// BAZAR CURATED PREVIEW PRODUCTS (4 DESKTOP / 2 MOBILE - EXACT FROM MOCKUP)
// -------------------------------------------------------------
export const BAZAR_CURATED_PRODUCTS: BazarProduct[] = [
  {
    id: "bazar-organic-fertilizer",
    name: "Organic Fertilizer",
    nepaliName: "अर्ग्यानिक मल",
    category: "Fertilizers",
    seller: "Green Agri",
    currentPriceNpr: 3851,
    originalPriceNpr: 4012,
    discountPercentage: 10,
    inStock: true,
    badge: "-10%",
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "bazar-hand-tiller",
    name: "Hand Tiller",
    nepaliName: "ह्यान्ड टिलर / मिनी टिलर",
    category: "Equipment",
    seller: "AgriTools",
    currentPriceNpr: 25000,
    inStock: true,
    badge: "Equipment",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22521?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "bazar-coffee-beans",
    name: "Coffee Beans",
    nepaliName: "अरेबिका कफी गेडा",
    category: "Tea & Coffee",
    seller: "Ilam Coffee",
    currentPriceNpr: 1250,
    inStock: true,
    badge: "Single Origin",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "bazar-tea-leaves",
    name: "Tea Leaves",
    nepaliName: "इलामको हाते चिया पत्ती",
    category: "Tea & Coffee",
    seller: "Himalayan Tea",
    currentPriceNpr: 900,
    inStock: true,
    badge: "Specialty Tea",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
];

// -------------------------------------------------------------
// SECTION 2: TODAY'S DEALS PRODUCTS (NO CART ACTIONS)
// -------------------------------------------------------------
export const TODAYS_DEALS_PRODUCTS: DealProduct[] = [
  {
    id: "deal-organic-fertilizer",
    name: "Organic Vermicompost Fertilizer",
    nepaliName: "अर्ग्यानिक गड्यौला मल (५० केजी)",
    category: "Fertilizers",
    seller: "Green Agri",
    unit: "50kg Sack",
    currentPriceNpr: 3850,
    originalPriceNpr: 4280,
    discountPercentage: 10,
    inStock: true,
    badge: "-10% OFF",
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "deal-hand-tiller",
    name: "Heavy-Duty Mini Power Tiller 7HP",
    nepaliName: "मिनी पावर टिलर (७ हर्सपावर)",
    category: "Equipment",
    seller: "AgriTools Nepal",
    unit: "1 Complete Set",
    currentPriceNpr: 24500,
    originalPriceNpr: 28000,
    discountPercentage: 12,
    inStock: true,
    badge: "-12% OFF",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22521?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "deal-sprayer",
    name: "Knapsack Battery Sprayer (16L)",
    nepaliName: "ब्याट्री स्प्रेयर (१६ लिटर)",
    category: "Tools & Equipment",
    seller: "Krishi Equipment Hub",
    unit: "16L Dual Nozzle",
    currentPriceNpr: 4200,
    originalPriceNpr: 4800,
    discountPercentage: 12,
    inStock: true,
    badge: "-12% OFF",
    imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "deal-tea",
    name: "Highland Orthodox Specialty Tea",
    nepaliName: "इलामको हाते अर्थोडक्स चिया",
    category: "Tea & Coffee",
    seller: "Ilam Tea Estate",
    unit: "1kg Vacuum Pack",
    currentPriceNpr: 900,
    originalPriceNpr: 1050,
    discountPercentage: 14,
    inStock: true,
    badge: "-14% OFF",
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "deal-maize",
    name: "High-Yield Hybrid Maize Seeds",
    nepaliName: "उन्नत मकैको बिउ (५ केजी)",
    category: "Certified Seeds",
    seller: "Chitwan Seeds Co.",
    unit: "5kg Certified Pack",
    currentPriceNpr: 1200,
    originalPriceNpr: 1450,
    discountPercentage: 17,
    inStock: true,
    badge: "-17% OFF",
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "deal-coffee",
    name: "Arabica Roasted Coffee Beans",
    nepaliName: "अरेबिका कफी गेडा (५०० ग्राम)",
    category: "Tea & Coffee",
    seller: "Ilam Coffee Co.",
    unit: "500g Fresh Roast",
    currentPriceNpr: 1250,
    originalPriceNpr: 1400,
    discountPercentage: 11,
    inStock: true,
    badge: "-11% OFF",
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
];

// -------------------------------------------------------------
// SECTION 3: TOP MERCHANTS (VERIFIED NEPALI PRODUCERS & DISTRIBUTORS)
// -------------------------------------------------------------
export const TOP_MERCHANTS: Merchant[] = [
  {
    id: "merch-ilam-tea",
    name: "Ilam Organic Tea Cooperative",
    nepaliName: "इलाम अर्ग्यानिक चिया उत्पादक सहकारी",
    category: "Orthodox Tea & Cash Crops",
    location: "Ilam, Koshi Province",
    rating: 4.9,
    reviewCount: 340,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
    speciality: "Direct farmer-owned cooperative uniting 450+ high-altitude smallholder tea growers.",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "merch-green-agri",
    name: "Green Agri Bio-Nutrients & Inputs",
    nepaliName: "ग्रीन एग्री जैविक मल तथा पोषण",
    category: "Bio-Fertilizers & Soil Health",
    location: "Kathmandu & Lalitpur",
    rating: 4.8,
    reviewCount: 215,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=400&q=80",
    speciality: "Government lab-tested organic vermicompost, bio-potash, and biological Trichoderma.",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "merch-nuwakot-nursery",
    name: "Nuwakot Seedling & Agro Nursery",
    nepaliName: "नुवाकोट कृषि तथा बिरुवा नर्सरी",
    category: "Certified Saplings & Seedlings",
    location: "Nuwakot, Bagmati Province",
    rating: 4.9,
    reviewCount: 190,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
    speciality: "Grafted fruit saplings, polyhouse nursery seedlings, and climate-hardened rootstocks.",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "merch-chitwan-machinery",
    name: "Chitwan Agri-Machinery Hub",
    nepaliName: "चितवन कृषि यन्त्र तथा उपकरण",
    category: "Farm Machinery & Solar Pumps",
    location: "Bharatpur, Chitwan",
    rating: 4.7,
    reviewCount: 160,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22521?auto=format&fit=crop&w=400&q=80",
    speciality: "Reliable power tillers, sprayers, and drip irrigation kits with nationwide field service.",
    href: "https://connectkisan.com/bazar",
  },
];

// -------------------------------------------------------------
// SECTION 4: HIGHEST SELLERS (BEST PERFORMING PRODUCTS & TOOLS)
// -------------------------------------------------------------
export const HIGHEST_SELLERS_PRODUCTS: HighestSellerProduct[] = [
  {
    id: "seller-hand-tiller",
    name: "Mini Power Hand Tiller (7 HP Petrol)",
    nepaliName: "७ एचपी पेट्रोल मिनी पावर टिलर",
    category: "Farm Machinery",
    seller: "AgriTools Nepal",
    priceNpr: 25000,
    salesVolume: "1,450+ Units Deployed",
    demandIndicator: "Top Demand in Hilly Terrains",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb22521?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "seller-vermicompost",
    name: "Certified Bio-Fertilizer Vermicompost (50kg)",
    nepaliName: "प्रमाणित गड्यौला जैविक मल (५० केजी)",
    category: "Organic Fertilizers",
    seller: "Green Agri",
    priceNpr: 3850,
    salesVolume: "5,200+ Bags Supplied",
    demandIndicator: "Essential Soil Conditioner",
    imageUrl: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "seller-battery-sprayer",
    name: "High-Pressure Battery Sprayer (16L Dual)",
    nepaliName: "१६ लिटर ब्याट्री स्प्रेयर (डबल नोजल)",
    category: "Equipment & Tools",
    seller: "Krishi Equipment Hub",
    priceNpr: 4200,
    salesVolume: "3,100+ Sprayers Sold",
    demandIndicator: "Fast Field Pest Protection",
    imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=600&q=80",
    href: "https://connectkisan.com/bazar",
  },
  {
    id: "seller-cardamom-saplings",
    name: "High-Yield Jumbo Alainchi Saplings",
    nepaliName: "ठूलो जातको अलैंची बिरुवा",
    category: "Cash Crop Nursery",
    seller: "Ilam Nursery",
    priceNpr: 45,
    salesVolume: "40,000+ Saplings Delivered",
    demandIndicator: "Highest Re-order Rate",
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
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
