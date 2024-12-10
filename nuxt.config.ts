// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      title: `xingxing's AI`,
      titleTemplate: '%s',
      meta: [

        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: `xingxing's AI`,
        },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: 'esbuild',
    },
  },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/eslint'
  ],
  css: ['./assets/css/main.css'],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'zh-CN',
        name: '简体中文',
        file: 'zh-CN.json',
      },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'internationalization',
  },
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  compatibilityDate: '2024-12-10',
});