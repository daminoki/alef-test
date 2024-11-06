import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'vuetify-nuxt-module',
    '@nuxtjs/google-fonts',
  ],
  devtools: { enabled: true },
  css: [
    '@/assets/styles/reset.scss',
    '@/assets/styles/variables.scss',
    '@/assets/styles/main.scss',
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  compatibilityDate: '2024-04-03',
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
