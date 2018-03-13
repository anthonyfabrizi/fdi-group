import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from 'react-helmet'

export default function Capabilities({ data }) {
    return (
        <div className="pageContent">
            <Container>
                {data.allCapabilities.edges.map(item => (
                    <Row key={item.node.id}>
                        <hr />
                        <div className={"d-sm-flex align-items-center " + (item.node.imageAlignment == "Left" ? "flex-row" : "flex-row-reverse")}>
                            <Col xs="12" sm="4">
                                <img src={"https://media.graphcms.com/resize=w:400/" + item.node.image.handle} className="img-fluid" alt={item.node.image.url} />
                            </Col>
                            <Col className="p-4" xs="12" sm="8">
                                <h3><strong>{item.node.title}</strong></h3>
                                <p className="lead">{item.node.description}</p>
                            </Col>
                        </div>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export const allPostsQuery = graphql`
query allCapabilities {
    allCapabilities {
      edges {
        node {
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
  }
`
