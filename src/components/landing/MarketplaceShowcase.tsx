"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { MARKETPLACE_PRODUCTS, MarketplaceProduct } from "@/data/landingData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Sprout,
  MapPin,
  ArrowRight,
  Filter,
  CheckCircle2,
  Package,
} from "lucide-react";

export function MarketplaceShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Harvests / सबै उत्पादन" },
    { id: "beverages", label: "Tea & Coffee / चिया-कफी" },
    { id: "spices", label: "Himalayan Spices / मसला" },
    { id: "cash_crops", label: "Cash Crops / नगदे बाली" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? MARKETPLACE_PRODUCTS
      : MARKETPLACE_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="marketplace" className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F5]" aria-label="Marketplace Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
              <Package className="w-3.5 h-3.5 text-emerald-700" />
              <span>Direct Farm Marketplace</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 font-heading tracking-tight">
              From Nepali farms to the market.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Discover verified agricultural produce sourced directly from farmers, cooperatives, and high-altitude grower clusters across Nepal.
            </p>
          </div>

          {/* Top CTA Link */}
          <div className="shrink-0">
            <Button
              asChild
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-sm rounded-xl px-6 py-3"
            >
              <a href="#marketplace-full" className="flex items-center gap-2">
                <span>Explore Full Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-emerald-900 text-white shadow-xs"
                  : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image with Badges */}
                <div className="relative h-52 w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={`${product.name} sourced from ${product.origin}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Origin tag over image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-xs font-medium">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span>{product.origin}</span>
                  </div>

                  {/* Highlight tag over image */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="amber" className="shadow-xs font-semibold">
                      {product.highlightTag}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Verification badges row */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {product.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        <ShieldCheck className="w-3 h-3" />
                        Verified Origin
                      </span>
                    )}
                    {product.farmTraceable && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                        <Sprout className="w-3 h-3" />
                        Farm Traceable
                      </span>
                    )}
                  </div>

                  {/* Title & Nepali Name */}
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-stone-900 font-heading group-hover:text-emerald-800 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xs font-medium text-stone-500">
                      {product.nepaliName}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4 line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 flex items-center justify-between mt-auto">
                <span className="text-xs font-semibold text-stone-500">
                  {product.unit}
                </span>
                <a
                  href={`#product-${product.id}`}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-0.5 transition-all"
                >
                  <span>View Product</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-heading">
              Are you an agricultural producer, cooperative, or bulk buyer?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90">
              List your harvest or post purchase requirements on our verified digital bidding platform.
            </p>
          </div>
          <Button
            asChild
            className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-6 py-2.5 rounded-xl shrink-0"
          >
            <a href="#register-farmer">Join as Seller / Buyer</a>
          </Button>
        </div>

      </div>
    </section>
  );
}
