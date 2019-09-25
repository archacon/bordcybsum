import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import FormModal from './form-modal'
import Schedule from './schedule'

import RegistrationForm from './registration-form'

// Flip card design by Eddy
class EventDetailsBar extends Component {
  render () {
    return (
      <div className='col-8 mx-auto'>
        <Row />
        <Schedule />
        <Row>
          <Col>
            <FormModal />
          </Col>
        </Row>
      </div>
    )
  }
}

export default EventDetailsBar
