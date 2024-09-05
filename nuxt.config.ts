// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-particles'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  components: true,
  colorMode: {
    preference: 'dark'
  },
  css: ['~/assets/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Smart Agriculture Lab',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]

    },
  },
  plugins: [
  ]
})