"use client";

import { useState, useSyncExternalStore } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  Activity,
  ArrowUpRight,
  Filter,
  Calendar,
  Layers,
  Sparkles,
  Info,
} from "lucide-react";
import { mockDashboardData } from "../data/mockFinancialData";
import { formatCurrencyNumber } from "../data/formatters";

const emptySubscribe = () => () => {};

// Custom Tooltip component for Recharts
function CustomChartTooltip({ active, payload, label, currency }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#E6E4DD] shadow-lg text-xs space-y-1.5 font-sans z-50">
        <p className="font-semibold text-[#0F172A] border-b border-[#E6E4DD] pb-1 font-mono">
          {label}
        </p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-1.5 text-[#64748B]">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="capitalize">{entry.name}:</span>
            </span>
            <span className="font-mono font-bold text-[#0F172A]">
              {currency}{formatCurrencyNumber(entry.value, currency)}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default function FinancialDashboard() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [timeframe, setTimeframe] = useState("monthly"); // "weekly" | "monthly" | "yearly"
  const [chartView, setChartView] = useState("all"); // "all" | "spending" | "surplus"
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currency, setCurrency] = useState("₹"); // "₹" | "$"

  const currentDataset = mockDashboardData.timeframes[timeframe];
  const currencyMultiplier = currency === "$" ? 0.012 : 1;

  // Format currency value helper (deterministic across SSR and client)
  const fmt = (val) => {
    const adjusted = Math.round(val * currencyMultiplier);
    return `${currency}${formatCurrencyNumber(adjusted, currency)}`;
  };

  // Prepare chart data adjusted for currency
  const chartData = currentDataset.chartData.map((d) => ({
    ...d,
    income: Math.round(d.income * currencyMultiplier),
    spending: Math.round(d.spending * currencyMultiplier),
    savings: Math.round(d.savings * currencyMultiplier),
    net: Math.round(d.net * currencyMultiplier),
  }));

  return (
    <section id="dashboard" className="scroll-mt-16 sm:scroll-mt-20 py-14 sm:py-24 lg:py-36 bg-[#FAF9F5] border-t border-[#E6E4DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-[#0D5C46] bg-[#ECFDF5] px-3.5 py-1.5 rounded-full border border-[#A7F3D0]">
            Interactive Product Demo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] font-sans">
            See the bigger picture.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Experience the interface designed to clarify, not clutter. Switch timeframes, filter
            perspectives, and examine cashflow in real time.
          </p>
        </div>

        {/* The Interactive Dashboard Card Container */}
        <div className="bg-white rounded-2xl border border-[#E6E4DD] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.02)] overflow-hidden">
          {/* Controls Bar: Timeframe tabs + Chart View selector + Currency Toggle */}
          <div className="p-3.5 sm:p-6 bg-[#FAF9F5] border-b border-[#E6E4DD] flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
            {/* Timeframe Switcher Tabs */}
            <div className="flex items-center justify-between sm:justify-start gap-1 bg-white p-1 rounded-xl border border-[#E6E4DD] shadow-xs w-full sm:w-auto">
              <span className="text-xs font-semibold text-[#64748B] px-2.5 py-1 hidden sm:inline flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0D5C46]" />
                Timeframe:
              </span>
              {["weekly", "monthly", "yearly"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setTimeframe(tab)}
                  className={`flex-1 sm:flex-initial px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold transition-all capitalize min-h-[40px] sm:min-h-[36px] flex items-center justify-center ${
                    timeframe === tab
                      ? "bg-[#0D5C46] text-white shadow-xs"
                      : "text-[#475569] hover:text-[#0F172A] hover:bg-[#FAF9F5]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Middle & Right Controls */}
            <div className="flex items-center justify-between sm:justify-end flex-wrap gap-2 w-full md:w-auto">
              {/* Chart Focus Filter */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-[#E6E4DD] text-xs">
                <button
                  type="button"
                  onClick={() => setChartView("all")}
                  className={`px-2.5 py-1.5 sm:py-1 rounded-md transition-all font-medium min-h-[36px] flex items-center ${
                    chartView === "all" ? "bg-[#FAF9F5] text-[#0D5C46] font-semibold border border-[#E6E4DD]" : "text-[#64748B]"
                  }`}
                >
                  Full View
                </button>
                <button
                  type="button"
                  onClick={() => setChartView("spending")}
                  className={`px-2.5 py-1.5 sm:py-1 rounded-md transition-all font-medium min-h-[36px] flex items-center ${
                    chartView === "spending" ? "bg-[#FAF9F5] text-[#0D5C46] font-semibold border border-[#E6E4DD]" : "text-[#64748B]"
                  }`}
                >
                  Spending
                </button>
                <button
                  type="button"
                  onClick={() => setChartView("surplus")}
                  className={`px-2.5 py-1.5 sm:py-1 rounded-md transition-all font-medium min-h-[36px] flex items-center ${
                    chartView === "surplus" ? "bg-[#FAF9F5] text-[#0D5C46] font-semibold border border-[#E6E4DD]" : "text-[#64748B]"
                  }`}
                >
                  Surplus
                </button>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center bg-white p-1 rounded-xl border border-[#E6E4DD]">
                <button
                  type="button"
                  onClick={() => setCurrency("₹")}
                  className={`px-2.5 py-1.5 sm:py-1 rounded-lg text-xs font-mono font-bold transition-all min-h-[36px] flex items-center ${
                    currency === "₹" ? "bg-[#0D5C46] text-white" : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
                  title="Indian Rupee"
                >
                  ₹ INR
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("$")}
                  className={`px-2.5 py-1.5 sm:py-1 rounded-lg text-xs font-mono font-bold transition-all min-h-[36px] flex items-center ${
                    currency === "$" ? "bg-[#0D5C46] text-white" : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
                  title="US Dollar"
                >
                  $ USD
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Metrics Dashboard Body */}
          <div className="p-3.5 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            {/* Real-time KPI Stats Grid: Prioritized 1. Health, 2. Balance, 3. Spending, 4. Savings, 5. Inflow */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-4">
              {/* 1. Financial Health Score (Featured on mobile) */}
              <div className="col-span-2 md:col-span-1 bg-[#FAF9F5] p-3.5 sm:p-4 rounded-xl border border-[#0D5C46]/30 shadow-xs hover:border-[#0D5C46] transition-all">
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-1">
                  <span className="font-semibold text-[#0D5C46]">1. Health Score</span>
                  <Activity className="w-3.5 h-3.5 text-[#0D5C46]" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-bold font-mono text-[#0F172A]">82</span>
                  <span className="text-xs text-[#64748B] font-medium">/ 100</span>
                </div>
                <div className="mt-1 text-[11px] font-semibold text-[#065F46] bg-[#ECFDF5] px-1.5 py-0.5 rounded w-fit border border-[#A7F3D0]">
                  Optimal Condition
                </div>
              </div>

              {/* 2. Total Liquid Balance */}
              <div className="bg-[#FAF9F5] p-3.5 sm:p-4 rounded-xl border border-[#E6E4DD] hover:border-[#D1CFCE] transition-all">
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-1">
                  <span className="truncate">2. Total Balance</span>
                  <Wallet className="w-3.5 h-3.5 text-[#0D5C46] flex-shrink-0" />
                </div>
                <div suppressHydrationWarning className="text-lg sm:text-xl font-bold font-mono text-[#0F172A] truncate">
                  {fmt(mockDashboardData.overview.totalBalance)}
                </div>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-[#065F46] font-medium truncate">
                  <ArrowUpRight className="w-3 h-3 flex-shrink-0" />
                  <span>+12.4% MoM</span>
                </div>
              </div>

              {/* 3. Spending */}
              <div className="bg-[#FAF9F5] p-3.5 sm:p-4 rounded-xl border border-[#E6E4DD] hover:border-[#D1CFCE] transition-all">
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-1">
                  <span className="truncate">3. {timeframe === "weekly" ? "Weekly" : timeframe === "yearly" ? "Annual" : "Monthly"} Spend</span>
                  <TrendingDown className="w-3.5 h-3.5 text-[#64748B] flex-shrink-0" />
                </div>
                <div suppressHydrationWarning className="text-lg sm:text-xl font-bold font-mono text-[#0F172A] truncate">
                  {fmt(currentDataset.summary.spending)}
                </div>
                <div className="mt-1 text-[11px] text-[#065F46] font-medium truncate">
                  {currentDataset.summary.burnRate}
                </div>
              </div>

              {/* 4. Savings Rate */}
              <div className="bg-[#FAF9F5] p-3.5 sm:p-4 rounded-xl border border-[#E6E4DD] hover:border-[#D1CFCE] transition-all">
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-1">
                  <span className="truncate">4. Savings Rate</span>
                  <PiggyBank className="w-3.5 h-3.5 text-[#0D5C46] flex-shrink-0" />
                </div>
                <div className="text-lg sm:text-xl font-bold font-mono text-[#0D5C46]">
                  {mockDashboardData.overview.savingsRate}%
                </div>
                <div suppressHydrationWarning className="mt-1 text-[11px] text-[#065F46] font-medium truncate">
                  +{fmt(currentDataset.summary.savings)}
                </div>
              </div>

              {/* 5. Inflow */}
              <div className="bg-[#FAF9F5] p-3.5 sm:p-4 rounded-xl border border-[#E6E4DD] hover:border-[#D1CFCE] transition-all">
                <div className="flex items-center justify-between text-xs text-[#64748B] mb-1">
                  <span className="truncate">5. Inflow</span>
                  <TrendingUp className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
                </div>
                <div suppressHydrationWarning className="text-lg sm:text-xl font-bold font-mono text-[#0F172A] truncate">
                  {fmt(currentDataset.summary.income)}
                </div>
                <div className="mt-1 text-[11px] text-[#475569] truncate">
                  100% on schedule
                </div>
              </div>
            </div>

            {/* Chart + Insights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Interactive Recharts Graph (8 Cols) */}
              <div className="lg:col-span-8 bg-[#FAF9F5] p-3.5 sm:p-6 rounded-2xl border border-[#E6E4DD]">
                <div className="flex items-center justify-between mb-4 sm:mb-6 flex-wrap gap-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0F172A]">
                      {timeframe === "weekly" ? "Daily Cash Velocity" : timeframe === "yearly" ? "Quarterly Trajectory" : "Cash Flow Trend (Last 6 Months)"}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#64748B]">
                      {currentDataset.period}
                    </p>
                  </div>

                  {/* Legend */}
                  <div className="flex items-center gap-3 sm:gap-4 text-xs font-medium">
                    {(chartView === "all" || chartView === "surplus") && (
                      <span className="flex items-center gap-1.5 text-[#334155]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0D5C46]"></span>
                        Income
                      </span>
                    )}
                    {(chartView === "all" || chartView === "spending") && (
                      <span className="flex items-center gap-1.5 text-[#334155]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                        Spending
                      </span>
                    )}
                    {(chartView === "all" || chartView === "surplus") && (
                      <span className="flex items-center gap-1.5 text-[#334155]">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
                        Savings
                      </span>
                    )}
                  </div>
                </div>

                {/* Recharts Container */}
                <div className="w-full h-60 sm:h-72 lg:h-80">
                  {isMounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={chartData}
                        margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0D5C46" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#0D5C46" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E6E4DD" vertical={false} />
                        <XAxis
                          dataKey="period"
                          stroke="#64748B"
                          fontSize={10}
                          tickLine={false}
                          tickMargin={4}
                          axisLine={{ stroke: "#E6E4DD" }}
                        />
                        <YAxis
                          stroke="#64748B"
                          fontSize={9}
                          width={38}
                          tickLine={false}
                          axisLine={{ stroke: "#E6E4DD" }}
                          tickFormatter={(val) => `${currency}${val > 999 ? (val / 1000).toFixed(0) + "k" : val}`}
                        />
                        <Tooltip content={<CustomChartTooltip currency={currency} />} />

                        {(chartView === "all" || chartView === "surplus") && (
                          <Area
                            type="monotone"
                            dataKey="income"
                            stroke="#0D5C46"
                            strokeWidth={2.5}
                            fillOpacity={1}
                            fill="url(#colorIncome)"
                            name="Income"
                          />
                        )}

                        {(chartView === "all" || chartView === "spending") && (
                          <Area
                            type="monotone"
                            dataKey="spending"
                            stroke="#F59E0B"
                            strokeWidth={2.5}
                            fillOpacity={1}
                            fill="url(#colorSpending)"
                            name="Spending"
                          />
                        )}

                        {(chartView === "all" || chartView === "surplus") && (
                          <Area
                            type="monotone"
                            dataKey="savings"
                            stroke="#10B981"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorSavings)"
                            name="Savings"
                          />
                        )}
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-[#94A3B8]">
                      Loading interactive chart...
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-[#E6E4DD] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-xs text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[#0D5C46] flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs">Tap/hover points to inspect exact statement lines.</span>
                  </span>
                  <span className="font-mono text-[#0D5C46] font-semibold text-[11px] sm:text-xs">
                    Surplus: +{fmt(currentDataset.summary.netSurplus)}
                  </span>
                </div>
              </div>

              {/* Category Breakdown & Dynamic Filter (4 Cols) */}
              <div className="lg:col-span-4 bg-[#FAF9F5] p-3.5 sm:p-6 rounded-2xl border border-[#E6E4DD] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A]">Category Breakdown</h4>
                      <p className="text-xs text-[#64748B]">Tap category to filter</p>
                    </div>
                    <span className="text-xs font-mono font-medium text-[#64748B] bg-white px-2 py-0.5 rounded border border-[#E6E4DD]">
                      {currentDataset.categories.length} Categories
                    </span>
                  </div>

                  {/* List of categories with interactive clicks */}
                  <div className="space-y-2.5">
                    {currentDataset.categories.map((cat) => {
                      const isSelected = selectedCategory === cat.name;
                      return (
                        <div
                          key={cat.name}
                          onClick={() => setSelectedCategory(isSelected ? null : cat.name)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "bg-white border-[#0D5C46] ring-1 ring-[#0D5C46] shadow-xs"
                              : "bg-white/80 border-[#E6E4DD] hover:bg-white hover:border-[#D1CFCE]"
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-medium">
                            <span className="flex items-center gap-2 text-[#0F172A]">
                              <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{ backgroundColor: cat.color }}
                              />
                              <span className="font-semibold">{cat.name}</span>
                            </span>
                            <span suppressHydrationWarning className="font-mono font-bold text-[#0F172A]">
                              {fmt(cat.amount)}
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="mt-2 flex items-center justify-between gap-3">
                            <div className="h-1.5 flex-1 bg-[#E6E4DD] rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all duration-500"
                                style={{
                                  width: `${cat.percentage}%`,
                                  backgroundColor: cat.color,
                                }}
                              />
                            </div>
                            <span className="text-[11px] font-mono text-[#64748B] w-10 text-right">
                              {cat.percentage}%
                            </span>
                          </div>

                          {isSelected && (
                            <div className="mt-2.5 pt-2 border-t border-[#E6E4DD] flex items-center justify-between text-[11px] text-[#475569]">
                              <span>Status: <strong className="text-[#0D5C46]">{cat.status}</strong></span>
                              <span>Change: <strong className="font-mono">{cat.change}</strong></span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Reset or helper state */}
                <div className="mt-4 pt-3 border-t border-[#E6E4DD] flex items-center justify-between text-xs">
                  {selectedCategory ? (
                    <>
                      <span className="text-xs text-[#0D5C46] font-medium">
                        Filtering by: <strong>{selectedCategory}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(null)}
                        className="text-xs text-[#64748B] hover:text-[#0F172A] underline"
                      >
                        Reset filter
                      </button>
                    </>
                  ) : (
                    <span className="text-[11px] text-[#94A3B8]">
                      Tip: Select any row above to inspect variance & target caps.
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
