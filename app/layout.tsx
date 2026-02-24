import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RightStart | Josh Green | Fractional & Interim COO · CFO",
  description:
    "Strategic operations leadership for nonprofits, health-focused ventures, and mission-driven organizations. Josh Green offers fractional and interim COO and CFO support.",
  openGraph: {
    title: "RightStart | Josh Green | Fractional & Interim COO · CFO",
    description:
      "Strategic operations leadership for nonprofits, health-focused ventures, and mission-driven organizations.",
    url: "https://rightstart.co",
    siteName: "RightStart",
    type: "website",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
