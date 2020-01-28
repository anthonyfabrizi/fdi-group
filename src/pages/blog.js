import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import Markdown from 'react-markdown'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Layout from '../layouts'
import moment from 'moment'

const IndexPage = ({ data }) => (
  <Layout>
    <div>
      <Helmet>
        <title>Blog | Farmington Displays - Trade Show Displays, Exhibits, Retail</title>
      </Helmet>
      <Container className='pageContent'>
        {data.gcms.posts.map(post => (
          <Row className='pt-5' key={post.id}>
            <Col sm='12' md={{ size: 8, offset: 2 }}>
              <h3><strong>{post.title}</strong></h3>
              <h5>{moment(post.dateAndTime).format('MMMM DD, YYYY')}</h5>
              <Markdown source={post.content} escapeHtml={false} />
              <Link to={`/blog/${post.slug}`}>Read more</Link>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    gcms {
      posts(orderBy: dateAndTime_DESC) {
        id
        title
        slug
        content
        dateAndTime
        coverImage {
          handle
        }
      }
    }
  }
`
