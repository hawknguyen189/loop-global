module.exports = {
  siteMetadata: {
    title: 'Loop Mondo - Connecting the World',
    author: 'LoopMondo',
    description: 'LoopMondo main page',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/loop-mondo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
  pathPrefix: '/loop-global'
}
