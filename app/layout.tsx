import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josh Green | Fractional COO/CFO and Advisor | RightStart",
  description:
    "Josh Green (RightStart) is a fractional COO/CFO and advisor for nonprofits and mission-driven startups. Clients include aiEDU and Designing Justice + Designing Spaces.",
  metadataBase: new URL("https://rightstart.co"),
  openGraph: {
    title: "Josh Green | Fractional COO/CFO and Advisor | RightStart",
    description:
      "Fractional COO/CFO and advisor for nonprofits and mission-driven startups. Clients include aiEDU and Designing Justice + Designing Spaces.",
    siteName: "RightStart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Green | Fractional COO/CFO and Advisor | RightStart",
    description:
      "Fractional COO/CFO and advisor for nonprofits and mission-driven startups. Clients include aiEDU and Designing Justice + Designing Spaces.",
  },
  other: {
    "theme-color": "#1a2744",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
