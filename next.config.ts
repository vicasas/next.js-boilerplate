import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  ...(process.env.NEXT_STANDALONE && { output: 'standalone' }),
}

export default nextConfig
