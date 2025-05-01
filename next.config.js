/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  experimental: {
    disableOptimizedLoading: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

// next.config.js
module.exports = nextConfig 