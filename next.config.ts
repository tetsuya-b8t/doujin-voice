import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.doujin-voice.com' }],
        destination: 'https://doujin-voice.com/:path*',
        permanent: true,
      },
    ];
  },
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
