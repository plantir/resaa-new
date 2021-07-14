import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'
import { version } from './package.json'
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
require('dotenv').config({})

export default {
  mode: 'universal',
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0', // default: localhost
  },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      if (from.name == 'apartments') {
        localStorage.setItem(
          'savedPosition',
          document.scrollingElement.scrollTop
        )
      } else if (to.name !== 'apartments') {
        localStorage.removeItem('savedPosition')
      }
      let position = false

      // if no children detected and scrollToTop is not explicitly disabled
      if (
        to.matched.length < 2 &&
        to.matched.every(
          r => r.components.default.options.scrollToTop !== false
        )
      ) {
        // scroll to the top of the page
        position = { x: 0, y: 0 }
      } else if (
        to.matched.some(r => r.components.default.options.scrollToTop)
      ) {
        // if one of the children has scrollToTop option set to true
        position = { x: 0, y: 0 }
      }

      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        position = savedPosition
      }
      if (to.name == 'apartments') {
        let y = localStorage.getItem('savedPosition')
        position = { x: 0, y: +y || 0 }
      }
      return new Promise(resolve => {
        // wait for the out transition to complete (if necessary)
        window.$nuxt.$once('triggerScroll', () => {
          // coords will be used if no selector is provided,
          // or if the selector didn't match any element.
          if (to.hash) {
            let hash = to.hash
            // CSS.escape() is not supported with IE and Edge.
            if (
              typeof window.CSS !== 'undefined' &&
              typeof window.CSS.escape !== 'undefined'
            ) {
              hash = '#' + window.CSS.escape(hash.substr(1))
            }
            try {
              if (document.querySelector(hash)) {
                // scroll to anchor by returning the selector
                position = { selector: hash }
              }
            } catch (e) {
              console.warn(
                'Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).'
              )
            }
          }
          resolve(position)
        })
      })
    },
  },
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
    htmlAttrs: {
      lang: 'fa',
    },
    title: 'رسا سامانه سلامت ایرانیان',
    meta: [
      { charset: 'utf-8' },
      ...(process.env.NO_INDEX == 'true'
        ? [
            {
              hid: 'robots',
              name: 'robots',
              property: 'robots',
              content: 'noindex,nofollow',
            },
          ]
        : []),
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'با استفاده از رسا تماس های غیر ضروری خود از سمت بیماران را حذف کنید و مکالمات غیر مربوط به روند درمانی را کاهش رایگان ثبت‌نام کنید و با دسترسی به پزشکان معرفی‌شده در وب‌سایت رسا، تماس مستقیم با بهترین پزشکان متخصص را با صرفه‌جویی در وقت و هزینه خود، تجربه کنید',
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
  css: [
    // 'animate.css/animate.css',
    '~/assets/styles/main.scss',
    'vrwebdesign-nuxt/assets/style/main.scss',
    'swiper/css/swiper.css',
    'vrwebdesign-nuxt/assets/style/fonts/_iransans.scss',
    'vrwebdesign-nuxt/assets/style/fonts/_lineawesome.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  styleResources: {
    scss: [
      './assets/styles/styles.scss',
      'vrwebdesign-nuxt/assets/style/tools/_responsive.scss',
    ],
  },
  plugins: [
    { src: './plugins/vue-awesome-swiper.js' },
    { src: './plugins/globalComponents.js' },
    { src: './plugins/axios.js' },
    { src: './plugins/sanitize.js' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    // 'nuxt-purgecss',
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
    '@nuxtjs/universal-storage',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/robots-module#readme
    '@nuxtjs/robots',
    // Doc: https://pwa.nuxtjs.org/
    // '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
    // Doc: https://github.com/nuxt-community/auth-module
    '@nuxtjs/auth',
    // Doc: https://github.com/vrwebdesign/vrwebdesign-nuxt

    ['nuxt-gmaps', { key: process.env.GOOGLE_MAP_APIKEY }],

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
    cookie: {
      prefix: 'auth.',
      options: {
        expires: 30,
      },
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true, // Can be also an object with default options
    prefix: '/api',
    port: process.env.PORT,
  },
  proxy: {
    '/api/Mobile/': {
      target: 'http://webold.develop.bsn.local',
    },
    '/api/MessageCallback/': {
      target: 'http://webold.develop.bsn.local',
    },
    '/api/DoctorApp/': {
      target: 'http://webold.develop.bsn.local',
    },
    '/api/': {
      target: process.env.API_URL,
      pathRewrite: {
        '^/api/': '',
      },
    },
  },
  serverMiddleware: [
    // '~/servermiddleware/underconstruction.js',
    '~/servermiddleware/redirect.js',
    '~/servermiddleware/category_redirect.js',
    '~/servermiddleware/doctors.js',
    // {
    //   path: '/patient/profile',
    //   handler: (req, res, next) => {
    //     res.spa = true
    //     next()
    //   },
    // },
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    rtl: true,
    treeShake: true,
    customVariables: ['~/assets/styles/setting/_variables.scss'],
    defaultAssets: {
      icons: 'mdiSvg',
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
    transpile: ['vrwebdesign-nuxt/modules/nuxt-dialog'],
    watch: ['services', 'enums'],
    // extractCSS: process.env.NODE_ENV === 'production',
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|scss|vue)$/,
    //         chunks: 'all',
    //         enforce: true,
    //       },
    //     },
    //   },
    // },
    // maxChunkSize: 360000,
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': version,
      }),
    ],
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
      const svgRules = config.module.rules.filter(rule => {
        return rule.test.test('.svg')
      })
      for (const rule of svgRules) {
        rule.test = /\.(png|jpe?g|gif|webp)$/
      }
      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
        },
      ]
      if (config.name !== 'server') {
        const jsxRule = config.module.rules.find(r => r.test.test('.jsx'))
        const babelLoader = jsxRule.use[jsxRule.use.length - 1]
        vueSvgLoader.unshift(babelLoader)
      }
      config.module.rules.push({
        test: /\.svg$/i,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader,
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
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      },
    },
  },
}
