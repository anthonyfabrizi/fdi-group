import React from 'react'
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation'
import { Container, Row, Col, Button, FormGroup, Alert } from 'reactstrap'
import Helmet from 'react-helmet'
import axios from 'axios'
import Layout from '../layouts'

class ContactForm extends React.Component {
  constructor (props) {
    super(props)

    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = { name: '', email: '', message: '' }
  }

  handleValidSubmit (event, values) {
    this.setState(values)
    this.setState({ isSent: true })
        // event.preventDefault();
    event.persist()

    let postData = {
      'personalizations': [
        {
          'to': [
            {
              'email': 'info@fdi-group.com',
              'name': 'Sales'
            }
          ],
          'subject': 'Website Contact Form Submission'
        }
      ],
      'from': {
        'email': this.state.email,
        'name': this.state.name
      },
      'reply_to': {
        'email': this.state.email,
        'name': this.state.name
      },
      'subject': 'Website Contact Form Submission',
      'content': [
        {
          'type': 'text/plain',
          'value': this.state.message
        }
      ]
    }

    axios.post('https://wt-381b15290b507e44262c99ac7a1586ba-0.run.webtask.io/sendgrid', postData)
        .then((result) => {
            // access the results here....
          this.setState({ name: '', email: '', message: '', error: null })
        })
        .catch((err) => {
          console.log('AXIOS ERROR: ', err)
        })
  };

  handleInvalidSubmit (event, errors, values) {
        // this.setState({ errors });
    this.setState({ error: 'Please fill out all the fields' })
  }

  handleChange (e) {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value

    this.setState(state)
  }

  render () {
    const { name, email, message } = this.state
    return (
      <Layout>
        <div>
          <Helmet>
            <title>Contact Us | Farmington Displays - Trade Show Displays, Exhibits, Retail</title>
          </Helmet>
          <Container className='pageContent'>
            <Row className='pt-5'>
              <Col sm='12' md={{ size: 8, offset: 2 }}>
                <h2>How can we help?</h2>
                <p>We'd love to hear from you. You can either reach out to us as a whole and one of our team members will get back to you, or if you have a specific question reach out to one of our staff.</p>
              </Col>
              <Col sm='12' lg={{ size: 6, offset: 3 }}>
                <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                  <AvGroup>
                    <AvField name='name' label='Your Name' value={name} type='text' required />
                  </AvGroup>
                  <AvGroup>
                    <AvField name='email' label='Your Email' value={email} type='email' required />
                  </AvGroup>
                  <AvGroup>
                    <AvField name='message' label='Message' value={message} type='textarea' rows='6' required />
                  </AvGroup>
                  <FormGroup row>
                    <Col sm='2'>
                      <Button block>Send</Button>
                    </Col>
                  </FormGroup>
                </AvForm>
              </Col>
            </Row>
            <Row>
              <Col sm='12' md={{ size: 5, offset: 3 }}>
                {this.state.isSent &&
                <div>
                  <Alert color='success'>
                          Your message has been sent. Thank you!
                        </Alert>
                </div>
                      }
                {this.state.error &&
                <div>
                  <Alert color='danger'>
                          Please fill out all the fields
                        </Alert>
                </div>
                      }
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default ContactForm
