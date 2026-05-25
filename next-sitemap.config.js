/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://doujin-voice.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/contact', '/privacy', '/terms'],
}
