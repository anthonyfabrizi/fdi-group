import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function Work({ data }) {
  return (
    <div>
      <Container>
        <h1>Work</h1>
        <hr />
      </Container>
      <Container className="pageContent" fluid>
        <Row>
          {data.allGalleries.edges.map(work => (
            <Col sm="4" className="text-center" key={work.node.id}>
            <a href={"work/" + work.node.title.toLowerCase().replace(" ", "-")}>
              <div className="mmask">
                <img src={"https://media.graphcms.com/resize=w:400,h:300,fit:crop/" + work.node.images[0].handle} className="img-fluid" alt={work.node.title} />
              </div>
              <p className="h3 text-dark mt-2">{work.node.title}</p>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export const workPageQuery = graphql`
  query GalleryPage {
    allGalleries {
        edges {
          node {
            id
            title
            slug
            images {
                handle
            }
          }
        }
      }
  }
`
