/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/dev-portfolio',
  assetPrefix: '/dev-portfolio/',
}

module.exports = nextConfig