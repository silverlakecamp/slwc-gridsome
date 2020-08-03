// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const VUE_FILES = ['vue-modules', 'vue', 'normal-modules','normal']

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/vuetify.variables.sass')
      ]
    })
}

module.exports = function (api) {

  // https://gridsome.org/docs/assets-css/#global-preprocessor-files-ie-variables-mixins
  api.chainWebpack((config, { isServer }) => {
    VUE_FILES.forEach(type => {
      addStyleResource(config.module.rule('sass').oneOf(type))
    })
  })

  // https://gridsome.org/docs/assets-css/#vuetify
  api.chainWebpack((config, { isServer }) => {
    config.plugin('vuetify-loader').use(VuetifyLoaderPlugin);
  })

  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  api.loadSource(({ addCollection }) => {
    const Camps = require('./data/camps.json');
    const collection = addCollection({ typeName: 'Camp' });
    for (const camp of Camps) {
      collection.addNode(camp);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
