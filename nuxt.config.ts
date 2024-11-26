// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-particles', '@vueuse/motion/nuxt'],

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
  ],

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  },

  compatibilityDate: '2024-11-18'
})