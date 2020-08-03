// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import loadWebFonts from './config/load.webfonts'
import loadComponents from './config/load.components'
import loadVuetify from './config/load.vuetify'

export default function (Vue, { appOptions, head }) {

  loadWebFonts(head)
  loadVuetify(appOptions)
  loadComponents(require.context('~/components', true, /\.vue$/))

  Vue.component('Layout', DefaultLayout)
}
