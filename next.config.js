const withOptimizedImages = require('next-optimized-images');
const debug = process.env.NODE_ENV !== 'production';
module.exports = withOptimizedImages({
  basePath: '/Jazz-Ears',
  engine: 'github',
  debug: true,
  domain: 'https://xie-hui.github.io/Jazz-Ears/',
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4.
    // Looks like backward compatibility approach.
  },
  assetPrefix: !debug ? '/Jazz-Ears/' : '',
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };

    return config;
  },
  target: 'serverless',
  async rewrites() {
    return [
      // Rewrite everything to `pages/index`
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
});
