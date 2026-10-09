"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import {
  Menu,
  Search,
  X,
  ShoppingBag,
  Bell,
  User,
  PanelLeft,
} from "lucide-react";

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export function Header({ onToggleSidebar, isSidebarOpen }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.open(
        `https://connectkisan.com/bazar?q=${encodeURIComponent(searchQuery.trim())}`,
        "_blank"
      );
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all w-full max-w-full overflow-hidden">
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
        
        {/* Main Desktop & Mobile Header Row */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-0.5"
              aria-label="Connect Kisan Home"
            >
              <Logo variant="default" width={150} height={34} />
            </Link>
          </div>

          {/* Center: Search Bar (Desktop - Expanded Primary Element) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-3 lg:mx-6">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <div
                className={`flex items-center w-full bg-white rounded-full border transition-all duration-200 h-11 sm:h-12 px-4 shadow-2xs ${
                  isSearchFocused
                    ? "border-emerald-600 ring-2 ring-emerald-600/20"
                    : "border-stone-300 hover:border-stone-400"
                }`}
              >
                <Search className="w-4.5 h-4.5 text-stone-400 mr-2.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search for crops, products, prices, or anything..."
                  className="w-full py-1 text-sm sm:text-base bg-transparent text-stone-900 placeholder:text-stone-400 outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-1 text-stone-400 hover:text-stone-600 rounded-full"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            
            {/* Bazar Green Pill Button (Desktop - Increased padding and typography) */}
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center gap-1.5 bg-[#047857] hover:bg-[#064E3B] text-white text-sm sm:text-base font-bold px-5 sm:px-6 py-2.5 rounded-full shadow-2xs hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Bazar</span>
            </a>

            {/* Notification Bell with Red Badge */}
            <button
              type="button"
              className="relative p-2 sm:p-2.5 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {/* User Icon Circle */}
            <div className="w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600">
              <User className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
            </div>

            {/* Login Link */}
            <a
              href="https://connectkisan.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-bold text-stone-800 hover:text-emerald-800 transition-colors px-1.5 py-1"
            >
              Login
            </a>

          </div>

        </div>

        {/* Mobile Sub-Header Row: Three-Line Menu Icon + Bazar Button + Search Bar */}
        <div className="pb-3 pt-0.5 md:hidden w-full max-w-full">
          <div className="flex items-center gap-2.5 sm:gap-3 w-full max-w-full">
            
            {/* 1. Sidebar Toggle Button: Original Three-Line Hamburger Icon (No Circle Enclosure) */}
            <button
              type="button"
              onClick={onToggleSidebar}
              className="inline-flex items-center justify-center p-1.5 text-stone-800 hover:text-emerald-800 hover:bg-stone-100 rounded-lg transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
              title="Toggle sidebar navigation"
            >
              <Menu className="w-6 h-6 text-stone-800 stroke-[2.2]" />
            </button>

            {/* 2. Bazar Button (Prominent Green Pill with Refined Padding & Typography) */}
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 bg-[#047857] hover:bg-[#064E3B] text-white text-xs sm:text-sm font-bold rounded-full shadow-2xs transition-all shrink-0 cursor-pointer"
              title="Explore Bazar"
            >
              <span>Bazar</span>
            </a>

            {/* 3. Search Bar Input (Expanded Height & Width filling remaining space) */}
            <form onSubmit={handleSearchSubmit} className="flex-1 min-w-0">
              <div className="flex items-center h-10 w-full bg-white rounded-full border border-stone-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 px-3.5 shadow-2xs">
                <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search crops, prices..."
                  className="w-full py-0.5 text-xs sm:text-sm bg-transparent text-stone-900 placeholder:text-stone-400 outline-none min-w-0"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-0.5 text-stone-400 hover:text-stone-600 shrink-0"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>

          </div>
        </div>

      </div>
    </header>
  );
}
