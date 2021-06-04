export default {
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
  }
}
