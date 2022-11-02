/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    URL: process.env.URL,
  },
  images: {
    loader: "imgix",
    path: "",
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:1337/api/:path*", // Proxy to Backend
      },
    ];
  },

  // eslint-disable-next-line no-dupe-keys
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    URL: process.env.URL,
  },
};

module.exports = nextConfig;
