import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUpload from '@fortawesome/fontawesome-free-solid/faUpload'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn'
import faYouTube from '@fortawesome/fontawesome-free-brands/faYouTube'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'

fontawesome.library.add(faUpload, faFacebookF, faTwitter, faLinkedinIn, faYouTube, faInstagram)

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <main>
      {children()}
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
