import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Helmet from "react-helmet";
import Layout from "../layouts";

export default function About() {
  return (
    <Layout>
      <div className="pageContent">
        <Helmet>
          <title>
            Cigna Transparency in Coverage Rule | Farmington Displays - Trade
            Show Displays, Exhibits, Retail
          </title>
        </Helmet>
        <Container>
          <div className="mb-4" />
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <h3>
                <strong>Cigna Transparency in Coverage Rule</strong>
              </h3>
              <p>
                This link leads to the machine readable files that are made
                available in response to the federal Transparency in Coverage
                Rule and includes negotiated service rates and out-of-network
                allowed amounts between health plans and healthcare providers.
                The machine-readable files are formatted to allow researchers,
                regulators, and application developers to more easily access and
                analyze data.
              </p>
            </Col>
            <Col sm="12" className="text-center">
              <a
                href="https://www.cigna.com/legal/compliance/machine-readable-files"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Click Here</Button>
              </a>
            </Col>
            <Col sm="3" />
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
