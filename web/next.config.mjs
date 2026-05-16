/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * In dev, React Strict Mode runs effects twice on mount. Lenis + GSAP ScrollTrigger
   * register global listeners / proxies; double init can leave scroll state or triggers
   * inconsistent. Production only mounts once — disabling here avoids dev-only flakes.
   */
  reactStrictMode: false,

  webpack: (config, { dev }) => {
    if (dev) {
      /**
       * Persistent webpack filesystem cache (.next/cache) often corrupts after HMR
       * ("incorrect header check", missing chunk *.js, blank / 500 until manual rm -rf .next).
       * Memory-only cache in dev is slower on cold compile but stays consistent across edits.
       */
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
