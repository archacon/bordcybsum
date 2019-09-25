import { Jumbotron } from 'reactstrap'
import React, { Component } from 'react'
import { Link, Scroll } from 'react-scroll'
import FormModal from './form-modal'

class TitleBar extends Component {
  render () {
    return (
      <Jumbotron class='jumbotron jumbotron-fluid' id='jumbo'>
        <div class='container'>
          <h1 class='display-2'>Border land Cyber Summit 2019</h1>
          <p class='lead'>
            October 26th - El Paso, TX <br />
            EPCC Admin Services Center
          </p>
          <p>
            <Link
              className='btn btn-outline-danger btn-lg margin-right'
              href='#'
              role='button'
              to='card-side side-front'
              activeClass='active'
              smooth
            >
              Learn more
            </Link>
            <FormModal className='btn btn-outline-danger btn-lg margin-right' />
          </p>
        </div>
      </Jumbotron>
    )
  }
}

export default TitleBar
