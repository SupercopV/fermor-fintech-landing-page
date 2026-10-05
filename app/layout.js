import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport = {
  themeColor: "#FAF9F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "Fermor — Your finances, finally made clear.",
  description:
    "Fermor helps turn complex financial information into clear insights and better financial decisions.",
  keywords: [
    "personal finance",
    "financial intelligence",
    "money clarity",
    "financial health score",
    "cashflow insights",
    "wealth planning",
    "fintech",
  ],
  authors: [{ name: "Fermor" }],
  creator: "Fermor",
  openGraph: {
    title: "Fermor — Your finances, finally made clear.",
    description:
      "Fermor helps turn complex financial information into clear insights and better financial decisions.",
    type: "website",
    locale: "en_US",
    siteName: "Fermor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermor — Your finances, finally made clear.",
    description:
      "Fermor helps turn complex financial information into clear insights and better financial decisions.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF9F5] text-[#0F172A] font-sans selection:bg-[#0D5C46]/15 selection:text-[#0D5C46] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
