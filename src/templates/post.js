import React from 'react'
import Markdown from 'react-markdown'
import { graphql } from 'gatsby'
import Layout from '../layouts'

import styles from '../styles/post.module.css'

export default ({ data }) => {
  const post = data.gcms.post
  return (
    <Layout>
      <div className='pageContent'>
        <article className='pt-5'>
          <h1>{post.title}</h1>
          <div className={styles.placeholder}>
            <img
              alt={post.title}
              src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${post.coverImage.handle}`}
            />
          </div>
          <Markdown
            source={post.content}
            escapeHtml={false}
          />
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    gcms {
      post(where: {slug: $slug}) {
        id
        slug
        title
        content
        coverImage {
          handle
        }
      }
    }
  }
`
