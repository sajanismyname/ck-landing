"use client";

import * as React from "react";
import { CONTRIBUTION_DATA } from "@/data/landingData";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Award,
  Users,
  Gift,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export function ContributeSection() {
  const motiveIconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-5 h-5 text-emerald-700" />,
    Award: <Award className="w-5 h-5 text-amber-600" />,
    Gift: <Gift className="w-5 h-5 text-emerald-700" />,
  };

  const rewardIconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-emerald-700" />,
    Heart: <Heart className="w-6 h-6 text-rose-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-teal-700" />,
  };

  return (
    <section
      id="contribute"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF9F5] via-emerald-50/30 to-[#FAF9F5] border-t border-b border-stone-200/80 relative overflow-hidden"
      aria-label="Community Contribution Platform"
    >
      {/* Background organic glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-28 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-28 -mt-20 w-96 h-96 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/90 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-emerald-700 fill-emerald-700/20" />
            <span>{CONTRIBUTION_DATA.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight">
            {CONTRIBUTION_DATA.title}
          </h2>

          <p className="text-base sm:text-lg font-medium text-emerald-800">
            {CONTRIBUTION_DATA.nepaliTitle}
          </p>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {CONTRIBUTION_DATA.description}
          </p>
        </div>

        {/* 3 Core Motives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTRIBUTION_DATA.motives.map((motive) => (
            <div
              key={motive.title}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-center shrink-0">
                {motiveIconMap[motive.iconName]}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-stone-900 font-heading">
                  {motive.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {motive.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contributor Rewards Box */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-stone-200 shadow-md relative overflow-hidden">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              RECOGNITION &amp; INCENTIVES / अवसर र सम्मान
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 font-heading">
              What You Can Earn by Contributing
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              High quality contributions unlock career opportunities, official certification, and national recognition on Connect Kisan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {CONTRIBUTION_DATA.rewards.map((reward) => (
              <div
                key={reward.id}
                className="rounded-2xl p-6 bg-stone-50/90 border border-stone-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 shadow-2xs flex items-center justify-center">
                      {rewardIconMap[reward.iconName]}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      {reward.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 font-heading">
                    {reward.title}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-700 mb-2">
                    {reward.nepaliTitle}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {reward.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Bar */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-600">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Open to farmers, agronomists, students, and agricultural researchers across Nepal.</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3 rounded-xl shadow-md ring-2 ring-emerald-600/20 transition-all hover:scale-[1.02] group"
              >
                <a
                  href={CONTRIBUTION_DATA.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <span>Contribute Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-stone-300 font-semibold text-stone-800 hover:bg-stone-100 rounded-xl"
              >
                <a
                  href={CONTRIBUTION_DATA.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  <span>View Hall of Fame</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
