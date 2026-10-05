"use client";

import { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  Sparkles,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  PiggyBank,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { formatCurrencyNumber } from "../data/formatters";

export default function DashboardPreview({ currency = "₹" }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { name: "Housing", amount: 16500, pct: 38.8, color: "bg-[#0D5C46]" },
    { name: "Food & Dining", amount: 9800, pct: 23.1, color: "bg-[#10B981]" },
    { name: "Shopping", amount: 5100, pct: 12.0, color: "bg-[#F59E0B]" },
    { name: "Transport", amount: 4600, pct: 10.8, color: "bg-[#6366F1]" },
    { name: "Entertainment", amount: 3800, pct: 8.9, color: "bg-[#EC4899]" },
    { name: "Other", amount: 2700, pct: 6.4, color: "bg-[#94A3B8]" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl bg-white border border-[#E6E4DD] shadow-[0_20px_50px_-12px_rgba(15,23,42,0.08),0_1px_3px_rgba(15,23,42,0.04)] overflow-hidden transition-all duration-300">
      {/* Top Browser / App chrome bar */}
      <div className="bg-[#FAF9F5] border-b border-[#E6E4DD] px-4 sm:px-6 py-3 flex items-center justify-between flex-wrap gap-2 text-xs text-[#64748B]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]"></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#E6E4DD]">
            <span className="inline-flex items-center gap-1 font-mono text-[11px] bg-white px-2.5 py-0.5 rounded-md border border-[#E6E4DD] text-[#334155]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              app.fermor.com/overview
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-[#0D5C46] bg-[#ECFDF5] px-2.5 py-1 rounded-full font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C46]"></span>
            Product Preview · Demo State
          </span>
          <span className="hidden md:inline text-[#94A3B8]">October 2026 Cycle</span>
        </div>
      </div>

      {/* Main Dashboard Canvas */}
      <div className="p-3.5 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
        {/* KPI Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {/* Total Balance */}
          <div className="bg-[#FAF9F5] p-3 sm:p-4 rounded-xl border border-[#E6E4DD] hover:border-[#D4D1C7] transition-all">
            <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#64748B] mb-1">
              <span className="truncate">Total Liquid Balance</span>
              <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0D5C46] flex-shrink-0" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-[#0F172A] font-mono tracking-tight">
              {currency}1,48,250
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-[#065F46] font-medium">
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">+12.4% MoM</span>
            </div>
          </div>

          {/* Monthly Income */}
          <div className="bg-[#FAF9F5] p-3 sm:p-4 rounded-xl border border-[#E6E4DD] hover:border-[#D4D1C7] transition-all">
            <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#64748B] mb-1">
              <span className="truncate">Monthly Inflow</span>
              <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981] flex-shrink-0" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-[#0F172A] font-mono tracking-tight">
              {currency}85,000
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-[#475569]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
              <span className="truncate">Deposited Oct 1</span>
            </div>
          </div>

          {/* Monthly Spending */}
          <div className="bg-[#FAF9F5] p-3 sm:p-4 rounded-xl border border-[#E6E4DD] hover:border-[#D4D1C7] transition-all">
            <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#64748B] mb-1">
              <span className="truncate">Monthly Spending</span>
              <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#64748B] flex-shrink-0" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-[#0F172A] font-mono tracking-tight">
              {currency}42,500
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-[#065F46] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] flex-shrink-0"></span>
              <span className="truncate">49.8% burn · On track</span>
            </div>
          </div>

          {/* Savings & Surplus */}
          <div className="bg-[#FAF9F5] p-3 sm:p-4 rounded-xl border border-[#E6E4DD] hover:border-[#D4D1C7] transition-all">
            <div className="flex items-center justify-between text-[11px] sm:text-xs text-[#64748B] mb-1">
              <span className="truncate">Net Saved</span>
              <PiggyBank className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0D5C46] flex-shrink-0" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-[#0D5C46] font-mono tracking-tight">
              {currency}28,000
            </div>
            <div className="mt-1.5 flex items-center gap-1 text-[11px] text-[#065F46] font-medium">
              <span className="px-1.5 py-0.5 rounded bg-[#ECFDF5] border border-[#A7F3D0] truncate">
                32.9% rate
              </span>
            </div>
          </div>
        </div>

        {/* Central Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Spending Pace Chart Visual (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF9F5] p-5 rounded-xl border border-[#E6E4DD] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-[#0F172A]">Monthly Burn & Runway Pace</h4>
                  <p className="text-xs text-[#64748B]">Actual spending vs. safe spending ceiling</p>
                </div>
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-white border border-[#E6E4DD] text-[#334155]">
                  Pacing -4.2% below cap
                </span>
              </div>

              {/* Custom SVG Sparkline & Baseline */}
              <div className="relative h-32 w-full pt-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                  {/* Subtle Gridlines */}
                  <line x1="0" y1="25" x2="400" y2="25" stroke="#E6E4DD" strokeDasharray="3 3" strokeWidth="1" />
                  <line x1="0" y1="65" x2="400" y2="65" stroke="#E6E4DD" strokeDasharray="3 3" strokeWidth="1" />

                  {/* Safe ceiling line */}
                  <line x1="0" y1="35" x2="400" y2="35" stroke="#94A3B8" strokeDasharray="4 4" strokeWidth="1.5" />
                  <text x="395" y="30" textAnchor="end" fill="#64748B" fontSize="10" fontFamily="monospace">
                    Safe ceiling: {currency}48k
                  </text>

                  {/* Gradient Area under curve */}
                  <defs>
                    <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0D5C46" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0D5C46" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Area fill */}
                  <path
                    d="M 0,85 C 60,80 100,70 150,62 C 200,54 250,56 300,48 C 350,40 380,38 400,36 L 400,100 L 0,100 Z"
                    fill="url(#heroGradient)"
                  />

                  {/* Spending curve line */}
                  <path
                    d="M 0,85 C 60,80 100,70 150,62 C 200,54 250,56 300,48 C 350,40 380,38 400,36"
                    fill="none"
                    stroke="#0D5C46"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Data Points */}
                  <circle cx="150" cy="62" r="4" fill="#FFFFFF" stroke="#0D5C46" strokeWidth="2.5" />
                  <circle cx="300" cy="48" r="4" fill="#FFFFFF" stroke="#0D5C46" strokeWidth="2.5" />
                  <circle cx="400" cy="36" r="5" fill="#0D5C46" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </div>

              {/* Timeline labels */}
              <div className="flex justify-between text-[10px] sm:text-[11px] text-[#94A3B8] font-mono mt-2 pt-2 border-t border-[#E6E4DD]">
                <span><span className="hidden sm:inline">Week 1 </span>(Oct 1-7)</span>
                <span><span className="hidden sm:inline">Week 2 </span>(Oct 8-14)</span>
                <span><span className="hidden sm:inline">Week 3 </span>(Oct 15-21)</span>
                <span className="text-[#0D5C46] font-semibold"><span className="hidden sm:inline">Today </span>(Oct 28)</span>
              </div>
            </div>

            {/* Quick Summary Pill */}
            <div className="mt-4 pt-3 border-t border-[#E6E4DD] flex items-center justify-between text-xs text-[#475569]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0D5C46] flex-shrink-0"></span>
                <span>Surplus: <strong className="text-[#0F172A] font-mono">+{currency}14,500</strong></span>
              </span>
              <span className="text-[#0D5C46] font-medium hidden sm:inline">Safe to allocate →</span>
            </div>
          </div>

          {/* Financial Health Score Dial (5 Cols) */}
          <div className="lg:col-span-5 bg-[#FAF9F5] p-4 sm:p-5 rounded-xl border border-[#E6E4DD] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="text-sm font-semibold text-[#0F172A]">Financial Health Score</h4>
                <p className="text-xs text-[#64748B]">Composite stability index</p>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                Optimal
              </span>
            </div>

            {/* Visual Health Gauge & Score */}
            <div className="flex items-center gap-3 sm:gap-4 my-2">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Background Track */}
                  <path
                    className="text-[#E2E0D8]"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Active Arc (82%) */}
                  <path
                    className="text-[#0D5C46] transition-all duration-1000 ease-out"
                    strokeDasharray="82, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-xl sm:text-2xl font-bold text-[#0F172A] font-mono leading-none">82</span>
                  <span className="text-[9px] sm:text-[10px] text-[#64748B] font-medium uppercase mt-0.5">/ 100</span>
                </div>
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="text-xs font-medium text-[#0F172A] flex items-center justify-between">
                  <span className="truncate">Spending Ratio</span>
                  <span className="font-mono text-[#0D5C46]">88/100</span>
                </div>
                <div className="w-full h-1.5 bg-[#E6E4DD] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0D5C46] rounded-full" style={{ width: "88%" }}></div>
                </div>

                <div className="text-xs font-medium text-[#0F172A] flex items-center justify-between">
                  <span className="truncate">Savings Velocity</span>
                  <span className="font-mono text-[#0D5C46]">78/100</span>
                </div>
                <div className="w-full h-1.5 bg-[#E6E4DD] rounded-full overflow-hidden">
                  <div className="h-full bg-[#10B981] rounded-full" style={{ width: "78%" }}></div>
                </div>

                <div className="text-xs font-medium text-[#0F172A] flex items-center justify-between">
                  <span className="truncate">Cash Flow Stability</span>
                  <span className="font-mono text-[#0D5C46]">85/100</span>
                </div>
                <div className="w-full h-1.5 bg-[#E6E4DD] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0D5C46] rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#64748B] flex items-center justify-between">
              <span>+4 pts above benchmark</span>
              <span className="font-medium text-[#0D5C46]">4.8 mo runway</span>
            </div>
          </div>
        </div>

        {/* Category Breakdown & Spend Allocation Bar */}
        <div className="space-y-3 pt-2 border-t border-[#E6E4DD]">
          <div className="flex items-center justify-between flex-wrap gap-1">
            <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider">
              Spending by Category
            </span>
            <span className="text-xs text-[#64748B] font-mono">
              6 Categories · {currency}42,500 Total
            </span>
          </div>

          {/* Segmented Distribution Bar */}
          <div className="h-2.5 w-full bg-[#E2E0D8] rounded-full flex overflow-hidden gap-0.5">
            {categories.map((c) => (
              <div
                key={c.name}
                style={{ width: `${c.pct}%` }}
                className={`${c.color} h-full transition-all duration-300 hover:opacity-80`}
                title={`${c.name}: ${c.pct}% (${currency}${formatCurrencyNumber(c.amount, currency)})`}
              />
            ))}
          </div>

          {/* Category Chips */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-1">
            {categories.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setActiveCategory(activeCategory === c.name ? "all" : c.name)}
                className={`p-2.5 sm:p-2 rounded-lg text-left transition-all border min-h-[44px] ${
                  activeCategory === c.name
                    ? "bg-white border-[#0D5C46] shadow-sm ring-1 ring-[#0D5C46]"
                    : "bg-[#FAF9F5] border-[#E6E4DD] hover:bg-white hover:border-[#D4D1CFCE]"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${c.color} flex-shrink-0`}></span>
                  <span className="text-xs font-medium text-[#334155] truncate">{c.name}</span>
                </div>
                <div suppressHydrationWarning className="text-xs font-bold font-mono text-[#0F172A] mt-1">
                  {currency}{formatCurrencyNumber(c.amount, currency)}
                </div>
                <div className="text-[10px] text-[#64748B]">{c.pct}%</div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Proactive Insight Banner */}
        <div className="bg-[#FAF9F5] border border-[#E6E4DD] rounded-xl p-3 sm:p-3.5 flex items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start sm:items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] border border-[#A7F3D0] flex items-center justify-center text-[#0D5C46] flex-shrink-0 mt-0.5 sm:mt-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <p className="text-[#334155] text-xs leading-relaxed">
              <strong className="text-[#0F172A] font-semibold">Active Insight:</strong> 3 recurring services optimized.
              Saved <span className="font-mono font-semibold text-[#0D5C46]">{currency}1,850/mo</span> without changing lifestyle habits.
            </p>
          </div>
          <span className="hidden sm:inline-block text-[#0D5C46] font-medium hover:underline cursor-pointer flex-shrink-0">
            Apply insight →
          </span>
        </div>
      </div>
    </div>
  );
}
