// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
      shim: false
    },
    modules: [
      '@pinia/nuxt',
      '@nuxtjs/apollo'
    ],
    css: [
      '@/assets/css/main.css'
    ],
    runtimeConfig: {
      public: {
        isProd: process.env.NETLIFY_ENV === 'production',
        datoToken: process.env.NUXT_DATO_TOKEN
      }
    },
    apollo: {
      clients: {
        default: './config/apollo.ts'
      }
    }
  })
  