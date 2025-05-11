import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',  // Static export setup
  basePath: isProd ? '/find-my-house-react-js' : '',  // Base path for production
  assetPrefix: isProd ? '/find-my-house-react-js/' : '',  // Asset prefix for production
  images: {
    unoptimized: true,  // Disable image optimization for static export
  },
};

export default nextConfig;
