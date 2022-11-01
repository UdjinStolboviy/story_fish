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
        destination: "local/api/:path*",
      },
    ];
  },

  // eslint-disable-next-line no-dupe-keys
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    URL: process.env.URL,
    INTERNSHIPS_URL: process.env.INTERNSHIPS_URL,
  },
};

module.exports = nextConfig;
