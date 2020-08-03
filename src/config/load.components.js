// load and bootstrap everything in ./src/components/base

import Vue from 'vue'

export default function loadComponents(components) {
  for(const file of components.keys()) {
    const config = components(file)

    if(config.default.name) {
      Vue.component(`${config.default.name}`, config.default)
      console.info(`Pre-loaded ${config.default.name} found in ~src/components/${file} ...`)
    } else {
      console.error(`Error pre-loading ~src/components/${file}, did you forget a default export?`)
    }
  }
}