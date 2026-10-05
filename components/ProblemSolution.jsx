"use client";

import { useState } from "react";
import {
  Layers,
  HelpCircle,
  Compass,
  ArrowRight,
  Database,
  BrainCircuit,
  Zap,
  Check,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export default function ProblemSolution() {
  const [activeStage, setActiveStage] = useState(1);

  const problems = [
    {
      num: "01",
      icon: Layers,
      title: "Too much information",
      summary: "Drowning in raw numbers without context.",
      detail:
        "Traditional banking portals dump hundreds of uncategorized line items, confusing debit codes, and isolated account balances. You have a mountain of data, but zero synthesis.",
      tag: "Cognitive Overload",
    },
    {
      num: "02",
      icon: HelpCircle,
      title: "Difficult to understand",
      summary: "Cryptic merchant tags and scattered accounts.",
      detail:
        "Entries like 'POS *84210-BLR-CR' offer no intuition. Trying to calculate your real monthly burn across credit cards, checking accounts, and investments feels like a full-time accounting job.",
      tag: "Opaque Records",
    },
    {
      num: "03",
      icon: Compass,
      title: "Unclear next steps",
      summary: "Knowing what happened doesn't tell you what to do next.",
      detail:
        "Spreadsheets are historical archives — they record what you spent yesterday, but never advise how much is safe to spend today or whether you can safely fund your next milestone.",
      tag: "Paralysis by Analysis",
    },
  ];

  const stages = [
    {
      id: 0,
      phase: "Data",
      subtitle: "Fragmented & Raw",
      icon: Database,
      description: "Disjointed transactions, cryptic merchant tags, and disconnected account balances.",
      previewContent: (
        <div className="space-y-2 font-mono text-xs text-[#64748B] bg-[#FAF9F5] p-3.5 rounded-lg border border-[#E6E4DD]">
          <div className="flex items-center justify-between pb-1 border-b border-[#E6E4DD] text-[10px] uppercase text-[#94A3B8]">
            <span>Raw Statement Line</span>
            <span>Recorded</span>
          </div>
          <div className="flex justify-between items-center text-[#334155]">
            <span className="truncate">ACH-DEBIT-93821-AMZN-MKT</span>
            <span className="text-[#0F172A] font-medium">-₹2,840</span>
          </div>
          <div className="flex justify-between items-center text-[#334155]">
            <span className="truncate">UPI/492019/SWIGGY-FOOD-IND</span>
            <span className="text-[#0F172A] font-medium">-₹640</span>
          </div>
          <div className="flex justify-between items-center text-[#334155]">
            <span className="truncate">NEFT/SALARY-CORP-OCT26</span>
            <span className="text-[#0D5C46] font-medium">+₹85,000</span>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      phase: "Understanding",
      subtitle: "Synthesized & Contextualized",
      icon: BrainCircuit,
      description: "Fermor normalizes merchant strings, measures baseline burn, and computes health indicators.",
      previewContent: (
        <div className="space-y-2 text-xs bg-[#FAF9F5] p-3.5 rounded-lg border border-[#0D5C46]/20">
          <div className="flex items-center justify-between pb-1 border-b border-[#E6E4DD]">
            <span className="text-[10px] font-semibold uppercase text-[#0D5C46]">Normalized Intelligence</span>
            <span className="text-[10px] bg-[#ECFDF5] text-[#065F46] px-1.5 py-0.5 rounded font-mono">Verified</span>
          </div>
          <div className="flex justify-between items-center text-[#334155]">
            <span>Baseline Fixed Commitments</span>
            <span className="font-mono font-semibold text-[#0F172A]">₹19,200 (45%)</span>
          </div>
          <div className="flex justify-between items-center text-[#334155]">
            <span>Discretionary Lifestyle Spend</span>
            <span className="font-mono font-semibold text-[#0F172A]">₹14,500 (34%)</span>
          </div>
          <div className="flex justify-between items-center text-[#334155]">
            <span>True Liquid Savings Surplus</span>
            <span className="font-mono font-semibold text-[#0D5C46]">+₹28,000 (33%)</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      phase: "Action",
      subtitle: "Confident Next Steps",
      icon: Zap,
      description: "Direct, high-impact guidance you can execute without guesswork.",
      previewContent: (
        <div className="space-y-2 text-xs bg-white p-3.5 rounded-lg border border-[#A7F3D0] shadow-xs">
          <div className="flex items-center gap-1.5 text-[#065F46] font-semibold text-[11px]">
            <Check className="w-3.5 h-3.5" />
            <span>Recommended Pay Cycle Actions</span>
          </div>
          <div className="p-2 rounded bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
            <span className="text-[#334155] text-xs">Sweep ₹15,000 into 7.1% Reserve</span>
            <span className="text-[11px] font-mono text-[#0D5C46] font-bold">+₹1,065/yr</span>
          </div>
          <div className="p-2 rounded bg-[#FAF9F5] border border-[#E6E4DD] flex items-center justify-between">
            <span className="text-[#334155] text-xs">Safe daily flex spending ceiling</span>
            <span className="text-[11px] font-mono text-[#0F172A] font-bold">₹950 / day</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="product" className="py-14 sm:py-24 lg:py-36 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#0D5C46]">
            The Problem With Traditional Finance
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] font-sans">
            More financial data doesn’t always mean more clarity.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Opening your bank app shouldn’t trigger cognitive exhaustion. Most software catalogs
            transactions without explaining their consequence on your real life.
          </p>
        </div>

        {/* 3 Common Problems */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.num}
                className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E6E4DD] hover:border-[#D1CFCE] transition-all duration-200 flex flex-col justify-between space-y-5 shadow-[0_2px_8px_rgba(15,23,42,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-xs font-semibold text-[#0D5C46] px-2.5 py-1 rounded-md bg-[#FAF9F5] border border-[#E6E4DD]">
                      {prob.num}
                    </span>
                    <span className="text-[11px] font-medium text-[#64748B] bg-[#FAF9F5] px-2 py-0.5 rounded border border-[#E6E4DD]">
                      {prob.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5 font-sans">
                    {prob.title}
                  </h3>
                  <p className="text-sm font-medium text-[#0D5C46] mb-2.5">
                    {prob.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {prob.detail}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#E6E4DD] flex items-center gap-2 text-xs text-[#64748B]">
                  <AlertCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  <span>Leaves you second-guessing next moves</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Fermor Transformation Bridge */}
        <div className="mt-16 sm:mt-24 lg:mt-32 max-w-5xl mx-auto">
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-[#0D5C46] bg-[#ECFDF5] px-3.5 py-1.5 rounded-full border border-[#A7F3D0]">
              The Fermor Solution
            </span>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] tracking-tight">
              Fermor turns financial data into decisions.
            </h3>
            <p className="text-base sm:text-lg text-[#475569] max-w-2xl mx-auto">
              Follow the natural progression that converts fragmented transaction noise into calm,
              decisive confidence.
            </p>
          </div>

          {/* Interactive Stepper Navigation (Large 44px Touch Targets for Mobile) */}
          <div className="mb-6 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {stages.map((stg, i) => (
              <button
                key={stg.phase}
                type="button"
                onClick={() => setActiveStage(stg.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all min-h-[44px] ${
                  activeStage === stg.id
                    ? "bg-[#0D5C46] text-white shadow-sm ring-2 ring-[#0D5C46]/30"
                    : "bg-white text-[#475569] border border-[#E6E4DD] hover:text-[#0F172A] hover:bg-[#FAF9F5]"
                }`}
                aria-pressed={activeStage === stg.id}
              >
                <span className={`w-2 h-2 rounded-full ${activeStage === stg.id ? "bg-white" : "bg-[#0D5C46]"}`} />
                <span>0{i + 1} {stg.phase}</span>
              </button>
            ))}
          </div>

          {/* Elegant 3-Phase Transformation Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 relative">
            {stages.map((stg, i) => {
              const Icon = stg.icon;
              const isSelected = activeStage === stg.id;
              return (
                <div
                  key={stg.phase}
                  onClick={() => setActiveStage(stg.id)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#0D5C46] shadow-[0_12px_32px_-8px_rgba(13,92,70,0.12)] ring-1 ring-[#0D5C46]"
                      : "bg-white/80 border-[#E6E4DD] hover:bg-white hover:border-[#D1CFCE]"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected
                            ? "bg-[#0D5C46] text-white"
                            : "bg-[#FAF9F5] text-[#475569] border border-[#E6E4DD]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#64748B]">
                        Phase 0{i + 1}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-1">
                      {stg.phase}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0D5C46] mb-2 sm:mb-3">
                      {stg.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                      {stg.description}
                    </p>
                  </div>

                  {/* Visual Snippet */}
                  <div className="pt-3.5 border-t border-[#E6E4DD]">
                    {stg.previewContent}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
