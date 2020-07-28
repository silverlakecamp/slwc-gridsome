// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Silver Lake Wesleyan Camp',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/*.md',
      }
    }
  ],
  templates: {
    Post: '/:slug'
  },
  transformers: {
    remark: {}
  }
}
