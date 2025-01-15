import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/video/[name][ext]',
      },
    });
    return config;
  },
  // Enable static file serving from /public directory
  images: {
    disableStaticImages: false,
  },
  // Add video MIME types
  async headers() {
    return [
      {
        source: '/video/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
