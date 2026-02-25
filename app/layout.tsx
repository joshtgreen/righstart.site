import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:ital,wght@0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
