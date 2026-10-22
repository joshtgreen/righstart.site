import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // www.rightstart.co serves the same pages as the apex; send it to the apex.
        source: "/:path*",
        has: [{ type: "host", value: "www.rightstart.co" }],
        destination: "https://rightstart.co/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Basic hardening headers for every path. No Content-Security-Policy:
        // the Reclaim scheduler and Vercel scripts would need a tested allow-list.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
