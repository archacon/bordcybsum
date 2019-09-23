import { Jumbotron } from 'reactstrap'
import React, { Component } from 'react'
import {
  Link,
  Scroll
} from 'react-scroll';

class TitleBar extends Component {

  render () {
    return (
      <Jumbotron class='jumbotron jumbotron-fluid' id='jumbo'>
        <div class='container'>
          <h1 class="display-2">Borderland Cyber Summit 2019</h1>
            <p class='lead'>Some more information</p>
            <p>
              <Link class="btn btn-outline-danger btn-lg margin-right" href="#" role="button" to='formtitle' activeClass= 'active'
              smooth={true}>Learn more</Link>
              <Link class="btn btn-outline-danger btn-lg margin-right" href="#" role="button" to='formtitle' activeClass= 'active'
              smooth={true}>Register Now</Link>
            </p>
        </div>
      </Jumbotron>
    )
  }
}

export default TitleBar
