"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import {
  Home,
  BookOpen,
  Info,
  Heart,
  X,
  PanelLeftClose,
  PanelLeft,
  ChevronRight,
  Menu,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  isDesktopExpanded: boolean;
  onToggleDesktop: () => void;
  activeTab?: string;
}

export function Sidebar({
  isMobileOpen,
  onCloseMobile,
  isDesktopExpanded,
  onToggleDesktop,
  activeTab = "home",
}: SidebarProps) {
  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        onCloseMobile();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen, onCloseMobile]);

  return (
    <>
      {/* =========================================================================
          1. DESKTOP INTEGRATED LEFT SIDEBAR (STICKY / PERSISTENT COLUMN ON LEFT)
      ========================================================================= */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 border-r border-stone-200/80 bg-[#FAF9F5] transition-all duration-300 sticky top-18 h-[calc(100vh-4.5rem)] z-30 select-none justify-between ${
          isDesktopExpanded ? "w-56 xl:w-60" : "w-16"
        }`}
        aria-label="Sidebar Navigation"
      >
        {/* Top Navigation Region */}
        <div className="p-3 space-y-2">
          
          {/* Collapse / Expand Toggle Button in Strip Header */}
          <div className="flex items-center justify-between pb-2 border-b border-stone-200/80 mb-2">
            {isDesktopExpanded ? (
              <div className="flex items-center justify-between w-full px-1">
                <button
                  type="button"
                  onClick={onToggleDesktop}
                  className="p-1 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                  title="Toggle sidebar"
                >
                  <Menu className="w-4 h-4 text-stone-700" />
                </button>
                <button
                  type="button"
                  onClick={onToggleDesktop}
                  className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                  title="Collapse sidebar"
                >
                  <PanelLeftClose className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={onToggleDesktop}
                  className="p-1.5 rounded-lg text-stone-700 hover:text-emerald-800 hover:bg-stone-200/60 transition-colors"
                  title="Expand sidebar"
                >
                  <Menu className="w-4 h-4 text-stone-800" />
                </button>
                <div className="w-6 h-px bg-stone-200" />
                <button
                  type="button"
                  onClick={onToggleDesktop}
                  className="p-1.5 rounded-lg text-stone-500 hover:text-emerald-800 hover:bg-stone-200/60 transition-colors"
                  title="Expand sidebar view"
                >
                  <PanelLeft className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Navigation Items: Home, Farming Knowledge, Information, Contribute */}
          <nav className="space-y-2">
            
            {/* 1. Home (Active pill in wireframe) */}
            <Link
              href="/"
              className={`flex items-center gap-3 p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "home"
                  ? "bg-[#064E3B] text-white shadow-xs"
                  : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
              } ${!isDesktopExpanded ? "justify-center p-2.5" : ""}`}
              title="Home"
            >
              <Home className="w-4 h-4 shrink-0" />
              {isDesktopExpanded && <span>Home</span>}
            </Link>

            {/* 2. Farming Knowledge */}
            <a
              href="#knowledge"
              className={`flex items-center gap-3 p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-stone-700 hover:bg-emerald-50 hover:text-emerald-900 group ${
                !isDesktopExpanded ? "justify-center p-2.5" : ""
              }`}
              title="Farming Knowledge"
            >
              <div className="p-1 rounded-lg group-hover:bg-emerald-100 text-emerald-800 transition-colors">
                <BookOpen className="w-4 h-4 shrink-0" />
              </div>
              {isDesktopExpanded && <span className="truncate">Farming Knowledge</span>}
            </a>

            {/* 3. Information */}
            <a
              href="https://connectkisan.com/kalimati-market-price"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-stone-700 hover:bg-stone-100 hover:text-stone-900 group ${
                !isDesktopExpanded ? "justify-center p-2.5" : ""
              }`}
              title="Information"
            >
              <div className="p-1 rounded-lg group-hover:bg-stone-200 text-stone-700 transition-colors">
                <Info className="w-4 h-4 shrink-0" />
              </div>
              {isDesktopExpanded && <span>Information</span>}
            </a>

            {/* 4. Contribute (Heart Pill) */}
            <a
              href="https://connectkisan.com/en/contribution"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-stone-700 hover:bg-emerald-50 hover:text-emerald-900 group ${
                !isDesktopExpanded ? "justify-center p-2.5 bg-[#064E3B] text-white hover:bg-emerald-900" : ""
              }`}
              title="Contribute"
            >
              <div className={`p-1 rounded-lg text-emerald-800 transition-colors ${!isDesktopExpanded ? "text-white" : "group-hover:text-emerald-900"}`}>
                <Heart className="w-4 h-4 shrink-0" />
              </div>
              {isDesktopExpanded && <span>Contribute</span>}
            </a>

          </nav>
        </div>

        {/* Bottom Decorative Region (Green Misty Hills & Motto) */}
        {isDesktopExpanded ? (
          <div className="p-4 m-3 rounded-2xl bg-gradient-to-t from-emerald-100/70 via-emerald-50/40 to-transparent border border-emerald-200/60 text-center space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-900">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Together for</span>
            </div>
            <p className="text-[11px] font-semibold text-emerald-800">
              Better Agriculture 🍃
            </p>
          </div>
        ) : (
          <div className="p-2 mb-3 flex justify-center text-emerald-700">
            <span className="text-xs">🍃</span>
          </div>
        )}

      </aside>

      {/* =========================================================================
          2. MOBILE SLIDE-OVER OVERLAY DRAWER (APPEARS ON LEFT SIDE ABOVE PAGE)
      ========================================================================= */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop Overlay (Tap Outside to Dismiss) */}
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
            onClick={onCloseMobile}
            aria-hidden="true"
          />

          {/* Slide-over Drawer on Left Side */}
          <div className="relative w-full max-w-[280px] bg-[#FAF9F5] h-full shadow-2xl flex flex-col justify-between z-10 animate-slide-in-left overflow-y-auto">
            
            {/* Drawer Top Header */}
            <div>
              <div className="p-4 border-b border-stone-200/80 flex items-center justify-between bg-white">
                <Logo variant="default" width={135} height={30} />
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items in Mobile Drawer */}
              <nav className="p-4 space-y-2">
                {/* 1. Home */}
                <Link
                  href="/"
                  onClick={onCloseMobile}
                  className="flex items-center gap-3 p-3 rounded-xl text-sm font-semibold bg-[#064E3B] text-white shadow-xs"
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>

                {/* 2. Farming Knowledge */}
                <a
                  href="#knowledge"
                  onClick={onCloseMobile}
                  className="flex items-center gap-3 p-3 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-100"
                >
                  <BookOpen className="w-4 h-4 text-emerald-800" />
                  <span>Farming Knowledge</span>
                </a>

                {/* 3. Information */}
                <a
                  href="https://connectkisan.com/kalimati-market-price"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onCloseMobile}
                  className="flex items-center gap-3 p-3 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-100"
                >
                  <Info className="w-4 h-4 text-stone-700" />
                  <span>Information</span>
                </a>

                {/* 4. Contribute */}
                <a
                  href="https://connectkisan.com/en/contribution"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onCloseMobile}
                  className="flex items-center gap-3 p-3 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-100"
                >
                  <Heart className="w-4 h-4 text-rose-600" />
                  <span>Contribute</span>
                </a>
              </nav>
            </div>

            {/* Bottom Misty Landscape Footer in Drawer */}
            <div className="p-5 border-t border-emerald-200/80 bg-gradient-to-t from-emerald-100/80 via-emerald-50/50 to-transparent text-center space-y-1">
              <p className="text-xs font-bold text-emerald-950">
                Together for
              </p>
              <p className="text-xs font-bold text-emerald-800">
                Better Agriculture 🍃
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
