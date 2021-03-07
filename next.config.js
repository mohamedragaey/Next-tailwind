const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')

require(`dotenv`).config()

module.exports = withPlugins([
  [withPWA({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development'
    }
  })]
])
