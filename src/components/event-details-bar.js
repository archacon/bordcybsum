import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import faker from 'faker'

import RegistrationForm from './registration-form'

//Original Design by Adrain
/* class EventDetailsBar extends Component {
  render () {
    return (
      <div className='col-8 mx-auto'>
        <Row>
          <Col>
            <p>{faker.lorem.paragraphs()}</p>
          </Col>
          <Col lg='6' sm='12'>
            <h2 id='formtitle' className='text-center mb-4'>Form Title</h2>
            <RegistrationForm />
          </Col>
        </Row>
      </div>
    )
  }
} */


//Flip card design by Eddy
class EventDetailsBar extends Component {
  render () {
    return (
      <div className='col-8 mx-auto'>
        <Row>
          <Col>
            <RegistrationForm />
          </Col>
        </Row>
      </div>
    )
  }
}

export default EventDetailsBar
