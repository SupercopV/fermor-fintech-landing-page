"use client";

import { useState } from "react";
import {
  Activity,
  CheckCircle2,
  TrendingUp,
  Shield,
  ArrowRight,
  Sparkles,
  PieChart,
  PiggyBank,
  Zap,
  Target,
} from "lucide-react";
import { mockDashboardData } from "../data/mockFinancialData";

export default function FinancialHealth() {
  const [selectedDimension, setSelectedDimension] = useState("spending");
  const dimensions = mockDashboardData.healthDimensions;
  const activeData = dimensions.find((d) => d.id === selectedDimension) || dimensions[0];

  const iconMap = {
    spending: PieChart,
    savings: PiggyBank,
    cashflow: Zap,
    goals: Target,
  };

  return (
    <section className="py-14 sm:py-24 lg:py-36 bg-[#FAF9F5]/70 border-t border-[#E6E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#0D5C46]">
            The Fermor Health Index
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] font-sans">
            Know where you stand.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Your financial health is strongest when your money is working toward the things that
            matter to you. Fermor synthesizes your primary cashflow streams into one transparent,
            actionable score.
          </p>
        </div>

        {/* Master Score Dashboard Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-[#E6E4DD] shadow-[0_12px_40px_-10px_rgba(15,23,42,0.05)] overflow-hidden">
          {/* Top Score Banner */}
          <div className="p-4 sm:p-8 lg:p-10 border-b border-[#E6E4DD] bg-[#FAF9F5] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Left: Score Gauge (Centered on mobile for focal punch) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Outer Track */}
                  <path
                    className="text-[#E6E4DD]"
                    strokeWidth="3.2"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Emerald Progress Stroke (82%) */}
                  <path
                    className="text-[#0D5C46] transition-all duration-1000 ease-out"
                    strokeDasharray="82, 100"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-mono leading-none">
                    82
                  </span>
                  <span className="text-xs text-[#64748B] font-semibold uppercase mt-0.5">
                    / 100
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C46]"></span>
                    Optimal Health
                  </span>
                  <span className="text-xs text-[#64748B]">+4 pts this month</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Composite Financial Health Score
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] max-w-md mt-1">
                  Calculated from 4.8 months of liquid emergency buffer, steady savings velocity, and controlled discretionary spending.
                </p>
              </div>
            </div>

            {/* Right: Summary Status */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2.5 sm:gap-3 w-full md:w-auto">
              <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-[#E6E4DD] text-center w-full sm:w-auto">
                <span className="text-[10px] text-[#64748B] uppercase tracking-wider block font-semibold truncate">
                  Runway Horizon
                </span>
                <span className="text-base sm:text-lg font-bold font-mono text-[#0F172A]">4.8 Months</span>
                <span className="text-[10px] text-[#065F46] block font-medium truncate">Safe buffer</span>
              </div>
              <div className="bg-white p-3 sm:p-3.5 rounded-xl border border-[#E6E4DD] text-center w-full sm:w-auto">
                <span className="text-[10px] text-[#64748B] uppercase tracking-wider block font-semibold truncate">
                  Discretionary Cap
                </span>
                <span className="text-base sm:text-lg font-bold font-mono text-[#0D5C46]">24.2%</span>
                <span className="text-[10px] text-[#065F46] block font-medium truncate">Below 30% ceiling</span>
              </div>
            </div>
          </div>

          {/* 4 Interactive Dimension Tabs */}
          <div className="p-4 sm:p-8 space-y-5 sm:space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
              {dimensions.map((dim) => {
                const Icon = iconMap[dim.id] || Activity;
                const isSelected = selectedDimension === dim.id;
                return (
                  <button
                    key={dim.id}
                    type="button"
                    onClick={() => setSelectedDimension(dim.id)}
                    className={`p-3 sm:p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between min-h-[52px] ${
                      isSelected
                        ? "bg-[#FAF9F5] border-[#0D5C46] shadow-sm ring-1 ring-[#0D5C46]"
                        : "bg-white border-[#E6E4DD] hover:bg-[#FAF9F5] hover:border-[#D1CFCE]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-[#0D5C46] text-white"
                              : "bg-[#FAF9F5] text-[#475569] border border-[#E6E4DD]"
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-[#0F172A]">
                          {dim.score}/100
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#0F172A]">{dim.title}</h4>
                      <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                        {dim.status} · {dim.badgeText}
                      </p>
                    </div>

                    <div className="mt-3 w-full bg-[#E6E4DD] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#0D5C46] h-full rounded-full transition-all duration-500"
                        style={{ width: `${dim.score}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Deep Dive Inspector for the Selected Dimension */}
            <div className="bg-[#FAF9F5] p-5 sm:p-7 rounded-xl border border-[#E6E4DD] space-y-4 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-3 border-b border-[#E6E4DD]">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-[#0F172A]">
                      {activeData.title} Deep Dive
                    </h4>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white border border-[#E6E4DD] text-[#0D5C46]">
                      Score: {activeData.score} ({activeData.benchmark})
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] mt-0.5">{activeData.description}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#065F46] font-medium bg-[#ECFDF5] px-3 py-1.5 rounded-lg border border-[#A7F3D0] w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Healthy</span>
                </div>
              </div>

              {/* Dimension Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                {activeData.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-lg border border-[#E6E4DD]">
                    <span className="text-[10px] text-[#64748B] font-semibold uppercase block">
                      {m.label}
                    </span>
                    <span className="text-sm font-bold font-mono text-[#0F172A] mt-0.5 block">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actionable Driver Insight */}
              <div className="p-3.5 bg-white rounded-lg border border-[#A7F3D0] flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#0D5C46] flex-shrink-0" />
                  <span className="text-[#334155]">
                    <strong className="text-[#0F172A]">Key Driver:</strong> {activeData.insight}
                  </span>
                </div>
                <span className="hidden sm:inline text-[#0D5C46] font-semibold text-[11px] whitespace-nowrap">
                  Optimal Zone
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
