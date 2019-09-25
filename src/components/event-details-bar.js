import React, { Component } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import FormModal from './form-modal'
import Schedule from './schedule'

import RegistrationForm from './registration-form'

// Flip card design by Eddy
class EventDetailsBar extends Component {
  render () {
    return (
      <div
        id='event-details'
        xs={12}
        md={8}
        className='col-md-8 col-sm-11 mx-auto shadow-lg'
      >
        <Row>
          <Col>
            <Schedule />
          </Col>
        </Row>
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
