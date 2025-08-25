import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/auth/login",
      },
    ];
  },
};

export default nextConfig;
