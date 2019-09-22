import { Jumbotron } from 'reactstrap'

import React, { Component } from 'react'

class TitleBar extends Component {
  render () {
    return (
      <Jumbotron class='jumbotron' id='jumbo'>
        <div class='container'>
          <h1 class='col-md-9 col-md-offset-2'>
            <p>Borderland Cyber Summit 2019</p>
            <p>
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
              <a class="btn btn-primary btn-lg" href="#" role="button">Register Now</a>
            </p>
          </h1>
        </div>
      </Jumbotron>
    )
  }
}

export default TitleBar
