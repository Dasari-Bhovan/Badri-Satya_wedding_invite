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
  }
}

module.exports = nextConfig 