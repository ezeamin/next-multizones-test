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
        source: '/backoffice-psae',
        destination: `http://localhost:3001`,
      },
      {
        source: '/backoffice-psae/:path*',
        destination: `http://localhost:3001/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
