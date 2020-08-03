// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import loadWebFonts from './config/load.webfonts'
import loadBaseComponents from './config/load.basecomponents'
import loadVuetify from './config/load.vuetify'

export default function (Vue, { appOptions, head }) {

  Vue.component('Layout', DefaultLayout)

  loadWebFonts(head)
  loadVuetify(appOptions)
  loadBaseComponents()
}
