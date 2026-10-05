/**
 * Fermor Mock Financial Data
 * Realistic, verified fintech datasets for the Fermor homepage product demonstration.
 */

export const mockDashboardData = {
  overview: {
    totalBalance: 148250,
    totalBalanceUSD: 18450,
    monthlyIncome: 85000,
    monthlySpending: 42500,
    monthlySavings: 28000,
    savingsRate: 32.9,
    financialHealthScore: 82,
    healthStatus: "Optimal",
    healthDelta: "+4 pts this month",
    runwayMonths: 4.8,
    discretionaryRatio: 24.2,
  },

  timeframes: {
    monthly: {
      label: "Monthly",
      period: "Last 6 Months (May – Oct 2026)",
      summary: {
        income: 85000,
        spending: 42500,
        savings: 28000,
        netSurplus: 14500,
        burnRate: "-4.2% vs last month",
      },
      chartData: [
        { period: "May", income: 82000, spending: 46200, savings: 24000, net: 11800 },
        { period: "Jun", income: 83500, spending: 44800, savings: 25500, net: 13200 },
        { period: "Jul", income: 85000, spending: 47100, savings: 25000, net: 12900 },
        { period: "Aug", income: 85000, spending: 43900, savings: 27100, net: 14000 },
        { period: "Sep", income: 85000, spending: 44200, savings: 26800, net: 14000 },
        { period: "Oct", income: 85000, spending: 42500, savings: 28000, net: 14500 },
      ],
      categories: [
        { name: "Housing", amount: 16500, percentage: 38.8, color: "#0D5C46", change: "0%", status: "Fixed" },
        { name: "Food & Dining", amount: 9800, percentage: 23.1, color: "#10B981", change: "-8.4%", status: "Optimized" },
        { name: "Transport", amount: 4600, percentage: 10.8, color: "#6366F1", change: "+2.1%", status: "Normal" },
        { name: "Shopping", amount: 5100, percentage: 12.0, color: "#F59E0B", change: "-14.2%", status: "Decreased" },
        { name: "Entertainment", amount: 3800, percentage: 8.9, color: "#EC4899", change: "+1.5%", status: "Discretionary" },
        { name: "Other & Utilities", amount: 2700, percentage: 6.4, color: "#64748B", change: "-3.0%", status: "Variable" },
      ],
    },

    weekly: {
      label: "Weekly",
      period: "Current Week (Mon – Sun)",
      summary: {
        income: 21250,
        spending: 9850,
        savings: 7000,
        netSurplus: 4400,
        burnRate: "Pacing 12% below budget",
      },
      chartData: [
        { period: "Mon", income: 21250, spending: 1100, savings: 1000, net: 19150 },
        { period: "Tue", income: 0, spending: 1850, savings: 1000, net: -2850 },
        { period: "Wed", income: 0, spending: 920, savings: 1000, net: -1920 },
        { period: "Thu", income: 0, spending: 1420, savings: 1000, net: -2420 },
        { period: "Fri", income: 0, spending: 2180, savings: 1000, net: -3180 },
        { period: "Sat", income: 0, spending: 1640, savings: 1000, net: -2640 },
        { period: "Sun", income: 0, spending: 740, savings: 1000, net: -1740 },
      ],
      categories: [
        { name: "Food & Dining", amount: 3200, percentage: 32.5, color: "#10B981", change: "-5.0%", status: "Controlled" },
        { name: "Housing", amount: 4125, percentage: 41.9, color: "#0D5C46", change: "0%", status: "Allocated" },
        { name: "Transport", amount: 980, percentage: 9.9, color: "#6366F1", change: "+1.2%", status: "On track" },
        { name: "Shopping", amount: 820, percentage: 8.3, color: "#F59E0B", change: "-18.0%", status: "Under cap" },
        { name: "Entertainment", amount: 510, percentage: 5.2, color: "#EC4899", change: "-10.0%", status: "Minimal" },
        { name: "Other & Utilities", amount: 215, percentage: 2.2, color: "#64748B", change: "0%", status: "Fixed" },
      ],
    },

    yearly: {
      label: "Yearly",
      period: "Full Year 2026 Projection",
      summary: {
        income: 1020000,
        spending: 510000,
        savings: 336000,
        netSurplus: 174000,
        burnRate: "33% net wealth accumulation",
      },
      chartData: [
        { period: "Q1", income: 248000, spending: 138000, savings: 74000, net: 36000 },
        { period: "Q2", income: 253000, spending: 132000, savings: 81000, net: 40000 },
        { period: "Q3", income: 255000, spending: 125000, savings: 88000, net: 42000 },
        { period: "Q4 (Est)", income: 264000, spending: 115000, savings: 93000, net: 56000 },
      ],
      categories: [
        { name: "Housing", amount: 198000, percentage: 38.8, color: "#0D5C46", change: "0%", status: "Contracted" },
        { name: "Food & Dining", amount: 114000, percentage: 22.4, color: "#10B981", change: "-6.2%", status: "Sustained" },
        { name: "Transport", amount: 56000, percentage: 11.0, color: "#6366F1", change: "+1.0%", status: "Predictable" },
        { name: "Shopping", amount: 64000, percentage: 12.5, color: "#F59E0B", change: "-11.4%", status: "Pruned" },
        { name: "Entertainment", amount: 46000, percentage: 9.0, color: "#EC4899", change: "+0.5%", status: "Budgeted" },
        { name: "Other & Utilities", amount: 32000, percentage: 6.3, color: "#64748B", change: "-2.1%", status: "Standard" },
      ],
    },
  },

  healthDimensions: [
    {
      id: "spending",
      title: "Spending Discipline",
      score: 88,
      benchmark: "80+ Target",
      status: "Excellent",
      statusColor: "emerald",
      badgeText: "Controlled",
      description: "Discretionary spend sits comfortably below 25% of take-home pay.",
      metrics: [
        { label: "Fixed vs Flex Ratio", value: "62% / 38%" },
        { label: "Month-on-Month Pace", value: "-4.2% lower" },
        { label: "Peak Spend Day", value: "Saturday (18% avg)" },
      ],
      insight: "You curtailed impulse retail shopping by 14.2% this billing cycle.",
    },
    {
      id: "savings",
      title: "Savings & Reserve",
      score: 78,
      benchmark: "75+ Target",
      status: "Strong",
      statusColor: "emerald",
      badgeText: "High Yield",
      description: "Current liquid reserves cover 4.8 months of essential operating costs.",
      metrics: [
        { label: "Savings Rate", value: "32.9% of income" },
        { label: "Emergency Buffer", value: "4.8 Months" },
        { label: "High-Yield APY", value: "7.1% p.a." },
      ],
      insight: "Automatic deposit rule shifted ₹28,000 into reserve instantly on pay day.",
    },
    {
      id: "cashflow",
      title: "Cash Flow Stability",
      score: 85,
      benchmark: "70+ Target",
      status: "Optimal",
      statusColor: "emerald",
      badgeText: "Positive Net",
      description: "Net monthly cash flow has maintained a positive surplus for 7 consecutive months.",
      metrics: [
        { label: "Net Monthly Surplus", value: "+₹14,500" },
        { label: "Income Predictability", value: "98.4%" },
        { label: "Recurring Obligation Ratio", value: "44.2%" },
      ],
      insight: "Zero overdraft risk detected with buffer alerts set at ₹20,000 floor.",
    },
    {
      id: "goals",
      title: "Goal Velocity",
      score: 80,
      benchmark: "75+ Target",
      status: "On Schedule",
      statusColor: "emerald",
      badgeText: "2 of 3 Met",
      description: "Key medium-term financial targets remain ahead of scheduled milestone dates.",
      metrics: [
        { label: "Emergency Fund", value: "84% (₹2,10,000 / ₹2,50,000)" },
        { label: "Travel Reserve", value: "100% Complete" },
        { label: "Tax Buffer 2026", value: "68% (Target: Dec)" },
      ],
      insight: "At current deposit velocity, your Emergency Fund finalizes 42 days ahead of plan.",
    },
  ],

  recentInsights: [
    {
      id: 1,
      type: "opportunity",
      title: "3 Unused Subscriptions Detected",
      detail: "Cloud storage and gym tier renewals cost ₹1,850/mo with zero activity in 60 days.",
      actionLabel: "Review & Cancel",
      impact: "+₹22,200 annual saving",
    },
    {
      id: 2,
      type: "milestone",
      title: "Emergency Runway Crosses 4-Month Mark",
      detail: "Your liquid reserves now cover 4.8 months of baseline obligations.",
      actionLabel: "View Reserve Breakdown",
      impact: "Confidence rating: High",
    },
    {
      id: 3,
      type: "pattern",
      title: "Dining Out Trend Lowering",
      detail: "Food expenditure dropped ₹820 this month due to planned grocery preparation.",
      actionLabel: "Set Category Ceiling",
      impact: "Freed ₹2,460 for savings",
    },
  ],

  testimonials: [
    {
      persona: "Product Designer Scenario",
      quote:
        "I used to spend every Sunday evening dreading Excel spreadsheets. Fermor replaced three fragmented accounts and showed me my true monthly discretionary budget in under ten seconds.",
      author: "Arjun M.",
      role: "Design Lead",
      focus: "Eliminating manual spreadsheets",
      metric: "Freed 4 hrs/wk from tracking",
    },
    {
      persona: "Consultant Scenario",
      quote:
        "Most financial apps throw 40 graphs at you and call it insight. Fermor did the opposite: it translated raw account logs into three concrete decisions I could actually execute on Monday.",
      author: "Elena R.",
      role: "Independent Consultant",
      focus: "Actionable cashflow decisions",
      metric: "Improved savings rate from 18% to 32%",
    },
    {
      persona: "Software Engineer Scenario",
      quote:
        "The financial health score isn't a vanity badge. Breaking it down into cashflow velocity and runway months helped my partner and me prepare for our home downpayment without panic.",
      author: "David C.",
      role: "Software Architect",
      focus: "Runway calculation & milestone tracking",
      metric: "4.8 months runway buffer achieved",
    },
  ],

  steps: [
    {
      step: "01",
      name: "Connect",
      title: "Bring your financial picture together",
      tagline: "Unified view of accounts & cashflow",
      description:
        "Bring checking, savings, cards, and investment accounts together into one clean workspace. Fermor is designed solely for analysis — never storing bank credentials or executing transfers.",
      bullets: [
        "Privacy-first read-only architecture",
        "Aggregate checking, savings, and investments",
        "Continuous reconciliation without spreadsheets",
      ],
      previewSnippet: {
        badge: "Unified Accounts",
        title: "3 Demo Accounts Aggregated",
        items: [
          { name: "Primary Checking", balance: "₹62,400", status: "Connected" },
          { name: "High-Yield Reserve", balance: "₹71,850", status: "Connected" },
          { name: "Discretionary Card", balance: "₹14,000", status: "Connected" },
        ],
      },
    },
    {
      step: "02",
      name: "Understand",
      title: "Transform raw transactions into narrative clarity",
      tagline: "Smart categorization without manual tagging",
      description:
        "Instead of 140 cryptic line items like 'PAYPAL *3872-NY', Fermor normalizes merchant history, calculates your true baseline burn, and scores your financial health.",
      bullets: [
        "Cryptic merchant names converted to clean categories",
        "Deterministic fixed vs. flexible spend mapping",
        "Composite health score calculated across 4 dimensions",
      ],
      previewSnippet: {
        badge: "Synthesized Insight",
        title: "October Breakdown Clarified",
        items: [
          { name: "Fixed Baseline (Rent, Utilities)", balance: "₹19,200", status: "45.1%" },
          { name: "Discretionary Lifestyle", balance: "₹14,500", status: "34.2%" },
          { name: "Surplus Directed to Reserve", balance: "₹8,800", status: "20.7%" },
        ],
      },
    },
    {
      step: "03",
      name: "Act",
      title: "Turn insights into high-impact, confident decisions",
      tagline: "Actionable recommendations, not static data",
      description:
        "Clarity is pointless without action. Fermor highlights the single best financial move to make each pay cycle — whether that's sweeping surplus into high yield or trimming recurring waste.",
      bullets: [
        "Proactive alerts before subscriptions renew",
        "Dynamic runway projections for future milestones",
        "Zero overwhelm: one priority action per week",
      ],
      previewSnippet: {
        badge: "Recommended Action",
        title: "Optimal Allocation for Pay Day",
        items: [
          { name: "Lock in 7.1% APY on ₹15,000 surplus", balance: "+₹1,065/yr", status: "Recommended" },
          { name: "Prune 2 lapsed memberships", balance: "+₹1,200/mo", status: "Actionable" },
          { name: "Safe discretionary spend ceiling", balance: "₹950/day", status: "Calculated" },
        ],
      },
    },
  ],
};
