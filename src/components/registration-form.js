import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'

class RegistrationForm extends Component {
  render () {
    return (
      <Form id='registrationform' className='' action='' method='POST'>
        <h1>BORDERLAND CYBFR SECURITY SUMMIT 2019</h1>
        <h1>REGISTRATION FORM</h1>

        <h3>Personal Information</h3>
        <FormGroup row>
          <Label for='firstName' sm={{ size: 2, offset: 2 }}>
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
            Email Address:
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
            Cell Phone:
          </Label>
          <Col sm={6}>
            <Input type='tel' name='phoneNumber' id='phoneNumber' />
          </Col>
        </FormGroup>
        <h2>Badge Information</h2>
        <FormGroup row>
          <Label for='badgeName' sm={{ size: 2, offset: 2 }}>
            BadgeName
          </Label>
          <Col sm={6}>
            <Input type='text' name='badgeName' id='badgeName' />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='company' sm={{ size: 2, offset: 2 }}>
            Company/School/Organization Name:
          </Label>
          <Col sm={6}>
            <Input type='text' name='company' id='company' />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='jobTitle' sm={{ size: 2, offset: 2 }}>
            Job Title:
          </Label>
          <Col sm={6}>
            <Input type='text' name='jobTitle' id='jobTitle' />
          </Col>
        </FormGroup>
        <FormGroup tag='fieldset' row>
          <legend className='col-form-label col-sm-2'>
            <h1>How did you hear about this event?</h1>
          </legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio' />
                Email advertising
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio' />
                Another event or trade show
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio' />
                Social media
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio' />
                Word of mouth
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio' />I was invited by a speaker
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio' d />I am participating as a
                speaker
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio' />
                Event website
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type='radio' name='radio' />
                Other
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check>
          <legend className='col-form-label col-sm-2'>
            Contact Information Release & Model Release???
          </legend>
          <Label check>
            <Input type='radio' id='yes' name='checkbox' />
            yes
          </Label>
          <Label check>
            <Input type='radio' id='no' name='checkbox2' />
            no
          </Label>
        </FormGroup>
        <FormGroup>
          <Button type='submit' color='primary' className='offset-sm-2'>
            Submit
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default RegistrationForm
