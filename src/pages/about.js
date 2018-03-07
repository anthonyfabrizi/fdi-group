/* global graphql */
import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function About({ data }) {
  const about = data.abouts;
  return (
    <div>
      
      <Container className="pageContent">
        <div className="mb-4">
        <img src={about.headerImage.url} className="img-fluid" />
          </div>
        <Row>
          <Col sm="9" dangerouslySetInnerHTML={{ __html: about.content }}></Col>
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
