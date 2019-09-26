import { Jumbotron, Container } from 'reactstrap'
import React, { Component } from 'react'
import { Link, Scroll } from 'react-scroll'
import FormModal from './form-modal'

class TitleBar extends Component {
  render () {
    return (
      <Jumbotron class='jumbotron jumbotron-fluid' id='jumbo'>
        <div className='container'>
          <h1 className='display-2'>Border land Cyber Summit 2019</h1>
          <p className='lead'>
            November 23rd - El Paso, TX <br />
            EPCC Admin Services Center
          </p>
          <Container>
            <Link
              className='btn btn-outline-danger btn-lg margin-right'
              role='button'
              to='schedule'
              activeClass='active'
              smooth
            >
              Learn more
            </Link>
            <FormModal className='btn btn-outline-danger btn-lg margin-right' />
          </Container>
        </div>
      </Jumbotron>
    )
  }
}

export default TitleBar
