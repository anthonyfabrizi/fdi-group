import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container, Nav, NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = (props) => (
  <Nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <Container>
      <NavbarBrand href='/'>
        <img src={props.logo} className="img-fluid" alt="Farmington Displays logo" />
      </NavbarBrand>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className='nav-item text-center text-sm-left'>
          <NavLink to="/about" activeClassName="active" className='nav-link'>Who We Are</NavLink>
          </li>
          <li className='nav-item text-center text-sm-left'>
            <NavLink to="/capabilities" activeClassName="active" className='nav-link'>Capabilities</NavLink>
          </li>
          <li className="nav-item text-center text-sm-left">
            <NavLink to="/work" activeClassName="active" className='nav-link'>Our Work</NavLink>
          </li>
          <li className='nav-item text-center text-sm-left'>
            <NavLink to="/blog" activeClassName="active" className='nav-link'>Blog</NavLink>
          </li>
          <li className='nav-item text-center text-sm-left'>
            <NavLink to="/contact" activeClassName="active" className='nav-link'>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </Container>
  </Nav>
)

export default Header