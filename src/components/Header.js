import React from 'react'
import { Container, Nav, NavbarBrand } from 'reactstrap'
import { Link } from 'gatsby'
// import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: true
    }
    this.handleHiddenBsCollapse = this.handleHiddenBsCollapse.bind(this)
  }

  componentDidMount () {
    this.myCollapsible.addEventListener('hidden.bs.collapse', this.handleHiddenBsCollapse)
  }

  componentWillUnmount () {
    this.myCollapsible.removeEventListener('hidden.bs.collapse', this.handleHiddenBsCollapse)
  }

  handleHiddenBsCollapse (event) {
    // Do something...
    console.log(event)
  }

  toggleMenu () {
    console.log(!this.state.collapsed)
    this.setState({ collapsed: !this.state.collapsed })
  }

  render () {
    return (
      <div ref={node => (this.myCollapsible = node)}>
        <Nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top'>
          <Container>
            <NavbarBrand href='/'>
              <img src={this.props.logo} className='img-fluid' alt='Farmington Displays logo' />
            </NavbarBrand>
            <button className={'navbar-toggler ' + (this.state.collapsed ? 'collapsed' : '')} type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation' onClick={this.toggleMenu}>
              <span className='navbar-toggler-icon' />
            </button>
            <div className={'collapse navbar-collapse ' + (this.state.collapsed ? '' : 'show')} id='navbarResponsive'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item text-center text-sm-left'>
                  <Link to='/about' activeClassName='active' className='nav-link' onClick={this.toggleMenu}>Who We Are</Link>
                </li>
                <li className='nav-item text-center text-sm-left'>
                  <Link to='/capabilities' activeClassName='active' className='nav-link' onClick={this.toggleMenu}>Capabilities</Link>
                </li>
                <li className='nav-item text-center text-sm-left'>
                  <Link to='/work' activeClassName='active' className='nav-link' onClick={this.toggleMenu}>Our Work</Link>
                </li>
                <li className='nav-item text-center text-sm-left'>
                  <Link to='/blog' activeClassName='active' className='nav-link' onClick={this.toggleMenu}>Blog</Link>
                </li>
                <li className='nav-item text-center text-sm-left'>
                  <Link to='/contact' activeClassName='active' className='nav-link' onClick={this.toggleMenu}>Contact Us</Link>
                </li>
                <li className='nav-item text-center text-sm-left'>
                  <Link to='/docs/capability-statement.pdf' activeClassName='active' className='nav-link' onClick={this.toggleMenu} target='_blank'>Government</Link>
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
