import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josh Green | Fractional COO/CFO and Advisor",
  description:
    "Strategic operations leadership for nonprofits, health-focused ventures, and mission-driven organizations. Josh Green offers fractional and interim COO and CFO support.",
  metadataBase: new URL("https://rightstart.co"),
  openGraph: {
    title: "Josh Green | Fractional COO/CFO and Advisor",
    description:
      "Strategic operations leadership for nonprofits, health-focused ventures, and mission-driven organizations.",
    url: "https://rightstart.co",
    siteName: "Rightstart",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Green | Fractional COO/CFO and Advisor",
    description:
      "Strategic operations leadership for nonprofits, health-focused ventures, and mission-driven organizations.",
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
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
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
