"use client";

import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Overview", href: "#product" },
      { name: "Features", href: "#insights" },
      { name: "Insights Engine", href: "#insights" },
      { name: "Interactive Demo", href: "#how-it-works" },
      { name: "Security Architecture", href: "#" },
    ],
    company: [
      { name: "About Fermor", href: "#about" },
      { name: "Careers", href: "#", badge: "Hiring" },
      { name: "Contact & Press", href: "#" },
      { name: "Brand Guidelines", href: "#" },
    ],
    resources: [
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "SOC-2 Compliance", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#FAF9F5] border-t border-[#E6E4DD] text-[#475569] pt-12 sm:pt-16 pb-10 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-12 border-b border-[#E6E4DD]">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0D5C46] flex items-center justify-center text-white font-semibold text-lg shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M4 5H20M4 12H16M4 19H12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0F172A] font-sans">
                Fermor
              </span>
            </a>

            <p className="text-sm text-[#475569] max-w-sm leading-relaxed">
              Your finances, finally made clear. Fermor turns complex financial information into
              simple insights and actionable next steps.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#065F46] font-medium bg-[#ECFDF5] px-3 py-1.5 rounded-lg border border-[#A7F3D0] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#0D5C46] shrink-0"></span>
              <span>Designed with privacy and security in mind · Product Prototype</span>
            </div>
          </div>

          {/* Links Grid: 2 columns on mobile, 3 columns on tablet/desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-2 lg:col-span-3 gap-8">
            {/* Product Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3 sm:mb-4">
                Product
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-sm">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-block py-1 hover:text-[#0D5C46] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3 sm:mb-4">
                Company
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1.5 py-1 hover:text-[#0D5C46] transition-colors"
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="text-[10px] font-semibold bg-[#ECFDF5] text-[#065F46] px-1.5 py-0.2 rounded border border-[#A7F3D0]">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3 sm:mb-4">
                Resources
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-sm">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-block py-1 hover:text-[#0D5C46] transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Social Links with 44x44px touch targets */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] text-center sm:text-left">
          <p>© {currentYear} Fermor Technologies Inc. All rights reserved.</p>

          <div className="flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white border border-[#E6E4DD] flex items-center justify-center text-[#475569] hover:text-[#0D5C46] hover:border-[#0D5C46]/30 transition-all shadow-xs"
              aria-label="Fermor on LinkedIn"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white border border-[#E6E4DD] flex items-center justify-center text-[#475569] hover:text-[#0D5C46] hover:border-[#0D5C46]/30 transition-all shadow-xs"
              aria-label="Fermor on X (Twitter)"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white border border-[#E6E4DD] flex items-center justify-center text-[#475569] hover:text-[#0D5C46] hover:border-[#0D5C46]/30 transition-all shadow-xs"
              aria-label="Fermor on Instagram"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
