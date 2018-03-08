/* global graphql */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Markdown from 'react-markdown'

export default function About({ data }) {
  const about = data.abouts;
  return (
    <div className="pageContent">
      <img src={about.headerImage.url} className="img-fluid" />
      <Container>
        <div className="mb-4">
        </div>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Markdown source={about.content} escapeHtml={false} />
          </Col>
          <Col sm="3"></Col>
        </Row>
      </Container>
    </div>
  )
}

export const allPostsQuery = graphql`
  query AboutPage {
    abouts {
      slug
      headerImage {
        url
      }
      content
    }
  }
`
