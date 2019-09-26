import React, { Component } from 'react'
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container
} from 'reactstrap'

const agreementQuestions = [
  {
    name: 'q1',
    key: 'q1',
    text:
      'I agree to the contact information and model release of my name and photographic likeness to West Texas Cybersecurity and Information Assurance Society of the event for the its future and legal multimedia activities'
  },
  {
    name: 'q2',
    key: 'q2',
    text:
      'Would you like to receive an attendance certification for CEU or CPE?'
  },
  {
    name: 'q3',
    key: 'q3',
    text:
      'Would you like to become a member of West Texas Cybersecurity and Information Assurance Society’s nonprofit organization?'
  },
  {
    name: 'q4',
    key: 'q4',
    text:
      'Would you like to donate to West Texas Cybersecurity and Information Assurance Society’s Community Outreach programs? (All donations are tax deductible)'
  },
  {
    name: 'q5',
    key: 'q5',
    text:
      'Would you like to be a future event sponsor? (Monthly meetings, future conferences, outreach programs, and summits)'
  }
]

const generateCheckboxes = ({ name, key, text }) => (
  <FormGroup check key={key}>
    <Row>
      <Col md={{ size: 10 }} className='checkbox-col order-md-3  mt-2'>
        <Label>{text}</Label>
      </Col>
      <Col md={{ size: 1 }} className='checkbox-col order-md-2 mb-2'>
        <FormGroup check>
          <Label check>
            <Input type='radio' name={name} value='yes' />
            yes
          </Label>
        </FormGroup>
      </Col>
      <Col md={{ size: 1 }} className='checkbox-col order-md-1 mb-2'>
        <FormGroup check>
          <Label check>
            <Input type='radio' name={name} value='no' />
            no
          </Label>
        </FormGroup>
      </Col>
    </Row>
  </FormGroup>
)

class RegistrationForm extends Component {
  render () {
    return (
      <Form
        id='registrationform'
        className=''
        action='https://formspree.io/admin@wtxinfosec.org'
        method='POST'
      >
        {this.props.children}
        <h1>BORDERLAND CYBER SECURITY SUMMIT 2019</h1>
        <h1>REGISTRATION FORM</h1>

        <h3>Personal Information</h3>
        <FormGroup>
          <Label for='firstName'>Name</Label>
          <Input
            type='text'
            name='firstName'
            id='firstName'
            placeholder='First'
          />
          <Input type='text' name='lastName' id='lastName' placeholder='Last' />
        </FormGroup>
        <FormGroup>
          <Label for='exampleEmail'>Email Address:</Label>
          <Input
            type='email'
            name='email'
            id='exampleEmail'
            placeholder='example@domain.com'
          />
        </FormGroup>
        <FormGroup>
          <Label for='phoneNumber'>Cell Phone:</Label>
          <Input type='tel' name='phoneNumber' id='phoneNumber' />
        </FormGroup>
        <h2>Badge Information</h2>
        <FormGroup>
          <Label for='badgeName'>BadgeName</Label>
          <Input type='text' name='badgeName' id='badgeName' />
        </FormGroup>
        <FormGroup>
          <Label for='company'>Company/School/Organization Name:</Label>
          <Input type='text' name='company' id='company' />
        </FormGroup>
        <FormGroup>
          <Label for='jobTitle'>Job Title:</Label>
          <Input type='text' name='jobTitle' id='jobTitle' />
        </FormGroup>
        <h2>How did you hear about this event?</h2>
        <FormGroup tag='fieldset'>
          <legend className='col-form-label col-sm-2' />
          <FormGroup check>
            <Label check>
              <Input type='radio' name='radio' value='Email Advertising' />
              Email advertising
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name='radio'
                value='Another event or trade show'
              />
              Another event or trade show
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='radio' value='social media' />
              Social media
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='radio' value='word of mouth' />
              Word of mouth
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name='radio'
                value='I was invited by a speaker'
              />
              I was invited by a speaker
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type='radio'
                name='radio'
                value='I am participating as a speaker'
              />
              I am participating as a speaker
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='radio' value='Event website' />
              Event website
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='radio' name='radio' value='other' />
              Other
            </Label>
          </FormGroup>
        </FormGroup>
        <h2>Contact Information Release & Model Release</h2>
        {agreementQuestions.map(generateCheckboxes)}
        <FormGroup>
          <Button type='submit' color='primary' className=''>
            Submit
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default RegistrationForm
