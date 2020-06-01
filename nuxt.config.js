import 'vrwebdesign-nuxt/modules/nuxt-i18n'
import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'
import { version } from './package.json'
require('dotenv').config({})
export default {
  mode: 'universal',
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0', // default: localhost
  },
  // router: {
  //   middleware: 'nuxti18n',
  // },
  robots: [
    {
      UserAgent: '*',
      Disallow: () => '/auth',
    },
    {
      Sitemap: process.env.BASE_URL + '/sitemap.xml',
    },
  ],
  sitemap: {
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: ['/login'],
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + 'رسا سامانه سلامت ایرانیان',
    title: 'رسا سامانه سلامت ایرانیان',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['vrwebdesign-nuxt/assets/style/main.scss', '~/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  styleResources: {
    scss: [
      './assets/styles/styles.scss',
      'vrwebdesign-nuxt/assets/style/tools/_responsive.scss',
    ],
  },
  plugins: ['@/plugins/lazy-load.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    // '@nuxtjs/google-analytics',
    // '@nuxtjs/gtm'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/svg-module#readme
    // '@nuxtjs/svg',
    // Doc: https://github.com/nuxt-community/recaptcha-module#readme
    // '@nuxtjs/recaptcha',
    // Doc: https://github.com/nuxt-community/sentry-module
    // '@nuxtjs/sentry',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/robots-module#readme
    '@nuxtjs/robots',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // Doc: https://github.com/nuxt-community/auth-module
    '@nuxtjs/auth',
    // Doc: https://github.com/vrwebdesign/vrwebdesign-nuxt
    'vrwebdesign-nuxt/modules/nuxt-client-init',
    'vrwebdesign-nuxt/modules/nuxt-global',
    'vrwebdesign-nuxt/modules/nuxt-badge',
    'vrwebdesign-nuxt/modules/nuxt-loader',
    'vrwebdesign-nuxt/modules/nuxt-dialog',
    'vrwebdesign-nuxt/modules/nuxt-toast',
    'vrwebdesign-nuxt/modules/nuxt-axios',
    'vrwebdesign-nuxt/modules/nuxt-loader',
    'vrwebdesign-nuxt/modules/nuxt-scroll-bar',
    // 'vrwebdesign-nuxt/modules/nuxt-i18n',
    'vrwebdesign-nuxt/modules/nuxt-date-picker',
    'vrwebdesign-nuxt/modules/nuxt-validate',
    'vrwebdesign-nuxt/modules/nuxt-enums',
    'vrwebdesign-nuxt/modules/nuxt-navbar',
    'vrwebdesign-nuxt/modules/nuxt-form-generator',
    'vrwebdesign-nuxt/modules/nuxt-data-grid',
  ],
  sentry: {},
  googleAnalytics: {
    id: process.env.GOOGLE_ANALITICS,
  },
  gtm: {
    id: process.env.GTM,
  },
  recaptcha: {
    hideBadge: true, // Hide badge element (v3)
    siteKey: process.env.RECAPTCHA_SITEKEY, // Site key for requests
    version: 3, // Version
  },
  /*
   ** AUth module configuration
   ** See https://auth.nuxtjs.org/api/auth.html
   */
  auth: {
    redirect: {
      login: '/patient/login',
      home: '/',
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: '/oauth2/token',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: { url: 'auth/logout', method: 'post' },
          user: false,
        },
        tokenRequired: true,
        autoFetchUser: false,
        tokenType: 'bearer',
      },
    },
  },
  /*
  09382158220
  2417
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true, // Can be also an object with default options
    prefix: '/api/',
    debug: true,
  },
  proxy: {
    '/api/': {
      target: process.env.API_URL || 'http://localhost:3333',
      pathRewrite: {
        '^/api/': '',
      },
    },
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    rtl: true,
    treeShake: true,
    customVariables: ['~/assets/styles/setting/_variables.scss'],
    defaultAssets: {
      icons: 'md',
      font: undefined,
    },
    lang: {
      locales: { fa: require('vuetify/src/locale/fa').default },
      current: 'fa',
    },
    theme: {
      dark: false,
      default: false,
      disable: false,
      options: { customProperties: true },
      themes: {
        light: {
          primary: colors.cyan.base,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.blue.base,
          warning: colors.orange.darken1,
          error: colors.deepOrange.accent2,
          success: colors.green.base,
        },
      },
    },
  },
  // i18n: {
  //   seo: false,
  //   strategy: 'no_prefix',
  //   locales: [{ code: 'fa', iso: 'fa-IR', file: 'fa.js' }],
  //   lazy: true,
  //   langDir: 'locales/',
  //   baseUrl: process.env.BASE_URL,
  //   defaultLocale: 'fa',
  // },
  watch: ['services', 'enums'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    watch: ['services', 'enums'],
    // extractCSS: true,
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': version,
      }),
    ],
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => {
        return rule.test.test('.svg')
      })
      svgRule.test = /\.(png|jpe?g|gif|webp)$/
      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: [
              {
                loader: 'vue-svg-loader',
              },
            ],
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]',
            },
          },
        ],
      })
      //   '@/modules/vue-class-component'
    },
  },
}
