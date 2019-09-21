import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

import RegistrationForm from './registration-form'

class EventDetailsBar extends Component {
  render () {
    return (
      <div className='col-8 mx-auto'>
        <h2 className='text-center mb-4'>Form Title</h2>
        <RegistrationForm />
      </div>
    )
  }
}

export default EventDetailsBar
