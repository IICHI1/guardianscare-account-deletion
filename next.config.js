/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [{
      hostname: 'guardiancare-a210f.web.app'
    }],
  },
}

module.exports = nextConfig