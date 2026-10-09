"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "@/data/landingData";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  User,
  Heart,
  Sprout,
  Wrench,
  Info,
  BookOpen,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const subIconMap: Record<string, React.ReactNode> = {
    Sprout: <Sprout className="w-5 h-5 text-emerald-700" />,
    Wrench: <Wrench className="w-5 h-5 text-emerald-700" />,
    Info: <Info className="w-5 h-5 text-emerald-700" />,
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setMobileSubmenu(null);
    }
  }, [mobileMenuOpen]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F5]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80"
          : "bg-[#FAF9F5] border-b border-stone-200/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with hover highlight */}
          <a
            href="#"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1 shrink-0"
            aria-label="Connect Kisan Home"
          >
            <Logo variant="default" width={165} height={36} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isDropdownOpen = activeDropdown === item.label;

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveDropdown(isDropdownOpen ? null : item.label)}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer py-2 ${
                        isDropdownOpen
                          ? "text-emerald-800 font-semibold"
                          : "text-stone-700 hover:text-emerald-700"
                      }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-stone-500 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-emerald-700" : ""
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown Panel matching mockups */}
                    {isDropdownOpen && (
                      <div
                        className="absolute left-0 top-full pt-2 w-[320px] z-50 animate-fade-in"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-white rounded-2xl p-2.5 shadow-xl border border-stone-200/90 space-y-1">
                          {item.children?.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              target={sub.isExternal ? "_blank" : undefined}
                              rel={sub.isExternal ? "noopener noreferrer" : undefined}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50/80 transition-all group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                                  {sub.iconName ? subIconMap[sub.iconName] : <Sprout className="w-5 h-5 text-emerald-700" />}
                                </div>
                                <div className="text-left">
                                  <div className="text-xs font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                                    {sub.label}
                                  </div>
                                  {sub.description && (
                                    <div className="text-[11px] text-stone-500 font-normal">
                                      {sub.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Direct items: Bazar, Knowledge, About
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-stone-700 hover:text-emerald-700 transition-colors py-2"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area (Language Selector + Login + Get Started) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-transparent text-xs font-medium text-stone-600 gap-1.5">
              <button
                type="button"
                onClick={() => setLanguage("ne")}
                className={`transition-colors cursor-pointer ${
                  language === "ne" ? "text-emerald-800 font-bold" : "hover:text-stone-900"
                }`}
              >
                नेपाली
              </button>
              <span className="text-stone-300">|</span>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`transition-colors cursor-pointer ${
                  language === "en" ? "text-emerald-800 font-bold" : "hover:text-stone-900"
                }`}
              >
                EN
              </button>
            </div>

            {/* Login button */}
            <a
              href="https://connectkisan.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-stone-700 hover:text-emerald-700 transition-colors"
            >
              Login
            </a>

            {/* Single Primary Action Button: Get Started */}
            <Button
              asChild
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold shadow-md shadow-emerald-700/20 px-5 py-2.5 text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] group cursor-pointer"
            >
              <a href="#get-started" className="flex items-center gap-1.5">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button (Collapsed Navbar) */}
          <div className="flex items-center gap-3 lg:hidden">
            <div className="flex items-center text-xs font-medium text-stone-600 gap-1">
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "ne" : "en")}
                className="hover:text-stone-900"
              >
                {language === "en" ? "नेपाली" : "EN"}
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6 text-stone-900" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Matching Mockup Mobile Menu Open & Dropdown State) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-stone-900/40 backdrop-blur-xs animate-fade-in flex justify-end">
          <div className="w-full max-w-sm bg-[#FAF9F5] h-full shadow-2xl flex flex-col justify-between p-6 animate-slide-in-right overflow-y-auto">
            
            <div className="space-y-6">
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200/80">
                {mobileSubmenu ? (
                  <button
                    type="button"
                    onClick={() => setMobileSubmenu(null)}
                    className="flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-emerald-700 cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    <span>{mobileSubmenu}</span>
                  </button>
                ) : (
                  <Logo variant="default" width={140} height={32} />
                )}
                
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-100 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Submenu View (e.g. Farming & Agriculture Sub-items) */}
              {mobileSubmenu === "Farming & Agriculture" || mobileSubmenu === "Farming" ? (
                <div className="space-y-2 animate-fade-in">
                  <a
                    href="https://connectkisan.com/soil-test"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/90 text-sm font-semibold text-stone-900 hover:bg-emerald-50 hover:border-emerald-200"
                  >
                    <div className="flex items-center gap-3">
                      <Sprout className="w-5 h-5 text-emerald-700" />
                      <span>Crops &amp; Livestock</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </a>

                  <a
                    href="https://connectkisan.com/new-farming-technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/90 text-sm font-semibold text-stone-900 hover:bg-emerald-50 hover:border-emerald-200"
                  >
                    <div className="flex items-center gap-3">
                      <Wrench className="w-5 h-5 text-emerald-700" />
                      <span>Agricultural Tools</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </a>

                  <a
                    href="https://connectkisan.com/kalimati-market-price"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/90 text-sm font-semibold text-stone-900 hover:bg-emerald-50 hover:border-emerald-200"
                  >
                    <div className="flex items-center gap-3">
                      <Info className="w-5 h-5 text-emerald-700" />
                      <span>Information Services</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </a>
                </div>
              ) : (
                /* Main Menu View */
                <nav className="space-y-2">
                  {/* Farming */}
                  <button
                    type="button"
                    onClick={() => setMobileSubmenu("Farming & Agriculture")}
                    className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/90 text-sm font-semibold text-stone-900 hover:bg-emerald-50 hover:border-emerald-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <Sprout className="w-5 h-5 text-emerald-700" />
                      <span>Farming</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </button>

                  {/* Bazar */}
                  <a
                    href="https://connectkisan.com/bazar"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/90 text-sm font-semibold text-stone-900 hover:bg-emerald-50 hover:border-emerald-200"
                  >
                    <div className="flex items-center gap-3">
                      <ShoppingBag className="w-5 h-5 text-emerald-700" />
                      <span>Bazar</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </a>

                  {/* Knowledge */}
                  <a
                    href="#knowledge"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/90 text-sm font-semibold text-stone-900 hover:bg-emerald-50 hover:border-emerald-200"
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-emerald-700" />
                      <span>Knowledge</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </a>

                  {/* About */}
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-stone-200/90 text-sm font-semibold text-stone-900 hover:bg-emerald-50 hover:border-emerald-200"
                  >
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-emerald-700" />
                      <span>About</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </a>
                </nav>
              )}
            </div>

            {/* Mobile Drawer Bottom Section */}
            <div className="pt-6 border-t border-stone-200/80 space-y-4">
              {/* Secondary Contribute Link */}
              <a
                href="https://connectkisan.com/en/contribution"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-sm font-bold text-rose-700 hover:text-rose-800 p-2"
              >
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600/30" />
                <span>Contribute</span>
              </a>

              <div className="flex items-center justify-between px-2 text-xs font-medium text-stone-600">
                <span>Language:</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLanguage("ne")}
                    className={language === "ne" ? "text-emerald-800 font-bold" : "hover:text-stone-900"}
                  >
                    नेपाली
                  </button>
                  <span>|</span>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={language === "en" ? "text-emerald-800 font-bold" : "hover:text-stone-900"}
                  >
                    EN
                  </button>
                </div>
              </div>

              <a
                href="https://connectkisan.com/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-stone-900 px-2"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </a>

              <Button
                asChild
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl shadow-md cursor-pointer"
              >
                <a href="#get-started" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
