# Fermor

Fermor is a modern fintech web application built to help people understand their finances, uncover clear financial insights, and make better decisions with their money. The application translates raw transaction data and fragmented accounts into structured understanding, composite health metrics, and practical next steps.

---

## Tech Stack

* **Next.js** (App Router)
* **React** (v19)
* **JavaScript** (ES6+ strictly; no TypeScript, `.js` and `.jsx` only)
* **Tailwind CSS** (v4 tailored design tokens)
* **Recharts** (Interactive financial charts)
* **Lucide React** (Clean, lightweight iconography)

---

## Features

* **Sticky Navigation Bar:** Transitions to an elevated backdrop-blur surface on scroll with mobile drawer navigation and accessible keyboard controls.
* **Product Dashboard Preview:** Pure React and Tailwind component visualization in the hero showcasing liquid balance, monthly inflow, spending pace, savings rate, and composite health score.
* **Problem → Solution Transformation:** Interactive 3-stage visual narrative demonstrating the progression from raw data to synthesized understanding to high-impact action.
* **Interactive Financial Dashboard:**
  * Dynamic timeframe switching (**Weekly**, **Monthly**, **Yearly**) that recalculates balances, charts, and categories in real time.
  * Perspective filters (**Full Cashflow**, **Spending Only**, **Net Surplus**).
  * Dual-currency conversion toggle (**₹ INR** and **$ USD**).
  * Category breakdown with interactive row selection and status indicators.
* **Financial Health Index:** Prominent 82/100 health score dial with peer-independent benchmarks across 4 core pillars: Spending Discipline, Savings & Reserve, Cash Flow Stability, and Goal Velocity.
* **Goal Runway Simulator:** Interactive slider in the features section allowing users to test monthly contribution adjustments and observe goal acceleration.
* **How It Works Stepper:** Clean 3-step workflow (Connect, Understand, Act) with interactive UI preview panels.
* **Example User Scenarios:** Transparent persona journeys illustrating practical workflow benefits without fabricated customer reviews.
* **Interactive Sandbox Modal:** Full-featured demo authentication dialog supporting instant 1-click sandbox login, ESC key dismissal, and backdrop handling.
* **Actionable CTA Section:** High-contrast closing call-to-action with working email capture and state feedback.

---

## Design Approach

* **Premium Fintech Visual Language:**  
  Designed with an editorial aesthetic using a warm off-white background (`#FAF9F5`), deep charcoal typography (`#0F172A`), generous whitespace, and a British Racing Green accent (`#0D5C46`). The interface avoids generic SaaS patterns (floating blobs, heavy gradients, or excessive card rounding) in favor of calm, trustworthy clarity.

* **Product Dashboard Visualization:**  
  Built entirely with modular React components rather than static images. Key performance indicators, burn-rate sparklines, and allocation gauges are organized hierarchically to highlight critical insights before granular numbers.

* **Responsive Design:**  
  Engineered mobile-first and tested across standard viewports (375px, 390px, 414px, 768px, 1024px, 1280px, 1440px). Grids collapse intentionally into readable vertical stacks, touch targets adhere to accessibility standards, and the navigation shifts seamlessly into a slide-down mobile drawer.

* **Interactive Financial Insights:**  
  Every interactive control produces tangible feedback. State changes immediately recalculate charts and metrics, providing an intuitive, functional demonstration of the product's value proposition.

---

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production

```bash
# 1. Create production build
npm run build

# 2. Start production server
npm start
```
