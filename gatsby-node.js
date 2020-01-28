const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/post.js`)
    const galleryTemplate = path.resolve(`./src/templates/lightbox.js`);

    graphql(`
      {
        gcms {
          posts {
            id
            title
            slug
            coverImage {
              handle
            }
            content
          },
          galleries {
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
    `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }
      result.data.gcms.posts.map(({ slug }) => {
        createPage({
          path: `/blog/${slug}`,
          component: slash(postTemplate),
          context: {
            slug: slug
          }
        })
      })

      result.data.gcms.galleries.map(({ slug }) => {
        createPage({
          path: `/work/${slug}`,
          component: slash(galleryTemplate),
          context: {
            slug: slug
          }
        })
      })
      resolve()
    })
  })
}
