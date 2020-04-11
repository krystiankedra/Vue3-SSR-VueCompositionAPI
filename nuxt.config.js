import nuxtI18nConfig from './modules/NuxtI18n/Config/nuxtI18nConfig'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'pl-PL'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'theme-color', content: '#5FAAE5' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'apple-touch-icon', href: '/icons/app-icon-96x96.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@plugins/axios',
    '@plugins/compositionApi.client',
    // '@plugins/serviceWorker.client',
    '@plugins/vuetify.client'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    nuxtI18nConfig()
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  generate: {
    dir: 'public'
  },

  env: {
    baseURL: 'https://jsonplaceholder.typicode.com/'
  },

  serverMiddleware: [
    { path: '/posts', handler: '~/middleware/Server/Auth/auth.js' },
    { path: '/todos', handler: '~/middleware/Server/Auth/auth.js' },
    { path: '/users', handler: '~/middleware/Server/Auth/auth.js' }
  ]

}
