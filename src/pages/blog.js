/* global graphql */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Markdown from 'react-markdown'
import Link from 'gatsby-link'

import styles from '../styles/index.module.css'

const IndexPage = ({ data }) => (
  <Container className="pageContent">
    {data.allPosts.edges.map(post => (
      <Row className="pt-5" key={post.node.id}>
        <Col sm="12" md={{ size: 8, offset: 2 }}>
          <h3><strong>{post.node.title}</strong></h3>
          <h5>{post.node.dateAndTime}</h5>
          {/*<div dangerouslySetInnerHTML={{ __html: post.node.content }}></div>*/}
          <Markdown source={post.node.content} escapeHtml={false} />
          <Link to={`/blog/${post.node.slug}`}>Read more</Link>
        </Col>
      </Row>
    ))}
  </Container>
)

export default IndexPage

export const allPostsQuery = graphql`
  query allPosts {
    allPosts(sort: { fields: [dateAndTime], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          content
          dateAndTime(formatString: "MMMM DD, YYYY")
          coverImage {
            handle
          }
        }
      }
    }
  }
`
