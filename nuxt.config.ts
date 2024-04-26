// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['@/assets/css/main.css', 'normalize.css/normalize.css'],
  modules: ['@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      solid: ['cog', 'bars', 'magnifying-glass', 'chevron-right', 'chevron-down',],
      regular: ['circle-play',],
      brands: ['facebook', 'twitter', 'instagram', 'youtube',],
    },
  },
});
