module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
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