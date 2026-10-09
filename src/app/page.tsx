"use client";

import * as React from "react";
import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Sidebar } from "@/components/landing/Sidebar";
import { Hero } from "@/components/landing/Hero";
import { TrustStats } from "@/components/landing/TrustStats";
import { TodaysDeals } from "@/components/landing/TodaysDeals";
import { TopMerchants } from "@/components/landing/TopMerchants";
import { HighestSellers } from "@/components/landing/HighestSellers";
import { ContributeSection } from "@/components/landing/ContributeSection";
import { TheChallenge } from "@/components/landing/TheChallenge";
import { FeaturePillars } from "@/components/landing/FeaturePillars";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DigitalAgriculture } from "@/components/landing/DigitalAgriculture";
import { MarketplaceShowcase } from "@/components/landing/MarketplaceShowcase";
import { KnowledgeSection } from "@/components/landing/KnowledgeSection";
import { FarmerStories } from "@/components/landing/FarmerStories";
import { ContactSection } from "@/components/landing/ContactSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { MobileBottomNav } from "@/components/landing/MobileBottomNav";

export default function HomePage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarExpanded, setIsDesktopSidebarExpanded] = useState(true);

  // Retain sidebar state across monitor, laptop, and mobile devices
  React.useEffect(() => {
    try {
      const savedState = localStorage.getItem("ck_sidebar_expanded");
      if (savedState !== null) {
        setIsDesktopSidebarExpanded(JSON.parse(savedState));
      } else if (typeof window !== "undefined" && window.innerWidth < 1280 && window.innerWidth >= 1024) {
        // On laptop viewports, default to icon strip mode to maximize content width
        setIsDesktopSidebarExpanded(false);
      }
    } catch {
      // ignore localStorage exceptions
    }
  }, []);

  const handleToggleSidebar = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsMobileSidebarOpen((prev) => !prev);
    } else {
      setIsDesktopSidebarExpanded((prev) => {
        const next = !prev;
        try {
          localStorage.setItem("ck_sidebar_expanded", JSON.stringify(next));
        } catch {}
        return next;
      });
    }
  };

  const handleToggleDesktop = () => {
    setIsDesktopSidebarExpanded((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("ck_sidebar_expanded", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Header with Search, Bazar, Login, Language, and Sidebar Toggle */}
      <Header
        onToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isDesktopSidebarExpanded}
      />

      {/* Main Layout Container with Persistent Sticky Sidebar and Content Stream */}
      <div className="flex-1 flex w-full max-w-[1600px] mx-auto items-start relative">
        {/* 2. Integrated Sidebar: Sticky & Persistent throughout Every Scroll */}
        <Sidebar
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          isDesktopExpanded={isDesktopSidebarExpanded}
          onToggleDesktop={handleToggleDesktop}
        />

        {/* 3. Main Content Area */}
        <main className="flex-1 min-w-0 w-full">
          {/* Section 1: Hero / CTA */}
          <Hero />

          {/* Trust Statistics Bar */}
          <TrustStats />

          {/* Section 2: Today's Deals (Without Add to Cart per design.md) */}
          <TodaysDeals />

          {/* Section 3: Top Merchants */}
          <TopMerchants />

          {/* Section 4: Highest Sellers (Without Add to Cart per design.md) */}
          <HighestSellers />

          {/* Section 5: Community Contribution CTA (Be Part of a Stronger Agricultural Community) */}
          <ContributeSection />

          {/* Section 6: Existing Agriculture Ecosystem & Tools */}
          <TheChallenge />
          <FeaturePillars />
          <HowItWorks />
          <DigitalAgriculture />
          <MarketplaceShowcase />
          <KnowledgeSection />
          <FarmerStories />
          <ContactSection />
          <FinalCTA />
        </main>
      </div>

      {/* Multi-column Semantic Footer */}
      <div className="pb-16 lg:pb-0">
        <Footer />
      </div>

      {/* 4. Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomNav />
    </div>
  );
}
