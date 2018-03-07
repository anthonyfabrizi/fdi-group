import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container, Nav, NavbarBrand } from 'reactstrap'

import styles from '../styles/header.module.css'

const Header = () => (
  <Nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <Container>
      <NavbarBrand href='/'>
        <img src="https://media.graphcms.com/AgHDbDT5SBSPheHZKTwc" className="img-fluid" alt="Farmington Displays logo" />
      </NavbarBrand>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>
              Who We Are
              </Link>
          </li>
          <li className='nav-item'>
            <Link to='/capabilities' className='nav-link'>
              Capabilities
              </Link>
          </li>
          <li className={"nav-item"}>
            <Link to='/work' className='nav-link'>
              Our Work
              </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog' className='nav-link'>
              Blog
              </Link>
          </li>
          <li className='nav-item'>
            <Link to='/#' className='nav-link'>
              Contact Us
              </Link>
          </li>
        </ul>
      </div>
    </Container>
  </Nav>
)

export default Header
