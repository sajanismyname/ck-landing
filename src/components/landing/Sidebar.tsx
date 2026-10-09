"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SIDEBAR_NAV_ITEMS, SidebarNavItem } from "@/data/landingData";
import { Logo } from "@/components/ui/logo";
import {
  Home,
  BookOpen,
  Info,
  Heart,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  X,
  Sparkles,
  ShoppingBag,
  User,
  ShieldCheck,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";

interface SidebarProps {
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  isDesktopExpanded: boolean;
  onToggleDesktop: () => void;
}

export function Sidebar({
  isMobileOpen,
  onCloseMobile,
  isDesktopExpanded,
  onToggleDesktop,
}: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    "farming-knowledge": true,
    information: false,
  });

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

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case "Home":
        return <Home className={className} />;
      case "BookOpen":
        return <BookOpen className={className} />;
      case "Info":
        return <Info className={className} />;
      case "Heart":
        return <Heart className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  return (
    <>
      {/* =========================================================================
          1. DESKTOP INTEGRATED PERSISTENT SIDEBAR (VISIBLE ON LG SCREENS >= 1024PX)
      ========================================================================= */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 border-r border-stone-200/90 bg-[#FAF9F5] transition-all duration-300 sticky top-18 h-[calc(100vh-4.5rem)] z-30 select-none ${
          isDesktopExpanded ? "w-64 xl:w-72" : "w-20"
        }`}
        aria-label="Sidebar Navigation"
      >
        {/* Top Header / Toggle inside Sidebar */}
        <div className="p-4 border-b border-stone-200/80 flex items-center justify-between">
          {isDesktopExpanded ? (
            <div className="flex items-center justify-between w-full">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Menu / मेनु
              </span>
              <button
                type="button"
                onClick={onToggleDesktop}
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                title="Collapse sidebar"
                aria-label="Collapse sidebar"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <button
                type="button"
                onClick={onToggleDesktop}
                className="p-2 rounded-lg text-stone-600 hover:text-emerald-800 hover:bg-stone-200/60 transition-colors"
                title="Expand sidebar"
                aria-label="Expand sidebar"
              >
                <PanelLeft className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1.5 custom-scrollbar">
          {SIDEBAR_NAV_ITEMS.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = !!expandedSections[item.id];
            const isContribute = item.id === "contribute";

            if (hasChildren) {
              return (
                <div key={item.id} className="space-y-1">
                  {/* Category Header Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!isDesktopExpanded) onToggleDesktop();
                      toggleSection(item.id);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer group ${
                      isExpanded
                        ? "bg-emerald-50/80 text-emerald-900"
                        : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                    } ${!isDesktopExpanded ? "justify-center" : ""}`}
                    title={!isDesktopExpanded ? item.label : undefined}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-emerald-700 group-hover:scale-110 transition-transform">
                        {getIcon(item.iconName)}
                      </div>
                      {isDesktopExpanded && (
                        <div className="text-left">
                          <span className="block leading-tight">{item.label}</span>
                          <span className="text-[10px] text-stone-500 font-normal">{item.nepaliLabel}</span>
                        </div>
                      )}
                    </div>
                    {isDesktopExpanded && (
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-emerald-700" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Expanded Sub-items in Desktop Sidebar */}
                  {isDesktopExpanded && isExpanded && (
                    <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-emerald-200 ml-5 my-1">
                      {item.children?.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          target={sub.isExternal ? "_blank" : undefined}
                          rel={sub.isExternal ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-medium text-stone-600 hover:text-emerald-800 hover:bg-emerald-50/60 transition-colors group"
                        >
                          <span className="truncate">{sub.label}</span>
                          {sub.isExternal && (
                            <ExternalLink className="w-3 h-3 text-stone-400 opacity-60 group-hover:opacity-100" />
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Direct item component: Link for internal root or anchor for external/hash
            const isInternalRoot = item.href === "/";

            if (isInternalRoot) {
              return (
                <Link
                  key={item.id}
                  href="/"
                  className={`flex items-center gap-3 p-2.5 rounded-xl text-sm font-semibold transition-all group ${
                    isContribute
                      ? "bg-emerald-800 text-white shadow-xs hover:bg-emerald-900"
                      : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                  } ${!isDesktopExpanded ? "justify-center" : ""}`}
                  title={!isDesktopExpanded ? item.label : undefined}
                >
                  <div className={isContribute ? "text-emerald-200" : "text-emerald-700 group-hover:scale-110 transition-transform"}>
                    {getIcon(item.iconName)}
                  </div>
                  {isDesktopExpanded && (
                    <div className="flex-1 text-left flex items-center justify-between">
                      <div>
                        <span className="block leading-tight">{item.label}</span>
                        <span className={`text-[10px] font-normal ${isContribute ? "text-emerald-200" : "text-stone-500"}`}>
                          {item.nepaliLabel}
                        </span>
                      </div>
                      {item.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-400 text-stone-900 ml-1">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              );
            }

            return (
              <a
                key={item.id}
                href={item.href}
                target={item.isExternal ? "_blank" : undefined}
                rel={item.isExternal ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-3 p-2.5 rounded-xl text-sm font-semibold transition-all group ${
                  isContribute
                    ? "bg-emerald-800 text-white shadow-xs hover:bg-emerald-900"
                    : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                } ${!isDesktopExpanded ? "justify-center" : ""}`}
                title={!isDesktopExpanded ? item.label : undefined}
              >
                <div className={isContribute ? "text-emerald-200" : "text-emerald-700 group-hover:scale-110 transition-transform"}>
                  {getIcon(item.iconName)}
                </div>
                {isDesktopExpanded && (
                  <div className="flex-1 text-left flex items-center justify-between">
                    <div>
                      <span className="block leading-tight">{item.label}</span>
                      <span className={`text-[10px] font-normal ${isContribute ? "text-emerald-200" : "text-stone-500"}`}>
                        {item.nepaliLabel}
                      </span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-400 text-stone-900 ml-1">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Sidebar Bottom Trust Badge */}
        {isDesktopExpanded && (
          <div className="p-3.5 m-3 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Verified Platform</span>
            </div>
            <p className="text-[11px] text-stone-500 leading-snug">
              Direct market connectivity across 77 districts of Nepal.
            </p>
          </div>
        )}
      </aside>

      {/* =========================================================================
          2. MOBILE SLIDE-OVER DRAWER (INSPIRED BY ESEWA DRAWER INTERACTION)
      ========================================================================= */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Backdrop Overlay (Tap to Dismiss) */}
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300 animate-fade-in"
            onClick={onCloseMobile}
            aria-hidden="true"
          />

          {/* Slide-over Drawer Panel */}
          <div className="relative w-full max-w-xs sm:max-w-sm bg-[#FAF9F5] h-full shadow-2xl flex flex-col justify-between z-10 animate-slide-in-right overflow-y-auto">
            
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-stone-200/80 flex items-center justify-between bg-white sticky top-0 z-20">
              <Logo variant="default" width={140} height={32} />
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body Items */}
            <div className="flex-1 p-4 space-y-2">
              
              {/* Navigation Items */}
              {SIDEBAR_NAV_ITEMS.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = !!expandedSections[item.id];
                const isContribute = item.id === "contribute";

                if (hasChildren) {
                  return (
                    <div key={item.id} className="rounded-2xl bg-white border border-stone-200/80 overflow-hidden shadow-2xs">
                      <button
                        type="button"
                        onClick={() => toggleSection(item.id)}
                        className="w-full flex items-center justify-between p-3.5 text-left text-sm font-bold text-stone-900 hover:bg-stone-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                            {getIcon(item.iconName, "w-4 h-4")}
                          </div>
                          <div>
                            <span className="block leading-none">{item.label}</span>
                            <span className="text-[11px] text-stone-500 font-normal">{item.nepaliLabel}</span>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-emerald-700" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="p-2 bg-stone-50/70 border-t border-stone-100 space-y-1">
                          {item.children?.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              target={sub.isExternal ? "_blank" : undefined}
                              rel={sub.isExternal ? "noopener noreferrer" : undefined}
                              onClick={onCloseMobile}
                              className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-stone-200/60 text-xs font-medium text-stone-800 hover:bg-emerald-50 transition-colors"
                            >
                              <span>{sub.label}</span>
                              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Direct items in mobile drawer
                if (item.href === "/") {
                  return (
                    <Link
                      key={item.id}
                      href="/"
                      onClick={onCloseMobile}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border text-sm font-bold transition-all shadow-2xs ${
                        isContribute
                          ? "bg-emerald-800 border-emerald-900 text-white"
                          : "bg-white border-stone-200/80 text-stone-900 hover:bg-stone-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isContribute ? "bg-emerald-700 text-emerald-200" : "bg-emerald-50 text-emerald-700"
                        }`}>
                          {getIcon(item.iconName, "w-4 h-4")}
                        </div>
                        <div>
                          <span className="block leading-none">{item.label}</span>
                          <span className={`text-[11px] font-normal ${isContribute ? "text-emerald-200" : "text-stone-500"}`}>
                            {item.nepaliLabel}
                          </span>
                        </div>
                      </div>
                      {item.badge ? (
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-400 text-stone-900">
                          {item.badge}
                        </span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-stone-400" />
                      )}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    onClick={onCloseMobile}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border text-sm font-bold transition-all shadow-2xs ${
                      isContribute
                        ? "bg-emerald-800 border-emerald-900 text-white"
                        : "bg-white border-stone-200/80 text-stone-900 hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isContribute ? "bg-emerald-700 text-emerald-200" : "bg-emerald-50 text-emerald-700"
                      }`}>
                        {getIcon(item.iconName, "w-4 h-4")}
                      </div>
                      <div>
                        <span className="block leading-none">{item.label}</span>
                        <span className={`text-[11px] font-normal ${isContribute ? "text-emerald-200" : "text-stone-500"}`}>
                          {item.nepaliLabel}
                        </span>
                      </div>
                    </div>
                    {item.badge ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-400 text-stone-900">
                        {item.badge}
                      </span>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    )}
                  </a>
                );
              })}

              {/* Direct Bazar Link in Drawer */}
              <a
                href="https://connectkisan.com/bazar"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCloseMobile}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-stone-200/80 text-sm font-bold text-stone-900 hover:bg-stone-50 shadow-2xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block leading-none">Connect Kisan Bazar</span>
                    <span className="text-[11px] text-stone-500 font-normal">कृषि बजार तथा सामग्री</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400" />
              </a>

            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 border-t border-stone-200/80 bg-white space-y-3">
              <a
                href="https://connectkisan.com/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCloseMobile}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-stone-300 text-sm font-bold text-stone-800 hover:bg-stone-100"
              >
                <User className="w-4 h-4 text-stone-600" />
                <span>Login to Account</span>
              </a>

              <a
                href="https://connectkisan.com/en/contribution"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onCloseMobile}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-700 text-white text-sm font-bold shadow-md hover:bg-emerald-800"
              >
                <Heart className="w-4 h-4 text-emerald-200 fill-emerald-200/30" />
                <span>Contribute to Connect Kisan</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
