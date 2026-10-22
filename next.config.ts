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
};

export default nextConfig;
