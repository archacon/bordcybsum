import React, { Component } from 'react'
import classnames from 'classnames'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link, animateScroll as scroll } from 'react-scroll'

// <NavLink tag={Link} to="/somewhere">

const links = [
  { text: 'Home', to: 'head' },
  { text: 'Speakers', to: 'enticetitle' },
  { text: 'Event Details', to: 'event-details' },
  { text: 'Register', to: 'event-details' },
  { text: 'Sponsors', to: 'sponsors' }
]

const createNavItem = ({ text, to }) => (
  <NavItem>
    <Link className='nav-link' to={to} activeClass='active' smooth offset={-27}>
      {text}
    </Link>
  </NavItem>
)

export default class Example extends Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: true,
      isOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div id='navigation'>
        <Navbar
          className={classnames('nav-bar', 'navbar-inverse', 'bg-inverse', {
            'navbar--hidden': !this.state.visible
          })}
          dark
          expand='md'
          fixed='top'
        >
          <NavbarBrand href='/'>Borderland Cyber Summit</NavbarBrand>
          <NavbarToggler light onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
