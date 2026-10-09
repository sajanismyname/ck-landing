"use client";

import * as React from "react";
import Link from "next/link";
import { Home, ShoppingBag, BookOpen, Heart } from "lucide-react";

interface MobileBottomNavProps {
  activeTab?: string;
}

export function MobileBottomNav({ activeTab = "home" }: MobileBottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-stone-200/90 lg:hidden px-2 py-1.5 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] select-none"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* 1. Home */}
        <Link
          href="/"
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeTab === "home"
              ? "text-[#064E3B] font-bold"
              : "text-stone-600 hover:text-stone-900 font-medium"
          }`}
        >
          <Home className={`w-5 h-5 ${activeTab === "home" ? "stroke-[2.5]" : "stroke-[1.75]"}`} />
          <span className="text-[11px] mt-0.5">Home</span>
        </Link>

        {/* 2. Bazar */}
        <a
          href="https://connectkisan.com/bazar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-stone-600 hover:text-emerald-800 transition-all font-medium"
        >
          <div className="relative">
            <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-600 rounded-full" />
          </div>
          <span className="text-[11px] mt-0.5">Bazar</span>
        </a>

        {/* 3. Knowledge */}
        <a
          href="#knowledge"
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-stone-600 hover:text-emerald-800 transition-all font-medium"
        >
          <BookOpen className="w-5 h-5 stroke-[1.75]" />
          <span className="text-[11px] mt-0.5">Knowledge</span>
        </a>

        {/* 4. Contribute */}
        <a
          href="https://connectkisan.com/en/contribution"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-stone-600 hover:text-emerald-800 transition-all font-medium group"
        >
          <div className="p-0.5 rounded-full text-rose-600 group-hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 fill-rose-50 stroke-rose-600" />
          </div>
          <span className="text-[11px] mt-0.5">Contribute</span>
        </a>
      </div>
    </nav>
  );
}
