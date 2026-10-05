"use client";

import { ArrowRight, Play, Shield, Lock, EyeOff } from "lucide-react";
import DashboardPreview from "./DashboardPreview";

export default function Hero({ onOpenAuth, onSeeHowItWorks }) {
  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Subtle Warm Backdrop Geometry (Sophisticated, Not generic blobby) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-[#FAF9F5] via-[#F4F3EE]/60 to-transparent blur-3xl opacity-70"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[#0D5C46]/[0.025] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header Content */}
        <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-8 animate-fade-in-up">
          {/* Subtle Category Pill */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-[#E6E4DD] text-xs font-medium text-[#334155] shadow-[0_1px_2px_rgba(15,23,42,0.04)] max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#0D5C46] flex-shrink-0"></span>
            <span className="font-semibold text-[#0D5C46]">Intelligent Financial Clarity</span>
            <span className="hidden sm:inline text-[#94A3B8]">·</span>
            <span className="hidden sm:inline text-[#64748B]">Built for deliberate decision-making</span>
          </div>

          {/* Main Headline (Responsive typography, no awkward wraps, zero overflow at 320px) */}
          <h1 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.12] sm:leading-[1.08] font-sans">
            Your finances,{" "}
            <span className="relative sm:whitespace-nowrap inline-block">
              <span className="relative z-10 text-[#0D5C46]">finally made clear.</span>
              <span
                className="absolute bottom-1.5 left-0 right-0 h-3 bg-[#ECFDF5] -z-0 rounded-sm transform -rotate-1 hidden sm:block"
                aria-hidden="true"
              ></span>
            </span>
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            Fermor turns complex financial information into simple insights and clear next steps,
            so you can make better decisions with your money.
          </p>

          {/* Call to Actions (Touch-friendly 48px min-height, full-width on mobile with max-w-sm) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 sm:pt-2 w-full max-w-sm sm:max-w-none mx-auto">
            <button
              type="button"
              onClick={() => onOpenAuth && onOpenAuth("signup")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D5C46] hover:bg-[#083E2F] text-white text-base font-semibold px-7 py-3.5 min-h-[48px] rounded-xl transition-all duration-200 shadow-[0_2px_8px_rgba(13,92,70,0.2)] hover:shadow-[0_4px_16px_rgba(13,92,70,0.3)] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0D5C46]"
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                if (onSeeHowItWorks) {
                  onSeeHowItWorks();
                } else {
                  const el = document.querySelector("#how-it-works");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF9F5] text-[#0F172A] border border-[#E6E4DD] hover:border-[#D1CFCE] text-base font-semibold px-6 py-3.5 min-h-[48px] rounded-xl transition-all duration-200 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0D5C46]"
            >
              <Play className="w-4 h-4 text-[#0D5C46] fill-[#0D5C46]/20" />
              <span>See how it works</span>
            </button>
          </div>

          {/* Reassurance Micro-Copy */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-[#64748B]">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#0D5C46] flex-shrink-0" />
              <span>Privacy-first architecture</span>
            </div>
            <div className="flex items-center gap-1.5">
              <EyeOff className="w-3.5 h-3.5 text-[#0D5C46] flex-shrink-0" />
              <span>Designed for clarity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#0D5C46] flex-shrink-0" />
              <span>No spreadsheets required</span>
            </div>
          </div>
        </div>

        {/* Financial Product Visualization */}
        <div className="mt-14 sm:mt-18 lg:mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
