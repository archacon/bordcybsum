import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import Link from 'gatsby-link'

export default props => (
  <Nav id='menu' navbar className='mx-auto'>
    <NavItem
      style={{
        textAlign: 'center',
        marginBottom: '2px'
      }}
      className={`col-md-6 col-xs-10 ${
        props.activeTabClassName === 'home' ? 'active' : ''
      }`}
    >
      <Link className='nav-link' to='/'>
        Home
      </Link>
    </NavItem>
    <NavItem
      style={{
        textAlign: 'center',
        marginBottom: '2px'
      }}
      className={`col-md-6  ${
        props.activeTabClassName === 'faq' ? 'active' : ''
      }`}
    >
      <Link className='nav-link' to='/faq'>
        FAQ
      </Link>
    </NavItem>
    <NavItem
      style={{
        textAlign: 'center',

        marginBottom: '2px'
      }}
      className={`col-md-6 ${
        props.activeTabClassName === 'contact' ? 'active' : ''
      }`}
    >
      <Link className='nav-link' to='/contact'>
        Contact
      </Link>
    </NavItem>
  </Nav>
)
