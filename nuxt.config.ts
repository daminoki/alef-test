import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
      // @ts-expect-error: vuetify plugin type mismatch
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/google-fonts',
  ],
  devtools: { enabled: true },
  css: [
    '@/assets/styles/reset.scss',
    '@/assets/styles/variables.scss',
    '@/assets/styles/main.scss',
  ],
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-04-03',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: {
        semi: false,
        indent: 2,
        quotes: 'single',
      },
    },
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
    display: 'swap',
  },
})
