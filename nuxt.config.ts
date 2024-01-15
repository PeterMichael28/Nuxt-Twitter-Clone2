// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss'
  ],
  vite: {
    server: {
      fs: {
        allow: ['..', '/node_modules/nuxt/dist/app/entry.js'],
      },
    },
  },
})
