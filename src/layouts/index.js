import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'

import fontawesome from '@fortawesome/fontawesome'
import faUpload from '@fortawesome/fontawesome-free-solid/faUpload'
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn'
import faYoutube from '@fortawesome/fontawesome-free-brands/faYoutube'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'

fontawesome.library.add(faUpload, faFacebookF, faTwitter, faLinkedinIn, faYoutube, faInstagram)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        gcms {
          homes {
            logoImage {
              url
            }
          }
        }
      }
    `
  )
  return (
    <div className='app-wrapper'>
      <Header logo={data.gcms.homes[0].logoImage.url} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
