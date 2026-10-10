"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { MARKETPLACE_PRODUCTS, MarketplaceProduct } from "@/data/landingData";
import { Button } from "@/components/ui/button";
import { useCarousel } from "@/hooks/useCarousel";
import { CarouselOverlayArrows } from "@/components/ui/carousel-controls";
import {
  ShieldCheck,
  MapPin,
  ArrowRight,
  Package,
} from "lucide-react";

export function MarketplaceShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    scrollToStart,
  } = useCarousel();

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

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    scrollToStart();
  };

  return (
    <section id="marketplace" className="py-12 sm:py-16 lg:py-20 bg-[#FAF9F5]" aria-label="Marketplace Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Header (2-Row Responsive Wrapping on Mobile) */}
        <div className="flex flex-col gap-3.5 pb-4 border-b border-stone-200/80">
          {/* Row 1: Label, Title & Description */}
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
              <Package className="w-3.5 h-3.5 text-emerald-700" />
              <span>Direct Farm Marketplace</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 font-heading tracking-tight">
              From Nepali farms to the market.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Discover verified agricultural produce sourced directly from farmers, cooperatives, and high-altitude grower clusters across Nepal.
            </p>
          </div>

          {/* Row 2: Category Filter Tabs + Top CTA Link */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                    activeCategory === cat.id
                      ? "bg-emerald-900 text-white shadow-xs"
                      : "bg-white text-stone-700 hover:bg-stone-100 border border-stone-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Link to Bazar */}
            <div className="flex items-center gap-3 shrink-0 ml-auto">
              <a
                href="https://connectkisan.com/bazar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
              >
                <span>Explore Marketplace in Bazar</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Products Slider Container with Inset Overlaid Controls */}
        <div className="relative group">
          {/* Overlay Arrows centered on product image */}
          <CarouselOverlayArrows
            onPrev={scrollLeft}
            onNext={scrollRight}
            canPrev={canScrollLeft}
            canNext={canScrollRight}
            prevLabel="Previous products"
            nextLabel="Next products"
            topOffsetClass="top-[72px] sm:top-[82px]"
          />

          {/* Scrolling Track */}
          <div
            ref={containerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Direct Farm Marketplace Carousel"
            className="flex overflow-x-auto scroll-smooth gap-3.5 sm:gap-4 pb-2 no-scrollbar [scroll-snap-type:x_mandatory]"
          >
          {filteredProducts.map((product) => (
            <a
              key={product.id}
              href="https://connectkisan.com/bazar"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 [scroll-snap-align:start] w-[70vw] max-w-[220px] sm:w-[210px] md:w-[230px] lg:w-[220px] bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Product Image with Badges (aspect-[4/3] compact proportion) */}
                <div className="relative aspect-[4/3] w-full bg-stone-100 overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={`${product.name} sourced from ${product.origin}`}
                    fill
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 220px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Origin tag over image */}
                  <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-[9px] font-medium">
                    <MapPin className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[120px]">{product.origin}</span>
                  </div>

                  {/* Highlight tag over image */}
                  <div className="absolute top-1.5 right-1.5">
                    <span className="bg-amber-500 text-stone-950 font-bold text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded shadow-xs">
                      {product.highlightTag}
                    </span>
                  </div>
                </div>

                {/* Content Details (Matching Deals / Top Merchants Size) */}
                <div className="p-2.5 sm:p-3 space-y-1">
                  {/* Verification badges */}
                  <div className="flex items-center gap-1 text-[9px] text-emerald-700 font-semibold truncate">
                    <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Verified • Traceable</span>
                  </div>

                  {/* Title & Nepali Name */}
                  <h3 className="text-xs sm:text-[13px] font-bold text-stone-900 font-heading leading-tight group-hover:text-emerald-800 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="text-[9px] sm:text-[10px] text-stone-500 truncate">
                    {product.nepaliName}
                  </div>

                  {/* Unit & Description */}
                  <div className="text-[9px] text-stone-600 line-clamp-1 pt-0.5">
                    {product.unit}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-2.5 sm:px-3 py-1.5 border-t border-stone-100 flex items-center justify-between text-[10px] sm:text-[11px] font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                <span>View Product</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 sm:mt-12 bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-heading">
              Are you an agricultural producer, cooperative, or bulk buyer?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90">
              List your harvest or post purchase requirements on our verified digital bidding platform.
            </p>
          </div>
          <Button
            asChild
            className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-6 py-2.5 rounded-xl shrink-0 cursor-pointer"
          >
            <a href="https://connectkisan.com/bazar" target="_blank" rel="noopener noreferrer">
              Join as Seller / Buyer
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
