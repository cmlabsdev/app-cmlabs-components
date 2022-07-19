import CMLABSComponent from "../src"

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "CMLABS V3 Component - Design System",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: "msapplication-TileColor", content: "#18A0FB" },
      { name: "msapplication-TileImage", content: "/cmlabs-msapplication-icon-144x144.png" },
      { name: "theme-color", content: "#18A0FB" },
      { name: "robots", content: "noindex nofollow" }
    ],
    link: [
      { rel: "image/png", size: "192x192", href: "/cmlabs-android-chrome-192x192.png" },
      { rel: "image/png", size: "192x192", href: "/cmlabs-android-chrome-maskable-192x192.png" },
      { rel: "image/png", size: "512x512", href: "/cmlabs-android-chrome-512x512.png" },
      { rel: "image/png", size: "512x512", href: "/cmlabs-android-chrome-maskable-512x512.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/cmlabs-apple-touch-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/cmlabs-apple-touch-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/cmlabs-apple-touch-icon-180x180.png" },
      { rel: "apple-touch-icon", href: "/cmlabs-apple-touch-icon.png" },
      { rel: "image/png", size: "16x16", href: "/cmlabs-favicon-16x16.png" },
      { rel: "image/png", size: "32x32", href: "/cmlabs-favicon-32x32.png" },
      { rel: "icon", type: "image/x-icon", href: "/cmlabs-favicon.ico" },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css'
      }
    ]
  },
  
  // CSS Files to bundle: https://go.nuxtjs.dev/css
  css: [
    '~/assets/css/base.css',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  modules: [
    // Docs site here
    CMLABSComponent,
    '@nuxtjs/axios',
    '@nuxt/content',
  ],

  plugins: [
    '~/plugins/nuxt-axios.js',
    '~/plugins/vue-code-highlight.js',
  ],

  // Router configuration: https://go.nuxtjs.dev/router
  router: {
    routeNameSplitter: '/'
  },
}