module.exports = {
  siteMetadata: {
    title: `Ben Wingz`,
    description: `A Landing page about the restaurant called Ben Wingz. About the restaurant and promoting it and showcasing their food and promote their brand.`,
    author: `Fred Garingo`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-styletron",
      options: {
        // You can pass options to Styletron.
        // Prefix all generated classNames:
        prefix: "_"
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nobile`,
            variants: [`400`, `500`, `700`],
          },
          {
            family: `Cormorant Infant`,
            variants: [`400`, `500`, `600`, `700`]
          },
          {
            family: `Maitree`,
            variants: [`400`, `500`, `600`, `700`]
          },
        ],
      },
    },
  ],
}
