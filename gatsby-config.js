module.exports = {
  siteMetadata: {
    title: `Farmington Displays Inc - Trade Show Displays, Exhibits, Retail`
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'GCMS',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'gcms',
        // Url to query from
        url: 'https://api-uswest.graphcms.com/v1/ck5qsfwx7083101939q6igzjd/master'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GraphCMS Starter blog',
        short_name: 'GCMS blog',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#61045f',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/chrome-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/chrome-512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-44870897-1',
        head: false,
        anonymize: true,
        respectDNT: true
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`
  ]
}
