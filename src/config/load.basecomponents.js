// load and bootstrap everything in ./src/components/base

import Vue from 'vue'
const baseComponentFunctions = require.context('~/components/base', true, /\.vue$/)

export default function loadBaseComponents() {
  for(const file of baseComponentFunctions.keys()) {
    const config = baseComponentFunctions(file)

    Vue.component(`${config.default.name}`, config.default || config)

    console.debug(`Vue.component(${config.default.name}, ${config.default || config})`)
    console.debug({...config.default});
  }
}