import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import { VCol, VRow } from 'vuetify/lib'

export default function loadVuetify(appOptions) {
  Vue.use(Vuetify, {
    components: {
      VCol,
      VRow
    }
  })

  appOptions.vuetify = new Vuetify({
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#b0c954',
          secondary: '#050b1f',
          accent: '#204165',
        },
        dark: {},
      }
    }
  })
}