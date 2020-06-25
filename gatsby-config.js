module.exports = {
  siteMetadata: {
    title: `Tejas Mehta`,
    description: `Developer, Entrepreneur, Designer. I like to make products that are beautiful, fast, and useful.`,
    author: `Tejas Mehta`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tejas Mehta`,
        short_name: `Tejas Mehta`,
        start_url: `/`,
        background_color: `#1a237e`,
        theme_color: `#1a237e`,
        display: `standalone`,
        icon: `src/images/TMLogoCircle.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
