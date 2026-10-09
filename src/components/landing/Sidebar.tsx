"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { SIDEBAR_NAV_ITEMS, SidebarNavItem } from "@/data/landingData";
import {
  Home,
  Wrench,
  BookOpen,
  Info,
  Heart,
  X,
  PanelLeftClose,
  PanelLeft,
  ChevronDown,
  ChevronRight,
  Menu,
  Sparkles,
  ExternalLink,
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
  // Accordion open/close state for categories with sub-options
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "farming-knowledge": false,
    "information": false,
    "farming-services": false,
  });

  const toggleSection = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getIcon = (iconName: string, className = "w-4 h-4 shrink-0") => {
    switch (iconName) {
      case "Home":
        return <Home className={className} />;
      case "Wrench":
        return <Wrench className={className} />;
      case "BookOpen":
        return <BookOpen className={className} />;
      case "Info":
        return <Info className={className} />;
      case "Heart":
        return <Heart className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

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
        className={`hidden lg:flex flex-col shrink-0 border-r border-stone-200/80 bg-[#FAF9F5] transition-all duration-300 sticky top-16 sm:top-18 self-start h-[calc(100vh-4rem)] sm:h-[calc(100vh-4.5rem)] z-30 select-none justify-between overflow-y-auto overflow-x-hidden ${
          isDesktopExpanded ? "w-60 xl:w-64" : "w-16"
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
                  className="p-1 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
                  title="Toggle sidebar"
                >
                  <Menu className="w-4 h-4 text-stone-700" />
                </button>
                <button
                  type="button"
                  onClick={onToggleDesktop}
                  className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
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
                  className="p-1.5 rounded-lg text-stone-700 hover:text-emerald-800 hover:bg-stone-200/60 transition-colors cursor-pointer"
                  title="Expand sidebar"
                >
                  <Menu className="w-4 h-4 text-stone-800" />
                </button>
                <div className="w-6 h-px bg-stone-200" />
                <button
                  type="button"
                  onClick={onToggleDesktop}
                  className="p-1.5 rounded-lg text-stone-500 hover:text-emerald-800 hover:bg-stone-200/60 transition-colors cursor-pointer"
                  title="Expand sidebar view"
                >
                  <PanelLeft className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Navigation Items with Accordion Sub-options */}
          <nav className="space-y-1.5">
            {SIDEBAR_NAV_ITEMS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isSectionOpen = openSections[item.id] || false;

              // 1. Home Item
              if (item.id === "home") {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`flex items-center gap-3 p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      activeTab === "home"
                        ? "bg-[#064E3B] text-white shadow-xs"
                        : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                    } ${!isDesktopExpanded ? "justify-center p-2.5" : ""}`}
                    title="Home / गृहपृष्ठ"
                  >
                    {getIcon(item.iconName)}
                    {isDesktopExpanded && <span>{item.label}</span>}
                  </Link>
                );
              }

              // 2. Contribute Item
              if (item.id === "contribute") {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-stone-700 hover:bg-emerald-50 hover:text-emerald-900 group ${
                      !isDesktopExpanded ? "justify-center p-2.5 bg-[#064E3B] text-white hover:bg-emerald-900" : ""
                    }`}
                    title={`${item.label} / ${item.nepaliLabel}`}
                  >
                    <div className={`p-1 rounded-lg text-rose-600 transition-colors ${!isDesktopExpanded ? "text-white" : "group-hover:scale-110"}`}>
                      {getIcon(item.iconName)}
                    </div>
                    {isDesktopExpanded && (
                      <div className="flex items-center justify-between flex-1 min-w-0">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}
                  </a>
                );
              }

              // 3. Category with Sub-options Accordion
              return (
                <div key={item.id} className="space-y-1">
                  {/* Category Header Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      if (!isDesktopExpanded) {
                        onToggleDesktop();
                      }
                      toggleSection(item.id, e);
                    }}
                    className={`flex items-center justify-between w-full p-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-stone-700 hover:bg-emerald-50 hover:text-emerald-900 group cursor-pointer ${
                      !isDesktopExpanded ? "justify-center p-2.5" : ""
                    } ${isSectionOpen && isDesktopExpanded ? "bg-stone-100 text-stone-900" : ""}`}
                    title={`${item.label} / ${item.nepaliLabel}`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className="p-1 rounded-lg group-hover:bg-emerald-100 text-emerald-800 transition-colors">
                        {getIcon(item.iconName)}
                      </div>
                      {isDesktopExpanded && <span className="truncate">{item.label}</span>}
                    </div>

                    {isDesktopExpanded && hasChildren && (
                      <div className="text-stone-400 group-hover:text-stone-700 transition-transform">
                        {isSectionOpen ? (
                          <ChevronDown className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5" />
                        )}
                      </div>
                    )}
                  </button>

                  {/* Sub-options Dropdown List (Expanded Mode) */}
                  {isDesktopExpanded && hasChildren && isSectionOpen && (
                    <div className="pl-8 pr-1 py-1 space-y-1 border-l-2 border-emerald-600/30 ml-4 animate-fade-in">
                      {item.children?.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target={sub.isExternal ? "_blank" : undefined}
                          rel={sub.isExternal ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-between p-1.5 rounded-lg text-[11px] font-medium text-stone-600 hover:text-emerald-800 hover:bg-emerald-50/70 transition-colors group/sub"
                        >
                          <div className="truncate">
                            <span className="font-semibold text-stone-800 group-hover/sub:text-emerald-900">{sub.label}</span>
                            <span className="text-stone-400 ml-1 text-[10px]">/ {sub.nepaliLabel}</span>
                          </div>
                          {sub.isExternal && (
                            <ExternalLink className="w-2.5 h-2.5 text-stone-400 group-hover/sub:text-emerald-700 shrink-0 ml-1 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Decorative Region (Green Misty Hills & Motto) */}
        {isDesktopExpanded ? (
          <div className="p-4 m-3 rounded-2xl bg-gradient-to-t from-emerald-100/70 via-emerald-50/40 to-transparent border border-emerald-200/60 text-center space-y-1 shrink-0">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-900">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Together for</span>
            </div>
            <p className="text-[11px] font-semibold text-emerald-800">
              Better Agriculture 🍃
            </p>
          </div>
        ) : (
          <div className="p-2 mb-3 flex justify-center text-emerald-700 shrink-0">
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
          <div className="relative w-full max-w-[300px] bg-[#FAF9F5] h-full shadow-2xl flex flex-col justify-between z-10 animate-slide-in-left overflow-y-auto">
            
            {/* Drawer Top Header */}
            <div>
              <div className="p-4 border-b border-stone-200/80 flex items-center justify-between bg-white">
                <Logo variant="default" width={135} height={30} />
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items in Mobile Drawer with Accordions */}
              <nav className="p-3 space-y-1.5">
                {SIDEBAR_NAV_ITEMS.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isSectionOpen = openSections[item.id] || false;

                  // 1. Home
                  if (item.id === "home") {
                    return (
                      <Link
                        key={item.id}
                        href="/"
                        onClick={onCloseMobile}
                        className="flex items-center gap-3 p-3 rounded-xl text-sm font-semibold bg-[#064E3B] text-white shadow-xs"
                      >
                        {getIcon(item.iconName)}
                        <span>Home</span>
                      </Link>
                    );
                  }

                  // 2. Contribute
                  if (item.id === "contribute") {
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onCloseMobile}
                        className="flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-100"
                      >
                        <div className="flex items-center gap-3">
                          <Heart className="w-4 h-4 text-rose-600" />
                          <span>{item.label}</span>
                        </div>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      </a>
                    );
                  }

                  // 3. Accordion Categories
                  return (
                    <div key={item.id} className="space-y-1">
                      <button
                        type="button"
                        onClick={() => toggleSection(item.id)}
                        className="flex items-center justify-between w-full p-3 rounded-xl text-sm font-semibold text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="text-emerald-800">
                            {getIcon(item.iconName)}
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <div className="text-stone-400">
                          {isSectionOpen ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      {/* Sub-options for Mobile */}
                      {hasChildren && isSectionOpen && (
                        <div className="pl-6 pr-2 py-1 space-y-1 border-l-2 border-emerald-600/30 ml-4 animate-fade-in">
                          {item.children?.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              target={sub.isExternal ? "_blank" : undefined}
                              rel={sub.isExternal ? "noopener noreferrer" : undefined}
                              onClick={onCloseMobile}
                              className="flex items-center justify-between p-2 rounded-lg text-xs font-medium text-stone-700 hover:text-emerald-900 hover:bg-emerald-50/80 transition-colors"
                            >
                              <div>
                                <span className="font-semibold text-stone-900">{sub.label}</span>
                                <span className="text-stone-500 ml-1 text-[11px]">/ {sub.nepaliLabel}</span>
                              </div>
                              {sub.isExternal && (
                                <ExternalLink className="w-3 h-3 text-stone-400 shrink-0 ml-1" />
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Misty Landscape Footer in Drawer */}
            <div className="p-5 border-t border-emerald-200/80 bg-gradient-to-t from-emerald-100/80 via-emerald-50/50 to-transparent text-center space-y-1 shrink-0">
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
