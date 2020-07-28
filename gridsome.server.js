// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // TODO: try a front-matter template for data and a page in forestry.io
  // https://forestry.io/docs/settings/front-matter-templates/#applying-fmts-to-content
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
