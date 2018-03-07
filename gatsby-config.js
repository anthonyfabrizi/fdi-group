module.exports = {
  siteMetadata: {
    title: `Farmington Displays Inc - Trade Show Displays, Exhibits, Retail`
  },
  plugins: [
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api.graphcms.com/simple/v1/cje988dkv0hig0121i4w2db6z`,
        query: `{
          allPosts {
            id
            slug
            title
            content
            dateAndTime
            coverImage {
              handle
            }
          },
          allAuthors {
            id
            name
            bibliography
            avatar {
              handle
            }
          },
          allGalleries {
            id
            title
            caption
            slug
            images {
              handle
              height
              url
              width
            }
          },
          allCapabilities {
            id
            title
            description
            image {
              url
            }
            imageAlignment
          },
          allAbouts {
            id
            slug
            headerImage {
              url
            }
            content
          }
        }`
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`
  ]
}
