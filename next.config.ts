import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Derux-GmbH",
  assetPrefix: "/Derux-GmbH",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
