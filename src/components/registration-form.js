import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

class RegistrationForm extends Component {
  render () {
    return (
      <div className='col-12'>
        <Form id='registrationform' className='' action='' method='POST'>
          <FormGroup row>
            <Label
              for='firstName'
              sm={{ size: 2, offset: 2 }}
              textAlign='right'
            >
              Name
            </Label>
            <Col sm={3}>
              <Input
                type='text'
                name='firstName'
                id='firstName'
                placeholder='First'
              />
            </Col>
            <Col sm={3}>
              <Input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Last'
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='exampleEmail' sm={{ size: 2, offset: 2 }}>
              Email
            </Label>
            <Col sm={6}>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='example@domain.com'
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for='phoneNumber' sm={{ size: 2, offset: 2 }}>
              Phone Number
            </Label>
            <Col sm={6}>
              <Input type='tel' name='phoneNumber' id='phoneNumber' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Button type='submit' color='primary' className='offset-sm-2'>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default RegistrationForm
