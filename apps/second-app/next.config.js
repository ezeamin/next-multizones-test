/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: 'http://localhost:3000' || '',
      },
      {
        source: '/second-app',
        destination: `http://localhost:3001`,
      },
    ];
  },
};

module.exports = nextConfig;
