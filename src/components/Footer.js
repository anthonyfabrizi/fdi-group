import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Link from 'gatsby-link'

const Footer = () => (
    <footer className="py-3">
        <Container>
            <Row className="mb-5">
                <Col className="text-center mb-5" xs="12" md="4">
                    <h5 className="font-weight-bold mb-4">Connect With Us</h5>
                    <ul className="list-inline">
                        <li className="list-inline-item mr-3">
                            <a href="http://www.facebook.com/farmingtondisplays" className="text-muted" target="_blank">
                                <FontAwesomeIcon icon={["fab", "facebook-f"]} size="2x" />
                            </a>
                        </li>
                        <li className="list-inline-item mr-3">
                            <a href="#" className="text-muted" target="_blank">
                                <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                            </a>
                        </li>
                        <li className="list-inline-item mr-3">
                            <a href="http://www.linkedin.com/company/farmington-displays-inc" className="text-muted" target="_blank">
                                <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="2x" />
                            </a>
                        </li>
                        <li className="list-inline-item mr-3">
                            <a href="#" className="text-muted" target="_blank">
                                <FontAwesomeIcon icon={["fab", "youtube"]} size="2x" />
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="text-muted" target="_blank">
                                <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col className="text-center mb-5" xs="12" md="4">
                    <h5 className="font-weight-bold">Contact Us</h5>
                    <address>
                        <abbr title="Phone">Phone:</abbr> (860) 677-2497<br />
                        <abbr title="Fax">Fax:</abbr> (860) 677-1418<br /><br />
                        <Link to="/contact" className="text-dark">info@fdi-group.com</Link>
                        </address>
                </Col>
                <Col className="text-center mb-5" xs="12" md="4">
                    <h5 className="font-weight-bold">Find Us</h5>
                    <ul className="list-inline d-flex flex-row justify-content-center">
                        <li className="list-inline-item d-flex align-items-center mr-3">
                            <a href="https://goo.gl/maps/1LuE51HEzXP2" target="_blank">
                                <img src="https://media.graphcms.com/qZgxhOLhQjy5Ia1ExVwX" className="img-fluid" />
                            </a>
                        </li>
                        <li className="list-inline-item d-flex align-items-center">
                            <address className="mb-0">
                                21 Hyde Rd<br />
                                Farmington,<br />
                                CT 06032
                            </address>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col className="text-center text-md-left" xs="12" md="6">
                    <p className="mb-0">
                        <a href="https://dropbox.hightail.com/Jeff-Scalia-FARMINGTON-DISPLAYS" className="text-muted" target="_blank">
                            <span className="mr-2">Need to share files with us?</span> <FontAwesomeIcon icon="upload" size="2x" />
                        </a>
                    </p>
                </Col>
                <Col className="text-center text-md-right pt-2" xs="12" md="6">
                    <p className="mb-0">&copy;Copyrigh 2018 Farmington Displays Inc</p>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer