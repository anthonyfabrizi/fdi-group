const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`)
    const galleryTemplate = path.resolve(`./src/templates/lightbox.js`);

    graphql(`
      {
        allPosts {
          edges {
            node {
              id
              title
              slug
              coverImage {
                handle
              }
              content
            }
          }
        },
        allGalleries {
          edges {
            node {
              id
              title
              slug
              images {
                handle
                height
                url
                width
              }
            }
          }
        }
      }
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }
      result.data.allPosts.edges.map(({ node }) => {
        createPage({
          path: `/blog/${node.title.toLowerCase().replace(" ", "-")}`,
          component: slash(postTemplate),
          context: {
            slug: node.slug
          }
        })
      })

      result.data.allGalleries.edges.map(({ node }) => {
        createPage({
          path: `/work/${node.slug}`,
          component: slash(galleryTemplate),
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })
}
