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
      { name: 'robots', content: 'noindex nofollow' }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
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
    CMLABSComponent
  ],

  plugins: [
    '~/plugins/vue-code-highlight.js'
  ],

  // Router configuration: https://go.nuxtjs.dev/router
  router: {
    routeNameSplitter: '/'
  },
}