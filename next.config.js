const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')

require(`dotenv`).config()

const configNext = {
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en'
  }
}

module.exports = withPlugins([
  [withPWA({
    pwa: {
      dest: 'public',
      disable: process.env.NODE_ENV === 'development'
    }
  })]
], configNext)
