// @ts-check

import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
}

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default bundleAnalyzerConfig(nextConfig)
