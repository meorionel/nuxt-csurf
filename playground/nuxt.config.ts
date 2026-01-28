import { defineNuxtConfig } from 'nuxt/config'
import module from '../src/module'

export default defineNuxtConfig({
  modules: [
    module
  ],
  nitro: {
    prerender: { routes: ['/'] }
  },
  csurf: {
    https: process.env.NODE_ENV === 'production',
    methodsToProtect: ['POST'],
    headerName: 'X-CSRF-TOKEN'
  }
})
