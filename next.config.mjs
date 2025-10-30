/** @type {import('next').NextConfig} */
const nextConfig = {
  // Better SEO and Performance
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Image Optimization for SEO
  images: {
    domains: ['your-domain.com'], // Add your domain here
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Redirects for SEO (example)
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  
  // Headers for SEO and Security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  
  // Enable React Strict Mode for better performance
  reactStrictMode: true,
};

export default nextConfig;