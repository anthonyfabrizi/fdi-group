import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Container, Nav, NavbarBrand } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.handleHiddenBsCollapse = this.handleHiddenBsCollapse.bind(this)
  }

  componentDidMount() {
    this.myCollapsible.addEventListener('hidden.bs.collapse', this.handleHiddenBsCollapse)
  }

  componentWillUnmount() {
    this.myCollapsible.removeEventListener('hidden.bs.collapse', this.handleHiddenBsCollapse)
  }

  handleHiddenBsCollapse(event) {
    // Do something...
    console.log(event);
  }

  toggleMenu = (e) => {
    console.log(!this.state.collapsed);
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <div ref={node => (this.myCollapsible = node)}>
        <Nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <Container>
            <NavbarBrand href='/'>
              <img src={this.props.logo} className="img-fluid" alt="Farmington Displays logo" />
            </NavbarBrand>
            <button className={"navbar-toggler " + (this.state.collapsed ? 'collapsed' : '')} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + (this.state.collapsed ? '' : 'show')} id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className='nav-item text-center text-sm-left'>
                  <NavLink to="/about" activeClassName="active" className='nav-link' onClick={this.toggleMenu}>Who We Are</NavLink>
                </li>
                <li className='nav-item text-center text-sm-left'>
                  <NavLink to="/capabilities" activeClassName="active" className='nav-link' onClick={this.toggleMenu}>Capabilities</NavLink>
                </li>
                <li className="nav-item text-center text-sm-left">
                  <NavLink to="/work" activeClassName="active" className='nav-link' onClick={this.toggleMenu}>Our Work</NavLink>
                </li>
                <li className='nav-item text-center text-sm-left'>
                  <NavLink to="/blog" activeClassName="active" className='nav-link' onClick={this.toggleMenu}>Blog</NavLink>
                </li>
                <li className='nav-item text-center text-sm-left'>
                  <NavLink to="/contact" activeClassName="active" className='nav-link' onClick={this.toggleMenu}>Contact Us</NavLink>
                </li>
                <li className='nav-item text-center text-sm-left'>
                  <NavLink to="/docs/capability-statement.pdf" activeClassName="active" className='nav-link' onClick={this.toggleMenu} target="_blank">Government</NavLink>
                </li>
              </ul>
            </div>
          </Container>
        </Nav>
      </div>
    )
  }
}

export default Header