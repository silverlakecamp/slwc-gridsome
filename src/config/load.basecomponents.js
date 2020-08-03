// load and bootstrap everything in ./src/components/base

import Vue from 'vue'

export default function loadBaseComponents(baseComponents) {
  for(const file of baseComponents.keys()) {
    const config = baseComponents(file)

    Vue.component(`${config.default.name}`, config.default || config)

    console.debug(`Vue.component(${config.default.name}, ${config.default || config})`)
    console.debug({...config.default});
  }
}