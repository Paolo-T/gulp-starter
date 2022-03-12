const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")
const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
   siteMetadata: {
      title: `Paolo Todde | UI Designer | Coder`,
      siteUrl: `https://todde.design`,
      description: `Specializing in intuitive and sharp digital experience solutions. Well crafted designs for human focused utilitarian interfaces`,
      author: `@roomzeroone`,
      twitterImage: `/images/social/twitter-preview.png`,
      metaOgImage: `/images/social/og-preview.png`,
   },
   flags: { PRESERVE_WEBPACK_CACHE: true },
   plugins: [
      `gatsby-plugin-netlify`,
      `gatsby-plugin-layout`,
      `gatsby-plugin-eslint`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
         resolve: `gatsby-plugin-google-analytics`,
         options: {
            trackingId: "UA-80068675-1",
         },
      },
      {
         resolve: `gatsby-plugin-hotjar`,
         options: {
            includeInDevelopment: false, // optional parameter to include script in development
            id: 2084246,
            sv: 6,
         },
      },
      // {
      //    resolve: `gatsby-plugin-amplitude-analytics`,
      //    options: {
      //       // Specify the API key for your Amplitude Project (required)
      //       apiKey: "5a62922f175fd0bab19faffe8a8c9978",
      //       // Puts tracking script in the head instead of the body (optional)
      //       head: false,
      //       // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
      //       respectDNT: true,
      //       // Avoids sending pageview hits from custom paths (optional)
      //       exclude: ["/preview/**", "/do-not-track/me/too/"],
      //       // Override the default event types (optional)
      //       eventTypes: {
      //          outboundLinkClick: "OUTBOUND_LINK_CLICK",
      //          pageView: "PAGE_VIEW",
      //       },
      //       // Amplitude JS SDK configuration options (optional)
      //       amplitudeConfig: {
      //          saveEvents: true,
      //          includeUtm: true,
      //          includeReferrer: true,
      //       },
      //       // Specify NODE_ENVs in which the plugin should be loaded (optional)
      //       environments: ["production"],
      //    },
      // },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `todde.design`,
            short_name: `todde.design`,
            start_url: `/`,
            background_color: fullConfig.theme.colors.white,
            theme_color: fullConfig.theme.colors.white,
            display: `minimal-ui`,
            icon: `src/images/logo.svg`,
         },
      },
      {
         resolve: `gatsby-plugin-postcss`,
         options: {
            postCssPlugins: [
               require(`tailwindcss`)(tailwindConfig),
               require(`autoprefixer`),
               ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
            ],
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images`,
         },
      },
      {
         resolve: "gatsby-plugin-web-font-loader",
         options: {
            custom: {
               families: ["Krona-regular", "Gilroy-Regular"],
               urls: ["/fonts/fonts.css"],
            },
            // google: {
            //    families: [""],
            // },
         },
      },
   ],
}
