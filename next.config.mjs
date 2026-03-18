/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/ofertify-frontend',
  assetPrefix: '/ofertify-frontend/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
