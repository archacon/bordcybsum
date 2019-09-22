import { Jumbotron } from 'reactstrap'
import React, { Component } from 'react'
import {
  Link,
  Scroll
} from 'react-scroll';

class TitleBar extends Component {

  render () {
    return (
      <Jumbotron class='jumbotron' id='jumbo'>
        <div class='container'>
          <h1 class='col-md-9 col-md-offset-2'>
            <p class='jumbotext'>Borderland Cyber Summit 2019</p>
            <p class='jumbobuttons'>
              <Link class="btn btn-primary btn-lg margin-left" href="#" role="button" to='formtitle' activeClass= 'active'
              smooth={true}>Learn more</Link>
              <Link class="btn btn-primary btn-lg margin-left" href="#" role="button" to='formtitle' activeClass= 'active'
              smooth={true}>Register Now</Link>
            </p>
          </h1>
        </div>
      </Jumbotron>
    )
  }
}

export default TitleBar
