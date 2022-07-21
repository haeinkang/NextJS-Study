module.exports = {
  async rewrites() {
    return [
        {
          destination: 'http://uyuni-suite.xiilab.com/api/v1',
          source: 'api/:path*',
        },
    ];
  },
}
