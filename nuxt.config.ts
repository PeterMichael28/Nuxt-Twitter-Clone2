// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
 modules: ['nuxt-icon', '@nuxtjs/tailwindcss'],

 build: {
  transpile: ['@heroicons/vue'],
 },
 
 runtimeConfig: {
  public: {
    YOUR_VARIABLE: 'Hello'
  }
},
 
 vite: {
  server: {
   fs: {
    allow: ['..', '/node_modules/nuxt/dist/app/entry.js'],
   },
  },
 },
});

