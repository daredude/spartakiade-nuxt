export default {
  head: {
    title: 'Workshop Music Database',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32.png' }]
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxt/http'
  ],
  http: {
    baseURL: 'https://api.discogs.com'
  },
  plugins: [
    '~/plugins/breadcrumbs'
  ]
}
