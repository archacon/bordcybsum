import React, { Component } from 'react'
import { Navbar, Container, NavbarBrand } from 'reactstrap'

class SiteFooter extends Component {
  render () {
    return (
      <div className='fixed-bottom'>
        <Navbar color='dark' dark>
          <Container>
            <NavbarBrand>Footer</NavbarBrand>
            <p style={{ color: 'white' }}>
              <i class='fa fa-linkedin-in' />
            </p>
          </Container>
        </Navbar>
      </div>
    )
  }
}
export default SiteFooter
