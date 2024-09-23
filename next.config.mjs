/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    domains: ['utfs.io'],
  },
 async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://casecobra-phi-lyart.vercel.app/:path*',
          },
        ]
      },};

export default nextConfig;
