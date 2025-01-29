// https://vitepress.dev/guide/custom-theme
import Layout from '../../Layout.vue'
import '../../style.postcss'

import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}

