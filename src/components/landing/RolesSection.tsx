"use client";

import * as React from "react";
import Image from "next/image";
import { ROLES_DATA } from "@/data/landingData";
import { ArrowRight } from "lucide-react";

export function RolesSection() {
  return (
    <section
      id="roles"
      className="py-10 sm:py-14 lg:py-16 bg-[#FAF9F5]"
      aria-label="Roles of Connect Kisan"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sage-Green Enclosed Container matching Mockup */}
        <div className="bg-[#EBF3ED] rounded-3xl p-6 sm:p-8 lg:p-12 border border-emerald-200/60 shadow-2xs">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 font-heading tracking-tight">
              Roles of Connect Kisan
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Whether you are cultivating crops, supplying agriculture tools, or sourcing bulk farm produce, Connect Kisan connects you directly.
            </p>
          </div>

          {/* 3 Role Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {ROLES_DATA.map((role) => (
              <a
                key={role.id}
                href={role.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={role.imageUrl}
                      alt={role.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-bold text-stone-900 font-heading group-hover:text-emerald-800 transition-colors">
                        {role.title}
                      </h3>
                      <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {role.nepaliTitle}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                      {role.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Card Footer Action */}
                <div className="px-4 sm:px-5 py-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                  <span>{role.ctaLabel || "Learn More"}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
