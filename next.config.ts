import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'doujin.dmm.com' },
      { protocol: 'https', hostname: 'pics.dmm.co.jp' },
      { protocol: 'https', hostname: 'doujin-assets.dmm.co.jp' },
      { protocol: 'https', hostname: 'img.dlsite.jp' },
    ],
  },
};

export default nextConfig;
