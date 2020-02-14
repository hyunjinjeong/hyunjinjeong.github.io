/* eslint-disable */

module.exports = {
  siteMetadata: {
    title: 'Hyunjin Jeong',
    description: 'My github user page',
    author: '@hyunjin95',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'hyunjin95.github.io',
        short_name: 'hyunjin95',
        start_url: '/',
        background_color: '#4fc3f7',
        theme_color: '#663399',
        display: 'browser',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-typescript',
    'gatsby-plugin-material-ui',
  ],
};
