const { resolve } = require('path');
module.exports = {
  mode: 'universal',
  telemetry: false,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server: {
    port: 80,
    host: '0.0.0.0'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#32bcb0' },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'element-ui/lib/theme-chalk/display.css',
    'highlight.js/styles/monokai-sublime.css',
    '@/assets/css/global.less',
    'gitalk/dist/gitalk.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/error-monitor', ssr: false },
    '@/plugins/element-ui',
    '@/plugins/directives',
    '@/plugins/vue-inject',
    { src: '@/plugins/infinite-scroll', ssr: false },
    '@/plugins/axios'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/pwa', { workbox: false }],
    ['cookie-universal-nuxt', { parseJSON: false }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  router: {
    middleware: ['auth'],
    extendRoutes(routes) {
      routes.push({
        path: '/',
        component: resolve(__dirname, 'pages/article/index.vue')
      });
    }
  }
};
