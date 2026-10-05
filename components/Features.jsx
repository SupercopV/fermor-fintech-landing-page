"use client";

import { useState } from "react";
import {
  PieChart,
  Activity,
  Lightbulb,
  Target,
  ArrowRight,
  CheckCircle2,
  TrendingDown,
  Sparkles,
  Sliders,
  DollarSign,
  Calendar,
  Layers,
} from "lucide-react";
import { formatCurrencyNumber } from "../data/formatters";

export default function Features({ currency = "₹" }) {
  // Interactive state for Feature 4 (Goal simulation slider)
  const [extraSavings, setExtraSavings] = useState(3000);

  // Computed timeline impact for Feature 4:
  // Base goal remaining: ₹40,000. Current savings per month allocated: ₹8,000 = 5 months.
  // With extraSavings (e.g. +3,000 = ₹11,000/mo = 3.6 months). Time saved = 1.4 months.
  const monthsRemaining = (40000 / (8000 + Number(extraSavings))).toFixed(1);
  const timeSavedWeeks = Math.max(1, Math.round(((5.0 - monthsRemaining) * 4.3)));

  return (
    <section id="insights" className="py-14 sm:py-24 lg:py-36 bg-[#FAF9F5]/50 border-t border-[#E6E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#0D5C46]">
            Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] font-sans">
            Engineered for clarity at every level.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            From granular transaction categorization to holistic forward-looking runway calculations,
            Fermor gives you immediate answers without cognitive drag.
          </p>
        </div>

        {/* Feature Grid with Varied Visual Compositions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* FEATURE 1: Understand your money (Wide Card - 7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E6E4DD] p-5 sm:p-7 lg:p-9 hover:border-[#D1CFCE] transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.02)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center text-[#0D5C46] group-hover:bg-[#ECFDF5] group-hover:border-[#A7F3D0] transition-colors">
                  <PieChart className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs font-mono font-medium text-[#64748B] bg-[#FAF9F5] px-2.5 py-1 rounded-md border border-[#E6E4DD]">
                  Cashflow Synthesis
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1.5 sm:mb-2 font-sans">
                Understand your money
              </h3>
              <p className="text-xs sm:text-base text-[#475569] leading-relaxed max-w-xl">
                See where your money goes with a clear picture of your income, spending and savings.
              </p>
            </div>

            {/* Visual Element 1: Interactive Cash Flow Distribution Matrix */}
            <div className="mt-6 sm:mt-8 bg-[#FAF9F5] p-3.5 sm:p-6 rounded-xl border border-[#E6E4DD] space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between text-xs text-[#64748B]">
                <span className="font-semibold text-[#0F172A] uppercase tracking-wider text-[10px] sm:text-[11px] truncate">
                  Net Inflow ({currency}85,000)
                </span>
                <span className="font-mono text-[#0D5C46] font-medium text-xs">100% Balanced</span>
              </div>

              {/* Stacked Flow Visual Bar */}
              <div className="h-2.5 sm:h-3 w-full bg-[#E6E4DD] rounded-full overflow-hidden flex gap-0.5 sm:gap-1">
                <div style={{ width: "32.9%" }} className="bg-[#0D5C46] h-full" title="Savings: 32.9%" />
                <div style={{ width: "22.6%" }} className="bg-[#10B981] h-full" title="Housing: 22.6%" />
                <div style={{ width: "17.1%" }} className="bg-[#6366F1] h-full" title="Lifestyle: 17.1%" />
                <div style={{ width: "10.4%" }} className="bg-[#F59E0B] h-full" title="Transport: 10.4%" />
                <div style={{ width: "17.0%" }} className="bg-[#94A3B8] h-full" title="Buffer: 17.0%" />
              </div>

              {/* 3 Core Stream Indicators (Compact, Resilient on 320px) */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-1 sm:pt-2">
                <div className="bg-white p-2.5 sm:p-3 rounded-lg border border-[#E6E4DD]">
                  <span className="text-[9px] sm:text-[10px] font-semibold text-[#64748B] uppercase block">Income</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A] font-mono truncate block">{currency}85,000</span>
                  <span className="text-[9px] sm:text-[10px] text-[#065F46] block mt-0.5 font-medium truncate">+100% stable</span>
                </div>
                <div className="bg-white p-2.5 sm:p-3 rounded-lg border border-[#E6E4DD]">
                  <span className="text-[9px] sm:text-[10px] font-semibold text-[#64748B] uppercase block">Spending</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F172A] font-mono truncate block">{currency}42,500</span>
                  <span className="text-[9px] sm:text-[10px] text-[#475569] block mt-0.5 font-medium truncate">49.8% burn</span>
                </div>
                <div className="bg-white p-2.5 sm:p-3 rounded-lg border border-[#E6E4DD]">
                  <span className="text-[9px] sm:text-[10px] font-semibold text-[#64748B] uppercase block">Saved</span>
                  <span className="text-xs sm:text-sm font-bold text-[#0D5C46] font-mono truncate block">{currency}28,000</span>
                  <span className="text-[9px] sm:text-[10px] text-[#065F46] block mt-0.5 font-medium truncate">32.9% rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 2: Know your financial health (5 Columns) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E6E4DD] p-5 sm:p-7 lg:p-9 hover:border-[#D1CFCE] transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.02)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center text-[#0D5C46] group-hover:bg-[#ECFDF5] group-hover:border-[#A7F3D0] transition-colors">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs font-mono font-medium text-[#065F46] bg-[#ECFDF5] px-2.5 py-1 rounded-md border border-[#A7F3D0]">
                  Health Metric
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1.5 sm:mb-2 font-sans">
                Know your financial health
              </h3>
              <p className="text-xs sm:text-base text-[#475569] leading-relaxed">
                Get a simple view of your financial position instead of trying to interpret dozens of numbers.
              </p>
            </div>

            {/* Visual Element 2: Radial Score Dial & Dimensions */}
            <div className="mt-6 sm:mt-8 bg-[#FAF9F5] p-3.5 sm:p-6 rounded-xl border border-[#E6E4DD] flex flex-col xs:flex-row sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#0D5C46] flex flex-col items-center justify-center flex-shrink-0 shadow-xs">
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A] leading-none">82</span>
                <span className="text-[9px] sm:text-[10px] text-[#64748B] uppercase tracking-wider mt-0.5">/ 100</span>
                <span className="text-[8px] sm:text-[9px] font-semibold text-[#065F46] bg-[#ECFDF5] px-1 rounded mt-0.5">Optimal</span>
              </div>

              <div className="space-y-2 flex-1 w-full min-w-0">
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#334155] mb-0.5">
                    <span>Spending Discipline</span>
                    <span className="font-mono text-[#0D5C46]">88</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#E6E4DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0D5C46] rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#334155] mb-0.5">
                    <span>Savings Runway</span>
                    <span className="font-mono text-[#0D5C46]">78</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#E6E4DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#10B981] rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-[#334155] mb-0.5">
                    <span>Cashflow Health</span>
                    <span className="font-mono text-[#0D5C46]">85</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#E6E4DD] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0D5C46] rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 3: Find useful insights (5 Columns) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E6E4DD] p-5 sm:p-7 lg:p-9 hover:border-[#D1CFCE] transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.02)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center text-[#0D5C46] group-hover:bg-[#ECFDF5] group-hover:border-[#A7F3D0] transition-colors">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs font-mono font-medium text-[#64748B] bg-[#FAF9F5] px-2.5 py-1 rounded-md border border-[#E6E4DD]">
                  Pattern Radar
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1.5 sm:mb-2 font-sans">
                Find useful insights
              </h3>
              <p className="text-xs sm:text-base text-[#475569] leading-relaxed">
                Surface patterns and opportunities that are easy to miss when you&apos;re looking at raw financial data.
              </p>
            </div>

            {/* Visual Element 3: Smart Live Opportunity Feed */}
            <div className="mt-6 sm:mt-8 space-y-2.5">
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-start gap-2.5 sm:gap-3">
                <div className="w-6 h-6 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#0D5C46] flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0F172A]">Dormant Subscription</span>
                    <span className="text-[10px] font-mono text-[#0D5C46] font-semibold">+₹1,850/mo</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-0.5">Zero activity logged past 60 days.</p>
                </div>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-start gap-2.5 sm:gap-3">
                <div className="w-6 h-6 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#0D5C46] flex-shrink-0 mt-0.5">
                  <TrendingDown className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0F172A]">Dining Budget Drift</span>
                    <span className="text-[10px] font-mono text-[#10B981] font-semibold">-8.4% spend</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] mt-0.5">Meal prep lowered weekly café spend.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 4: Make better decisions (Wide Card - 7 Columns) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E6E4DD] p-5 sm:p-7 lg:p-9 hover:border-[#D1CFCE] transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.02)] flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-center text-[#0D5C46] group-hover:bg-[#ECFDF5] group-hover:border-[#A7F3D0] transition-colors">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-xs font-mono font-medium text-[#0D5C46] bg-[#ECFDF5] px-2.5 py-1 rounded-md border border-[#A7F3D0]">
                  Decision Engine
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mb-1.5 sm:mb-2 font-sans">
                Make better decisions
              </h3>
              <p className="text-xs sm:text-base text-[#475569] leading-relaxed max-w-xl">
                Turn insights into practical actions that help you move toward your financial goals.
              </p>
            </div>

            {/* Visual Element 4: Interactive Goal Accelerator Simulator */}
            <div className="mt-6 sm:mt-8 bg-[#FAF9F5] p-3.5 sm:p-6 rounded-xl border border-[#E6E4DD] space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between text-xs flex-wrap gap-1">
                <span className="font-semibold text-[#0F172A] uppercase tracking-wider text-[10px] sm:text-[11px] truncate">
                  Reserve Milestone Simulator
                </span>
                <span className="font-mono text-[#0D5C46] font-bold text-xs">
                  {currency}2,10,000 / {currency}2,50,000 (84%)
                </span>
              </div>

              {/* Interactive Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#475569]">
                  <span>Adjust monthly auto-transfer:</span>
                  <span suppressHydrationWarning className="font-mono font-bold text-[#0D5C46]">
                    +{currency}{formatCurrencyNumber(extraSavings, currency)} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="1000"
                  value={extraSavings}
                  onChange={(e) => setExtraSavings(e.target.value)}
                  className="w-full accent-[#0D5C46] cursor-pointer h-7"
                  aria-label="Adjust extra monthly savings"
                />
                <div className="flex justify-between text-[10px] text-[#94A3B8] font-mono">
                  <span>+{currency}0</span>
                  <span>+{currency}5,000</span>
                  <span>+{currency}10,000</span>
                </div>
              </div>

              {/* Dynamic Outcome Result */}
              <div className="p-3 bg-white rounded-lg border border-[#A7F3D0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C46] flex-shrink-0" />
                  <span className="text-[#334155]">
                    Goal achieved in <strong>{monthsRemaining} months</strong> (saves ~{timeSavedWeeks} wks).
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono text-[#0D5C46] font-semibold bg-[#ECFDF5] px-2 py-0.5 rounded w-fit">
                  High Impact
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
