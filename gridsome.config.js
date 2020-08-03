// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Silver Lake Wesleyan Camp',
  siteUrl: 'https://silverlakecamp.github.io',
  pathPrefix: '/slwc-gridsome',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './content',
        template: './src/templates/Post.vue',
        route: '/:slug'
      }
    }
  ]
}
