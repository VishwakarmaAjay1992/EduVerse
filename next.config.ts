import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  poweredByHeader: false,
  experimental: {
    cpus: 2,
  },
  eslint: {
    dirs: ["src", "tests"],
  },
};

export default nextConfig;
