"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Search,
  X,
  ShoppingBag,
  User,
  PanelLeftClose,
  PanelLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export function Header({ onToggleSidebar, isSidebarOpen }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to Bazar or knowledge search
      window.open(
        `https://connectkisan.com/bazar?q=${encodeURIComponent(searchQuery.trim())}`,
        "_blank"
      );
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs transition-all">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Desktop & Mobile Header Row */}
        <div className="flex items-center justify-between h-16 sm:h-18 gap-3 sm:gap-6">
          
          {/* Left: Sidebar Toggle + Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Sidebar Toggle Button */}
            <button
              type="button"
              onClick={onToggleSidebar}
              className="p-2 -ml-1 rounded-xl text-stone-700 hover:text-emerald-800 hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors cursor-pointer"
              aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-stone-800" />
            </button>

            {/* Logo with hover state */}
            <Link
              href="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-0.5"
              aria-label="Connect Kisan Home"
            >
              <Logo variant="default" width={150} height={34} />
            </Link>
          </div>

          {/* Center: Integrated Search Bar (Visible on Desktop / Tablet) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-2">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <div
                className={`flex items-center w-full bg-white rounded-xl border transition-all duration-200 shadow-2xs ${
                  isSearchFocused
                    ? "border-emerald-600 ring-2 ring-emerald-600/20"
                    : "border-stone-300 hover:border-stone-400"
                }`}
              >
                <div className="pl-3.5 pr-2 text-stone-400">
                  <Search className="w-4 h-4 text-stone-500" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search products, crops, seeds, equipment, Kalimati rates..."
                  className="w-full py-2.5 text-xs sm:text-sm bg-transparent text-stone-900 placeholder:text-stone-400 outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-1.5 mr-1 text-stone-400 hover:text-stone-600 rounded-md"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg mr-1.5 transition-colors shrink-0"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Right: Bazar Link + Language + Login + CTA */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            
            {/* Direct Bazar Link */}
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-stone-800 hover:text-emerald-800 px-2.5 py-1.5 rounded-lg hover:bg-emerald-50/70 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-700" />
              <span className="hidden sm:inline">Bazar</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center text-xs font-medium text-stone-600 gap-1 px-1.5 py-1 rounded-md bg-stone-100 border border-stone-200/80">
              <button
                type="button"
                onClick={() => setLanguage("ne")}
                className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                  language === "ne"
                    ? "bg-white text-emerald-800 font-bold shadow-2xs"
                    : "hover:text-stone-900"
                }`}
              >
                नेपाली
              </button>
              <span className="text-stone-300">|</span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                  language === "en"
                    ? "bg-white text-emerald-800 font-bold shadow-2xs"
                    : "hover:text-stone-900"
                }`}
              >
                EN
              </button>
            </div>

            {/* Login Link */}
            <a
              href="https://connectkisan.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-emerald-800 transition-colors px-2 py-1.5"
            >
              <User className="w-4 h-4 text-stone-500" />
              <span className="hidden sm:inline">Login</span>
            </a>

            {/* Get Started Button */}
            <Button
              asChild
              size="sm"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-xs transition-all hover:scale-[1.02]"
            >
              <a href="#get-started" className="flex items-center gap-1">
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline ml-0.5" />
              </a>
            </Button>

          </div>

        </div>

        {/* Mobile Search Row (Dedicated Row on Viewports < 768px) */}
        <div className="pb-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <div className="flex items-center w-full bg-white rounded-xl border border-stone-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 shadow-2xs">
              <div className="pl-3 pr-2 text-stone-400">
                <Search className="w-4 h-4 text-stone-500" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, crops, seeds, market rates..."
                className="w-full py-2 text-xs bg-transparent text-stone-900 placeholder:text-stone-400 outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 mr-1 text-stone-400 hover:text-stone-600"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                type="submit"
                className="bg-emerald-700 text-white text-[11px] font-bold px-2.5 py-1 rounded-md mr-1.5"
              >
                Go
              </button>
            </div>
          </form>
        </div>

      </div>
    </header>
  );
}
