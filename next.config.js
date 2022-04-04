const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      
    }
  }

  return {
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/:path*',
          has: [
            {
              type: "host",
              value: "demo.goperigon.com"
            },
          ],
          destination: "/data-solutions/demo/:path*"
        },
      ]
    },
  }
}