module.exports = {
  siteMetadata: {
    title: `My Project Collections`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `iggehiz5`,
        dataset: `production`,  
        overlayDrafts : true,
        watchMode:true,
        token: 'skUTgsYmv33kRJihh2RugXE3afityKItSDVqafCxFFazxg4MItDK1IfGoBLgdQfsrafjeKoMI3n9OsvMCH0bkxqJzyhP9tPYC3nHgpuMhOLafdNG1pAX57ueuzahkUc3pmckE2sYJhaVw6YfHbSwHoI43TF1xrsyrT5HADIFA6UtMqMZh8VW',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
