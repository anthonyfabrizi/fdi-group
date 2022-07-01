import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "react-helmet";
import Markdown from "react-markdown";
import { graphql } from "gatsby";
import Layout from "../layouts";

export default function About({ data }) {
  const about = data.gcms.abouts[0];
  return (
    <Layout>
      <div className="pageContent">
        <Helmet>
          <title>
            Who We Are | Farmington Displays - Trade Show Displays, Exhibits,
            Retail
          </title>
        </Helmet>
        <img
          src={about.headerImage.url}
          alt="Who We Are"
          className="img-fluid"
        />
        <Container>
          <div className="mb-4" />
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Markdown source={about.content} escapeHtml={false} />
            </Col>
            <Col sm="3" />
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    gcms {
      abouts {
        slug
        headerImage {
          url
        }
        content
      }
    }
  }
`;
