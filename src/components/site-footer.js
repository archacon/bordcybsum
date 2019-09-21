import React, { Component } from 'react'
import { Navbar, Container, NavbarBrand } from 'reactstrap'

class SiteFooter extends Component {
  render () {
    return (
      <div className='fixed-bottom'>
        <Navbar color='dark' dark>
          <Container>
            <NavbarBrand>Footer</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    )
  }
}
export default SiteFooter
