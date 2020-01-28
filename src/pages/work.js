import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts'

export default function Work ({ data }) {
  return (
    <Layout>
      <div>
        <Helmet>
          <title>Our Work | Farmington Displays - Trade Show Displays, Exhibits, Retail</title>
        </Helmet>
        <Container>
          <h1>Work</h1>
          <hr />
        </Container>
        <Container className='pageContent' fluid>
          <Row>
            {data.gcms.galleries.map(work => (
              <Col sm='4' className='text-center' key={work.id}>
                <a href={'/work/' + work.slug}>
                  <div>
                    <img src={'https://media.graphcms.com/resize=w:400,h:300,fit:crop/' + work.images[0].handle} className='img-fluid' alt={work.title} />
                  </div>
                  <p className='h3 text-dark mt-2'>{work.title}</p>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    gcms {
      galleries {
        id
        title
        slug
        images {
          handle
        }
      }
    }
  }
`
