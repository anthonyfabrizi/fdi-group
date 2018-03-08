import React from 'react'
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation'
import { Container, Row, Col, Button, Label, FormGroup, Alert } from 'reactstrap'
import axios from 'axios'

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { name: "", email: "", message: "" };
    }

    handleValidSubmit(event, values) {
        this.setState(values);
        this.setState({ isSent: true });
        // event.preventDefault();
        event.persist();
        // get our form data out of state
        const { name, email, message } = this.state;
        
        axios.post('https://mandrillapp.com/api/1.0/messages/send.json', {
            'key': 'UpdCbT8qNO_KP67EXAZqPg',
            'message': {
                'from_email': "web@fdi-group.com",
                'from_name': this.state.name,
                'headers': {
                    'Reply-To': this.state.email
                },
                'subject': 'Question Submission',
                'text': this.state.message,
                'to': [
                    {
                        'email': 'info@fdi-group.com',
                        'name': 'Sales',
                        'type': 'to'
                    }]
            }
        })
            .then((result) => {
                //access the results here....
                this.setState({ name: "", email: "", message: "", error: null });
            });
    };

    handleInvalidSubmit(event, errors, values) {
        // this.setState({ errors });
        this.setState({ error: 'Please fill out all the fields' });
    }

    handleChange(e) {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;

        this.setState(state);
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div>
                <Container className="pageContent">
                    <Row className="pt-5">
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <h2>How can we help?</h2>
                            <p>We'd love to hear from you. You can either reach out to us as a whole and one of our team members will get back to you, or if you have a specific question reach out to one of our staff.</p>
                        </Col>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                                <AvGroup>
                                    <AvField name="name" label="Your Name" value={name} type="text" required />
                                </AvGroup>
                                <AvGroup>
                                    <AvField name="email" label="Your Email" value={email} type="email" required />
                                </AvGroup>
                                <AvGroup>
                                    <AvField name="message" label="Message" value={message} type="textarea" rows="6" required />
                                </AvGroup>
                                <FormGroup row>
                                    <Col sm="2">
                                        <Button block>Send</Button>
                                    </Col>
                                </FormGroup>
                            </AvForm>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 5, offset: 3 }}>
                            {this.state.isSent &&
                                <div>
                                    <Alert color="success">
                                        Your message has been sent. Thank you!
                                    </Alert>
                                </div>
                            }
                            {this.state.error &&
                                <div>
                                    <Alert color="danger">
                                        Please fill out all the fields
                                    </Alert>
                                </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ContactForm