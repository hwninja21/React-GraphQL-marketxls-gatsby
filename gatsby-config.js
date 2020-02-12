const siteUrl = process.env.URL || process.env.DEPLOY_URL
module.exports = {
  siteMetadata: {
    title: `Stock Research and Analysis - (MarketXLS)`,
    siteUrl: 'https://stocks.marketxls.com',

  },
  plugins: [



    {
      resolve: 'gatsby-plugin-htaccess'

      // options: {
      //   RewriteBase: '/custom/',
      //   https: true,
      //   www: false,
      //   SymLinksIfOwnerMatch: true,
      //   host: 'stocks.marketxls.com', // if 'www' is set to 'false', be sure to also remove it here!
      //   ErrorDocument: `
      //     ErrorDocument 401 /error_pages/401.html
      //     ErrorDocument 404 /error_pages/404.html
      //     ErrorDocument 500 /error_pages/500.html



      //   `,
      //   redirect: [
      //     'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
      //     {
      //       from: 'www.stocks.marketxls.com',
      //       to: 'https://stocks.marketxls.com',
      //     },
      //     {
      //       from: 'https://www.stocks.marketxls.com',
      //       to: 'https://stocks.marketxls.com',
      //     },
      //   ],
      //   custom: `
      //       # This is a custom rule!
      //       # This is a another custom rule!          

      //   `,
      // },
    },
    { resolve: 'gatsby-plugin-remove-console' },
    { resolve: 'gatsby-plugin-advanced-sitemap' },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TF94M4H",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,


        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" }

        // // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },

    { resolve: `gatsby-plugin-react-helmet` },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-39551096-4",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-seo",
      options: {
        siteName: "Stock Research and Analysis - (MarketXLS)",
        siteUrl: "https://stocks.marketxls.com",
        twitterCreator: "@MarketXls",
        twitterSite: "@MarketXls",
        defaultSiteImage: "./components/image/mx.png",

      },
    },
  ],
}
