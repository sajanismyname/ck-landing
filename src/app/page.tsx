"use client";

import * as React from "react";
import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Sidebar } from "@/components/landing/Sidebar";
import { Hero } from "@/components/landing/Hero";
import { RolesSection } from "@/components/landing/RolesSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { AppDownloadBanner } from "@/components/landing/AppDownloadBanner";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Retain sidebar state and login state across sessions and viewports
  React.useEffect(() => {
    try {
      const savedState = localStorage.getItem("ck_sidebar_expanded");
      if (savedState !== null) {
        setIsDesktopSidebarExpanded(JSON.parse(savedState));
      } else if (typeof window !== "undefined" && window.innerWidth < 1280 && window.innerWidth >= 1024) {
        // On laptop viewports, default to icon strip mode to maximize content width
        setIsDesktopSidebarExpanded(false);
      }

      const savedLogin = localStorage.getItem("ck_logged_in");
      if (savedLogin !== null) {
        setIsLoggedIn(JSON.parse(savedLogin));
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

  const handleToggleLogin = () => {
    setIsLoggedIn((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("ck_logged_in", JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-900 selection:bg-emerald-100 selection:text-emerald-900 w-full max-w-[100vw]">
      {/* 1. Header with Search, Bazar, Login, Language, and Sidebar Toggle */}
      <Header
        onToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isDesktopSidebarExpanded}
        isLoggedIn={isLoggedIn}
        onToggleLogin={handleToggleLogin}
      />

      {/* Main Layout Container with Persistent Sticky Sidebar and Content Stream */}
      <div className="flex-1 flex w-full max-w-[1600px] mx-auto items-start relative min-w-0">
        {/* 2. Integrated Sidebar: Sticky & Persistent throughout Every Scroll */}
        <Sidebar
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
          isDesktopExpanded={isDesktopSidebarExpanded}
          onToggleDesktop={handleToggleDesktop}
          isLoggedIn={isLoggedIn}
          onLogout={handleToggleLogin}
        />

        {/* 3. Main Content Area */}
        <main className="flex-1 min-w-0 w-full overflow-x-clip">
          {/* Section 1: Hero / CTA */}
          <Hero isLoggedIn={isLoggedIn} />

          {/* Section 2: Roles of Connect Kisan (Hidden while logged in) */}
          {!isLoggedIn && <RolesSection />}

          {/* Section 3: About Us + 3-Metric Stats Card (Hidden while logged in) */}
          {!isLoggedIn && <AboutSection />}

          {/* Section 4: Today's Deals (Without Add to Cart per design.md) */}
          <TodaysDeals />

          {/* Section 5: Top Merchants */}
          <TopMerchants />

          {/* Section 6: Highest Sellers (Without Add to Cart per design.md) */}
          <HighestSellers />

          {/* Section 7: Mobile App Download Banner (Hidden while logged in) */}
          {!isLoggedIn && <AppDownloadBanner />}

          {/* Section 8: Community Contribution Section (Direct destination for mobile bottom nav) */}
          <ContributeSection />

          {/* Section 9: Visitor Onboarding & Promotional Storytelling */}
          {!isLoggedIn && (
            <>
              {/* The Agricultural Challenge Narrative */}
              <TheChallenge />
              {/* What can you do on Connect Kisan? */}
              <FeaturePillars />
              {/* A Clear 4-Step Process: From farm to market, made simpler */}
              <HowItWorks />
              {/* Technology that works for farmers: Practical digital tools */}
              <DigitalAgriculture />
            </>
          )}

          {/* Section 10: Core Farmer Marketplace */}
          <MarketplaceShowcase />

          {/* Section 11: Real Farmers. Real Results. (3-Card Testimonials / Reviews - Hidden while logged in) */}
          {!isLoggedIn && <FarmerStories />}

          {/* Section 12: Latest Agricultural Guides & Insights (Photo-Rich Guides) */}
          <KnowledgeSection />

          {/* Section 13: Direct Farmer Support Inquiry Form & App QR Code (Hidden while logged in) */}
          {!isLoggedIn && <ContactSection />}

          {/* Section 14: Final Onboarding Registration Banner */}
          {!isLoggedIn && <FinalCTA />}
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
