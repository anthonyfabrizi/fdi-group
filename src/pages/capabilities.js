import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts'

export default function Capabilities ({ data }) {
  return (
    <Layout>
      <div className='pageContent'>
        <Helmet>
          <title>Capabilities | Farmington Displays - Trade Show Displays, Exhibits, Retail</title>
        </Helmet>
        <Container>
          {data.gcms.capabilities.map(item => (
            <Row key={item.id}>
              <hr />
              <div className={'d-sm-flex align-items-center ' + (item.imageAlignment === 'Left' ? 'flex-row' : 'flex-row-reverse')}>
                <Col xs='12' sm='4'>
                  <img src={'https://media.graphcms.com/resize=w:400/' + item.image.handle} className='img-fluid' alt={item.image.url} />
                </Col>
                <Col className='p-4' xs='12' sm='8'>
                  <h3><strong>{item.title}</strong></h3>
                  <p className='lead'>{item.description}</p>
                </Col>
              </div>
            </Row>
          ))}
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
    gcms {
      capabilities {
        id
        title
        description
        image {
          handle
          url
        }
        imageAlignment
      }
    }
  }
`
