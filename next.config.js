module.exports = {
  reactStrictMode: true,
}
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }, 
  images: {
    domains: ['storage.appewa.com', 'englishadminapi.delphi.school'],
  }
}
