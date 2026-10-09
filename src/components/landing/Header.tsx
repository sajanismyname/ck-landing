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
    <header className="sticky top-0 z-40 bg-[#FAF9F5] border-b border-stone-200/80 transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Main Desktop & Mobile Header Row */}
        <div className="flex items-center justify-between h-16 sm:h-18 gap-3 sm:gap-6">
          
          {/* Left: Mobile Sidebar Toggle + Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile / Collapsed Sidebar Toggle Button */}
            <button
              type="button"
              onClick={onToggleSidebar}
              className="lg:hidden p-2 -ml-1 rounded-xl text-stone-700 hover:text-emerald-800 hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 transition-colors cursor-pointer"
              aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-stone-800" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-0.5"
              aria-label="Connect Kisan Home"
            >
              <Logo variant="default" width={145} height={32} />
            </Link>
          </div>

          {/* Center: Search Bar for crops, products, prices, or anything */}
          <div className="hidden md:flex flex-1 max-w-xl mx-2">
            <form onSubmit={handleSearchSubmit} className="w-full relative">
              <div
                className={`flex items-center w-full bg-white rounded-full border transition-all duration-200 px-3.5 py-1.5 shadow-2xs ${
                  isSearchFocused
                    ? "border-emerald-600 ring-2 ring-emerald-600/20"
                    : "border-stone-300 hover:border-stone-400"
                }`}
              >
                <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search for crops, products, prices, or anything..."
                  className="w-full py-1 text-xs sm:text-sm bg-transparent text-stone-900 placeholder:text-stone-400 outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-1 text-stone-400 hover:text-stone-600 rounded-full"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Right: Bazar Pill Button + Notification Bell + User Avatar + Login */}
          <div className="flex items-center gap-2 sm:gap-3.5 shrink-0">
            
            {/* Bazar Green Pill Button */}
            <a
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#047857] hover:bg-[#064E3B] text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-2xs transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Bazar</span>
            </a>

            {/* Notification Bell with Red Badge */}
            <button
              type="button"
              className="relative p-2 rounded-full text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            {/* User Icon Circle */}
            <div className="w-8 h-8 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-600">
              <User className="w-4 h-4" />
            </div>

            {/* Login Link */}
            <a
              href="https://connectkisan.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-semibold text-stone-800 hover:text-emerald-800 transition-colors px-1 py-1"
            >
              Login
            </a>

          </div>

        </div>

        {/* Mobile Search Row (Dedicated Row on Viewports < 768px) */}
        <div className="pb-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="w-full">
            <div className="flex items-center w-full bg-white rounded-full border border-stone-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20 px-3 py-1.5 shadow-2xs">
              <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for crops, products, prices..."
                className="w-full py-1 text-xs bg-transparent text-stone-900 placeholder:text-stone-400 outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="p-1 text-stone-400 hover:text-stone-600"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </form>
        </div>

      </div>
    </header>
  );
}
