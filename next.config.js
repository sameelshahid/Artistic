/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/artist',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
